import React, {ComponentProps} from 'react';

import s from './GridWrapper.module.scss'
import Container from "../Container/Container";

const GridWrapper = (props: ComponentProps<any>) => {
    return (
        <Container>
            <div className={s.wrapper}>
                {props.children}
            </div>
        </Container>
    );
};

export default GridWrapper;