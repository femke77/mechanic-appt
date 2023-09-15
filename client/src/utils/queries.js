import { gql } from "@apollo/client";

export const QUERY_CARS = gql`
query Query {
  getCars {
    id
    year
    model
  }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      phonenumber
      appointments {
        startDate
        endDate
        workRequest
        car {
          year
          model
        }
      }
    }
  }
`;

export const QUERY_ALL_APPTS = gql`
  query appts {
    appts {
      _id
      startDate
      endDate
      workRequest
      car {
        id
        year
        model
      }
    }
  }
`;
