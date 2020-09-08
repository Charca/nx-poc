import React from 'react';
import styled from 'styled-components';
import { TITLE } from '@helpscout-js/common/constants';
const StyledHeader = styled.div`
  color: pink;
`;

export const Header = (props) => {
  return (
    <StyledHeader>
      <h1>{TITLE}</h1>
    </StyledHeader>
  );
};
export default Header;
