import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Fragment } from "react";

interface UserData {
  name: string;
  email: string;
  completeName: string;
}

interface NavBarProps {
  userData: UserData;
}

const user = {
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=100",
};

const userNavigation = [
  { name: "Perfil", href: "/dashboard/profile" },
  { name: "Sair", href: "#" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar({ userData }: NavBarProps) {
  return (
    <div>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex flex-shrink-0 flex-row gap-6">
                    <a href="/">
                      <Image
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="logo"
                        width={100}
                        height={100}
                      />
                    </a>

                    <span className="text-2xl font-semibold tracking-tight text-gray-900">
                      Olá, {userData.name}
                    </span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <Image
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt="logo"
                            width={100}
                            height={100}
                          />
                        </MenuButton>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <MenuItem key={item.name}>
                              {({ focus }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    focus ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700",
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </MenuItem>
                          ))}
                        </MenuItems>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-gray-200 p-2 text-black hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Abrir menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3"></div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center">
                  <div className="ml-5 flex-shrink-0">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-normal leading-none text-black">
                      {userData.completeName}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {userData.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-xl bg-gray-50 p-8 px-3 py-2 text-base font-medium hover:bg-gray-100"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
