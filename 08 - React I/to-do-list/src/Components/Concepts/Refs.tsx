import { FormEvent, useRef } from "react";

export const Refs: React.FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null); //{current: 0}
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(inputNameRef.current?.value);
    console.log(inputEmailRef.current?.value);
    console.log(inputPasswordRef.current?.value);
  }

  return (
    <form
      style={{ padding: "2rem" }}
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <h1>useRef</h1>

      {/* <p>{`O valor da Ref é ${ref.current}`}</p> */}
      <br />
      <input type="text" placeholder="Nome Completo" ref={inputNameRef} />
      <input type="email" placeholder="E-mail" ref={inputEmailRef} />
      <input type="password" placeholder="Password" ref={inputPasswordRef} />
      <button type="submit">Submeter</button>
    </form>
  );
};
