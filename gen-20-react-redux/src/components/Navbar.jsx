import {
  HandbagSimple,
  UserCircle,
  CaretDown,
  CaretUp,
} from "@phosphor-icons/react";
import MenuList from "./NavbarList";
import MenuListDrop from "./NavbarListDrop";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [show, isShow] = useState(true);
  const { dataCheckout } = useSelector((state) => state.checkout);
  return (
    <nav className="bg-color-primary">
      <div className="lg:mx-32 mx-4 flex justify-between items-center">
        <div className="flex gap-4">
          <button className="block md:hidden rounded focus:outline-none hover:bg-gray-200 group">
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600"></div>

            <MenuListDrop />
          </button>
          <Link to="/">
            <img
              src="../src/assets/logo.png"
              alt=""
              className="lg:max-w-32 max-w-28 hover:cursor-pointer"
            />
          </Link>
        </div>
        <ul className="flex gap-8 font-bold max-md:hidden lg:text-xl">
          <li className="hover:bg-gray-200 hover:cursor-pointer">Blog</li>
          <Link to="/shop" onClick={() => isShow((prev) => !prev)}>
            {show ? (
              <li className="hover:bg-gray-200 hover:cursor-pointer flex items-center gap-1 text-color-accent">
                Shop <CaretUp size={18} weight="fill" />
              </li>
            ) : (
              <li className="hover:bg-gray-200 hover:cursor-pointer flex items-center gap-1 ">
                Shop <CaretDown size={18} weight="fill" />
              </li>
            )}
          </Link>
          <li className="hover:bg-gray-200 hover:cursor-pointer flex items-center gap-1">
            City coffe guide <CaretDown size={18} weight="fill" />
          </li>
          <Link to="/productdetail">
            <li className="hover:bg-gray-200 hover:cursor-pointer">About</li>
          </Link>
        </ul>
        <div className="flex gap-2">
          <button className="bg-color-secondary pt-2 pb-2 pr-4 pl-4 border rounded-full border-green-900 font-bold max-md:hidden hover:bg-green-600 hover:text-white">
            Contact us
          </button>
          <button className="bg-color-secondary p-2 rounded-full border border-green-900 hover:bg-green-600 hover:text-white">
            <UserCircle size={32} color="#110404" weight="fill" />
          </button>
          <Link to="/cart/list">
            <button className="relative bg-color-dark p-2 rounded-full border border-green-900 hover:bg-green-600 hover:text-white">
              <span className="absolute text-sm text-center mx-auto left-0 right-0 top-4 font-bold">
                {dataCheckout.length}
              </span>
              <HandbagSimple
                size={32}
                color="#faf7f2"
                weight="fill"
                className=""
              />
            </button>
          </Link>
        </div>
      </div>
      {show ? <Header /> : null}
    </nav>
  );
}
