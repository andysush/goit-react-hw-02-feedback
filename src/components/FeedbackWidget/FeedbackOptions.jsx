import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.feedback__container}>
    {options.map(option => (
      <div key={option}>
        <button
          className={css.feedback__btn}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      </div>
    ))}
  </div>
);
