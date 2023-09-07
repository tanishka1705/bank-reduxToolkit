
import { Heading, Container, FormControl, VStack, Input, Button, HStack} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { withdraw } from "../store/depositReducer";

function Withdraw(){

    

    const[withdrawAmount, setwithdrawAmount] = useState('')
    const dispatch = useDispatch();

    const withdrawHandler = (e) =>{
        e.preventDefault();
        dispatch(withdraw(withdrawAmount))
        setwithdrawAmount('')
    }



    return(
        <Container>
            <Heading textAlign='center'>Withdraw Money</Heading>

            <form onSubmit={withdrawHandler}>
                <FormControl mt={10} bg='#F5F5F5' p={10} borderRadius={5}>
                    <VStack spacing={5}>
                        <HStack>
                            <Input type="number" placeholder=" Enter Money..." onChange={e => setwithdrawAmount(e.target.value)} value={withdrawAmount}></Input>
                        </HStack>

                        <Button type="submit" color={"white"} colorScheme="green">Withdraw Money</Button>

                    </VStack>
                    
                </FormControl>
            </form>

         

        </Container>
    )
}
export default Withdraw;