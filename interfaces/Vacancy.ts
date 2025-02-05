export interface Vacancy {
  id: number;
  title: string;
  description: string;
  urgent: boolean;
  period: string;
  contactLink: string;
  requirements: string[];
  createdAt?: Date;
}
