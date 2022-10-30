import {Field, ID, ObjectType} from "type-graphql";
import {Skill} from "../skills/skills.typeDef";
import {Enum} from "@apollo/protobufjs";

@ObjectType()
export class User {
    @Field(() => ID)
    id: string

    @Field(() => String)
    email: string

    @Field(() => String, {nullable: true})
    username: string

    @Field(() => String)
    password: string

    @Field()
    role: Role

    @Field(() => [Skill], {nullable: true})
    skills: [Skill]

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date)
    updatedAt: Date
}

export enum Role {
    USER = "USER",
    SKILLER = "SKILLER",
    ADMIN = "ADMIN"
}

