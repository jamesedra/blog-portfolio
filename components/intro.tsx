"use client";

import Image from "next/image";
// import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { Link, animateScroll as scroll } from "react-scroll";

export const Intro = () => {
  return (
    <section className="mt-10 lg:mt-10 xl:mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8 place-self-center text-center lg:text-left justify-center">
          <h1 className="text-zinc-50 mb-4 text-2xl lg:text-4xl font-extrabold mx-4 sm:mx-0">
            <span className="font-light">
              Hello, I&apos;m James - I work on computer graphics, rendering,
              procedural systems, virtual reality, and immersive experiences.
            </span>
          </h1>
          <p className="mx-3 sm:mx-0 text-gray-400 mb-6 text-base font-light sm:text-lg lg:text-xl">
            I develop tools, shaders, renderers, and interactive environments
            you can find in this portfolio site; a collection of projects,
            experiments, prototypes, and systems built around rendering and
            interaction.
            <br></br>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:items-start lg:justify-start gap-2 text-base z-20">
            <Link
              to="contact"
              smooth={true}
              duration={900}
              offset={-90}
              className="bg-zinc-50 text-zinc-900 justify-center max-w-[90%] w-full sm:w-fit px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 hover:bg-gray-300 active:scale-105 transition whitespace-nowrap cursor-pointer"
            >
              Let&apos;s Connect!
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
            <a
              className="bg-stone-800 text-gray-50 justify-center max-w-[90%] w-full sm:w-fit px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 hover:bg-gray-900 active:scale-105 transition cursor-pointer border-black/10 whitespace-nowrap"
              href="/CV.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <div className="max-w-[90%] flex gap-2 w-full sm:w-fit justify-center">
              <a
                className="bg-stone-800 items-center justify-center text-gray-50 px-2 py-4 sm:p-4 flex gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.10] hover:text-gray-50 hover:bg-gray-900 active:scale-105 transition cursor-pointer border-black/10 flex-grow"
                href="https://www.linkedin.com/in/dedralin/"
                target="_blank"
              >
                {" "}
                <section className="sm:hidden">LinkedIn</section>
                <BsLinkedin />
              </a>
              <a
                className="bg-stone-800 items-center justify-center text-gray-50 px-2 py-4 sm:p-4 flex gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.10] hover:text-gray-50 hover:bg-gray-900 active:scale-105 transition cursor-pointer border-black/10 flex-grow"
                href="https://github.com/jamesedra"
                target="_blank"
              >
                {" "}
                <section className="sm:hidden">GitHub</section>
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-16">
          <div className="rounded-full w-[200px] h-[200px] xl:w-[220px] xl:h-[220px] relative bg-stone-800/90 backdrop-blur-sm overflow-hidden flex items-center justify-center">
            <div className="w-[170px] h-[170px] rounded-full overflow-hidden">
              <Image
                src="/images/headshot.png"
                alt="profile image"
                width={170}
                height={170}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
