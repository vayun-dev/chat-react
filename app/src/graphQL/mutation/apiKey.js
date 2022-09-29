// ** MUI Imports
import { gql } from '@apollo/client'

const ADD_APIKEY = gql`
  mutation AddApiKey($apiKey: ApiKeyInput) {
    addApiKey(apiKey: $apiKey) {
      name
      id
    }
  }
`

export default ADD_APIKEY
