import React, {useEffect, useState} from 'react';
import s from './SkillsGrid.module.scss'
import {SkillsProps} from "../../../src/types/skillProps";
import {Skill} from "../../../src/graphql/schema/skills/skills.typeDef";
import SkillItem from "../SkillItem/SkillItem";

const SkillsGrid = ({skillsArray}: SkillsProps) => {
    const [skills, setSkills] = useState<Skill[] | []>([])

    useEffect(() => {
        setSkills(skillsArray)
    }, [skills])

    return (
        <div className={s.grid}>
            {skills.map((s: Skill, i: number) =>
                <SkillItem skill={s} key={s.title + i}/>
            )}
        </div>
    );
};

export default SkillsGrid;