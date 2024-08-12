"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useState } from "react";


interface Dict {
  title: string,
  value: string,
}

interface Upload {
  droppableField: boolean;
  toggleDropField: (value: boolean) => void;
  drop: boolean;
  onDragLeave?: (event: React.DragEvent<HTMLElement>) => void;
  onDragOver?: (event: React.DragEvent<HTMLElement>) => void;
  handleDrop?: (event: React.DragEvent<HTMLElement>) => void;
  handleFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentFile: File;
  pageNum: number;
  language: string;
  selectLang: (id: string) => void;
  languages: Dict[];
  resultFile: File;
}


const languages = [
  {
    title: "eng",
    value: "Английский",
  },
  {
    title: "rus",
    value: "Русский",
  },
  {
    title: "uk",
    value: "Украинский",
  },
  {
    title: "esp",
    value: "Испанский",
  },
  {
    title: "kz",
    value: "Казахский",
  },
];

export const UploadContext = createContext<Partial<Upload>>({});

export const UploadProvider = ({ children }: { children: React.ReactNode }) => {
  const [droppableField, setDroppableField] = useState(true);
  const [drop, setDrop] = useState(false);
  const [currentFile, setCurrentFile] = useState<File>();
  const [language, setLanguage] = useState("eng");
  const [pageNum, setPageNum] = useState(10)
  const [resultFile, setResultFile] = useState<File>();

  const router = useRouter();

  const onDragLeave = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setDrop(false);
    console.log("DROP:", drop);
  };

  const onDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setDrop(true);
    console.log("DROP:", drop);
    console.log("FIELD:", droppableField);
  };

  const handleDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setDrop(false);

    console.log(droppedFile.type);

    if (droppedFile.type !== "application/pdf") return;
    handleFile(droppedFile);
  };

  const handleFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/send", {
        method: "POST",
        body: formData,
      });
      const status = await res.status;
      setCurrentFile(file);

      router.push("/lang", { scroll: false });
    } catch (e) {
      console.log(e);
    }
  };

 

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;
    handleFile(event.target.files[0]);
  };

  const selectLang = (id: string) => {
    setLanguage(id)
  }

  const toggleDropField = (value: boolean) => {
    setDroppableField(value)
  }

  return (
    <UploadContext.Provider
      value={{
        droppableField,
        toggleDropField,
        drop,
        language,
        selectLang,
        languages,
        currentFile,
        handleDrop,
        onDragLeave,
        onDragOver,
        handleFileChange,
        pageNum,
        resultFile
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};
