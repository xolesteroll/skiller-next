import {gql} from "@apollo/client";

export const GetSkillsQuery = gql`
    query {
        skills {
            id
            title
        }
    }
`
export const GetSkillByIdQuery = gql`
    query SkillById($skillByIdId: String!) {
        skillById(id: $skillByIdId) {
            id
            title
        }
    }
`
