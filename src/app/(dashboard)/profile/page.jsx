"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Cog, Lock, Mail, Phone, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <>
      <Card className="rounded-md w-full max-w-none shadow-none border-none">
        <div className="flex flex-col w-full pb-5 xl:px-5">
        <div className="flex items-center gap-10 w-[350px] md:w-full md:overflow-hidden overflow-x-scroll whitespace-nowrap">
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
              <User Cog className="w-4" /> Personal
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
          <div className="border-b w-full"></div>
        </div>
      </Card>

      <div className="grid grid-cols-12 gap-5 xl:gap-0">
        <div className="col-span-12 xl:col-span-3">
          <Card className="rounded-lg shadow-none xl:ml-5">
            <div className="flex flex-col w-full py-10 px-5 gap-5">
              <div className="flex flex-col justify-center items-center gap-3">
                <Avatar className="w-14 h-14">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="flex flex-col text-center">
                  <h2 className="font-medium">John Doe</h2>
                  <h2 className="text-xs font-normal text-zinc-600">IT Team</h2>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-zinc-600 mx-20 md:mx-32 lg:mx-56 xl:mx-0">
                <div className="flex items-center justify-between">
                  <Mail className="w-4" />
                  <span className="text-sm">fathur@propertree.id</span>
                </div>
                <div className="flex items-center justify-between">
                  <Phone className="w-4" />
                  <span className="text-sm">(+1-876) 8654 239 581</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-12 xl:col-span-9">
          <Card className="rounded-lg shadow-none xl:mx-5">
            <div className="flex flex-col w-full py-5 pb-10 gap-5">
              <div className="text-sm font-semibold px-5">Personal Details</div>
              <div className="border-b"></div>
              <div className="grid grid-cols-2 px-5 gap-5">
                <div className="flex flex-col gap-1 border-b pb-2">
                  <span className="text-sm font-medium">Name</span>
                  <span className="text-sm">Fathur Muhammad</span>
                </div>
                <div className="flex flex-col gap-1 border-b pb-2">
                  <span className="text-sm font-medium">Phone</span>
                  <span className="text-sm">(+1-876) 8654 239 581</span>
                </div>
                <div className="flex flex-col gap-1 border-b pb-2">
                  <span className="text-sm font-medium">Email</span>
                  <span className="text-sm">fathur@propertree.id</span>
                </div>
                <div className="flex flex-col gap-1 border-b pb-2">
                  <span className="text-sm font-medium">Role</span>
                  <span className="text-sm">IT</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
