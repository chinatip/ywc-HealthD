import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;
const InnerContainer = styled.div`

`;

class Container extends Component {
  render() {
    return (
      <ContainerWrapper>
        <InnerContainer>{this.props.children}</InnerContainer>
      </ContainerWrapper>
    );  
  }
}

export default Container;