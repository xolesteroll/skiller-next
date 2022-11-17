import React, {ChangeEvent, Dispatch, FormEventHandler, SetStateAction, useState} from 'react';
import {signIn, useSession} from "next-auth/react";
import {useMutation} from "@apollo/client";
import {RegisterUser} from "../../../src/graphql/mutations/users.mutations";

const AuthForm = () => {
    const [enteredEmail, setEnteredEmail] = useState<string>("")
    const [enteredPassword, setEnteredPassword] = useState<string>("")
    const [isLogin, setIsLogin] = useState<boolean>(true)

    const session = useSession()

    const [registerUser, {data, loading, error}] = useMutation(RegisterUser)

    const onAuthModeChangeHandler = () => {
        setIsLogin(prevState => !prevState)
    }

    const onEnteredValueChangeHandler = (
        setter: Dispatch<string>,
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value
        setter(value)
    }

    const onSubmitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        const submittedData = {
            email: enteredEmail,
            password: enteredPassword
        }

        let response

        if (isLogin) {
            response = await signIn('credentials', submittedData);
        } else {
            console.log(submittedData)
            response = await registerUser({
                variables: submittedData
            })
        }

        console.log(response)

    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>Something is wrong</p>


    return (
        <form onSubmit={(e) => onSubmitHandler(e)}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={enteredEmail}
                    onChange={(e) => onEnteredValueChangeHandler(setEnteredEmail, e)}
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={enteredPassword}
                    onChange={(e) => onEnteredValueChangeHandler(setEnteredPassword, e)}
                />
            </div>

            <div>
                <button type="submit">
                    {isLogin && session.status !== "loading" ? "Sign In" : "Sign Up"}
                    {session.status === "loading" ?? "Loading..."}
                </button>
            </div>

            <div>
                <p>
                    {isLogin ? "Already have an account?" : "Don't have an account yet?"}
                    <button type="button" onClick={onAuthModeChangeHandler}>
                        {isLogin ? "Register" : "Login"}
                    </button>
                </p>

            </div>
        </form>
    );
};

export default AuthForm;