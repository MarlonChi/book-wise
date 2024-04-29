import Image from "next/image";

export default function LoadingHome() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-bw-gray-800">
      <Image
        src="/logo.svg"
        alt=""
        width={150}
        height={50}
        priority
        className="h-48 animate-bounce"
      />
    </div>
  );
}
