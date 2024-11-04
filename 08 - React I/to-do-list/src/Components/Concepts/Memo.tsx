import { useMemo, useState } from "react";

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

  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((total, income) => {
      console.log("Calculando Receitas");
      return (total += income);
    }, 0);
  }, [financialData.incomes]);

  const totalOutcomes = useMemo(() => {
    return financialData.outcomes.reduce((total, outcome) => {
      console.log("Calculando Despesas");
      return (total += outcome);
    }, 0);
  }, [financialData.outcomes]);

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
