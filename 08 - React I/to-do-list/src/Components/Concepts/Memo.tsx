import { useState } from "react";

interface memorizarionProps {
  financialData: {
    incomes: number[];
    outcomes: number[];
  };
}

export const Memorization: React.FC<memorizarionProps> = ({
  financialData,
}) => {
  //estado que define se os valores devem ser mostrados ou não
  const [showValues, setShowValues] = useState(true);

  const totalIncomes = financialData.incomes.reduce((total, income) => {
    return (total += income);
  }, 0);

  const totalOutcomes = financialData.outcomes.reduce((total, outcome) => {
    return (total += outcome);
  }, 0);

  console.log("Renderização do componente...");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Memorization</h1>

      <h2>useMemo</h2>

      <p>{`Total de Receitas: R$ ${showValues ? totalIncomes : "•••"}`}</p>
      <br />
      <p>{`Total de Despesas: R$ ${showValues ? totalOutcomes : "•••"}`}</p>
      <br />
      <button onClick={() => setShowValues(!showValues)}>
        {showValues ? "Ocultar Valores" : "Mostrar Valores"}
      </button>
    </div>
  );
};
