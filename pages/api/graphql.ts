import "reflect-metadata";
import {ApolloServer} from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse, IncomingMessage } from "http";
import {buildSchema} from "type-graphql";
import {SkillsResolver} from "../../src/graphql/schema/skills/skills.resolver";

const schema = await buildSchema({
    resolvers: [SkillsResolver]
})

const server = new ApolloServer({
    schema,

})

const startServer = server.start()

export default async function handler(req: MicroRequest, res: ServerResponse<IncomingMessage>) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://studio.apollographql.com"
    );
    // res.setHeader(
    //     "Access-Control-Allow-Headers",
    //     "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
    // );
    // res.setHeader(
    //     "Access-Control-Allow-Methods",
    //     "POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD"
    // );
    // if (req.method === "OPTIONS") {
    //     res.end();
    //     return false;
    // }

    await startServer
    await server.createHandler({path: "/api/graphql", disableHealthCheck: true})(req, res)
}

export const config = {
    api: {
        bodyParser: false
    }
}
