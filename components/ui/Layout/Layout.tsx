import {ComponentProps} from "react";
import Header from "./Header/Header";
import Spacer from "../Spacer/Spacer";


const Layout = (props: ComponentProps<any>) => {
    return (
        <>
            <Header />
            <Spacer height={'15px'} backgroundColor={'#ffffff'} />
            <main className="main">
                {props.children}
            </main>
        </>
    );
};

export default Layout;
