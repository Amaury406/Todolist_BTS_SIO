import { useState } from "react";
import { TodoList } from "./TodoList";
import { Addtodo } from "./Addtodo";

const rawCachedData = localStorage.getItem("todos") ?? '{"todos":[]}';
const cachedData = JSON.parse(rawCachedData);

function App() {
  const [todos, setTodos] = useState<Array<string>>(cachedData.todos);

  const handleTodoAdded = (newTodo: string) => {
    const newTodos = [...todos, newTodo];
    updateTodos(newTodos);
  };

  const supprimerLigne = (valeurIndex: number) => {
    const filtreIndex = todos.filter((_todo, i) => i !== valeurIndex);
    updateTodos(filtreIndex);
  };

  const editerLigne = (index: number, nouveauTexte: string) => {
    const nouveauxTodos = [...todos];
    nouveauxTodos[index] = nouveauTexte;
    updateTodos(nouveauxTodos);
  };

  const updateTodos = (nouveauxTodos: string[]) => {
    setTodos(nouveauxTodos);
    localStorage.setItem(
      "todos",
      JSON.stringify({
        todos: nouveauxTodos,
      }),
    );
  };

  return (
    <div>
      <h1> Todo List</h1>
      <TodoList
        onTodoRemove={supprimerLigne}
        onTodoEdit={editerLigne} // Nouvelle prop
        todos={todos}
      />
      <Addtodo onTodoAdded={handleTodoAdded} />
    </div>
  );
}

export default App;
