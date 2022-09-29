// ** MUI Imports
import { gql } from '@apollo/client'

const GET_ALL_CANNED_MESSAGES = gql`
  query GetCannedMessages {
    getCannedMessages {
      name
      text
      id
      favourite
      type
      url
      username
      createdAt
    }
  }
`

export default GET_ALL_CANNED_MESSAGES
