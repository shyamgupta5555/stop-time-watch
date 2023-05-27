import React from "react";
import {
  Box,
  FormControl,
  VStack,
  Input,
  FormLabel,
  Button,
  HStack,
  Checkbox,
} from "@chakra-ui/react";


function LoinPages() {
  return (
    <Box>
      <VStack spacing={4} align="flex-start" w="full">
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input variant="filled"></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" variant="filled"></Input>
        </FormControl>
      </VStack>
      <HStack w="full" p={4} justify="space-between">
        <Checkbox>Remember me.</Checkbox>
        <Button variant="link" colorScheme="blue" border="none">
          Forget Password ?
        </Button>
      </HStack>
      <Button
        size="md"
        height="48px"
        width="200px"
        border="2px"
        background="red.300"
        w="full"
      >
        Login...
      </Button>
    </Box>
  );
}

export default LoinPages;
