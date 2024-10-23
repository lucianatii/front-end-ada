import style from "./style.module.scss";
import { StatsCard } from "../StatsCard/StatsCard";

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div>
          <h1>My Todo</h1>
          <span>Bem-vinda, Luciana!</span>
        </div>

        <div>
          <StatsCard title="Total de Tarefas" value={5} />
          <StatsCard title="Tarefas Pendentes" value={4} />
          <StatsCard title="Tarefas Concluídas" value={1} />
        </div>
      </div>
    </header>
  );
};
