import "./style.css";
import { TodoItem } from "./TodoItem";
type TodoListProps = {
  todos: Array<string>;
  onTodoRemove: (todoIndex: number) => void;
};

export const TodoList = (props: TodoListProps) => {
  console.log(props.todos);
  const nbTodos = props.todos.length;

  function boutonSupprimer(i: number) {
    props.onTodoRemove(i);
  }

  return (
    <>
      <h2>{nbTodos}</h2>

      <ul className="list">
        {props.todos.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              isOdd={i % 2 === 0}
              todo={todo}
              onTodoRemove={() => boutonSupprimer(i)}
            />
          );
        })}
      </ul>
    </>
  );
};
