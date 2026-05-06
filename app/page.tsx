import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center ">
      <h1>Moonshelf</h1>
      <Image
        src="/img/moonshelf.png"
        width={200}
        height={200}
        alt="Moonshelf Logo"
      />  
    </main>
  );
}
