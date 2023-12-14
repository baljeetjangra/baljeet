import CustomParticles from "@/components/Particles/CustomParticles";
import Path from "@/components/Svgs/Path";
import TextLoadingOverlay from "@/components/TextLoadingOverlay";
import TextScramble from "@/components/TextScramble";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import "./home.css";

export default function Home() {
  return (
    <main className="">
      {/* Hero section */}
      <div className="flex h-[100vh] w-[100vw] overflow-hidden">
        <div className="container flex flex-col  content-center items-center justify-end md:flex-row md:justify-around">
          <CustomParticles />
          <div className="mb-4 md:mb-0">
            <TextLoadingOverlay>
              <h1
                className="text-4xl font-bold md:text-7xl lg:text-8xl"
                itemProp="name"
              >
                Baljeet Jangra
              </h1>
            </TextLoadingOverlay>
            <div>
              <TextLoadingOverlay>
                <TextScramble>Frontend Developer</TextScramble>
              </TextLoadingOverlay>
            </div>
            <div className="">
              <TextLoadingOverlay>
                <Button className="the-button group relative z-10 rounded-none bg-gradient-to-tr from-secondary to-secondary-900 px-6 font-bold tracking-wider dark:text-white">
                  <span className="z-20">About Me</span>
                  <div className="button-mask"></div>
                  <div className="absolute -right-4 top-1 z-20 transition-transform group-hover:translate-x-[6px]">
                    <Path />
                  </div>
                </Button>
              </TextLoadingOverlay>
            </div>
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
