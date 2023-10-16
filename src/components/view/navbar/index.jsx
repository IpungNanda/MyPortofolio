"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const MotionLink = motion(Link);
  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white transition-all ${scrollActive ? "shadowshadow-md shadow-black pt-0" : "pt-4"
          }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-pink-600">
              <MotionLink
                href="/"
                className="w-10 h-10 bg-pink-600 text-white flex text-2xl items-center justify-center rounded font-bold"
                whileHover={{
                  backgroundColor: [
                    "rgb(234, 88, 12, 1)",
                    "rgb(236, 191, 12, 1)",
                    "rgb(236, 19, 12, 1)",
                    "rgb(19, 236, 12, 1)",
                    "rgb(12, 236, 221, 1)",
                    "rgb(234, 88, 12, 1)",
                  ],
                  transition: { duration: 1, repeat: Infinity },
                }}
              >
                N
              </MotionLink>
              anda
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-pink-600 justify-center items-center">
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${activeLink === "home"
                  ? "text-pink-600 shadow-pink-600"
                  : "text-pink-600 font-bold hover:text-pink-800"
                }
              `}
            >
              <Link href="/" onClick={() => setActiveLink("home")}>
                Home
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${activeLink === "about"
                  ? "text-pink-600 shadow-pink-600"
                  : "text-pink-600 font-bold hover:text-pink-800"
                }
              `}
            >
              <Link href="/about" onClick={() => setActiveLink("about")}>
                About
              </Link>
            </li>

            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${activeLink === "projects"
                  ? "text-pink-600 shadow-pink-600"
                  : "text-pink-600 font-bold hover:text-pink-800"
                }
              `}
            >
              <Link href="/projects" onClick={() => setActiveLink("projects")}>
                Projects
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${activeLink === "articles"
                  ? "text-pink-600 shadow-pink-600"
                  : "text-pink-600 font-bold hover:text-pink-800"
                }
              `}
            >
              <Link href="/articles" onClick={() => setActiveLink("articles")}>
                Articles
              </Link>
            </li>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <Link
              href={
                "https://api.whatsapp.com/send?phone=+62895805399090&text=Halo!%20Saya%20ingin%20memesan%20program%20khusus.%20Bisakah%20Anda%20membantu%20saya%3F%0A%0ANama%20Project%3A%20[Nama%20Project]%0AJenis%20Program%3A%20[Joki%20/%20Project%20Program]%0ABahasa%20Pemrograman%3A%20[Pilih%20Bahasa%20Pemrograman]%0APesan%20Tambahan%3A%20[Isi%20Pesan%20Anda]%0A%0ATerima%20kasih%21"
              }
            >
              <button className="py-3 px-6 border-[2px] bg-pink-600 border-pink-600 text-white font-semibold rounded-lg text-xl tracking-widest shadow-md hover:shadow-pink-600 transition-all outline-none">
                Whatsapp
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t">
        <div className="bg-white sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-pink-600">
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${activeLink === "home"
                  ? "text-pink-600 shadow-pink-600"
                  : "text-pink-600 font-bold hover:text-pink-800"
                }
              `}
            >
              <Link href="/" onClick={() => setActiveLink("home")}>
                Home
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${activeLink === "about"
                  ? "text-pink-600 shadow-pink-600"
                  : "text-pink-600 font-bold hover:text-pink-800"
                }
              `}
            >
              <Link href="/about" onClick={() => setActiveLink("about")}>
                About
              </Link>
            </li>

            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${activeLink === "projects"
                  ? "text-pink-600 shadow-pink-600"
                  : "text-pink-600 font-bold hover:text-pink-800"
                }
              `}
            >
              <Link href="/projects" onClick={() => setActiveLink("projects")}>
                Projects
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${activeLink === "articles"
                  ? "text-pink-600 shadow-pink-600"
                  : "text-pink-600 font-bold hover:text-pink-800"
                }
              `}
            >
              <Link href="/articles" onClick={() => setActiveLink("articles")}>
                Articles
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}