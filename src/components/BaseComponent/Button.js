import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  font-size: 12px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    max-height: 32px;
  }
`;

export const Button = ({ value }) => {
  return (
    <ButtonWrapper>
      <button type="button" class="btn btn-outline-warning" style={{ fontSize: 12 }}>{value}</button>
    </ButtonWrapper>
  );
}