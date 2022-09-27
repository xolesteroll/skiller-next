import React from 'react';

import s from './Skills.module.scss'
import Container from "../../components/ui/Container/Container";
import GridWrapper from "../../components/ui/GridWrapper/GridWrapper";
import Sidebar from "../../components/ui/Sidebar/Sidebar";
import SkillItem from "../../components/skills/SkillItem/SkillItem";

const DUMMY_SKILLS = [
    {
        id: 1,
        title: 'first skill'
    }, {
        id: 2,
        title: 'firstt skill'
    }, {
        id: 3,
        title: 'firsttt skill'
    }, {
        id: 4,
        title: 'firstttt skill'
    }, {
        id: 5,
        title: 'firsttttt skill'
    },
]

const Skills = () => {
    return (
        <div className={s.skills}>
            <Container>
                <GridWrapper>
                    <Sidebar/>
                    <div className={s.skillsGrid}>
                        {DUMMY_SKILLS.map(s =>
                            <SkillItem skill={s} key={s.id}/>
                        )}
                    </div>
                </GridWrapper>
            </Container>
        </div>
    );
};

export default Skills;