import {PrismaClient} from "@prisma/client"
import {DUMMY_SKILLS} from "../data/skills"

const prisma = new PrismaClient()

const main = async () => {
    await prisma.user.create({
        data: {
            email: "aaa@mail.aaa",
            firstName: "aaa",
            secondName: "bbb",
            role: 'ADMIN'
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