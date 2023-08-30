import Image from "next/image";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/getCategory";
import NavbarActions from "@/components/navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <header>
      <nav className="w-full top-0 fixed h-16 shadow-xl z-40 bg-white">
        <div className="flex items-center justify-between h-full px-4 w-full">
          <a href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={105}
              height={75}
              className="cursor-pointer"
            />
          </a>
          <div className="flex space-x-4 items-center">
            
            <MainNav data={categories} />          
            <NavbarActions/>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
