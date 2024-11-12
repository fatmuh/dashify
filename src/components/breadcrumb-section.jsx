"use client"

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function BreadcrumbSection({ className, asChild, urlChild }) {
  const pathname = usePathname();

  // Fungsi untuk mendapatkan judul halaman dari metadata
  const getPageTitle = () => {
    // Misalnya, Anda memiliki objek metadata untuk setiap halaman
    const metadataMap = {
      "/": { title: "Home" },
      "/profile": { title: "Profile" },
      // Tambahkan pemetaan metadata untuk path lainnya
    };

    return metadataMap[pathname]?.title || asChild || "Page";
  };
  return (
    <Breadcrumb className={cn("hidden xl:flex", className)}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbPage>Dashify</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={urlChild || pathname}>{getPageTitle()}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
