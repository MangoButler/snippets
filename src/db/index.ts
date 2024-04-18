import { Prisma, PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

db.snippet.create({
    data: {
        title: 'Sample',
        code: `const abc = () => {};`
    }
})