// ** MUI Imports
import { gql } from '@apollo/client'

const GET_CONTACTS = gql`
  query GetContacts {
    getContactUser {
      id
      name
      phone
      tags
      attributes
      projectId
      createdAt
    }
  }
`

export default GET_CONTACTS
