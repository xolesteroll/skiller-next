import React, {ComponentProps, FC} from 'react';
import s from './SkillItem.module.scss'
import {Skill} from "../../../src/graphql/schema/skills/skills.typeDef";

const SkillItem = ({skill}: {skill: Skill}) => {
    return (
        <div className={s.skill}>
            <h4>{skill.title}</h4>
            {/*<p>{skill.}</p>*/}
        </div>
    );
};

export default SkillItem;