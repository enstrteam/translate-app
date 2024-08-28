'use server'

import prisma from "../lib/prisma";

const email = 'user2@mail.com' 

export interface File {
    id: string;
    name: string;
    lang: string;
    size: string;
    date: Date;
    url: string;
    clientId: string;
}

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


