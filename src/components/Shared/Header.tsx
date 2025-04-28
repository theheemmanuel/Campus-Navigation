"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/run_logo.png";
import Link from "next/link";
import { FaCirclePlay } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathName = usePathname();
  return (
    <div className="sticky top-0 shadow-[0_2px_10px_rgba(0,0,0,0.05)] z-100 bg-white">
      <Sheet>
        <div className="maxWidth py-6 md:px-8 px-6 flex items-center justify-between">
          <Image src={logo} alt="logo" className="h-10 w-40" />
          <div className="lg:flex hidden gap-6 items-center font-semibold text-lg">
            <Link
              className={`${
                pathName === "/" && "underline underline-offset-3"
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`${
                pathName === "/about" && "underline underline-offset-3"
              }`}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`${
                pathName === "/scan" && "underline underline-offset-3"
              }`}
              href="/scan"
            >
              Scan Location
            </Link>
            <Link
              className={`${
                pathName === "/map" && "underline underline-offset-3"
              }`}
              href="/map"
            >
              Check Map
            </Link>
          </div>
          <div className="max-lg:hidden">
            <Link
              href="/"
              className="flex items-center gap-2 bg-accent text-white px-5 py-3 rounded-3xl font-bold text-g"
            >
              Video Tour <FaCirclePlay />
            </Link>
          </div>
          <div className="lg:hidden">
            <SheetTrigger>
              <IoMenu size={30} color="#000079" />
            </SheetTrigger>
          </div>
        </div>
        <SheetContent className="z-200 pt-3">
          <SheetHeader>
            <SheetTitle className="">
              <Image src={logo} alt="logo" className="h-10 w-40" />
            </SheetTitle>
            <SheetDescription className="flex flex-col gap-4 mt-6 font-semibold text-lg">
              <SheetTrigger
                asChild
                className="hover:underline hover:text-accent"
              >
                <Link
                  className={`${
                    pathName === "/" &&
                    "underline underline-offset-3 text-accent"
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </SheetTrigger>
              <SheetTrigger
                asChild
                className="hover:underline hover:text-accent"
              >
                <Link
                  className={`${
                    pathName === "/about" &&
                    "underline underline-offset-3 text-accent"
                  }`}
                  href="/about"
                >
                  About
                </Link>
              </SheetTrigger>
              <SheetTrigger
                asChild
                className="hover:underline hover:text-accent"
              >
                <Link
                  className={`${
                    pathName === "/scan" &&
                    "underline underline-offset-3 text-accent"
                  }`}
                  href="/scan"
                >
                  Scan Location
                </Link>
              </SheetTrigger>
              <SheetTrigger
                asChild
                className="hover:underline hover:text-accent"
              >
                <Link
                  className={`${
                    pathName === "/map" &&
                    "underline underline-offset-3 text-accent"
                  }`}
                  href="/map"
                >
                  Check Map
                </Link>
              </SheetTrigger>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
