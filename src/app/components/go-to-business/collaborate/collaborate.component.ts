import { Component, signal } from '@angular/core';

interface CollaborateCardModel {
  title: string;
  subtitle: string;
  imgSrc: string;
}

@Component({
  selector: 'app-collaborate',
  standalone: true,
  imports: [],
  templateUrl: './collaborate.component.html',
  styleUrl: './collaborate.component.css'
})
export class CollaborateComponent {
  cards: CollaborateCardModel[] = [
    {
      title: 'Global coverage',
      subtitle: 'Access to international (SEPA, Interac, ACH and Global Local Payout options) and domestic payment systems',
      imgSrc: 'assets/images/benefir.webp',
    },
    {
      title: 'Flexible infrastructure',
      subtitle: 'Cutting-edge technology for smooth and hassle-free transactions',
      imgSrc: 'assets/images/Benefits.webp',
    },
    {
      title: 'Beneficial fees',
      subtitle: 'Generate revenue on a commissions earned from every transaction and increased business traffic',
      imgSrc: 'assets/images/Loyalty.webp',
    },
    {
      title: 'Hassle-free onboarding',
      subtitle: 'A dedicated team to navigate and facilitate the onboarding process for you',
      imgSrc: 'assets/images/structure.webp',
    },
    {
      title: 'Agent loyalty program',
      subtitle: 'Get additional benefits from your referal to other agents',
      imgSrc: 'assets/images/Onboarding.webp',
    },
    {
      title: 'Secure transfers',
      subtitle: 'Fully compliant infrastructure for secure and frictionless transactions',
      imgSrc: 'assets/images/secure.webp',
    },
  ]
  currentCard = signal(this.cards[0]);

  selectCard(card: CollaborateCardModel): void {
    if (this.currentCard().title === card.title) {
      return;
    }

    this.currentCard.set(card);
  }
}
