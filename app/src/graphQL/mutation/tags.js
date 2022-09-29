// ** MUI Imports
import { gql } from '@apollo/client'

const ADD_TAGS = gql`
  mutation AddTag($tag: tagInput) {
    addTag(tag: $tag) {
      name
      id
    }
  }
`

export default ADD_TAGS
