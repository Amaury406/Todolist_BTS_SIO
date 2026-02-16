import "./style.css";
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
            <li>
              {todo}
              <button type="button" onClick={() => boutonSupprimer(i)}>
                {" "}
                Supprimer
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
