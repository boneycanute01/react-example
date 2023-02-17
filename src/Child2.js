import React, { useContext } from 'react'
import { useSelector } from 'react-redux'; // for access the store data
import { myContext } from './App';
function Child2() {
//   const data = useContext(myContext);
const data = (useSelector(state=>state.ReducerKey));

return (
  <>
  Child2
    {
      data.map((value,index)=>{
        return(<h1 key={index}>{value.data}</h1>)
      })
    }
  </>
)
    
}

export default Child2