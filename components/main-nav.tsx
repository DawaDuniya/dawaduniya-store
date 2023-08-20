"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Menu, UploadIcon, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";


export const revalidate = 0;
interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const togglemenu = () => setIsOpen(!isOpen);

  const gotoUpload = () => {
    router.push("/uploads");
    setIsOpen(false);
  };

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <>
      <div>
        <ul className="hidden space-x-4 md:flex">
          {routes.map((route) => (
            <li
              className={cn(
                "cursor-pointer ml-10 uppercase border-b-4 border-gray-200 hover:border-[#01b69a]",
                route.active ? "border-[#01b69a]" : "border-gray-200"
              )}
              key={route.href}
            >
              <a href={route.href}>{route.label}</a>
            </li>
          ))}
          <li className="flex py-1 rounded-md ml-2 px-2 items-center space-x-5 font-semibold text-white hover:opacity-75  bg-[#01b69a] ">
            <a
              href="/uploads"
              className="flex cursor-pointer items-center gap-x-2"
            >
              <UploadIcon size={18} />
              Upload
            </a>
          </li>
        </ul>
      </div>
      <div className="cursor-pointer pl-24">
        <Menu
          onClick={togglemenu}
          className="h-8 w-8 md:hidden text-[#01a9b6]"
        />
      </div>
      <div
        className={cn(
          "fixed z-40 top-0 left-0 w-[70%] sm:hidden h-screen bg-gray-100 px-10  ease-in-out duration-500",
          isOpen ? "left-[0%]" : "left-[-100%]"
        )}
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={togglemenu} className="cursor-pointer">
            <X className="h-8 w-8 text-[#01a9b6]" />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul className="">
            {routes.map((route) => (
              <li
                onClick={() => setIsOpen(false)}
                className={cn(
                  "py-2 mb-2 rounded-md px-2 font-semibold hover:bg-white hover:decoration-[#01a9b6]",
                  route.active ? "bg-white" : "bg-transparent"
                )}
                key={route.href}
              >
                <a href={route.href}>{route.label}</a>
              </li>
            ))}
            <li
              onClick={gotoUpload}
              className="flex py-2 rounded-md px-2 items-center space-x-5 font-semibold text-white hover:opacity-75  bg-[#01b69a] "
            >
              <button className="flex cursor-pointer items-center gap-x-2">
                <UploadIcon size={18} />
                Upload
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainNav;
