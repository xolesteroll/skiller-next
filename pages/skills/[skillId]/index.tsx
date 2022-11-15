import React from 'react';
import {Skill} from "../../../src/graphql/schema/skills/skills.typeDef";
import GridWrapper from "../../../components/ui/GridWrapper/GridWrapper";
import {prisma} from "../../../lib/prisma-global";

const SkillDetails: React.FC<{data: Skill}> = ({data} ) => {
    // const router = useRouter()
    // const skillId = router.query.skillId
    //
    // const {data, loading, error} = useQuery(GetSkillByIdQuery, {
    //     variables: {skillByIdId: skillId}
    // })
    // console.log(data)


    return (
        <GridWrapper>
            <p>{data.title}</p>
        </GridWrapper>
    );
};

export async function getStaticPaths() {
    // const {data} = await apolloClient.query({
    //     query: GetSkillsQuery
    // })

    const skills = await prisma.skill.findMany()

    const skillsIds = skills.map((s: Skill) => {
        return {
            params: {
                skillId: s.id
            }
        }
    })

    return {
        fallback: false,
        paths: skillsIds
    }
}

export async function getStaticProps(ctx: any) {

    const data = await prisma.skill.findUnique({
        where: {
            id: ctx.params.skillId
        }
    })
    // const {data} = await apolloClient.query({
    //     query: GetSkillByIdQuery,
    //     variables: {
    //         skillByIdId: ctx.params.skillId
    //     }
    // })


    return {
        props: {
            data
        }
    }
}


export default SkillDetails;