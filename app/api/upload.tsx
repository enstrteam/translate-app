'use server'

import prisma from "../lib/prisma";

const email = 'user2@mail.com' 

export default async function handleFileUpload(uploadData: any) {


    const result = await prisma.file.create({
        data: {
            name: uploadData.name,
            size: uploadData.size,
            lang: uploadData.lang,
            url: "URL://" + uploadData.name,
            client: {connect: {email: email}}
        }
    })

    
}