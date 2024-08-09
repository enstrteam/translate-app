"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import Button from "@/app/ui/button";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { UploadContext } from "@/app/context/upload-provider";
import clsx from "clsx";
import Link from "next/link";

export default function Lang() {
  const { toggleDropField, currentFile, language, languages, selectLang } =
    useContext(UploadContext);

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleSelectLang = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (toggleDropField) {
      toggleDropField(false);
    }
  }, [toggleDropField]);

  return (
    <div className="h-full flex flex-col justify-evenly items-center">
      <span className="text-4xl font-bold">Выберите язык перевода</span>
      <div className="flex flex-row gap-5 justify-start items-center px-11 py-8 bg-[#f7f7f7] rounded-[45px] w-[788px] overflow-hidden">
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
        <span className="w-full text-nowrap text-2xl truncate ...">
          {currentFile?.name}
        </span>
      </div>
      <div className="w-[788px] flex flex-col gap-6 justify-start items-center">
        <div className="flex flex-row gap-5 justify-between items-start w-[788px] relative">
          <span className="text-2xl py-4">Выберите язык перевода:</span>
          <div
            className={clsx(
              "flex flex-row justify-end items-start px-7 pt-3 pb-4 bg-[#f7f7f7] rounded-[30px] w-[388px] absolute top-0 right-0 overflow-hidden z-50",
              {
                "h-auto drop-shadow-sm": isOpen,
                "h-[60px]": !isOpen,
              }
            )}
          >
            <div className="w-full h-full text-2xl text-center">
              <ul className="pt-1 space-y-4">
                {languages
                  ?.filter((item) => {
                    return item.title == language;
                  })
                  ?.map((item) => {
                    return (
                      <li
                        key={item.title}
                        onClick={() => {
                          toggleSelectLang();
                        }}
                        className="cursor-pointer"
                      >
                        {item?.value}
                      </li>
                    );
                  })}
                {languages
                  ?.filter((item) => {
                    return item.title !== language;
                  })
                  ?.map((item) => {
                    return (
                      <li
                        key={item.title}
                        onClick={() => {
                          selectLang?.(item.title);
                          toggleSelectLang();
                        }}
                        className="cursor-pointer"
                      >
                        {item?.value}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <button onClick={toggleSelectLang}>
              {isOpen ? (
                <ChevronUpIcon className="w-10 h-10 object-right" />
              ) : (
                <ChevronDownIcon className="w-10 h-10 object-right" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-8 justify-center items-center">
          <Button
            buttonType="primary"
            handler={(event) => {
              router.push("/progress", { scroll: false });
            }}
          >
            Начать перевод
          </Button>
          <Link href="/" scroll={false}>
            <span className="text-2xl">Перевести другой файл</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
