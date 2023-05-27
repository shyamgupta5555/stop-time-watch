import { useState, useRef } from "react";
import "./App.css";
import {
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
  Button,
  HStack,
  VStack,
  Stack,
  Wrap,
  WrapItem,
  Center,
  Box,
} from "@chakra-ui/react";

function App() {
  const [time, setTime] = useState({ m: 0, s: 0, ms: 0, h: 0 });
  const [interval, setInerval] = useState(0);

  const start = () => {
    clearInterval(interval);
    setInerval(setInterval(run, 10));
  };

  const stop = () => {
    clearInterval(interval);
  };

  const clear = () => {
    clearInterval(interval);
    setTime({ m: 0, s: 0, ms: 0, h: 0 });
  };

  let updateMs = time.ms,
    updateH = time.h,
    updateM = time.m,
    updateS = time.s;

  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };

  return (
    <div
      className="App"
      style={{
        width: "80vh",
        height: "50vh",
        border: "3px solid gray",
        textAlign: "center",
        boxShadow: " 5px 10px #888888",
      }}
    >
      <Box bg="brown" w="100%" p={4} color="white" fontSize="4xl">
        STOP TIME WATCH
      </Box>
      <Stack
        spacing={4}
        direction="row"
        align="center"
        placeContent="center"
        p="1rem"
      >
        <Button colorScheme="teal" size="lg" onClick={start}>
          start
        </Button>
        <Button colorScheme="teal" size="lg" onClick={stop}>
          stop
        </Button>
        <Button colorScheme="teal" size="lg" onClick={clear}>
          RESET
        </Button>
      </Stack>
      <HStack
        spacing={4}
        direction="row"
        align="center"
        placeContent="center"
        p="1rem"
      >
        <Wrap spacing="30px" justify="center">
          <WrapItem>
            <Center w="60px" h="60px" bg="red.200" fontSize="4xl">
              {time.h >= 10 ? time.h : "0" + time.h}
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="60px" h="60px" bg="red.200" fontSize="4xl">
              {time.m >= 10 ? time.m : "0" + time.m}
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="60px" h="60px" bg="red.200" fontSize="4xl">
              {time.s >= 10 ? time.s : "0" + time.s}
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="60px" h="60px" bg="red.200" fontSize="4xl">
              {time.ms >= 10 ? time.ms : "0" + time.ms}
            </Center>
          </WrapItem>
        </Wrap>
      </HStack>
    </div>
  );
}

export default App;
