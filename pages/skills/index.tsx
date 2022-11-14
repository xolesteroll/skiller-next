import React from 'react';
import s from '../../styles/Skills.module.scss'
import GridWrapper from "../../components/ui/GridWrapper/GridWrapper";
import {GetSkillsQuery} from "../../src/graphql/queries/skills.queries";
import SkillsGrid from "../../components/skills/SkillsGrid/SkillsGrid";
import apolloClient from "../../lib/apollo";
import {GetSkillsResponse, SkillsErrorResponse} from "../../src/types/skillResponse";
import {prisma} from "../../lib/prisma-global";


const Skills: React.FC<GetSkillsResponse | SkillsErrorResponse> = ({data}) => {

    return (
        <GridWrapper>
            <div className={s.skillsGrid}>
                {/*@ts-ignore*/}
                {data.error || <SkillsGrid skillsArray={data.skills}/>}

                {/*/!*<SkillsGrid skillsArray={data.skills} />*!/*/}
                {/*{!loading && !error && <SkillsGrid skillsArray={skills}/>}*/}
                {/*{loading && <p>Loading...</p>}*/}
                {/*{error && <p>Oops, something went wrong: {error.message}</p>}*/}
            </div>
        </GridWrapper>
    );
};

export async function getServerSideProps() {
    try {
        const skills = await prisma.skill.findMany()

        return {
            props: {
                data: {
                    skills,
                    error: null
                }
            }
        }

    } catch (e: any) {
        return {
            props: {
                data: {
                    skills: [],
                    error: e.message
                }
            }
        }
    }

}

// export async function getStaticProps() {
//     try {
//         const {data} = await apolloClient.query({
//             query: GetSkillsQuery
//         })
//
//         console.log(data)
//
//         return {
//             props: {
//                 data
//             },
//             revalidate: 10
//         }
//
//     } catch (e: any) {
//         return {
//             props: {
//                 data: {
//                     skills: [],
//                     error: e.message
//                 },
//                 revalidate: 10
//             }
//         }
//     }
//
// }

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