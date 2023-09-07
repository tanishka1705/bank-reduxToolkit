import { Heading, Container, FormControl, VStack, Input, Button, HStack, Select } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit } from "../store/depositReducer";



function Deposit() {

    const[depositAmount, setDepositAmount] = useState('')
    const[currency, setCurrency] = useState('USD')

    const dispatch = useDispatch();

    const depositHandler = (e) =>{
        e.preventDefault();
        console.log(currency)
        dispatch(deposit(depositAmount,currency))
        setDepositAmount('')
        setCurrency('USD')
    }


    return (
        <Container>
            <Heading textAlign='center'>Deposit Money</Heading>

            <form onSubmit={depositHandler}>
                <FormControl mt={10} bg='#F5F5F5' p={10} borderRadius={5}>
                    <VStack spacing={5}>
                        <HStack>
                            <Input type="number" placeholder=" Enter Money..." value={depositAmount} onChange={e => setDepositAmount(e.target.value)}></Input>
                            <Select variant='filled'  value={currency} onChange={e => setCurrency(e.target.value)}>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                            </Select>

                        </HStack>

                        <Button type="submit" color={"white"} colorScheme="green">Deposit Money</Button>

                    </VStack>
                    
                </FormControl>
            </form>

           

        </Container>
    )
}
export default Deposit;