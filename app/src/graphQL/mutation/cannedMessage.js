// ** MUI Imports
import { gql } from '@apollo/client'

const CANNED_MESSAGE_ADD = gql`
  mutation AddCannedMessage($cannedMessage: CannedMessageInput) {
    addCannedMessage(cannedMessage: $cannedMessage) {
      name
      url
      text
      type
      user
      favourite
    }
  }
`

const CANNED_MESSAGE_EDIT = gql`
  mutation EditCannedMessage($cannedMessage: CannedMessageInput) {
    editCannedMessage(cannedMessage: $cannedMessage) {
      id
      name
      url
      text
      type
      user
      favourite
    }
  }
`

const CANNED_MESSAGE_DELETE = gql`
  mutation DeleteCannedMessage($deleteCannedMessageId: ID) {
    deleteCannedMessage(id: $deleteCannedMessageId) {
      id
    }
  }
`

const CANNED_MESSAGE_FAV = gql`
  mutation SetFavCannedMessage($cannedMessage: CannedMessageFavInput) {
    setFavCannedMessage(cannedMessage: $cannedMessage) {
      id
      favourite
    }
  }
`

export { CANNED_MESSAGE_ADD, CANNED_MESSAGE_EDIT, CANNED_MESSAGE_DELETE, CANNED_MESSAGE_FAV }
