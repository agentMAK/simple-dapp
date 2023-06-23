"use client";

import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import SignIn from "./components/SignIn";
import UserDashboard from "./components/UserDashboard";

export default function Home() {
  const [isAuth, setIsAuth] = useState(false);

  if (!isAuth) {
    return (
      <Flex
        marginX={"auto"}
        width={"4xl"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
        <SignIn setIsAuth={setIsAuth} />
      </Flex>
    );
  }

  return <UserDashboard />
}
