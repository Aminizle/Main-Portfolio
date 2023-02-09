import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import image from "next/image";
import deved from "../public/logo.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Ameen's Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/afavicon.ico" />
        </Head>

        <main className="bg-slate-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <section className="min-h-screen" id="landing">
            <nav className="py-10 mb-2 flex justify-between">
              <h1 className="text-xl font-burtons dark:text-gray-200">
              {'<Dev Ameen />'}
              </h1>
              <ul className="flex items-center dark:text-gray-200">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-wide px-4 py-2 rounded-md ml-8"
                    href="#"
                    onClick={() =>
                      (window.location.href = "mailto:AmeenMohiyuddin2022@gmail.com")
                    }
                  >
                    Contact me
                  </a>
                </li>
              </ul>
            </nav>

            <div className="text-center p-10">
              <h2 className="text-5xl py-2 dark:text-gray-200 font-medium md:text-6xl underline">
                Ameen Mohiyuddin
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl text-teal-600">
                Full Stack Web Developer
              </h3>
              <p className="text-md pt-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">
              As a self-taught full stack web developer with 9 years of experience in the software industry, I have a passion for creating and implementing successful front-end and back-end web applications. My eagerness to learn and proven track record demonstrate my commitment to delivering high-quality results and exceeding expectations.
                <VscDebugBreakpointLog className="my-2 mx-auto text-teal-600" />
                Skilled in JavaScript/TypeScript, HTML, CSS/Tailwind CSS/Bootstrap, Next.js/React.js, Node.js, and MongoDB/PostgreSQL, offering a wide range of technical knowledge for robust and scalable solutions.               
              </p>
            </div>
            <div>
              <h2 className="flex justify-center dark:text-gray-200">
                <a
                  target="_blank"
                  href="https://www.codewars.com/users/DevAmeenM"
                >
                  Code Wars Badge
                </a>
              </h2>
              <a
                className="flex justify-center"
                target="_blank"
                href="https://www.codewars.com/users/DevAmeenM"
              >
                <img
                  src="https://www.codewars.com/users/DevAmeenM/badges/large"
                  alt="codewars badge large"
                />
              </a>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-5 text-teal-600">
              <a href="https://twitter.com/DevAmeenM">
                <AiFillTwitterCircle className="cursor-pointer text-5xl" />
              </a>
              <a href="https://www.linkedin.com/in/ameen-mohiyuddin/">
                <AiFillLinkedin className=" cursor-pointer text-5xl" />
              </a>
              <a href="https://github.com/Aminizle">
                <AiFillGithub className=" cursor-pointer text-5xl" />
              </a>
              <a href="https://www.youtube.com/channel/UCtnzaJeLTPhhH6jolpdGhpw">
                <AiFillYoutube className="cursor-pointer text-5xl" />
              </a>
            </div>
          </section>

          <section id="services">
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
              <Image
                src={deved}
                fill
                style={{ objectFit: "cover" }}
                alt="image af a man waving"
              />
            </div>
            <div>
              <h3 className="text-3xl py-1 md:text-3xl max-w-lg mx-auto dark:text-gray-200">
                Services I offer
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">
                Since the beginning of my journey as a freelance developer, I've
                done remote work for
                <span className="text-teal-500"> agencies </span> consulted
                <span className="text-teal-500"> startups </span> and
                collaborated with talented people to create digital products for
                both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">
                I offer from a wide range of services, including brand design,
                programming and teaching
              </p>
            </div>
            <div className="lg:flex gap-10">
              {/* card - design */}
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200">
                <Image
                  src={design}
                  width={100}
                  height={100}
                  alt="3D design logo"
                  className="mx-auto"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200">
                <Image
                  src={code}
                  width={100}
                  height={100}
                  alt="3D design logo"
                  className="mx-auto"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200">
                <Image
                  src={consulting}
                  width={100}
                  height={100}
                  alt="3D design logo"
                  className="mx-auto"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
            </div>
          </section>

          <section>
            <div>
              <h3 className="text-3xl py-1 md:text-4xl max-w-lg mx-auto dark:text-gray-200">
                Portfolio
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">
                Since the beginning of my journey as a freelance developer, I've
                done remote work for
                <span className="text-teal-500"> agencies </span> consulted
                <span className="text-teal-500"> startups </span> and
                collaborated with talented people to create digital products for
                both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">
                I offer from a wide range of services, including brand design,
                programming and teaching
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  src={web1}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web2}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web3}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web4}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web5}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web6}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

// font is not working
