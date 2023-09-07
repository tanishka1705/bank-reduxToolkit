import { createSlice } from "@reduxjs/toolkit";
import client from "../api/axiosConfig";

const initialState = {
    balance : 0,
    
}

const depositAmount  = createSlice({
    name : 'deposit',
    initialState,
    reducers : {
        deposit(state, action){
            
            state.balance += +action.payload
        },
        withdraw(state, action) {

            state.balance -= +action.payload
 
        }
    }
})


export const deposit = function(amount, currency){
    console.log(currency)

    if (currency === 'USD'){
        return {
            type : 'deposit/deposit',
            payload : +amount
        }
    }

    return async function (dispatch, getState){

        const {data} = await client.get(`/latest?amount=${amount}&from=${currency}&to=USD`)


        const convertedCurrency = data.rates.USD
        // console.log(convertedCurrency)

        dispatch({ type: 'deposit/deposit', payload: convertedCurrency })
      

    }
}


export const { withdraw } = depositAmount.actions

export default depositAmount.reducer