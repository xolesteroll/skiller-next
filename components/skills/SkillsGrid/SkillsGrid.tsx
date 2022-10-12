import React, {useEffect, useState} from 'react';
import s from './SkillsGrid.module.scss'
import {SkillsProps} from "../../../src/types/skillProps";

const SkillsGrid = ({skillsArray}: SkillsProps) => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        setSkills(skillsArray)
    }, [skills])

    return (
        <div className={s.grid}>

        </div>
    );
};

export default SkillsGrid;