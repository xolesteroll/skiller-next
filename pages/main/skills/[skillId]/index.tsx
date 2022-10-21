import React from 'react';
import {GetSkillByIdQuery, GetSkillsQuery} from "../../../../src/graphql/queries/skills.queries";
import apolloClient from "../../../../lib/apollo";
import {GetSkillByIdResponse} from "../../../../src/types/skillResponse";
import {Skill} from "../../../../src/graphql/schema/skills/skills.typeDef";

const SkillDetails: React.FC<GetSkillByIdResponse> = ({data}) => {
    // const router = useRouter()
    // const skillId = router.query.skillId
    //
    // const {data, loading, error} = useQuery(GetSkillByIdQuery, {
    //     variables: {skillByIdId: skillId}
    // })
    // console.log(data)

    return (
        <div>
            <p>{data.skillById.title}</p>
            {/*{!loading && data && <p>{data.skillById.title}</p>}*/}
            {/*SkillDetails*/}
        </div>
    );
};

export async function getStaticPaths() {
    const {data} = await apolloClient.query({
        query: GetSkillsQuery
    })

    const skillsIds = data.skills.map((s: Skill) => {
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
    console.log(ctx)

    const {data} = await apolloClient.query({
        query: GetSkillByIdQuery,
        variables: {
            skillByIdId: ctx.params.skillId
        }
    })

    console.log(data)

    return {
        props: {
            data
        }
    }
}


export default SkillDetails;