"use client";

import { Box, Flex } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import UserNFTs from "./components/UserNfts";
import ContactInteraction from "./components/ContactInteraction";

export default function Home() {

    return (
      <Flex
      marginX={"auto"}
      width={"6xl"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Tabs marginTop={'100px'} width={'100%'}>
        <TabList>
          <Tab>View NFTs</Tab>
          <Tab>Read Contract</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
           <UserNFTs />
          </TabPanel>
          <TabPanel>
          <ContactInteraction />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
    );
  }
