// src/graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query Countries {
    item(where: { class_id: { _eq: "Country" } }) {
      id
      name: name(path: "en")
      iso2: statements(where: { property_id: { _eq: "iso2" } }) {
        value: postgres_varchar
      }
    }
  }
`;

export const GET_MEASURE_BY_COUNTRY = gql`
  query GetCountryMeasure($country: String!, $measure: String!) {
    cube_cube_M6Lh5is0FtqUhZ(
      where: {
        country: { _eq: $country },
        measure: { _eq: $measure }
      }
    ) {
      value
      year
    }
  }
`;
