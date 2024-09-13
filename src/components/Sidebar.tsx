import Image from "next/image";
import logo from "../../public/jeu.png";
import { CgHomeAlt } from "react-icons/cg";
import Link from "next/link";
import { BiCategory } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { HiMiniInformationCircle } from "react-icons/hi2";

export default function Navbar() {
  return (
    <div className="h-screen w-64 px-5 pb-2">
      <figure className="logo flex items-center w-full justify-between h-20 py-2">
        <Image src={logo} alt="Billy Store" height={50} />
        <figcaption className="uppercase text-2xl font-extrabold">
          billy store
        </figcaption>
      </figure>
      <ul className="mt-10">
        <li className="mb-6">
          <Link href={"#"} className="flex items-center w-full h-full text-primary">
            <CgHomeAlt size={24} />
            <p className="ml-3">Home</p>
          </Link>
        </li>
        <li className="mb-6">
          <Link href={"#"} className="flex items-center w-full h-full">
            <BiCategory size={24} />
            <p className="ml-3">Category</p>
          </Link>
        </li>
        <li className="mb-6">
          <Link href={"#"} className="flex items-center w-full h-full">
            <GoHeart size={24} />
            <p className="ml-3">Wishlist</p>
          </Link>
        </li>
        <li>
          <Link href={"#"} className="flex items-center w-full h-full">
            <HiMiniInformationCircle size={24} />
            <p className="ml-3">About</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
