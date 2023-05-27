import React,{useState} from "react";
import {
  Box,
  FormControl,
  VStack,
  Input,
  FormLabel,
  Button,
  HStack
} from "@chakra-ui/react";

import { useFirebase } from "../context/firebase";

function SignPage() {
  const firebase = useFirebase()
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  console.log(firebase)

  function handelSubmit(){
    firebase.signupUserWithEmailAndPassword(email,password)
    
  }

  return (
    <Box>
     <VStack spacing={4} align="flex-start" w="full" pb="1rem">
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input onChange={(e)=>setName(e.target.value)} value={name} ></Input>
        </FormControl>
        <FormControl>
          <FormLabel  >E-mail </FormLabel>
          <Input variant="filled" onChange={(e)=>setEmail(e.target.value)} value={email}></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" variant="filled" onChange={(e)=>setPassword(e.target.value)} value={password}></Input>
        </FormControl>
       
      </VStack>    
      <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          background="blue.300"
          w="full"
          onClick={()=>{handelSubmit}}
        >
          SignUp..
        </Button>
    </Box>
  );
}

export default SignPage;
