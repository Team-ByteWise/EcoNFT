"use client";

import { UserProvider } from "@/app/context/AuthContext"; // Import UserProvider
import UserFetch from "./_components/user-fetch";
import Navbar from "./_components/user-navbar";
import Footer from "./_components/user-footer";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <UserFetch />
      <div className=" bg-green-950/70">
        <Navbar/>
        <main className="mt-14">{children}</main>
        <Footer/>
      </div>
    </UserProvider>
  );
}