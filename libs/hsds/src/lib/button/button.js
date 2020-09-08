import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.div`
  color: pink;
`;
export const Button = (props) => {
  return (
    <StyledButton>
      <h1>Welcome to Button!</h1>
    </StyledButton>
  );
};
export default Button;
