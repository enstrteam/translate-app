"use client";

import { UploadContext } from "@/app/context/upload-provider";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Progress() {
  const router = useRouter();

  const { toggleDropField, currentFile, pageNum } = useContext(UploadContext);

  const [currentProgress, setCurrentProgress] = useState(0);
  const [barWidth, setBarWidth] = useState<string>("0%");

  useEffect(() => {
    const interval = setInterval(() => {
      if (pageNum && currentProgress < pageNum) {
        setCurrentProgress(currentProgress + 1);
        let width = Math.round(((currentProgress + 1) / pageNum) * 100);
        setBarWidth(width + "%");
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [currentProgress, pageNum, router]);

  useEffect(()=> {
    if (toggleDropField) {
      toggleDropField(false)
    }
  },[toggleDropField])

  useEffect(() => {
    if (currentProgress == pageNum) {
      setTimeout(() => {
        router.push("/succeed", { scroll: false });
      }, 2000);
    }
  }, [currentProgress, pageNum, router]);

  return (
    <div className="h-full flex flex-col justify-evenly items-center">
      <span className="text-4xl font-bold">Переводим...</span>
      <div className="bg-[#f7f7f7] rounded-[45px] w-[788px] h-[104px] relative">
        <div
          className={clsx(
            "h-[104px] rounded-[45px] bg-gradient-to-br from-[#5FB248] to-[#48B29F] transition-width duration-500"
          )}
          style={{ width: barWidth }}
        ></div>
        <div className="w-full flex justify-between absolute top-0 left-0">
          <div className="w-[60%] flex flex-row gap-5 justify-start items-center px-11 py-8">
            <svg
              width="34"
              height="42"
              viewBox="0 0 34 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8334 2.66667H6.00004C5.02758 2.66667 4.09495 3.05298 3.40732 3.74061C2.71968 4.42824 2.33337 5.36087 2.33337 6.33333V35.6667C2.33337 36.6391 2.71968 37.5718 3.40732 38.2594C4.09495 38.947 5.02758 39.3333 6.00004 39.3333H28C28.9725 39.3333 29.9051 38.947 30.5928 38.2594C31.2804 37.5718 31.6667 36.6391 31.6667 35.6667V15.5M18.8334 2.66667L31.6667 15.5M18.8334 2.66667V15.5H31.6667"
                stroke="#1E1E1E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="w-full text-nowrap text-2xl truncate ...">{currentFile?.name}</span>
          </div>
          <div className="text-2xl px-11 py-9">
            <span className="font-bold">
              {currentProgress}/{pageNum}
            </span>{" "}
            страниц
          </div>
        </div>
        <div
          className={clsx(
            "h-[104px] overflow-hidden absolute top-0 left-0 z-20 transition-width duration-500"
          )}
          style={{ width: barWidth }}
        >
          <div className="w-[788px] flex justify-between">
            <div className="w-[60%] flex flex-row gap-5 justify-start items-center px-11 py-8">
              <svg
                width="34"
                height="42"
                viewBox="0 0 34 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8334 2.66667H6.00004C5.02758 2.66667 4.09495 3.05298 3.40732 3.74061C2.71968 4.42824 2.33337 5.36087 2.33337 6.33333V35.6667C2.33337 36.6391 2.71968 37.5718 3.40732 38.2594C4.09495 38.947 5.02758 39.3333 6.00004 39.3333H28C28.9725 39.3333 29.9051 38.947 30.5928 38.2594C31.2804 37.5718 31.6667 36.6391 31.6667 35.6667V15.5M18.8334 2.66667L31.6667 15.5M18.8334 2.66667V15.5H31.6667"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="w-full text-nowrap text-2xl text-white truncate ... ">
                {currentFile?.name}
              </span>
            </div>
            <div className="text-2xl text-white px-11 py-9">
              <span className="font-bold">
                {currentProgress}/{pageNum}
              </span>{" "}
              страниц
            </div>
          </div>
        </div>
      </div>
      <Link href="/" scroll={false}>
        <span className="text-2xl">Отменить</span>
      </Link>
    </div>
  );
}
