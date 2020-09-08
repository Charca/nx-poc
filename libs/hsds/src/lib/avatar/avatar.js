import React from 'react';
import styled from 'styled-components';
const StyledAvatar = styled.div`
  color: pink;
`;
export const Avatar = (props) => {
  return (
    <StyledAvatar>
      <h1>Welcome to avatar!</h1>
    </StyledAvatar>
  );
};
export default Avatar;
