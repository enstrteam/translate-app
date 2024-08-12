"use client";

import Image from "next/image";

import Button from "@/app/ui/button";
import { useContext, useEffect } from "react";
import { UploadContext } from "@/app/context/upload-provider";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Succeed() {

  const router = useRouter()

  const { toggleDropField, resultFile } = useContext(UploadContext);

  useEffect(()=> {
    if (toggleDropField) {
      toggleDropField(false)
    }
  },[toggleDropField])

  return (
    <div className="h-full flex flex-col justify-evenly items-center">
      <Image
        src="/check.png"
        width={120}
        height={120}
        quality={100}
        alt="succeed"
      />
      <span className="text-4xl font-bold">Ваш файл готов!</span>
      <span className="text-2xl text-center text-gray-400">
        Если скачивание не началось автоматически, <br />
        нажмите кнопку ниже
      </span>
      <div className="flex flex-row gap-8 justify-center items-center">
        <Link href={"URL://" + resultFile?.name}>
          <Button buttonType="primary" handler={(event) => {}}>
            Скачать
          </Button>
        </Link>
        <Link href="/" scroll={false}>
          <span className="text-2xl">Перевести другой файл</span>
        </Link>
      </div>
    </div>
  );
}
