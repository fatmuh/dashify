import React from "react";
import { Cog, Lock, User, UserCog } from "lucide-react";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const metadata = {
    title: 'Profile',
}

export default function ProfileLayout({ children }) {
  return (
    <>
      <div className="px-0 md:px-5 grid grid-cols-12 mb-8">
        <div className="col-span-12">
          <ScrollArea className="whitespace-nowrap rounded-none border-none">
            <div className="flex w-full space-x-4">
              <div className="flex overflow-hidden rounded-none gap-5">
                <Link
                  href="/profile"
                  className="flex items-center text-sm font-medium gap-2 border-b-2 w-20 border-zinc-900 py-2"
                >
                  <User className="w-4" /> Profile
                </Link>
                <Link
                  href="/personal"
                  className="flex items-center text-sm font-normal gap-2 border-b-2 border-transparent"
                >
                  <UserCog className="w-4" /> Personal
                </Link>
                <Link
                  href="/password"
                  className="flex items-center text-sm font-normal gap-2 border-b-2 border-transparent"
                >
                  <Lock className="w-4" /> Change Password
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center text-sm font-normal gap-2 border-b-2 border-transparent"
                >
                  <Cog className="w-4" /> Settings
                </Link>
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="col-span-12 border-t"></div>
      </div>

      {children}
    </>
  );
}
