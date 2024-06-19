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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAuthData } from "../store/reducers/authSlice";
import Swal from "sweetalert2";

export default function Navbar() {
  const dispatch = useDispatch();
  const [show, isShow] = useState(true);
  const user = useSelector((state) => state.auth.user);
  const { dataCart } = useSelector((state) => state.cart);
  const filteredCart = dataCart.filter((data) => data.userId == user.id);

  const [active, isActive] = useState(false);
  // console.log(dataCheckout);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  const onLogout = () => {
    Swal.fire({
      title: "Logout dari akun?",
      showDenyButton: true,
      confirmButtonText: "Logout",
      denyButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(resetAuthData());
        Toast.fire({
          icon: "info",
          title: "Logout from your account",
        });
      }
    });
  };
  return (
    <nav className="bg-color-secondary">
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
        <div className="flex gap-2 items-center relative">
          {/* <button className="bg-color-secondary pt-2 pb-2 pr-4 pl-4 border rounded-full border-green-900 font-bold max-md:hidden hover:bg-green-600 hover:text-white">
            Contact us
          </button> */}
          <Link to="/cart/list">
            <button className="relative bg-color-dark p-2 rounded-full border border-green-900 hover:bg-green-600 hover:text-white">
              <span className="absolute text-md text-center right-[-6px] top-[-2px] font-bold bg-color-accent rounded-full size-6 text-color-primary">
                {filteredCart.length}
              </span>
              <HandbagSimple
                size={32}
                color="#faf7f2"
                weight="fill"
                className=""
              />
            </button>
          </Link>
          <button className="bg-color-secondary p-2 rounded-full border border-green-900 hover:bg-green-600 hover:text-white">
            <UserCircle size={32} color="#110404" weight="fill" />
          </button>

          <p
            className="font-medium flex items-center gap-2 hover:cursor-pointer"
            onClick={() => isActive(!active)}
          >
            {user.name} <CaretDown />
          </p>
          {active && (
            <button
              className="absolute top-10 right-0 bg-white hover:bg-color-accent w-28 h-8 font-medium"
              onClick={() => onLogout()}
            >
              Logout
            </button>
          )}
        </div>
      </div>
      {show ? <Header /> : null}
    </nav>
  );
}
