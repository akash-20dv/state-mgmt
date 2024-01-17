'use client'
import {createSlice} from '@reduxjs/toolkit'
const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        count: 0 ,
    },
    reducers:{
        addCount: (state)=>{
            state.count += 1
        },
        decCount: (state)=>{
            state.count -= 1
        }
    }
})
export const {addCount, decCount} = counterSlice.actions
export default counterSlice.reducer