import React, {ComponentProps, FC} from 'react';
import {SkillProps} from "../../../src/types/skillProps";
import s from './SkillItem.module.scss'

const SkillItem = ({skill}: SkillProps) => {
    return (
        <div className={s.skill}>
            <h4>{skill.title}</h4>
            {/*<p>{skill.}</p>*/}
        </div>
    );
};

export default SkillItem;