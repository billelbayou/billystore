import Image from "next/image";
import logo from "../../public/jeu.png";
import { CgHomeAlt } from "react-icons/cg";
import { BiCategory } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { HiMiniInformationCircle } from "react-icons/hi2";
import SidebarLinkButton from "./ui/SidebarLinkButton";
import { LinkButton } from "./ui/SidebarLinkButton";

const sidebarNav: LinkButton[] = [
  {
    title: "Home",
    href: "/",
    icon: <CgHomeAlt size={24} />
  },
  {
    title: "Category",
    href: "/category",
    icon: <BiCategory size={24} />
  },
  {
    title: "Wishlist",
    href: "/wishlist",
    icon: <GoHeart size={24} />
  },
  {
    title: "About",
    href: "/about",
    icon: <HiMiniInformationCircle size={24} />
  }
]

export default function Navbar() {
  return (
    <div className="h-screen w-64 px-5 pb-2">
      <div className="fixed">
        <figure className="logo flex items-center w-full justify-between h-20 py-2">
          <Image src={logo} alt="Billy Store" height={50} />
          <figcaption className="uppercase text-2xl font-extrabold ml-3">
            billy store
          </figcaption>
        </figure>
        <ul className="mt-10">
          {sidebarNav.map(element => (
            <li key={element.title} className="mb-6">
              <SidebarLinkButton LinkButton={element} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
