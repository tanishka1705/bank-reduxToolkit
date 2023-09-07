import { Box, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"

function Balance(){

   const deposit =  useSelector(state => state.deposit)

    return(
      <Box>
         <Text>Balance : {deposit.balance.toFixed(2)}</Text>
      </Box>
    )
}
export default Balance