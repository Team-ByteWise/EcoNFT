"use client";

import { UserProvider } from "@/app/context/AuthContext"; // Import UserProvider
import UserFetch from "./_components/user-fetch";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <UserFetch />
      {children}
    </UserProvider>
  );
}