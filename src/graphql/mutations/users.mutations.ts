import {gql} from "@apollo/client";

export const RegisterUser = gql`
    mutation RegisterUserMutation($email: String!, $password: String!) {
        registerUser(email: $email, password: $password) {
            id
            email
            username
        }
    }
`