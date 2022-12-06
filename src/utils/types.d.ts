interface ICountry {
  name: string;
  flag: string;
  independent: boolean;
}
interface FormValues {
  shippingName: string;
  countries: {
    name: string;
    cost: number;
    maxDays: number;
    minDays: number;
  }[];
}
interface ICountryDic {
  [index: string]: {
    cost: number;
    minDays: number;
    maxDays: number;
  };
}
interface IDBdata {
  name: string;
  countries: ICountryDic;
}
