import { useState } from "react";
import "./App.css";
import { Tab, Tabs, TabPanel, TabPanels, TabList } from "@chakra-ui/react";
import SignPage from "./componets/SignPage";
import LoinPages from "./componets/LoinPages";

function App() {
  return (
    <Tabs
      variant="soft-rounded"
      colorScheme="green"
      border="1px"
      borderColor="gray.200"
      width="130%"
      padding="1rem"
    >
      <TabList>
        <Tab p={4}>Login</Tab>
        <Tab p={4}>SignUp</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <LoinPages />
        </TabPanel>
        <TabPanel>
          <SignPage></SignPage>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default App;
