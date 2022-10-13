import React from 'react';
import {useRouter} from 'next/router';

import s from './BackBtn.module.scss'
import BackArrowIcon from "../../ui/IconsComponents/BackArrowIcon";

const BackBtn = () => {
    const router = useRouter()

    const navigateBackHandler = () => {
        router.back()
    }

    return (
        <button className={s.button} onClick={navigateBackHandler}>
            <BackArrowIcon />
            Back
        </button>
    );
};

export default BackBtn;