import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
export class Skill {
    @Field(() => ID)
    id: string

    @Field(() => String)
    title: string
    //
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