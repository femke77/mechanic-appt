const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phonenumber: String!
    notes: String
    appointments: [Appointment]
  }

  type Appointment {
    _id: ID!
    startDate: String!
    endDate: String
    workRequest: String!
    car: Car!
  }

  type Car {
    id: ID!
    year: Int
    model: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    # get the cars in the read-only car collection
    getCars: [Car]
    me: User
    appts: [Appointment]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      phonenumber: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addAppointment(
      startDate: String!
      endDate: String
      workRequest: String!
      model: String!
      year: String!
      notes: String
    ): User
  }
`;

module.exports = typeDefs;
