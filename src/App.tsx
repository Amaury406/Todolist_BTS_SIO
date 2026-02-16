// import { useEffect, useState } from "react";

import { useState } from "react";
import { TodoList } from "./TodoList";
import { Addtodo } from "./Addtodo";

const rawCachedData = localStorage.getItem("todos") ?? '{"todos":[]}';
const cachedData = JSON.parse(rawCachedData);

function App() {
  //  const [count , setCount] = useState(0);
  // const handleClick = () => {
  //   setCount(count + 1)
  // };
  // useEffect(() => {
  //   console.log("useEffect");

  // } , [])
  const [todos, setTodos] = useState<Array<string>>(cachedData.todos);
  console.log(todos);

  const handleTodoAdded = (newTodo: string) => {
    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
    localStorage.setItem(
      "todos",
      JSON.stringify({
        todos: newTodos,
      }),
    );
  };
  function supprimerLigne(valeurIndex: number) {
    const filtreIndex = todos.filter((_todo, i) => i !== valeurIndex);
    setTodos(filtreIndex);
    localStorage.setItem(
      "todos",
      JSON.stringify({
        todos: filtreIndex,
      }),
    );
  }

  return (
    <div>
      <h1> To do list </h1>
      <TodoList onTodoRemove={supprimerLigne} todos={todos} />
      <Addtodo onTodoAdded={handleTodoAdded} />
    </div>
  );
}

export default App;
