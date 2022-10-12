import React, {useEffect, useState} from 'react';
import s from '../../../styles/Skills.module.scss'
import Container from "../../../components/ui/Container/Container";
import GridWrapper from "../../../components/ui/GridWrapper/GridWrapper";
import Sidebar from "../../../components/ui/Sidebar/Sidebar";
import SkillItem from "../../../components/skills/SkillItem/SkillItem";
import {GetSkillsQuery} from "../../../src/graphql/queries/skills.queries";
import {Skill} from "../../../src/graphql/schema/skills/skills.typeDef";
import {useQuery} from "@apollo/client";

const Skills = () => {
    const {data, error, loading} = useQuery(GetSkillsQuery)
    const [skills, setSkills] = useState([])
    console.log(data, error, loading)

    useEffect(() => {
        if (data) {
           setSkills(data.skills)
        }
    }, [data])

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Oops, something went wrong: {error.message}</p>

    return (
        <div className={s.skills}>
            <Container>
                <GridWrapper>
                    <Sidebar/>
                    <div className={s.skillsGrid}>
                        {!loading && !error && skills.map((s: Skill, i: number) =>
                            <SkillItem skill={s} key={s.title + i}/>
                        )}
                        {loading && <p>Loading...</p>}
                        {error && <p>Oops, something went wrong: {error.message}</p>}
                    </div>
                </GridWrapper>
            </Container>
        </div>
    );
};

export default Skills;