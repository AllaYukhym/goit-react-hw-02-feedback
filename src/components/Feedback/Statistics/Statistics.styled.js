import styled from '@emotion/styled';

export const Statistics__title = styled.h2`
  margin-bottom: 15px;
`;

export const Statistics__list = styled.ul`
  display: ${props => {
    if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
      return 'none';
    }
  }};
`;

export const Statistics__item = styled.li`
  margin-bottom: 5px;
`;

export const Statistics__text = styled.p`
  font-size: 20px;
`;
