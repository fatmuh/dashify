import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Bell } from 'lucide-react'
import { Badge } from './ui/badge'

export default function Notification() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                    <Bell className="w-4" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 mr-5 md:w-[400px] md:mr-5 2xl:mr-9 -mt-1 font-[family-name:var(--font-geist-sans)]">
                <div className="flex justify-between items-center">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <Badge variant="default">5 New</Badge>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="flex flex-col gap-2">
                    <DropdownMenuItem>
                        <div className="flex flex-col">
                            <span className="font-medium">M*******d F******n have made payment</span>
                            <span className="text-xs text-zinc-600">#20230102039 - 11 Nov 2024</span>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <div className="flex flex-col">
                            <span className="font-medium">M*******d F******n have made payment</span>
                            <span className="text-xs text-zinc-600">#20230102039 - 11 Nov 2024</span>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <div className="flex flex-col">
                            <span className="font-medium">M*******d F******n have made payment</span>
                            <span className="text-xs text-zinc-600">#20230102039 - 11 Nov 2024</span>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <div className="flex flex-col">
                            <span className="font-medium">M*******d F******n have made payment</span>
                            <span className="text-xs text-zinc-600">#20230102039 - 11 Nov 2024</span>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <div className="flex flex-col">
                            <span className="font-medium">M*******d F******n have made payment</span>
                            <span className="text-xs text-zinc-600">#20230102039 - 11 Nov 2024</span>
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
