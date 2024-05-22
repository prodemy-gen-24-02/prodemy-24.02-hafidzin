import {HandbagSimple, UserCircle} from "@phosphor-icons/react"
import MenuList from "./NavbarList"
import MenuListDrop from "./NavbarListDrop"

export default function Navbar(){
    return(
        <nav className="bg-color-primary">
        <div className="lg:mx-32 mx-4 flex justify-between items-center">

      <div className="flex gap-4">

        <button className="block md:hidden rounded focus:outline-none hover:bg-gray-200 group">
          <div className="w-5 h-1 bg-gray-600 mb-1"></div>
          <div className="w-5 h-1 bg-gray-600 mb-1"></div>
          <div className="w-5 h-1 bg-gray-600"></div>
          
          <MenuListDrop />
        
      </button>
      <img src="../src/assets/logo.png" alt="" className="lg:max-w-32 max-w-28" />
      </div>
      <MenuList />
      <div className="flex gap-2">
        <button className="bg-color-secondary pt-2 pb-2 pr-4 pl-4 border rounded-full border-green-900 font-bold max-md:hidden hover:bg-green-600 hover:text-white">Contact us</button>
        <button className="bg-color-secondary p-2 rounded-full border border-green-900 hover:bg-green-600 hover:text-white">
          <UserCircle size={32} color="#110404" weight="fill" />
        </button>
        <button className="bg-color-dark p-2 rounded-full border border-green-900 hover:bg-green-600 hover:text-white">
          <HandbagSimple size={32} color="#faf7f2" weight="fill" />
        </button>
      </div>
    </div>
  </nav>
    )
}