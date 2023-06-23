"use client";

import { Box, Flex } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <Flex
      marginX={"auto"}
      width={"4xl"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <ConnectButton />
    </Flex>
  );
}
