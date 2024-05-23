import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Tabs = 'send-money' | 'receive-money';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
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
