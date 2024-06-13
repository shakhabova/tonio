import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface CountryModel {
  id: number;
  name: string;
  code: string;
}

export interface CurrencyModel {
  code: string;
  countryCode: string;
  isDefault: boolean;
}

type PaymentTypes = 'CARD' | 'ACCOUNT'
export interface RemittanceTypeDto {
  paymentType: PaymentTypes;
}
export interface RemittanceTypeModel extends RemittanceTypeDto {
  label: string;
}

export interface CommissionAndRateRequestModel {
  senderCountryCode: string;
  receiverCountryCode: string;
  paymentType: string;
  amount: number;
  senderCurrency: string;
  receiverCurrency: string;
}

export interface CommissionAndRateModel {
  exchangeRate: number;
  comissionAmount: number;
  conversionAmount: number;
  totalAmount: number;
}

@Injectable({providedIn: 'root'})
export class CalculatorApiService {
  private readonly baseUrl = 'https://account.remiton.global';

  constructor(private httpClient: HttpClient) { }
  
  getReceiverCountries(): Observable<CountryModel[]> {
    return this.httpClient.get<CountryModel[]>(`${this.baseUrl}/dictionary/v1/countries?isReceive=true`);
  }

  getSenderCurrencies(country: string): Observable<CurrencyModel[]> {
    return this.httpClient.get<CurrencyModel[]>(`${this.baseUrl}/dictionary/v1/country-currencies?country=${country}&isSend=true`);
  }

  // getRemittanceTypes(country: string): Observable<RemittanceTypeModel[]> {
  //   const paymentMethodLabels: Record<PaymentTypes, string> = {
  //     CARD: 'Card',
  //     CASH: 'Cash pickup',
  //     ACCOUNT: 'Account',
  //   };
  //   return this.httpClient.get<RemittanceTypeDto[]>(`${this.baseUrl}/dictionary/v1/country-remittance-types/${country}`)
  //     .pipe(
  //       map(dtos => dtos.map(dto => ({ ...dto, label: paymentMethodLabels[dto.paymentType] }))),
  //     );
  // }

  getReceiverCurrencies(country: string): Observable<CurrencyModel[]> {
    return this.httpClient.get<CurrencyModel[]>(`${this.baseUrl}/dictionary/v1/country-currencies?country=${country}&isReceive=true`)
      .pipe(
        map(currencies => {
          const countryCurrency = currencies.find(cur => cur.countryCode === country);
          if (countryCurrency) {
            return [countryCurrency, ...currencies.filter(c => c.countryCode !== country)];
          }

          return currencies;
        })
      );
  }

  getCommissionAndRate(params: CommissionAndRateRequestModel): Observable<CommissionAndRateModel> {
    const queryParams: Record<string, number> = params as unknown as Record<string, number>;
    return this.httpClient.get<CommissionAndRateModel>(`${this.baseUrl}/v1/groups/comission`, { params: queryParams })
  }
}