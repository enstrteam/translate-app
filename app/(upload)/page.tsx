"use client";

import Image from "next/image";
import Button from "@/app/ui/button";
import { useContext, useEffect, useId, useRef } from "react";
import { UploadContext } from "@/app/context/upload-provider";
import clsx from "clsx";

export default function Upload() {
  const {
    droppableField,
    toggleDropField,
    drop,
    onDragLeave,
    onDragOver,
    handleDrop,
    handleFileChange,
  } = useContext(UploadContext);

  const filePicker = useRef<HTMLInputElement>(null);

  const handlePicker = () => {
    filePicker?.current?.click();
  };

  const id = useId();

  useEffect(()=> {
    if (toggleDropField) {
      toggleDropField(true)
    }
  },[toggleDropField])

  return (
    <div
      className={clsx("h-full flex flex-col justify-evenly items-center", {
        "bg-red-50": drop == true,
      })}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={handleDrop}
    >
      <Image
        src="/upload-file.png"
        width={157}
        height={157}
        quality={100}
        alt="Загрузите файл"
      />
      <div className="text-4xl text-center font-bold center leading-normal">
        Загрузите документ <br />
        для перевода
      </div>
      <div className="text-2xl text-center flex flex-row items-center gap-x-2.5">
        <span>Перетащите файл или</span>
        <label htmlFor={id} className="block cursor-pointer">
          <Button
            buttonType="secondary"
            className="pointer-events-none"
            handler={handlePicker}
          >
            выберите нужный
          </Button>
        </label>
        <input
          type="file"
          name=""
          id={id}
          accept=".pdf"
          hidden
          onChange={handleFileChange}
          ref={filePicker}
        />
      </div>
    </div>
  );
}
