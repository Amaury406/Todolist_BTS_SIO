import { useState } from "react";

export type TodoItemProps = {
  todo: string;
  onTodoRemove: () => void;
  isOdd: boolean;
};
export const TodoItem = (props: TodoItemProps) => {
  const [isEditedIn, setIsEdit] = useState(false);
  function boutonSupprimer() {
    props.onTodoRemove();
  }
  return (
    <li
      style={{
        background: props.isOdd ? "white" : "rgba(0,0,0, .1)",
        padding: "1rem 2rem",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div onClick={() => setIsEdit(true)}>
        {isEditedIn ? "edit mode" : props.todo}
      </div>

      <button type="button" onClick={() => boutonSupprimer()}>
        {" "}
        Supprimer
      </button>
    </li>
  );
};
