import Image from "next/image";

export default function Header() {
  return (
    <header className="mb-20">
      <div className="logo center mx-auto">
        <Image src="/logo.webp" width={202} height={47} alt="logo"/>
      </div>
    </header>
  );
}
