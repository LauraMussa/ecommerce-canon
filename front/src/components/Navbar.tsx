"use client";
//Components React
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

//Icons
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

//Next
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/context/UserContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
];

const navigationUser = [
  { name: "My Cart", href: "/cart" },
  { name: "Shop", href: "/shop" },
  { name: "Dashboard", href: "/dashboard" },
];
export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  return (
    <div>
      <Disclosure
        as="nav"
        className="relative mt-2 bg-transparent after:pointer-events-none flex justify-between  w-full items-center  after:absolute after:inset-x-0 after:bottom-0 after:h-px "
      >
        <div className="ml-[3rem] ">
          <Link href={"/"}>
            <Image
              width={100}
              height={100}
              alt="Logo"
              src="/images/LogoLight.svg"
            ></Image>
          </Link>
        </div>
        <div className="relative flex h-16 mr-[3rem] items-center justify-between">
          <div className="absolute inset-y-0  left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative  inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />

              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center space-x-4">
                {user ? (
                  <>
                    {navigation.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          aria-current={isActive ? "page" : undefined}
                          className={
                            (isActive
                              ? " text-accent-yellow"
                              : "text-gray-300 hover:text-[#d6b86b]/80 ") +
                            " rounded-md px-3 py-2 text-base font-medium"
                          }
                        >
                          {item.name}
                        </Link>
                      );
                    })}

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                      <Menu as="div" className="relative ml-3 ">
                        <MenuButton className="relative flex border-3 border-transparent  hover:border-accent-yellow hover:cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-2">
                          <span className="absolute -inset-1.5" />
                          <Image
                            alt="user avatar"
                            src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
                            width={200}
                            height={50}
                            className="size-8 rounded-full h-11 w-11 object-cover bg-gray-800 outline  -outline-offset-1 outline-white/10"
                          />
                        </MenuButton>

                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                        >
                          {navigationUser.map((item, index) => {
                            return (
                              <MenuItem key={index}>
                                <Link
                                  href={item.href}
                                  className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                                >
                                  {item.name}
                                </Link>
                              </MenuItem>
                            );
                          })}
                          <MenuItem>
                            <Link
                              className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                              onClick={logout}
                              href={"/"}
                            >
                              Log Out
                            </Link>
                          </MenuItem>
                        </MenuItems>
                      </Menu>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      href="/shop"
                      className=" font-medium flex gap-1 text-blue-50  "
                    >
                      <span className="hover:underline">Store</span>
                    </Link>
                    <Link
                      href="/login"
                      className=" font-medium flex gap-1 text-blue-50  "
                    >
                      <span className="hover:underline">Login</span>
                      &rarr;
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    (isActive
                      ? "bg-gray-950/50 text-blue-50"
                      : "text-gray-300 hover:bg-white/5 hover:text-blue-50") +
                    " block rounded-md px-3 py-2 text-base font-medium"
                  }
                >
                  {item.name}
                </DisclosureButton>
              );
            })}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
