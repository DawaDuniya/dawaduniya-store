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

  const dropdownOptions = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <>
      <div className="flex space-x-4 flex-row">
      <button
                onClick={gotoUpload}
                className="block w-full mx-2 max-sm:hidden text-left px-4 py-2 text-sm font-medium text-white bg-[#01b69a] hover:bg-[#018c7a]"
                role="menuitem"
              >
                <UploadIcon size={18} className="mr-2 inline" />
                Upload
              </button>
        <div className="relative inline-block max-sm:hidden text-left">
          <div>
            <span className="rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 max-sm:hidden bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={togglemenu}
              >
                Categories
                <Menu
                  className="-mr-1 ml-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </button>
            </span>
          </div>

          {/* Dropdown */}
          <div
            className={cn(
              "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5",
              isOpen ? "block" : "hidden"
            )}
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {dropdownOptions.map((option) => (
                <a
                  key={option.href}
                  href={option.href}
                  className={cn(
                    "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                    option.active
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700"
                  )}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  {option.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative inline-block sm:hidden text-left">
          <div>
            <span className="rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={togglemenu}
              >
                <Menu
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </button>
            </span>
          </div>

          {/* Dropdown */}
          <div
            className={cn(
              "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5",
              isOpen ? "block" : "hidden"
            )}
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {dropdownOptions.map((option) => (
                <a
                  key={option.href}
                  href={option.href}
                  className={cn(
                    "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                    option.active
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700"
                  )}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  {option.label}
                </a>
              ))}
            </div>
          <button
                onClick={gotoUpload}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-white bg-[#01b69a] hover:bg-[#018c7a]"
                role="menuitem"
              >
                <UploadIcon size={18} className="mr-2" />
                Upload
              </button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default MainNav;
