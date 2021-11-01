import React, { Component} from "react";
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App() {
  return (
    <div className="App">
     <div className="container">
       <div className="row">
         <TodoInput></TodoInput>
         <TodoList></TodoList>
       </div>
     </div>
    </div>
  );
}

export default App;
