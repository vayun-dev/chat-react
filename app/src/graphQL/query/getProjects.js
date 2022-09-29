// ** MUI Imports
import { gql } from '@apollo/client'

const GET_ALL_PROJECTS = gql`
  query GetProjects {
    getProjects {
      id
      name
    }
  }
`

export default GET_ALL_PROJECTS
