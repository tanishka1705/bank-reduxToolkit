import { configureStore } from '@reduxjs/toolkit'
import customer from './customerReducer'
import depositReducer from './depositReducer'

const store = configureStore({
  reducer: { 
    createCustomer : customer,
    deposit : depositReducer
},
})

export default store