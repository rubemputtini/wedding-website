import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import menu from "../public/assets/menu.png";
import close from "../public/assets/close.png";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="px-6 py-4 absolute z-10 w-full bg-slate-100">
      <nav className="flex justify-between items-center">
        <Link href="/">Isabella & Rubem</Link>
        <ul className="list-none sm:flex hidden justify-end gap-8">
          <li>
            <Link href="/gift-list">Lista de Presentes</Link>
          </li>
          <li>
            <Link href="/guest-list">Confirme sua Presença</Link>
          </li>
        </ul>

        <div className="sm:hidden flex justify-end items-center">
          <div className="relative">
            <Image
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain z-50"
              onClick={() => setToggle((prev) => !prev)}
            />
            {toggle && (
              <div className="p-6 absolute top-20 right-0 mx-4 my-2 min-w-[240px] rounded-xl z-50 bg-slate-100">
                <ul className="list-none flex flex-col justify-end items-center flex-1 gap-2">
                  <li>
                    <Link
                      href="/gift-list"
                      className="leading-normal text-base"
                    >
                      Lista de Presentes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guest-list"
                      className="leading-normal text-base"
                    >
                      Confirme sua Presença
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {toggle && (
              <div
                className="fixed inset-0 bg-black opacity-25 z-40"
                onClick={() => setToggle(false)}
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
