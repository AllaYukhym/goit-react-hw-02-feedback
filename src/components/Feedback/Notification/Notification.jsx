import PropTypes from 'prop-types';
import { Notification__text } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <>
      <Notification__text>{message}</Notification__text>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
