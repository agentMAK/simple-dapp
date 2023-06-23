"use client"

import { Flex } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


const UserDashboard = () => {
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
            <p>nfts</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default UserDashboard;
