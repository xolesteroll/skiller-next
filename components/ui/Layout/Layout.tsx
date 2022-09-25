import {ComponentProps} from "react";
import Header from "../Header/Header";
import Head from "next/head";


const Layout = (props: ComponentProps<any>) => {
    return (
        <>
            <Header />
            <div className="main">
                {props.children}
            </div>
        </>
    );
};

export default Layout;
