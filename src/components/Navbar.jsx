"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingBag, FaSearch } from "react-icons/fa";

import React from "react";
const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  console.log(session);

  const navlinks = (
    <>
      <li>
        <Link
          href="/"
          className="text-md font-medium text-black hover:text-[#FF3811] active:text-[#FF3811]"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="text-md font-medium text-black hover:text-[#FF3811] active:text-[#FF3811]"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/services"
          className="text-md font-medium text-black hover:text-[#FF3811] active:text-[#FF3811]"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className="text-md font-medium text-black hover:text-[#FF3811] active:text-[#FF3811]"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="text-md font-medium text-black hover:text-[#FF3811] active:text-[#FF3811]"
        >
          Contact
        </Link>
      </li>
     
    </>
  );

  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            <Image
              src={"/assets/icons/logo.svg"}
              width={50}
              height={50}
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-4">{navlinks}</ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
        {status === "authenticated" ? (
            <>
              <Image
                width={40}
                height={40}
                src={session?.user?.image}
                alt="Profile"
                className="rounded-full"
              />
              <button
                onClick={() => signOut()}
                className="btn btn-sm btn-outline"
              >
                Sign Out
              </button>
            </>
          ) : (
            <div className="hidden lg:block">
              <Link
                href="/login"
                className={
                  pathname === "/login"
                    ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                    : "hover:text-red-500"
                }
              >
                Login
              </Link>
              <Link
                href="/signUp"
                className={
                  pathname === "/signUp"
                    ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white ml-2"
                    : "hover:text-red-500 ml-2"
                }
              >
                Sign Up
              </Link>
            </div>
          )}
          <Link
            href="/appointment"
            className="px-4 py-2 border border-[#FF3811] text-[#FF3811] text-md font-medium rounded-lg"
          >
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
