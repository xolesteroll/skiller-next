import {gql} from "@apollo/client";

export const CreateSkill = gql`
    mutation CreateSkillMutation($title: String!) {
        createSkill(title: $title) {
            id
            title
        }
    }
`