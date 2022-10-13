import React from "react";
import { ComponentProps, FC } from "react"
import s from './Sidebar.module.scss'

const Sidebar: React.FC<React.PropsWithChildren> = (props) => {
    return (
        <div className={s.sidebar}>
            {props.children}
        </div>
    )
}

export default Sidebar
