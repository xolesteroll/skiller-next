import "reflect-metadata";
import {ApolloServer} from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse, IncomingMessage } from "http";
import {buildSchema} from "type-graphql";
import {SkillsResolver} from "../../src/schema/skills/skills.resolver";

const schema = await buildSchema({
    resolvers: [SkillsResolver]
})

const server = new ApolloServer({
    schema
})

const startServer = server.start()

export default async function handler(req: MicroRequest, res: ServerResponse<IncomingMessage>) {
    await startServer
    await server.createHandler({path: "/api/graphql"})(req, res)
}

export const config = {
    api: {
        bodyParser: false
    }
}
