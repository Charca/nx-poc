import React from 'react';
import styled from 'styled-components';
const StyledHeader = styled.div`
  color: pink;
`;
export const Header = (props) => {
  return (
    <StyledHeader>
      <h1>This is the header</h1>
    </StyledHeader>
  );
};
export default Header;
