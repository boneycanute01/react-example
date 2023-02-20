import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'; // for access the store data
import { myContext } from './App';
import {updateData,function2} from './Slice';

function Child2() {  
const dispatch = useDispatch();
//   const data = useContext(myContext);
const data = (useSelector(state=>state.ReducerKey));

// useSelector requires a selector function that returns the reducer of the slice that you 
// want to access data from  

const handleClick = ()=>{
  // The only way to update state in store is to dispatch an action 
  dispatch(updateData(123));
}

return (
  <>
  Child2
    {
      data.map((value,index)=>{
        return(<h1 key={index}>{value.data}</h1>)
      })
    }
    <button onClick={handleClick}>Update List</button>
  </>
)
    
}

export default Child2