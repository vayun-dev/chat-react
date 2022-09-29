// ** MUI Imports
import { gql } from '@apollo/client'

const REGISTER_CUSTOMERS = gql`
    mutation AddCustomer($customer: CustomerInput) {
      addCustomer(customer: $customer) {
        id
        name
        company
        isEmailVerified
        currency
        timeZone
        email
        mobileNumber
        role
        token {
          access {
            token
            expires
          }
          refresh {
            token
            expires
          }
        }
      }
    }
  `

export default REGISTER_CUSTOMERS