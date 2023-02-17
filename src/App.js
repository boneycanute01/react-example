import React, { createContext } from 'react'
import { Provider } from 'react-redux';
import Child1 from './Child1'
import {store} from './store';



const myContext = createContext(); // Step #1 

function App() {
  // let message = [{data : 'mesage1'},{data : "message2"}];
  // let message = {value : "message1"};
  return (
    <>
      App
      {/* <myContext.Provider value={message}> */}
      <Provider store={store}>
        <Child1/>
      </Provider>
        {/* // List of all Components to whom the value is to be provided  */}
      {/* </myContext.Provider>   */}
    </>
  )
}

export default App;
export {myContext};