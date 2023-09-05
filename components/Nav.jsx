import Image from "next/image";
import Link from "next/link";
import { hamburger } from "@/public/assets/icons";
import { navLinks } from "@/constants";
const Nav = () => {
  return (
    <header className=" padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/" className="">
          <Image
            src="/assets/images/header-logo.svg"
            width={130}
            height={29}
            alt="logo"
          />
        </Link>
        <ul className=" flex-1 flex justify-center item gap-16 max-lg:hidden ">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                className=" font-montserrat leading-normal text-lg text-slate-gray"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <Image src={hamburger} alt="Hamburger" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
