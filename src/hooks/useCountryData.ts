import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '@/graphql/queries';
import { GET_MEASURE_BY_COUNTRY } from '@/graphql/queries';

export const useCountries = () => {
    return useQuery(GET_COUNTRIES);
  };


export const useMeasureByCountry = (country: string, measure: string) => {
  return useQuery(GET_MEASURE_BY_COUNTRY, {
    variables: { country: country.toLowerCase(), measure },
    skip: !country || !measure,
  });
};