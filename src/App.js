import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import React,{useState} from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      description: "You need to go to the market to buy food"
    },
    {
      sno: 2,
      title: "Go to the mall",
      description: "You need to go to the mall to buy clothes"
    },
    {
      sno: 3,
      title: "Go to the school",
      description: "You need to go to the school to learn"
    }
  ]);
  const onDelete = (todo) => {
    console.log("I am onDelete of todo",todo);
    // Deleting this was in react does not work directly
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    // console.log("deleted",todos);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    console.log("deleted",todos);
  }
  return (
  <>
    <Header title="My Todos-List" searchBar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
  </>
  );
}
export default App;
