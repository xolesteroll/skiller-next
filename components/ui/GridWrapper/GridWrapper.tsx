import React, {ComponentProps} from 'react';

import s from './GridWrapper.module.scss'

const GridWrapper = (props: ComponentProps<any>) => {
    return (
        <div className={s.wrapper}>
            {props.children}
        </div>
    );
};

export default GridWrapper;