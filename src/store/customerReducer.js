import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    fullName : ''
}

const createCustomer = createSlice({
name: 'createCustomer',
initialState,
reducers : {
    setFullName(state, action) {
        state.fullName = action.payload
    }
}
})

export const { setFullName } = createCustomer.actions

const customer =  createCustomer.reducer
export default customer