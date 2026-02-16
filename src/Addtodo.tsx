import { useState, type ChangeEventHandler } from "react";
type AddtodoProps = {
  onTodoAdded: (newTodo: string) => void;
};
export const Addtodo = (props: AddtodoProps) => {
  useState("");
  const [value, setValue] = useState("");
  const handlechange: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log("valeur a changé", event.target.value);
    setValue(event.target.value);
  };
  const handleSubmit = () => {
    props.onTodoAdded(value);
    setValue("");
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("submitted");
        handleSubmit();
      }}
    >
      <input
        value={value}
        onChange={handlechange}
        type="text"
        id="name"
        name="name"
        placeholder="va faire les courses"
      />
      <button> Ajouter</button>
    </form>
  );
};
