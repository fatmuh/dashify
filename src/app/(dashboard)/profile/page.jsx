"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  return (
    <div className="grid grid-cols-12 gap-5 xl:gap-0">
      <div className="col-span-12 md:col-span-4">
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
            <div className="flex flex-col gap-2 text-zinc-600 mx-5 md:mx-0 lg:mx-5 xl:mx-5">
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
      <div className="col-span-12 md:col-span-8">
        <Card className="rounded-lg shadow-none xl:mx-5">
          <div className="flex flex-col w-full py-5 pb-10 gap-5">
            <div className="text-sm font-semibold px-5">Personal Details</div>
            <div className="border-b"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-5">
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
  );
}
