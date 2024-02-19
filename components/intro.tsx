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
    <section className="mt-10 lg:mt-32 xl:mt-64">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8 place-self-center text-center lg:text-left justify-center">
          <h1 className="text-zinc-50 mb-4 text-4xl lg:text-6xl font-extrabold mx-4 sm:mx-0">
            <span className="font-light">
              a space to craft, develop, and plot some ideas.
            </span>
          </h1>
          <p className="mx-3 sm:mx-0 text-gray-400 mb-6 text-base font-light sm:text-lg lg:text-xl">
            hello, I like{" "}
            <TypeAnimation
              sequence={[
                "developing software projects",
                1500,
                "learning new technologies",
                1500,
                "creating fun things.",
                1500,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={1}
            />
            <br></br>
          </p>
          <p className="text-gray-400 mb-6 text-base font-light sm:text-lg lg:text-xl text-center lg:text-right lg:mr-24">
            - james edralin
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
          <div className="rounded-full w-[200px] h-[200px] xl:w-[220px] xl:h-[220px] relative bg-stone-800/90 backdrop-blur-sm">
            <Image
              src="/images/photo-intro.jpg"
              alt="profile image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={170}
              height={170}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
