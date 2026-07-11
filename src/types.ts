export interface DonationStats {
  currentAmount: number;
  goal: number;
  donorsCount: number;
}

export interface Milestone {
  amount: number;
  label: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StripeConfig {
  stripeEnabled: boolean;
  publishableKey: string;
}
