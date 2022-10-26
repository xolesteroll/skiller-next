import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {Role, User} from "./users.typeDef";

@Resolver(User)
export class UsersResolver {
    // @Query(returns => [User])
    // async users(): Promise<User[]> {
    //     return [
    //         {
    //             id: '1',
    //             email: 'first Skill',
    //             firstName: "first",
    //             secondName: "second",
    //             role: Role.ADMIN,
    //             skills: [],
    //             createdAt: new Date(),
    //             updatedAt: new Date
    //         },
    //         {
    //             id: '2',
    //             email: 'second Skill',
    //             firstName: "first",
    //             secondName: "second",
    //             role: Role.ADMIN,
    //             skills: [],
    //             createdAt: new Date(),
    //             updatedAt: new Date
    //         },
    //     ]
    // }
    //
    // @Query(returns => User)
    // async user(): Promise<User> {
    //     return {
    //         id: '1',
    //         email: 'first Skill',
    //         firstName: "first",
    //         secondName: "second",
    //         role: Role.ADMIN,
    //         skills: [],
    //         createdAt: new Date(),
    //         updatedAt: new Date
    //     }
    // }

    @Mutation(() => User)
    async registerUser(
        @Arg("username") username: string,
        @Arg("password") password: string
    ): Promise<User | null> {
        try {
            const newUser = await prisma.user.create({
                data: {
                    username,
                    password
                }
            })

            return newUser
        } catch (e:any) {
            console.log(e.message)
            return null
        }
    }
}
