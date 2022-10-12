import {Query, Resolver} from "type-graphql";
import {User} from "./users.typeDef";

@Resolver(User)
export class UsersResolver {
    @Query(returns => [User])
    async users(): Promise<User[]> {
        return [
            {
                id: '1',
                email: 'first Skill',
                firstName: "first",
                secondName: "second",
                role: "admin",
                skills: [],
                createdAt: new Date(),
                updatedAt: new Date
            },
            {
                id: '2',
                email: 'second Skill',
                firstName: "first",
                secondName: "second",
                role: "admin",
                skills: [],
                createdAt: new Date(),
                updatedAt: new Date
            },
        ]
    }

    @Query(returns => User)
    async user(): Promise<User> {
        return {
            id: '1',
            email: 'first Skill',
            firstName: "first",
            secondName: "second",
            role: "admin",
            skills: [],
            createdAt: new Date(),
            updatedAt: new Date
        }
    }
}
