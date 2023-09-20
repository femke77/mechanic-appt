import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phonenumber: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phonenumber: $phonenumber
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_APPT = gql`
  mutation AddAppointment(
    $startDate: String!
    $workRequest: String!
    $model: String!
    $year: String!
  ) {
    addAppointment(
      startDate: $startDate
      workRequest: $workRequest
      model: $model
      year: $year
    ) {
      _id
      firstName
      lastName
      email
      phonenumber
      appointments {
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
  }
`;
