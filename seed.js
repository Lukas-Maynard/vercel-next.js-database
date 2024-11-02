const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



const seed = async () => {
        const createMany = await prisma.Video.createMany({
            data: [
                { id: 5, prompt: 'Which hero says "Justice rains from above"?', answer: 'Pharah', understood: 0, nextscheduledtime: null },
                { id: 6, prompt: 'What is the name of the robotic monk hero?', answer: 'Zenyatta', understood: 0, nextscheduledtime: null },
                { id: 7, prompt: 'Which hero can rewind time?', answer: 'Tracer', understood: 0, nextscheduledtime: null },
                { id: 8, prompt: 'What is the maximum charge level of Zarya’s particle cannon?', answer: '100', understood: 0, nextscheduledtime: null },
            ],
            skipDuplicates: true
        })
}

seed()