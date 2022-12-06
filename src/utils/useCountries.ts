import { useEffect, useState } from "react";

// Used a public free api for fetching countries list
// Find more about this api here: https://restcountries.com

const useCountries = () => {
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
