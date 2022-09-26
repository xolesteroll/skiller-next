import { ComponentProps, FC } from "react"
import s from './Sidebar.module.scss'

const Sidebar: FC = (props: ComponentProps<any>) => {
    return (
        <div className={s.sidebar}>
            {props.children}
        </div>
    )
}

export default Sidebar
