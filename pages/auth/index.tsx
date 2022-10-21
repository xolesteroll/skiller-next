import React from 'react';
import Container from "../../components/ui/Container/Container";
import AuthForm from "../../components/auth/AuthForm/AuthForm";

const AuthPage = () => {
    return (
        <div className="auth-page">
            <Container>
                <div className="auth-page__inner">
                    <AuthForm />
                </div>
            </Container>
        </div>
    );
};

export default AuthPage;