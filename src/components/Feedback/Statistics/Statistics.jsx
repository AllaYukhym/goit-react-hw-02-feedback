import PropTypes from 'prop-types';
import {
  Statistics__title,
  Statistics__list,
  Statistics__item,
  Statistics__text,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Statistics__title>Statistics</Statistics__title>
      <Statistics__list good={good} neutral={neutral} bad={bad}>
        <Statistics__item>
          <Statistics__text>Good: {good}</Statistics__text>
        </Statistics__item>
        <Statistics__item>
          <Statistics__text>Neutral: {neutral}</Statistics__text>
        </Statistics__item>
        <Statistics__item>
          <Statistics__text>Bad: {bad}</Statistics__text>
        </Statistics__item>
        <Statistics__item>
          <Statistics__text>Total: {total}</Statistics__text>
        </Statistics__item>
        <Statistics__item>
          <Statistics__text>
            Positive feedback: {positivePercentage}
          </Statistics__text>
        </Statistics__item>
      </Statistics__list>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
