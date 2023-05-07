import css from './Statistic.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <ul className={css.statisstic__list}>
      <li className={css.statisstic__item}>
        <span className={css.statistic__text}>good:</span> {good}
      </li>
      <li className={css.statisstic__item}>
        <span className={css.statistic__text}>neutral:</span> {neutral}
      </li>
      <li className={css.statisstic__item}>
        <span className={css.statistic__text}>bad:</span> {bad}
      </li>
      <li className={css.statisstic__item}>
        <span className={css.statistic__text}>total feedbacks:</span> {total()}
      </li>
      <li className={css.statisstic__item}>
        <span className={css.statistic__text}>
          total percentage of good feedbacks:
        </span>
        {positivePercentage()}%
      </li>
    </ul>
  </div>
);
