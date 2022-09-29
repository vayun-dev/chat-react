// ** MUI Imports
import { gql } from '@apollo/client'

const GET_ALL_AGENTS = gql`
  query GetAgents {
    getAgents {
      name
      email
      id
      role
      createdAt
    }
  }
`

export default GET_ALL_AGENTS
