import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
//Need to add the differentiation between nanny and user with boolen value still
export const ADD_USER = gql`
  mutation addUser($firstname: String!, $lastname: String!, $phonenumber: String!, $username: String!, $email: String!, $password: String!, $status: Boolean!) {
    addUser(firstname: $firstname, lastname: $lastname, phonenumber: $phonenumber, username: $username, email: $email, password: $password, status: $status) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PASSENGER = gql`
  mutation addPassenger($firstname: String!, $lastname: String!, $flight_number: String!,  $phonenumber: String!, $email: String!, $price: String!, $children: String!) {
    addPassenger(firstname: $firstname, lastname: $lastname, flight_number: $flight_number,  phonenumber: $phonenumber, email: $email, price: $price, children: $children) {
      _id
      firstname
      lastname
      flight_number
      phonenumber
      email
      price
      children
    }
  }
`;