"use client";

import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { decode } from "jsonwebtoken";

interface TokenInterface {
  email: string;
  exp: number;
  iat: number;
  name: string;
  sub: string;
}

interface UserData {
  name: string;
  email: string;
  completeName: string;
}

export default function useUserData(): UserData {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    completeName: "",
  });

  useEffect(() => {
    const token = Cookie.get("auth_token");
    if (token) {
      const decodedToken = decode(token) as TokenInterface;
      const name = decodedToken?.name || "";
      const email = decodedToken?.email || "";
      const parts = name.split(" ");
      const firstName =
        parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();

      setUserData({ name: firstName, email, completeName: name });
    }
  }, []);

  return userData;
}
