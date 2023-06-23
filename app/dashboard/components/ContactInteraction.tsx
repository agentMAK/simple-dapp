"use client";

import { Box, Button, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { erc20ABI, useContractReads } from "wagmi";
import { useContractRead } from "wagmi";

const ContactInteraction = () => {
  const [contractAddress, setContractAddress] = useState("");

  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        address: contractAddress as "0x${string}",
        abi: erc20ABI,
        functionName: "name",
      },
      {
        address: contractAddress as "0x${string}",
        abi: erc20ABI,
        functionName: "totalSupply",
      },
    ],
  });

  return (
    <Box>
      <Text textAlign={"center"}>ERC-20 Smart Contract Interactions</Text>
      <SimpleGrid columns={2} spacingX="2px" spacingY="2px" margin={"20px"}>
        <Text>Contract Address:</Text>
        <Input
          onChange={(event) => setContractAddress(event.target.value)}
        ></Input>
        <Text>Read function: &apos;name&apos;</Text>
        <Text>{data?.[0].result}</Text>
        <Text>Read function: &apos;name&apos;</Text>
        <Text>{data?.[1].result?.toString()}</Text>
      </SimpleGrid>
    </Box>
  );
};

export default ContactInteraction;
