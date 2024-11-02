import { useRef, useState } from "react";

export const Refs: React.FC = () => {
  const ref = useRef(0); //{current: 0}
  const [toggle, setToggle] = useState(false);

  function handleClickOnButton() {
    ref.current = ref.current + 1;
    console.log(ref.current);
  }

  return (
    <div>
      <h1>useRef</h1>

      <p>{`O valor da Ref é ${ref.current}`}</p>
      <br />
      <button onClick={handleClickOnButton}>Clique Aqui</button>
      <br />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      {/* refs nao disparam novas renderizações, por isso, seu valor continua estático na tela do usuário */}
    </div>
  );
};
