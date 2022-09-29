// ** MUI Imports
import { gql } from '@apollo/client'

const ADD_ATTRIBUTES = gql`
  mutation AddAttributes($attribute: AttributesInput) {
    addAttributes(attribute: $attribute) {
      name
      id
    }
  }
`

export default ADD_ATTRIBUTES
