import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {Skill} from "./skills.typeDef";
import {prisma} from "../../../../lib/prisma-global";

@Resolver(Skill)
export class SkillsResolver {
    @Query((returns) => [Skill])
    async skills(
        @Arg("amount", {defaultValue: null, nullable: true}) amount?: number
    ): Promise<Skill[]> {
        const skills = amount ?
            await prisma.skill.findMany({take: amount}) :
            await prisma.skill.findMany()
        return skills
    }

    @Query(returns => Skill)
    async skillById(
        @Arg("id", ) id: string
    ): Promise<Skill | null> {
        const foundSkill = await prisma.skill.findUnique({
            where: {
                id: id
            }
        })
        return foundSkill
    }

    @Mutation(() => Skill)
    async createSkill(
        @Arg("title") title: string
    ): Promise<Skill | null> {
        try {
            const newSkill = await prisma.skill.create({
                data: {
                    title
                }
            })

            return newSkill

        } catch (e: any) {
            return null
        }
    }
}
