import Heading from "@/Components/Heading";
import Image from "next/image";

export default function Home() {

  // console.log(name);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Hello Next Hero... From Production</h2>
      <button>Click Me</button>
      <Heading></Heading>
    </main>
  );
}
