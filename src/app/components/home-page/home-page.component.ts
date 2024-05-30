import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReceiveCardsBlockComponent } from './receive-cards-block/receive-cards-block.component';
import { WaysToPayComponent } from './ways-to-pay/ways-to-pay.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WhyMyguavaComponent } from './why-myguava/why-myguava.component';
import { ReadyToStartComponent } from './ready-to-start/ready-to-start.component';
import { ReceiveMoneyComponent } from '../receive-money/receive-money.component';

type Tabs = 'send-money' | 'receive-money';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    ReceiveCardsBlockComponent,
    WaysToPayComponent,
    SignUpComponent,
    WhyMyguavaComponent,
    ReadyToStartComponent,
    ReceiveMoneyComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public currentTab: Tabs = 'send-money';

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
