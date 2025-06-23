import styles from './StatCard.module.scss';

type Props = {
  title: string;
  value: string;
  icon: string;
};

export default function StatCard({ title, value, icon }: Props) {
  return (
    <div className={styles.card}>
      <img src={icon} alt={`${title} icon`} className={styles.icon} />
      <p className={styles.title}>{title}</p>
      <h3 className={styles.value}>{value}</h3>
    </div>
  );
}
