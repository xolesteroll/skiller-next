import React from 'react';
import s from './Spacer.module.scss'

const Spacer = ({height, backgroundColor}: {height: string, backgroundColor: string}) => {
    return <div className={s.spacer} style={{height, backgroundColor}} />
};

export default Spacer;