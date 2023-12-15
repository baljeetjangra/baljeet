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

export default function Home() {
  return (
    <main className="">
      {/* Hero section */}
      <div className="flex h-[100vh] w-full overflow-hidden">
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
          {/* <li>
          <a
            href="http://codepen.io/rickzanutta/"
            target="_blank"
            rel="noopener"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="256"
              height="256"
              viewBox="0 0 256 256"
            >
              <path
                fill="#231F20"
                d="M252.1 85.7c0-.2-.1-.3-.1-.5-.1-.3-.1-.6-.2-.9 0-.2-.1-.3-.2-.5-.1-.3-.2-.5-.3-.8-.1-.2-.2-.4-.2-.5-.1-.2-.2-.5-.4-.7-.1-.2-.2-.3-.3-.5-.1-.2-.3-.4-.5-.7-.1-.2-.2-.3-.4-.5s-.3-.4-.5-.6l-.4-.4c-.2-.2-.4-.3-.6-.5-.2-.1-.3-.3-.5-.4-.1 0-.1-.1-.2-.1L132.8 1.8c-3.6-2.4-8.3-2.4-11.9 0L6.3 78.2c-.1 0-.1.1-.2.1-.2.1-.3.2-.5.4s-.4.3-.6.5c-.2.1-.3.3-.4.4-.2.2-.4.4-.5.6-.1.2-.3.3-.4.5-.2.2-.3.4-.5.7-.1.2-.2.3-.3.5-.1.2-.3.5-.4.7-.1.2-.2.3-.2.5-.1.3-.2.5-.3.8 0 .1 0 .3-.1.5-.1.3-.1.6-.2.9 0 .2-.1.3-.1.5-.1.5-.1.9-.1 1.4v76.4c0 .5 0 .9.1 1.4 0 .2.1.3.1.5.1.3.1.6.2.9 0 .2.1.3.2.5.1.3.2.5.3.8.1.2.2.4.2.5.1.2.2.5.4.7.1.2.2.3.3.5.1.2.3.4.5.7.1.2.2.3.4.5s.3.4.5.6l.4.4c.2.2.4.4.6.5.2.1.3.3.5.4.1 0 .1.1.2.1L120.9 249c1.8 1.2 3.9 1.8 6 1.8s4.2-.6 6-1.8l114.5-76.4c.1 0 .1-.1.2-.1.2-.1.3-.2.5-.4s.4-.3.6-.5l.4-.4c.2-.2.4-.4.5-.6.1-.2.3-.3.4-.5.2-.2.3-.4.5-.7.1-.2.2-.3.3-.5.1-.2.3-.5.4-.7.1-.2.2-.3.2-.5.1-.3.2-.5.3-.8.1-.2.1-.3.2-.5.1-.3.1-.6.2-.9 0-.2.1-.3.1-.5.1-.5.1-.9.1-1.4V87.1c-.1-.4-.2-.9-.2-1.4zM137.6 30.9L222 87.1l-37.7 25.2-46.7-31.2V30.9zm-21.5 0v50.2l-46.7 31.2-37.7-25.2 84.4-56.2zm-93 76.4l26.9 18-26.9 18v-36zm93 112.4l-84.4-56.3 37.7-25.2 46.7 31.2v50.3zm10.8-68.9l-38.1-25.5 38.1-25.5 38.1 25.5-38.1 25.5zm10.7 68.9v-50.2l46.7-31.2 37.7 25.2-84.4 56.2zm93-76.4l-26.9-18 26.9-18v36z"
              ></path>
            </svg>
          </a>
        </li> */}
        </ul>
      </div>

      {/* Projects */}
      {/* <section id="projects" className="bg-black dark:bg-cloudy">
        <h1>my projects</h1>
      </section> */}
    </main>
  );
}
