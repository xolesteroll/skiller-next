import React from 'react';

import s from '../../../styles/Skills.module.scss'
import Container from "../../../components/ui/Container/Container";
import GridWrapper from "../../../components/ui/GridWrapper/GridWrapper";
import Sidebar from "../../../components/ui/Sidebar/Sidebar";
import SkillItem from "../../../components/skills/SkillItem/SkillItem";
import {DUMMY_SKILLS} from "../../../data/skills"

const Skills = () => {
    return (
        <div className={s.skills}>
            <Container>
                <GridWrapper>
                    <Sidebar/>
                    <div className={s.skillsGrid}>
                        {DUMMY_SKILLS.map((s, i) =>
                            <SkillItem skill={s} key={s.title + i}/>
                        )}
                    </div>
                </GridWrapper>
            </Container>
        </div>
    );
};

export default Skills;