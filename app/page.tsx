import Image from "next/image";
import { titleFont } from "./ui/fonts";

export default function Home() {
  return (
    <div>
      <h1>E-COMMERCE NEXT-JS</h1>
      <h1 className={`${titleFont.className} font-bold`}>E-COMMERCE NEXT-JS</h1>
    </div>
  );
}
