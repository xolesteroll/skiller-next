import {PrismaClient} from "@prisma/client"
import {DUMMY_SKILLS} from "../data/skills"
import {Role} from "../src/graphql/schema/users/users.typeDef";

const prisma = new PrismaClient()

const main = async () => {
    await prisma.user.create({
        data: {
            username: "aaa@mail.aaa",
            password: "aaa",
        }
    })

    await prisma.skill.createMany({
        data: DUMMY_SKILLS
    })
}

main()
.catch(e => {
    console.log(e)
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect()
})