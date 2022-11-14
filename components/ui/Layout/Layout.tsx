import {ComponentProps} from "react";
import Header from "../Header/Header";
import Spacer from "../Spacer/Spacer";
import {useSession} from "next-auth/react";
import Container from "../Container/Container";


const Layout = (props: ComponentProps<any>) => {
    const {data: session, status} = useSession()

    return (
        <>
            <Header />
            <Spacer height={'15px'} backgroundColor={'#ffffff'} />
            <main className="main">
                <Container >
                    {
                        status === 'loading' ? <p>Logging you in</p> : props.children
                    }
                </Container>

            </main>
        </>
    );
};

export default Layout;
