"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/context/UserContext";
import { navigation, navigationUser } from "@/helpers/callouts";

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  return (
    <Disclosure
      as="nav"
      className="relative mt-2 bg-transparent flex justify-between items-center w-full"
    >
      <div className="ml-6">
        <Link href={"/"}>
          <Image
            width={100}
            height={100}
            alt="Logo"
            src="/images/LogoLight.svg"
          />
        </Link>
      </div>

      <div className="hidden sm:flex items-center gap-6 mr-10 mt-5">
        {user ? (
          <>
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    isActive
                      ? "text-accent-yellow"
                      : "text-gray-300 hover:text-[#d6b86b]/80"
                  } rounded-md px-3 py-2 text-base font-medium`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Menu as="div" className="relative">
              <MenuButton className="rounded-full focus:outline-none">
                <Image
                  alt="user avatar"
                  src="https://images.unsplash.com/photo-1484608856193-968d2be4080e"
                  width={44}
                  height={44}
                  className="rounded-full object-cover h-11 w-11"
                />
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-[#21314a] text-center py-1 shadow-lg">
                {navigationUser.map((item, i) => (
                  <MenuItem key={i}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5"
                    >
                      {item.name}
                    </Link>
                  </MenuItem>
                ))}
                <MenuItem>
                  <button
                    onClick={logout}
                    className="w-full cursor-pointer px-4 py-2 text-sm text-gray-300 hover:bg-white/5 text-center"
                  >
                    Log Out
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </>
        ) : (
          <>
            <Link
              href="/about-us"
              className={`${
                pathname === "/about-us"
                  ? "text-accent-yellow font-medium hover:underline"
                  : "text-blue-50 hover:underline"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/shop"
              className={`${
                pathname === "/shop"
                  ? "text-accent-yellow font-medium hover:underline"
                  : "text-blue-50 hover:underline"
              }`}
            >
              Shop
            </Link>

            <Link
              href="/login"
              className="font-medium text-blue-50 hover:underline"
            >
              Login →
            </Link>
          </>
        )}
      </div>

      <div className="sm:hidden mr-4">
        <DisclosureButton className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-white/5 hover:text-white rounded-md">
          <Bars3Icon className="block h-6 w-6 group-data-open:hidden" />
          <XMarkIcon className="hidden h-6 w-6 group-data-open:block" />
        </DisclosureButton>
      </div>

      <DisclosurePanel className="sm:hidden absolute top-full left-0 w-full bg-gray-900/95 z-50 shadow-lg">
        <div className="px-4 py-3 space-y-2">
          {user ? (
            <>
              {navigationUser.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    pathname === item.href
                      ? "bg-gray-800 text-blue-50"
                      : "text-gray-300 hover:bg-gray-700 hover:text-blue-50"
                  }`}
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <DisclosureButton
                as={Link}
                href={"about-us"}
                className="block w-full text-left rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-50"
              >
                About Us
              </DisclosureButton>
              <DisclosureButton
                as="button"
                onClick={logout}
                className="block w-full text-left rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-50"
              >
                Log Out
              </DisclosureButton>
            </>
          ) : (
            <>
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    pathname === item.href
                      ? "bg-gray-800 text-blue-50"
                      : "text-gray-300 hover:bg-gray-700 hover:text-blue-50"
                  }`}
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <DisclosureButton
                as={Link}
                href="/shop"
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-blue-50"
              >
                Store
              </DisclosureButton>
              <DisclosureButton
                as={Link}
                href="/login"
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-blue-50"
              >
                Login →
              </DisclosureButton>
            </>
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
