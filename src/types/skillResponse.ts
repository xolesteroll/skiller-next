import {Skill} from "../graphql/schema/skills/skills.typeDef";

export type GetSkillsResponse = {
    data: {
        skills: Skill[]
    }
}

export type GetSkillByIdResponse = {
    data: {
        skillById: {
            id: string,
            title: string
        }
    }
}

export type SkillsErrorResponseType = {
    data: {
        skills: [],
        error: string
    }
}