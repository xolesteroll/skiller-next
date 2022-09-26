import s from './Container.module.scss'
import { ComponentProps } from 'react';

const Container = (props: ComponentProps<any>) => {
    return (
        <div className={s.container}>
            {props.children}
        </div>
    )
}

export default Container