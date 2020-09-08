import React from 'react';
import styled from 'styled-components';
const StyledInput = styled.div`
  color: pink;
`;
export const Input = (props) => {
  return (
    <StyledInput>
      <h1>Welcome to Input!</h1>
    </StyledInput>
  );
};
export default Input;
