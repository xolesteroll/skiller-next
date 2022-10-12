import {gql} from "@apollo/client";

export const GetSkillsQuery = gql`
    query {
        skills {
            id
            title
        }
    }
`