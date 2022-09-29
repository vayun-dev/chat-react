// ** MUI Imports
import { gql } from '@apollo/client'

const PROJECTS_ADD = gql`
    mutation AddProject($project: ProjectInput) {
      addProject(project: $project) {
        name
      }
    }
  `
  
export default PROJECTS_ADD