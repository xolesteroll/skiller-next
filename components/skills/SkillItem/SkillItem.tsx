import React, {ComponentProps, FC} from 'react';
import s from './SkillItem.module.scss'
import {Skill} from "../../../src/graphql/schema/skills/skills.typeDef";
import {useRouter} from "next/router";

const SkillItem = ({skill}: { skill: Skill }) => {
    const router = useRouter()
    return (
        <a href={`${router.asPath}/${skill.id}`}>
            <div className={s.item}>
                <h4>{skill.title}</h4>
                {/*<p>{skill.}</p>*/}
            </div>
        </a>
    );
};

export default SkillItem;