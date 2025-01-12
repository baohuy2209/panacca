"use client";
import React from "react";
import list_menu from "@/data/list_menu";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AlignJustify, Settings, User, LogOut } from "lucide-react";
const Header = () => {
  return (
    <div className="px-10 bg-gradient-to-r from-[#253e72] via-[#4DA1A9] to-[#1c91b3] flex flex-row justify-between items-center sticky top-0 z-10 bg-opacity-25">
      <div className="m-4 ml-8">
        <Image src="/logo1.png" width={100} height={20} alt="Header" />
      </div>
      <div className="flex flex-row gap-5 justify-between items-center">
        {list_menu.map((item, index) => (
          <div
            key={index}
            className="font-serif text-lg hover:text-[#37AFE1] hover:opacity-80"
          >
            <Link href={item.url}>{item.title}</Link>
          </div>
        ))}
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-transparent py-1.5 px-3 text-sm/6 font-semibold focus:outline-none">
            <AlignJustify />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 z-1 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <Settings className="size-4 fill-white/30" />
                Settings
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <User className="size-4 fill-white/30" />
                Profile
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <LogOut className="size-4 fill-white/30" />
                Log out
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
