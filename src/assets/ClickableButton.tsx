import { useEffect, useState } from "react";



export function ClickableButton() {

    const [count , setCount] = useState(0);
    const handleClick = () => {
      setCount(count + 1)
    };
    useEffect(() => {
      console.log("useEffect");
    
    } , [count])
    
    return <button onClick = {handleClick}>{count}</button>
    }

//    export function champ_de_saisie() {
//     const [value, setValue] = useState('');
//    }