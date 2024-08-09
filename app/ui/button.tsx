import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: string;
  handler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, buttonType, className, handler, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx("rounded-full leading-none text-2xl",{
        "font-bold text-white bg-gradient-to-br from-[#5FB248] to-[#48B29F] py-6 px-14 hover:shadow-lg hover:opacity-95 hover: shadow-[#5FB248]/40 active:opacity-75 active:shadow-none": buttonType == "primary",     
        "text-[#5FB248] bg-[#E0F9D9]  py-3 px-5 hover:bg-[#d1fbc6]": buttonType == "secondary",
      }, className)}
    onClick={(event) => handler?.(event)}>
      {children}
    </button>
  );
}


