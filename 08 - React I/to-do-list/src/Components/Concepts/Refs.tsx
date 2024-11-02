import { InputHTMLAttributes, useEffect, useRef, useState } from "react";

export const Refs: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null); //{current: 0}
  // console.log(inputRef);

  // useEffect(() => {
  //   console.log(inputRef);
  // }, [inputRef]);

  function handleOnClick() {
    if (inputRef.current) {
      inputRef.current.focus(); //colocando o foco no input utilizando a referencia inputRef
    }
  }

  return (
    <div>
      <h1>useRef</h1>

      {/* <p>{`O valor da Ref é ${ref.current}`}</p> */}
      <br />
      <input type="text" placeholder="Nome Completo" ref={inputRef} />
      <button onClick={handleOnClick}>Foque no Input</button>
      <br />
      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button> */}

      {/* refs nao disparam novas renderizações, por isso, seu valor continua estático na tela do usuário */}
    </div>
  );
};
