'use client'

import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'


type ViewNFTType = {
  nfts: any[];
};

const ViewNFTs = ({ nfts }: ViewNFTType) => {
  return (
    <Flex flexDirection={"column"} gap={'20px'} >
      {nfts.map((nft: any, i: number) => (
        <Flex
          key={i}
          width={"100%"}
          border={"solid 1px black"}
        >
          <Box height={"100%"} width={"50%"}> <Image src={nft.media[0].gateway} alt='Dan Abramov' /></Box>
          <Box height={"100%"} width={"100%"}>
            <SimpleGrid
              columns={2}
              spacingX="2px"
              spacingY="2px"
              margin={"20px"}
            >
              <Text>Token Name:</Text>
              <Text>{nft.rawMetadata.name}</Text>
              <Text>Token Id</Text>
              <Text>{nft.tokenId}</Text>
              <Text>Description</Text>
              <Text>{nft.rawMetadata.description}</Text>
              <Text>Source Image</Text>
              <Text>{(nft.rawMetadata.image as string).slice(0,100)}</Text>
              <Text>Contract Address</Text>
              <Text>{nft.contract.address}</Text>
            </SimpleGrid>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default ViewNFTs;
