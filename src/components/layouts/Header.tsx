import React from "react";
import Link from "next/link";
import Image from 'next/image'
import { Unbounded, Exo_2 } from "next/font/google";
import { FaPencil, FaUser } from "react-icons/fa6";

const Unbonded = Unbounded({
    subsets: ["latin"],
});

const exo_2 = Exo_2({
    subsets: ["latin"],
})

const Header: React.FC = () => {
  return (
      <header className={`${exo_2.className} p-4 mb-10`}>
        <nav className={"max-w-7xl mx-auto flex"}>
            <Link href={"/"} className={`${Unbonded.className} flex items-center text-2xl font-bold`}>Мир Статей</Link>

            <button className={`ml-auto bg-blue-600 text-white rounded px-3 flex items-center justify-center min-h-10`}>
                <FaPencil className={"mr-2"}/> Написать  пост
            </button>

            <Link href={"/"} className={"flex justify-center items-center ml-4"}>
                <FaUser className={"mr-2"}/> Войти
            </Link>
        </nav>
      </header>
  );
};

export default Header;
