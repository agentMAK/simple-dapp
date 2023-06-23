"use client";

import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import SignIn from "./components/SignIn";

export default function Home() {

    return (
      <Flex
        marginX={"auto"}
        width={"4xl"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
        <SignIn />
      </Flex>
    );
}
