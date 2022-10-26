import React, {ChangeEvent, Dispatch, FormEventHandler, SetStateAction, useState} from 'react';
import {signIn} from "next-auth/react";

const AuthForm = () => {
    const [enteredUsername, setEnteredUsername] = useState<string>("")
    const [enteredPassword, setEnteredPassword] = useState<string>("")
    const [isLogin, setIsLogin] = useState<boolean>(true)

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
            username: enteredUsername,
            password: enteredPassword
        }

        const res = await signIn('credentials', {
            username: enteredUsername,
            password: enteredPassword
        });

        console.log(res)
    }


    return (
        <form onSubmit={(e) => onSubmitHandler(e)}>
            <div>
                <label htmlFor="user-name">Username</label>
                <input
                    type="text"
                    id="user-name"
                    value={enteredUsername}
                    onChange={(e) => onEnteredValueChangeHandler(setEnteredUsername, e)}
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
                    {isLogin ? "Sign In" : "Sign Up"}
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