"use client";

import useUserData from "./userData";
import NavBar from "./index";

export default function NavBarWrapper() {
  const userData = useUserData();

  return <NavBar userData={userData} />;
}
