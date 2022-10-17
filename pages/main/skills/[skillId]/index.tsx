import React from 'react';
import {useQuery} from "@apollo/client";
import {GetSkillByIdQuery} from "../../../../src/graphql/queries/skills.queries";
import {useRouter} from "next/router";

const SkillDetails = () => {
    const router = useRouter()
    const skillId = router.query.skillId

    const {data, loading, error} = useQuery(GetSkillByIdQuery, {
        variables: {skillByIdId: skillId}
    })
    console.log(data)

    return (
        <div>
            {!loading && data && <p>{data.skillById.title}</p>}
            {/*SkillDetails*/}
        </div>
    );
};

export default SkillDetails;