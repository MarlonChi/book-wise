import { BookWiseLogo } from "@/assets/icons";
import { Routes } from "./routes";
import { LogoutButton } from "./logout-button";

export const Menu = async () => {
  return (
    <nav className="col-span-3 max-h-[95vh] w-full flex flex-col items-center justify-between bg-gray-700 rounded-xl p-5">
      <div>
        <div className="mt-10">
          <BookWiseLogo />
        </div>
        <Routes />
      </div>
      <LogoutButton />
    </nav>
  );
};
