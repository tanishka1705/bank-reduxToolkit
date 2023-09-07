
import './App.css';
import { ChakraProvider, Container} from '@chakra-ui/react';
import CreateCustomer from './components/CreateCustomer';
import Customer from './components/Customer';
import { useSelector } from "react-redux";


function App() {

  const customer = useSelector(state => state.createCustomer)

  return (
   <ChakraProvider>
    <Container>
    {customer.fullName === ''?  <CreateCustomer></CreateCustomer> : <Customer></Customer> }
    
    </Container>
    
   </ChakraProvider>
  );
}

export default App;
