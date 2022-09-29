// ** MUI Imports
import { gql } from '@apollo/client'

const TEMPLATE_MESSAGE_ADD = gql`
  mutation AddTemplateMessage($templateMessage: TemplateMessageInput) {
    addTemplateMessage(templateMessage: $templateMessage) {
      name
      text
      user
      mediaType
      label
      status
      url
      favourite
    }
  }
`

const TEMPLATE_MESSAGE_EDIT = gql`
  mutation EditTemplateMessage($templateMessage: TemplateMessageInput) {
    editTemplateMessage(templateMessage: $templateMessage) {
      id
      name
      text
      user
      mediaType
      label
      status
      url
      favourite
    }
  }
`

const TEMPLATE_MESSAGE_DELETE = gql`
  mutation DeleteTemplateMessage($deleteTemplateMessageId: ID) {
    deleteTemplateMessage(id: $deleteTemplateMessageId) {
      id
    }
  }
`

const TEMPLATE_MESSAGE_FAV = gql`
  mutation SetFavTemplateMessage($templateMessage: TemplateMessageFavInput) {
    setFavTemplateMessage(templateMessage: $templateMessage) {
      id
      favourite
    }
  }
`

export { TEMPLATE_MESSAGE_ADD, TEMPLATE_MESSAGE_EDIT, TEMPLATE_MESSAGE_DELETE, TEMPLATE_MESSAGE_FAV }
