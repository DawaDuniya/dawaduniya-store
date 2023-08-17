import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/getCategory";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex flex-col h-16">
          <div className="flex flex-row justify-evenly items-center">
            
              <Link
                href="/"
                className=" ml-4 lg:ml-0 gap-x-2 flex justify-start items-center"
              >
                <Image src={"/logo.png"} alt="image" width={75} height={75} />
                <h2 className="text-3xl max-md:text-xl font-bold ">
                  <span className="text-[#01a9b6]">Dawa</span>&nbsp;
                  <span className="text-[#36990b]">Duniya</span>
                </h2>
              </Link>
          </div>
          <div className="flex">
            <MainNav data={categories} />
            <NavbarActions/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
