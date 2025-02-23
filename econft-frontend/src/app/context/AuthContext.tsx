"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type UserContextType = {
  username: string;
  walletAddress: string;
  setUsername: (username: string) => void;
  setWalletAddress: (walletAddress: string) => void;
  authToken: string;
  setAuthToken: (authToken: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [authToken, setAuthToken] = useState("")

  return (
    <UserContext.Provider value={{ username, setUsername, walletAddress, setWalletAddress, authToken, setAuthToken }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}