import {Query, Resolver} from "type-graphql";
import {Skill} from "./skills.typeDef";

@Resolver(Skill)
export class SkillsResolver {
    @Query(returns => [Skill])
    async skills(): Promise<Skill[]> {
        return [
            {id: '1', title: 'first Skill'},
            {id: '2', title: 'second Skill'},
        ]
    }

    @Query(returns => Skill)
    async skill(): Promise<Skill> {
        return {
            id: '1', title: 'first Skill'
        }
    }
}
