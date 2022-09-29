import { gql } from '@apollo/client'

const UPDATE_AGENT = gql`
  mutation UpdateAgent($updateAgentId: ID, $agent: AgentInput) {
    updateAgent(id: $updateAgentId, agent: $agent) {
      name
      id
      email
      mobileNumber
    }
  }
`

export default UPDATE_AGENT
