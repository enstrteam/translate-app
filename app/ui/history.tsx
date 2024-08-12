"use server";

import getHistory from "../api/history";
import Link from "next/link";
import clsx from "clsx";

export default async function History() {
  const files = await getHistory();

  return (
    <>
      <span className="text-4xl font-bold mb-12">История переводов</span>
      <div className="history-block pt-8 px-16 pb-11 w-[1082px] h-auto bg-white rounded-[45px]">
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
            {files.map((item) => {
              return (
                <tr key={item.name}>
                  <td className="text-nowrap truncate ...">{item.name}</td>
                  <td>{item.lang}</td>
                  <td>{item.size}</td>
                  <td>
                    {item.date.toLocaleString("ru-RU", {
                      day: "numeric",
                      month: "2-digit",
                      year: "2-digit",
                    })}
                  </td>
                  <td>
                    <Link href={item.url}>
                      <button
                        className={clsx(
                          "rounded-full leading-none text-2xl",
                          "text-[#5FB248] bg-[#E0F9D9]  py-3 px-5 hover:bg-[#d1fbc6]"
                        )}
                      >
                        Скачать
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
