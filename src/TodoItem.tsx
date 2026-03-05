import { useState } from "react";

export type TodoItemProps = {
  todo: string;
  onTodoRemove: () => void;
  onTodoEdit: (newText: string) => void; // Nouvelle prop
  isOdd: boolean;
};

export const TodoItem = (props: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(props.todo);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditValue(props.todo);
  };

  const handleSaveClick = () => {
    if (editValue.trim() !== "") {
      props.onTodoEdit(editValue);
      setIsEditing(false);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditValue(props.todo);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSaveClick();
    } else if (e.key === "Escape") {
      handleCancelClick();
    }
  };

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
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          style={{ flex: 1, marginRight: "1rem" }}
        />
      ) : (
        <div style={{ flex: 1 }}>{props.todo}</div>
      )}

      <div style={{ display: "flex", gap: "0.5rem" }}>
        {isEditing ? (
          <>
            <button type="button" onClick={handleSaveClick}>
              Sauvegarder
            </button>
            <button type="button" onClick={handleCancelClick}>
              Annuler
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={handleEditClick}>
              Modifier
            </button>
            <button type="button" onClick={props.onTodoRemove}>
              Supprimer
            </button>
          </>
        )}
      </div>
    </li>
  );
};
