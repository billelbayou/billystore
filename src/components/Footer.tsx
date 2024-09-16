import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full bg-primary h-40 flex flex-col mt-10">
      <div className="flex justify-between items-center h-full px-10">
        <div className="flex gap-2 h-full items-center">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaXTwitter size={30} />
          <FaLinkedin size={30} />
        </div>
        <div className="flex gap-8 h-full items-center">
          <Link href={"/"} className="text-lg hover:underline">Home</Link>
          <Link href={"/category"} className="text-lg hover:underline">Category</Link>
          <Link href={"/wishlist"} className="text-lg hover:underline">Wishlist</Link>
          <Link href={"/about"} className="text-lg hover:underline">About</Link>
        </div>
        <div className="h-full flex justify-center items-center">
          <h2 className="uppercase text-2xl font-bold">billy store</h2>
        </div>
      </div>
      <div className="h-16 bg-secondary mt-auto flex justify-center items-center">
        <p className="uppercase text-xl font-bold">
          Made By bayou bille with &lt;3
        </p>
      </div>
    </div>
  );
}
