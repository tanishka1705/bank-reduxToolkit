import { Container, Heading, FormControl, VStack,Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFullName } from "../store/customerReducer";

function CreateCustomer(){

  const[fullName, setfullNAme] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) =>{
    e.preventDefault()
    dispatch(setFullName(fullName))
  }


    return(
        <Container>
            <Heading textAlign='center' mt={50}>Create Account</Heading>
            <form onSubmit={submitHandler}>
                <FormControl mt={10} bg='#F5F5F5' p={10} borderRadius={5}>
                    <VStack spacing={5}>
                        <Input type="text" placeholder=" Enter your name..." value={fullName} onChange={e => setfullNAme(e.target.value)}></Input>
                        <Button type="submit" color={"white"} colorScheme="green">Create</Button>
                    </VStack>
                </FormControl>
            </form>
       </Container>
    )    
}
export default CreateCustomer;