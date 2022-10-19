import React from 'react';
import s from '../../../styles/Skills.module.scss'
import GridWrapper from "../../../components/ui/GridWrapper/GridWrapper";
import Sidebar from "../../../components/ui/Sidebar/Sidebar";
import {GetSkillsQuery} from "../../../src/graphql/queries/skills.queries";
import SkillsGrid from "../../../components/skills/SkillsGrid/SkillsGrid";
import SkillsNav from "../../../components/navigation/SkillsNav/SkillsNav";
import TopNavbar from "../../../components/navigation/TopNavbar/TopNavbar";
import apolloClient from "../../../lib/apollo";
import {GetSkillsResponse} from "../../../src/types/skillResponse";

const Skills: React.FC<GetSkillsResponse> = ({data}) => {
    return (
        <GridWrapper>
            <Sidebar>
                <SkillsNav/>
            </Sidebar>
            <div className={"content-wrapper"}>
                <TopNavbar visibility={"hide"}/>
                <div className={s.skillsGrid}>
                    <SkillsGrid skillsArray={data.skills}/>
                    {/*/!*<SkillsGrid skillsArray={data.skills} />*!/*/}
                    {/*{!loading && !error && <SkillsGrid skillsArray={skills}/>}*/}
                    {/*{loading && <p>Loading...</p>}*/}
                    {/*{error && <p>Oops, something went wrong: {error.message}</p>}*/}
                </div>
            </div>

        </GridWrapper>
    );
};

export async function getStaticProps() {
    const {data} = await apolloClient.query({
        query: GetSkillsQuery
    })

    console.log(data)

    return {
        props: {
            data
        }
    }
}

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