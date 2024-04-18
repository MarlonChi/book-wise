import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="max-w-[372px] w-full bg-gray-600 rounded-lg px-6 py-5 flex items-center gap-5 hover:bg-gray-500">
      {children}
    </button>
  );
};
