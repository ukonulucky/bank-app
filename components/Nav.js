import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { AiOutlinePhone, AiOutlineShoppingCart } from "react-icons/ai";
import NavbarList from "../utils/navbarList";
import { useSelector } from "react-redux";
import cartSlice from "../redux/cartSlice";

function Nav() {
  const total = useSelector(state => state.cart.products.length)
  return (
    <div
      className="flex px-2 md:px-5 py-3 justify-between
     bg-red-500 w-full sticky top-0 z-10"
    >
      <div className="w-1/2 md:w-1/4 flex items-center gap-x-3">
        <div className="flex justify-center bg-white items-center rounded-full p-2 overflow-hidden">
          <AiOutlinePhone className=" w-7 h-7 bg-white text-red-400" />
        </div>
        <div className="flex font-bold text-white flex-col gap-2">
          <span>ORDER NOW</span>
          <span>012 345 {""}678</span>
        </div>
      </div>
      <div className="hidden md:block w-2/4">
        <NavbarList />
      </div>
      <div className="w-1/2 md:w-1/4 flex pr-4 justify-end items-center">
        <Link href={"/Cart"}>
        <div className="relative w-fit h-fit cursor-pointer">
          <AiOutlineShoppingCart className="w-9 h-9 text-white" />
          <span className="absolute flex justify-center items-center rounded-full p-3  -top-3 -right-2 bg-white w-2 h-2 font-light">
            {total ? total : 0}
          </span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
