import styleCard from "./style.module.scss";

interface StatsCardProps {
  title: string;
  value: number;
}
export const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <article className={styleCard.statsCard}>
      <h2>{title}</h2>
      <span>{value}</span>
    </article>
  );
};
