import React, { ComponentProps, FC } from "react"
import s from './Card.module.scss'

const Card: React.FC<React.PropsWithChildren> = (props) => {
    return (
        <div className={s.card}>
            {props.children}
        </div>
    )
}

export default Card