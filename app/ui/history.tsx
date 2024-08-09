'use client'

import { useContext } from "react";
import { UploadContext } from "../context/upload-provider";
import Button from "./button";


export default function History() {

    const {drop, handleDrop} = useContext(UploadContext)

    return (
        <>
        <span className="text-4xl font-bold mb-12">История переводов</span>
        <div className="history-block pt-8 px-16 pb-11 w-[1082px] h-[348px] bg-white rounded-[45px]">
            <table className="w-full table-fixed border-separate border-spacing-y-6 text-left text-2xl">
                <thead className="leading-10">
                    <tr>
                        <th className="w-56">Название</th>
                        <th className="w-60">Язык перевода</th>
                        <th className="w-44">Вес файла</th>
                        <th className="w-40">Дата</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>filename</td>
                        <td>language</td>
                        <td>size</td>
                        <td>date</td>
                        <td>
                            <Button buttonType="secondary">
                                Скачать
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>filename</td>
                        <td>language</td>
                        <td>size</td>
                        <td>date</td>
                        <td>
                            <Button buttonType="secondary">
                                Скачать
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>filename</td>
                        <td>language</td>
                        <td>size</td>
                        <td>date</td>
                        <td>
                            <Button buttonType="secondary">
                                Скачать
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );
}