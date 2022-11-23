import styled from '@emotion/styled';

export const Notification__text = styled.p`
  display: ${props => {
    if (props.good > 0 || props.neutral > 0 || props.bad > 0) {
      return 'none';
    }
  }};
  font-size: 16px;
`;
