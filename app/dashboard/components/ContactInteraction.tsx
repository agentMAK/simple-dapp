"use client"

import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { erc20ABI } from 'wagmi'
import { useContractRead } from 'wagmi'
import { useState } from "react";

const ContactInteraction = () => {


  const contractAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'

  const { data, isError, isLoading } = useContractRead({
    address: contractAddress,
    abi: erc20ABI,
    functionName: 'name',
    enabled: true,
  })


  return (
    <Box>
      <Text textAlign={"center"}>ERC-20 Smart Contract Interactions</Text>
      <SimpleGrid columns={3} spacingX="2px" spacingY="2px" margin={"20px"}>
        <Text>Contract Address:</Text>
        <Text>0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</Text>
        <Box></Box>
        <Text>Read function: &apos;name&apos;</Text>
        <Text>{data}</Text>
        <Text></Text>
      </SimpleGrid>
    </Box>
  );
};

export default ContactInteraction;
