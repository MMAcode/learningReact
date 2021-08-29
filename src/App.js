import './App.css';
import SimpleReducer from "./Components/hooks/useReducer/SimpleReducer";
import ComplexReducer from "./Components/hooks/useReducer/ComplexReducer";
import React from "react";

function App() {
  return (
    <div className="App">
      {/*<HandleAsyncData/>*/}
      <SimpleReducer/>
      <br/>
      <ComplexReducer/>


    </div>
  );
}

export default App;
