import {Skill} from "../graphql/schema/skills/skills.typeDef";

export type GetSkillsResponse = {
    data: {
        skills: Skill[]
    },
    error: string
}

export type SkillsErrorResponse = {
    data: {
        skills: [],
        error: string
    },
    error: string
}

export type GetSkillByIdResponse = {
    data: {
        skillById: {
            id: string,
            title: string
        }
    },
    error: string
}

export type GetSkillByIdErrorResponse = {
    data: {
        skillById: null
        error: string
    }
}

