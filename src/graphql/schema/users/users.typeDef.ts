import {Field, ID, InputType, ObjectType} from "type-graphql";
import {Skill} from "../skills/skills.typeDef";

@ObjectType()
export class User {
    @Field(() => ID)
    id: string

    @Field()
    email: string

    @Field()
    firstName: string

    @Field()
    secondName: string

    @Field()
    role: Role

    @Field()
    skills: Skill[] | []

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

