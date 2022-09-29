// ** MUI Imports
import { gql } from '@apollo/client'

const ADD_AGENT =  gql`
    mutation AddAgent($agent: AgentInput) {
      addAgent(agent: $agent) {
        name
        email
        role
      }
    }
  `

export default ADD_AGENT