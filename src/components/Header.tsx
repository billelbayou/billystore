import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";

export default function Header() {
  return (
    <div className="h-20 p-4 flex items-center">
      <form action="" className="h-full w-fit relative">
        <input
          type="search"
          id="search"
          placeholder="Search"
          className="h-full w-80 rounded-lg focus:outline-none px-4 bg-secondary"
        />
        <label
          htmlFor="search"
          className="absolute right-2 top-1/2 translate-y-[-50%]"
        >
          <CiSearch size={25} />
        </label>
      </form>
      <div className="icons flex ml-auto mr-10">
        <div className="flex justify-center items-center bg-secondary rounded-full h-12 w-12 mr-3">
          <MdNotificationsNone size={24} color="white" />
        </div>
        <div className="flex justify-center items-center bg-secondary rounded-full h-12 w-12">
          <FiShoppingCart size={20} color="white" />
        </div>
      </div>
      <div className="user">
        <button className="w-32 h-10 rounded-lg bg-secondary mr-3">Login In</button>
        <button className="w-32 h-10 rounded-lg bg-primary">Sign Up</button>
      </div>
    </div>
  );
}
