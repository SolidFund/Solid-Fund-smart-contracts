import Link from "next/link";
import { CustomLogo, CustomSearchBar, CustomTitle, NavigateLinks } from '../index';

const NavbarDesktop = () => {
  return (
    <>
    <div className="flex flex-row py-2 pl-4 pr-2 h-[52px] items-center">
        <Link href="/" as="/" >
          <CustomLogo />
        </Link>
        <CustomTitle />
      </div>
      <CustomSearchBar />
      <div>
        <ul className="hidden md:flex items-center space-x-4">
          <NavigateLinks />
        </ul>
      </div>
    </>
  )
}

export default NavbarDesktop