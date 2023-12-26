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
import ProjectList from "@/components/Projects/ProjectList";
import AnimatedButton from "@/components/AnimatedButton";
import LogoSvg from "@/components/Svgs/LogoSvg";
import NavLink from "@/components/Navbar/NavLink";
import { links, socialLinks } from "@/constants";
import { map } from "lodash";
import Link from "next/link";

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
                <AnimatedButton title="About Me" />
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
              href="https://twitter.com/baljeetcodes"
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
      <section
        id="projects"
        className="bg-black text-cloudy dark:bg-cloudy dark:text-black"
      >
        <div className="p-6 md:container md:py-16">
          <h2 className="text-center text-2xl ">Projects</h2>
          <p className="mt-4 text-center text-5xl font-bold">Latest work</p>
          <ProjectList />
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-center py-16">
        <LogoSvg size="70" />
        <div className="my-4">
          <ul className="nav-links mg:gap-12 flex flex-col items-center gap-4 md:flex-row lg:gap-20 ">
            {map(socialLinks, (link) => (
              <li key={link.title} className="">
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  data-scroll=""
                  className="text-xl font-bold text-gray hover:text-black dark:text-light-gray dark:hover:text-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </main>
  );
}
