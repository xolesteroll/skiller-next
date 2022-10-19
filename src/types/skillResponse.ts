import {Skill} from "../graphql/schema/skills/skills.typeDef";

export type GetSkillsResponse = {
    data: {
        skills: Skill[]
    }
}