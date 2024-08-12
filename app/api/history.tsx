'use server'

import prisma from "../lib/prisma";

const email = 'user2@mail.com' 


export default async function getHistory() {
    const files = await prisma.file.findMany({
        where:{
            client: {
                is: {
                    email:email
                }
            }
        },
        orderBy: {
            date: 'desc'
        },
        take: 5,
    })
    
    return files
}


