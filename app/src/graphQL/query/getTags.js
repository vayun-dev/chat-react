// ** MUI Imports
import { gql } from '@apollo/client'

const GET_ALL_TAGS = gql`
  query GetTags {
    getTags {
      name
      id
      createdAt
    }
  }
`

export default GET_ALL_TAGS
