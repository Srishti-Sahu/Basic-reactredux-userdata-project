import React from "react";
import {useSelector, useDispatch} from "react-redux";
function App() {
  const dispatch = useDispatch();
  const info = React.useRef(null);
  const ageref = React.useRef(null);
  const userdata = useSelector((state)=>{
    return state
  });

  function myName(){
    dispatch({type: 'SET_NAME', data: (info.current.value)});
  }
  function myAge(){
    dispatch({type: 'SET_AGE', data: parseInt(ageref.current.value)});
  }
  return (
    <div>
      <h1> Name: {userdata.name}</h1>
      <h1> Age: {userdata.age} </h1>
     
      <input type="text" placeholder="Your name please" ref={info}/>
      <input type="number" placeholder ="Your age" ref={ageref}/>
      <button onClick={myName}>Name</button>
      <button onClick={myAge}>Age</button>
    </div>
  );
}

export default App;
