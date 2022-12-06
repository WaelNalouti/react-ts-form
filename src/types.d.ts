export interface FormValues {
  name: string;
  countries: {
    name: string;
    cost: number;
    maxDays: number;
    minDays: number;
  }[];
}
