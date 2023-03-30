"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/vehicles">Vehicles</Link>
            </li>

            <li>
              <Link href={"/reports"}>Reports</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="text-xl normal-case btn btn-ghost">
          TAHAQOQ
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link href="/vehicles">Vehicles</Link>
          </li>

          <li>
            <Link href={"/reports"}>Reports</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center justify-center gap-4 mx-4">
          <div className="avatar">
            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                src="/images/avatar.png"
                alt="avatar"
                width={25}
                height={25}
              />
            </div>
          </div>
          <span>{session?.user?.name}</span>
        </div>
        <button onClick={() => signOut()} className="btn">
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
