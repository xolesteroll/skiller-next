import {Field, ID, InputType, ObjectType} from "type-graphql";
import {Skill} from "../skills/skills.typeDef";

@ObjectType()
export class User {
    @Field(() => ID)
    id: string

    @Field()
    email: string

    @Field()
    username: string

    @Field()
    password: string

    @Field()
    role: Role

    @Field({ nullable: true })
    skills?: Skill[]

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}

export enum Role {
    USER = "USER",
    SKILLER = "SKILLER",
    ADMIN = "ADMIN"
}

