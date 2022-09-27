import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
export class Skill {
    @Field(type => ID)
    id: number

    @Field()
    title: string

    @Field()
    skillers: number[] | []

    @Field()
    deals: number[] | []

    @Field()
    description: string

    @Field()
    masterId: number
}