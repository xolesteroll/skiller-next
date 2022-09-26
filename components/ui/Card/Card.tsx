import { ComponentProps, FC } from "react"
import s from './Card.module.scss'

const Card: FC = (props: ComponentProps<any>) => {
    return (
        <div className={s.card}>
            {props.children}
        </div>
    )
}

export default Card