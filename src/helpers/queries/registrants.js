import gql from 'graphql-tag';

const createUserRecord = gql`
mutation($age: Int!, $barangay: String!, $city: String!, $contactNumber: String!,
  $email: String!,$firstName: String!, $middleName: String!, $lastName: String!,
   $ipAddress: String!, $paypalAccount: String!, $state: String!, $street: String!,
    $unitNumber: String!, $gender: String!, $country: String!)
  {
    insert_pr_users(
      objects: {
        first_name: $firstName,
        middle_name: $middleName,
        last_name: $lastName,
        age: $age,
        email: $email,
        gender: $gender,
        contact_number: $contactNumber,
        unit_number: $unitNumber
        street: $street,
        barangay: $barangay,
        city: $city,
        state: $state,
        country: $country,
        ip_address: $ipAddress,
        paypal_account: $paypalAccount,
      }
    ) {
      returning {
        first_name,
        middle_name,
        last_name,
        age,
        email,
        gender,
        contact_number,
        unit_number,
        street,
        barangay,
        city,
        state,
        country,
        ip_address,
        paypal_account
      }
    }
  }
`;

export default {
  createUserRecord
};
