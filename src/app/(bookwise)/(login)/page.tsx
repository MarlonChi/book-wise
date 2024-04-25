import Image from "next/image";

import { Button } from "@/components/button";
import LoginImage from "@/assets/login-image.jpg";
import { GuestIcon } from "@/assets/icons";
import { GoogleAuthButton } from "./components/google-auth-button";
import { GithubAuthButton } from "./components/github-auth-button";

export default function Login() {
  return (
    <main className="flex">
      <div>
        <Image src={LoginImage} alt="BookWise" className="rounded-xl" />
      </div>
      <div className="flex justify-center flex-col m-auto">
        <h2 className="text-2xl font-bold">Boas vindas!</h2>
        <p className="text-gray-200">
          Faça seu login ou acesse como visitante.
        </p>
        <div className="flex flex-col gap-4 mt-10">
          <GoogleAuthButton />
          <GithubAuthButton />
          <Button>
            <GuestIcon />
            Acessar como visitante
          </Button>
        </div>
      </div>
    </main>
  );
}
