import { Web3Button, CustomButtomMovil } from "..";
import NavbarDesktop from "../NavbarDesktop";
const NavBar = () => {  
  return (
    <nav className="flex items-center justify-between w-full h-[70px] py-4 bg-white shadow-md ">
      <NavbarDesktop />
      <div className="hidden md:flex items-center space-x-4">
        <Web3Button />
      </div>
      {/* Mobile Menu */}
      <div className="flex flex-row py-2 pl-4 pr-2 h-[52px] items-center">
      <CustomButtomMovil />
      </div>
    </nav>
  );
};

export default NavBar;
