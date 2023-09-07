import { Heading, Box, Container, HStack, Button, Text} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Deposit from "./Deposit";
import { useState } from "react";
import Withdraw from "./Withdraw";
import Balance from "./Balance";


function Customer() {

    const[showDeposit, setShowDeposit] = useState(false)
    const[showWithdraw, setShowWithdraw] = useState(false)
    const[isDeposited, setIsDeposited] =  useState(false)

    const customer = useSelector(state => state.createCustomer)

    const depositClickHandler = () =>{
        setShowDeposit(true)
        setShowWithdraw(false)
        setIsDeposited(true)
    }

    const withdrawClickHandler = () =>{
        setShowWithdraw(true)
        setShowDeposit(false)
        setIsDeposited(true)
    }

    return (
        <Container>
            <Box mt={50}>
                <Heading textAlign={'center'}>Welcome , {customer.fullName}</Heading>
            </Box>

            <Heading textAlign={'center'} mt={35}>What Do You Want To Do?</Heading>
            <Box mt={50} alignItems={'center'} display="flex" justifyContent="center">
                
                <HStack spacing={4}  justifyContent="center">
                    <Button type="submit" color={"white"} colorScheme="green" onClick={depositClickHandler}>Deposit</Button>
                    <Button type="submit" color={"white"} colorScheme="yellow" onClick={withdrawClickHandler}>Withdraw Money</Button>
                    <Button type="submit" color={"white"} colorScheme="blue">Request Loan</Button>
                    <Button type="submit" color={"white"} colorScheme="orange">Pay Loan</Button>
                </HStack>
            </Box>
            <Box mt={10}>
                {showDeposit && <Deposit></Deposit>}
                {showWithdraw && <Withdraw></Withdraw>}
                <Text fontWeight='bold' mt={5}>{isDeposited && <Balance></Balance>}</Text> 
            </Box>

          
            
        </Container>
    )
}

export default Customer;