import { useState } from 'react';

export default function Myform() {
  const [value, setValue] = useState('');

  return (
    <>
      <label>
        Saisissez du texte :
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <p>Valeur saisie : {value}</p>
    </>
  );
}