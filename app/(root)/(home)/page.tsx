import CustomParticles from "@/components/Particles/CustomParticles";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* Hero section */}
      <div className="flex h-[100vh] w-[100vw] overflow-hidden">
        <div className="container flex flex-col  content-center items-center justify-end md:flex-row md:justify-around">
          <CustomParticles />
          <div className="">
            <h1
              className="text-4xl font-bold md:text-7xl lg:text-8xl"
              itemProp="name"
            >
              Baljeet Jangra
            </h1>
            <h3
              itemProp="specialty"
              className="py-4 italic sm:text-lg md:text-xl lg:text-2xl"
            >
              Front-end Developer
            </h3>
          </div>
          <div className="z-10 self-end">
            <Image
              src={"/assets/images/baljeet.png"}
              height={600}
              width={600}
              alt={"Baljeet Jangra"}
              className="z-50"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
