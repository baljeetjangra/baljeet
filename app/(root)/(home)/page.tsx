import CustomParticles from "@/components/Particles/CustomParticles";
import TextLoadingOverlay from "@/components/TextLoadingOverlay";
import TextScramble from "@/components/TextScramble";
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
import { socialLinks } from "@/constants";
import { map } from "lodash";
import Link from "next/link";
import ReactJs from "@/components/Svgs/ReactJs";
import NextJs from "@/components/Svgs/NextJs";
import Typescript from "@/components/Svgs/Typescript";
import NodeJs from "@/components/Svgs/NodeJs";
import Tailwind from "@/components/Svgs/Tailwind";
import MongoDb from "@/components/Svgs/MongoDb";
import Docker from "@/components/Svgs/Docker";
import Git from "@/components/Svgs/Git";

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

      {/* About Me */}
      <section
        id="about"
        className="bg-black text-cloudy dark:bg-cloudy dark:text-black"
      >
        <div className="p-6 md:container md:py-16">
          <h2 className="text-center text-5xl font-bold">About Me</h2>
          <div className="">
            <div className="my-12">
              <p className="mb-4 text-xl leading-relaxed">
                I am a passionate Experience Engineer based in Gurugram, India,
                with a keen interest in crafting seamless and user-centric
                digital experiences. My journey in the tech world has been
                marked by a commitment to continuous learning and a hands-on
                approach to web development.
              </p>
              <p className="text-xl leading-relaxed">
                I bring a creative and analytical mindset to every project, with
                a focus on delivering high-quality solutions that meet user
                needs. As I pursue my Master of Computer Applications, I am
                excited about the ever-evolving landscape of technology and the
                opportunities it presents for innovation and growth. Connect
                with me to explore the possibilities at the intersection of code
                and creativity.
              </p>
            </div>
            <div className="mb-12">
              <h3 className="mb-4 text-center text-4xl font-bold">Skills</h3>
              <div className="flex flex-wrap items-center justify-center gap-12 p-4">
                <ReactJs />
                <NextJs />
                <Typescript />
                <NodeJs />
                <Tailwind />
                <MongoDb />
                <Docker />
                <Git />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="">
        <div className="p-6 md:container md:py-16">
          <h2 className="text-center text-2xl ">Projects</h2>
          <p className="mt-4 text-center text-5xl font-bold">Latest work</p>
          <ProjectList />
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-center py-16   ">
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
