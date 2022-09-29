// ** MUI Imports
import { gql } from '@apollo/client'

const GET_APIKEY = gql`
  query Query {
    getApiKey {
      id
      name
    }
  }
`

export default GET_APIKEY
