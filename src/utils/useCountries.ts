import { useEffect, useState } from "react";

export interface ICountry {
  name: string;
  flag: string;
  independent: boolean;
}

const useCountries = (): { countriesList: ICountry[] | null } => {
  const [countries, setCountries] = useState<ICountry[] | null>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,flag")
      .then((res) => res.json())
      .then(setCountries)
      .catch((err) => {
        setCountries(null);
        console.error(err);
      });
  }, []);
  return { countriesList: countries };
};

export default useCountries;
