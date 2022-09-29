import { gql } from '@apollo/client'

const ADD_CONTACT_USER = gql`
  mutation AddContactUser($contact: ContactInput) {
    addContactUser(contact: $contact) {
      name
      phone
    }
  }
`

export default ADD_CONTACT_USER
