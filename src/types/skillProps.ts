import {Skill} from "../graphql/schema/skills/skills.typeDef";

export type SkillProps = {
   skill: Skill
}

export type SkillsProps = {
   skillsArray: Skill[]
}