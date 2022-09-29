// ** MUI Imports
import { gql } from '@apollo/client'

const GET_ALL_TEMPLATE_MESSAGES = gql`
  query GetTemplateMessages {
    getTemplateMessages {
      name
      text
      mediaType
      label
      status
      url
      favourite
      id
    }
  }
`

export default GET_ALL_TEMPLATE_MESSAGES
