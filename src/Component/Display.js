import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../reducer/reducerSlice'

export default function Display() {
    const data = useSelector(state =>state.count.value)
    console.log(data)
    const dispatch = useDispatch()
    const addHandle = () => {
         dispatch(increment())
    }
    const minusHandle = () =>{
        dispatch(decrement())
    }
    const resetHandler = () =>{
        dispatch(reset())
    }
  return (
    <div>
         <button onClick={addHandle}>Add</button>
                 Count:{data}
        <button onClick={minusHandle}>sub</button>
        <button onClick={resetHandler}>reset</button>
        <div>
        <input type='text'/>
        </div>
        
    </div>
  )
}
