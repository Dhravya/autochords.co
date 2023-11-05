import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

import React from 'react'
import Image from "next/image"
import { getServerSession } from "next-auth";
import { SessionProvider, signIn } from "next-auth/react";
import Provider from "~/components/Provider";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

type Session = {
  user: {
    name: string;
    email: string;
    image: string;
  }
} | null

async function Header() {
  const session: Session = (await getServerSession()) ?? null;

  return (
    <div className="absolute flex top-0 h-16 items-center justify-between pr-8 w-full">
      <div >
        <Image className="mt-2" width={80} height={80} src="/logo.png" alt="" />
      </div>
      <DropdownMenu>
        {session ? (
          <DropdownMenuTrigger>
            <div>
              <div className="flex gap-2 items-center justify-center ">
                <img className="w-10 h-10 rounded-full" src={session.user.image} alt="" />
                <span className="text-sm font-semibold ">{session.user.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

              </div>
            </div>
          </DropdownMenuTrigger>
        ) : (
            <LoginButton/>
        )}

        <DropdownMenuContent >
          <DropdownMenuItem >Key</DropdownMenuItem>
          <DropdownMenuItem ><LogoutButton/></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

  )
}

export default Header
