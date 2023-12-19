import CustomParticles from "@/components/Particles/CustomParticles";
import Path from "@/components/Svgs/Path";
import TextLoadingOverlay from "@/components/TextLoadingOverlay";
import TextScramble from "@/components/TextScramble";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import "./home.css";
import Twitter from "@/components/Svgs/Twitter";
import Linkedin from "@/components/Svgs/Linkdin";
import Github from "@/components/Svgs/Github";
import Instagram from "@/components/Svgs/Instagram";
import CodePen from "@/components/Svgs/CodePen";

export default function Home() {
  return (
    <main className="">
      {/* Hero section */}
      <div className="flex h-[100dvh] w-full overflow-hidden">
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
        {/* Social Media */}
        <ul className="absolute right-5 top-1/2 hidden -translate-y-1/2 space-y-5 md:block ">
          <li>
            <a
              href="https://instagram.com/baljeetcodes"
              target="_blank"
              rel="noopener"
            >
              <Instagram />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/baljeet_codes"
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/baljeetjangra/"
              target="_blank"
              rel="noopener"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/baljeetjangra"
              target="_blank"
              rel="noopener"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/baljeetcodes"
              target="_blank"
              rel="noopener"
            >
              <CodePen />
            </a>
          </li>
        </ul>
      </div>

      {/* Projects */}
      <section id="projects" className="h-[90vh] bg-black dark:bg-cloudy">
        <h1 className="text-2xl text-black">Projects</h1>
      </section>
    </main>
  );
}
