'use client'

import clsx from "clsx";
import { useContext } from "react";
import { UploadContext } from "@/app/context/upload-provider";
import { useRouter } from "next/router";

export default function UploadLayout({children} : {children: React.ReactNode}) {

    const {droppableField, drop} = useContext(UploadContext)


    return (
        <div className={clsx("mb-11 w-[1082px] h-[526px] bg-white rounded-[45px]", {
            "border-8 border-dashed": droppableField == true,
        })}>
            {children}
        </div>
    );
}