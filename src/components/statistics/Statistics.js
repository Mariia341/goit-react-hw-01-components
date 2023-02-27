import PropTypes from "prop-types";
import css from './Statistics.module.css'; 
import getRandomHexColor from '../RandomHexColor';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(({ label, id, percentage }) => (
          <li key={id} className={css.item}
          style={{ backgroundColor: getRandomHexColor() }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};