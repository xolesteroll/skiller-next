import React, {useEffect, useState} from 'react';
import s from '../../../styles/Skills.module.scss'
import GridWrapper from "../../../components/ui/GridWrapper/GridWrapper";
import Sidebar from "../../../components/ui/Sidebar/Sidebar";
import {GetSkillsQuery} from "../../../src/graphql/queries/skills.queries";
import {useQuery} from "@apollo/client";
import SkillsGrid from "../../../components/skills/SkillsGrid/SkillsGrid";
import SkillsNav from "../../../components/navigation/SkillsNav/SkillsNav";
import TopNavbar from "../../../components/navigation/TopNavbar/TopNavbar";

const Skills = () => {
    const {data, error, loading} = useQuery(GetSkillsQuery)
    const [skills, setSkills] = useState([])

    useEffect(() => {
        if (data) {
            setSkills(data.skills)
        }
    }, [data])

    console.log(data)

    return (
        <GridWrapper>
            <Sidebar>
                <SkillsNav/>
            </Sidebar>
            <div>
                <div className={s.skillsGrid}>
                    {/*<SkillsGrid skillsArray={data.skills} />*/}
                    {!loading && !error && <SkillsGrid skillsArray={skills}/>}
                    {loading && <p>Loading...</p>}
                    {error && <p>Oops, something went wrong: {error.message}</p>}
                </div>
                <TopNavbar visibility={'hide'}/>
            </div>

        </GridWrapper>
    );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//     const {data} = await apolloClient.query({
//         query: GetSkillsQuery
//     })
//
//     return {
//         props: {
//             data
//         }
//     }
// }

export default Skills;