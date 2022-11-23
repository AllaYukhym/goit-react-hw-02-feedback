import PropTypes from 'prop-types';
import { Notification__text } from './Notification.styled';

export const Notification = ({ message, good, neutral, bad }) => {
  return (
    <>
      <Notification__text good={good} neutral={neutral} bad={bad}>
        {message}
      </Notification__text>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
