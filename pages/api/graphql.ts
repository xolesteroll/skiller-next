import "reflect-metadata";
import {ApolloServer} from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse, IncomingMessage } from "http";
import {buildSchema, Resolver, Query, Arg, ObjectType, Field, ID} from "type-graphql";

@ObjectType()
export class Skill {
    @Field(type => ID)
    id: number

    @Field()
    title: string

    // @Field()
    // skillers: number[] | []
    //
    // @Field()
    // deals: number[] | []
    //
    // @Field()
    // description: string
    //
    // @Field()
    // masterId: number
}

@Resolver(Skill)
export class SkillsResolver {
    @Query(returns => [Skill])
    async skills(): Promise<Skill[]> {
        return [
            {id: 1, title: 'first Skill'},
            {id: 2, title: 'second Skill'},
        ]
    }

    // @Query(returns => Skill)
    // async skill(): Promise<Skill> {
    //     return {
    //         id: 1, title: 'first Skill'
    //     }
    // }
}

const schema = await buildSchema({
    resolvers: [SkillsResolver]
})


const server = new ApolloServer({
    schema
})

export const config = {
    api: {
        bodyParser: false
    }
}

const startServer = server.start()

export default async function handler(req: MicroRequest, res: ServerResponse<IncomingMessage>) {
    res.setHeader('access-control-allow-origin', 'https://studio.apollographql.com')
    await startServer
    await server.createHandler({path: "/api/graphql"})(req, res)
}