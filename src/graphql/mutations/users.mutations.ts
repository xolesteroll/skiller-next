import {gql} from "@apollo/client";

export const RegisterUser = gql`
    mutation RegisterUserMutation($username: String!, $password: String!) {
        createSkill(username: $username, password: $password) {
            id
            title
        }
    }
`