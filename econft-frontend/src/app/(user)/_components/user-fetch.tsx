"use client";

import { useUser } from '@/app/context/AuthContext';
import { BASE_URL } from '@/lib/constant';
import axios from 'axios';
import React, { useEffect } from 'react'

const UserFetch = () => {
  const { setUsername, setWalletAddress, setAuthToken } = useUser();
  
  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (token) {
      axios.get(`${BASE_URL}/auth/verify`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res: any) => {
        const {id, username, wallet} = res.data;
        setUsername(username);
        setWalletAddress(wallet);
        setAuthToken(token);
      })
    }
  }, [setAuthToken, setUsername]);
  
  return (
    <div></div>
  )
}

export default UserFetch