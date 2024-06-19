import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ReceiveCardsBlockComponent } from './receive-cards-block/receive-cards-block.component';
import { WaysToPayComponent } from './ways-to-pay/ways-to-pay.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WhyMyguavaComponent } from './why-myguava/why-myguava.component';
import { ReadyToStartComponent } from './ready-to-start/ready-to-start.component';
import { ReceiveMoneyComponent } from '../receive-money/receive-money.component';
import { SelectComponent } from "../select/select.component";
import { InputWithSelectComponent } from "../input-with-select/input-with-select.component";
import { CalculatorApiService, CommissionAndRateRequestModel, CountryModel, CurrencyModel, RemittanceTypeModel } from '../../services/calculator-api.service';
import { Observable, Subject, catchError, forkJoin, map, of, switchMap, tap } from 'rxjs';
import { FindLocationComponent } from '../find-location/find-location.component';
import { RouterModule } from '@angular/router';

type Tabs = 'send-money' | 'receive-money';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [
        CommonModule,
        ReceiveCardsBlockComponent,
        WaysToPayComponent,
        SignUpComponent,
        WhyMyguavaComponent,
        ReadyToStartComponent,
        ReceiveMoneyComponent,
        SelectComponent,
        InputWithSelectComponent,
        FindLocationComponent,
        RouterModule
    ]
})
export class HomePageComponent implements OnInit {
  private calculatorService = inject(CalculatorApiService);
  private destoryRef = inject(DestroyRef);
  public currentTab: Tabs = 'send-money';

  defaultReceiverCountry?: CountryModel;
  defaultReceiverCurrencies: CurrencyModel[] = [{ code: 'GBP', countryCode: 'GBR', isDefault: true }];
  defaultSenderCurrencies: CurrencyModel[] = [{ code: 'GBP', countryCode: 'GBR', isDefault: true }];
  receiverCurrencies: CurrencyModel[] = this.defaultReceiverCurrencies;
  senderCurrencies: CurrencyModel[] = this.defaultSenderCurrencies;

  sendAmount: string = '1';
  senderCurrency = this.senderCurrencies[0].code;

  receiveAmount: string = '1';
  receiverCurrency = this.receiverCurrencies[0].code;

  receiverCountryCode: string = 'EGY';

  updateCurrencies$ = new Subject<void>();
  updateRates$ = new Subject<void>();

  exchangeRate = 1;
  commissionAmount = 0;
  totalAmount = 1;

  receiverCountries$: Observable<CountryModel[]> = this.calculatorService.getReceiverCountries()
    .pipe(
      tap(countries => this.defaultReceiverCountry = countries[0]),
      tap(() => this.updateCurrencies$.next())
    );

  defaultPaymentMethods: RemittanceTypeModel[] = [{ paymentType: 'CARD', label: 'Card' }];
  accountPaymentMethod: RemittanceTypeModel = { paymentType: 'ACCOUNT', label: 'Bank Account' };
  paymentMethods = this.defaultPaymentMethods;
  paymentType = this.paymentMethods[0].paymentType;

  ngOnInit(): void {
    this.updateCurrencies$
      .pipe(
        switchMap(() => forkJoin([
          this.calculatorService.getReceiverCurrencies(this.receiverCountryCode),
          // this.calculatorService.getRemittanceTypes(this.receiverCountryCode),
        ])),
        takeUntilDestroyed(this.destoryRef),
      )
      .subscribe(res => {
        this.receiverCurrencies = res[0]?.length ? res[0] : this.defaultReceiverCurrencies;
        this.receiverCurrency = this.receiverCurrencies[0].code;

        // this.paymentMethods = res[1]?.length ? res[1] : this.defaultPaymentMethods;

        if (this.receiverCountryCode === 'GBR' && this.receiverCurrency === 'GBP') {
          this.paymentMethods = [this.accountPaymentMethod, ...this.defaultPaymentMethods];
        } else {
          this.paymentMethods = [...this.defaultPaymentMethods];
        }

        this.updateRates$.next();
      });

      this.updateRates$
        .pipe(
          map<void, CommissionAndRateRequestModel>(() => {
            return {
              senderCountryCode: 'GBR',
              senderCurrency: this.senderCurrency,
              receiverCountryCode: this.receiverCountryCode,
              receiverCurrency: this.receiverCurrency,
              amount: +this.sendAmount,
              paymentType: this.paymentType,
            } 
          }),
          switchMap(request => this.calculatorService.getCommissionAndRate(request).pipe(catchError(() => of(null)))),
          takeUntilDestroyed(this.destoryRef),
        )
        .subscribe(
          {
            next: rates => {
              if (!rates) {
                return;
              }
              this.exchangeRate = rates.exchangeRate;
              this.commissionAmount = rates.comissionAmount;
              this.totalAmount = rates.totalAmount;
              this.receiveAmount = rates.conversionAmount.toString();
            },
            error: (err) => console.error(err),
          });
  }

  updateAmount(): void {
    const amount = +this.receiveAmount / this.exchangeRate;
    this.sendAmount = amount.toFixed(2);
    this.totalAmount = amount;
  }

  public get isSendMoneyTabActive(): boolean {
    return this.currentTab === 'send-money';
  }

  public get isReceiveMoneyTabActive(): boolean {
    return this.currentTab === 'receive-money';
  }

  public onSendMoneyTab(): void {
    this.currentTab = 'send-money';
  }

  public onReceiveMoneyTab(): void {
    this.currentTab = 'receive-money';
  }
}
