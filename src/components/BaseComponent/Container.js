import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  .row {
    max-width: 900px !important;
    margin: 0 auto !important;
  }
`;
const InnerContainer = styled.div`

`;
const Header = styled.div`
  font-size: 40px;
  line-height: 50px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 30px 0;
`;

class Container extends Component {
  render() {
    const { header } = this.props;

    return (
      <ContainerWrapper>
        <Header>{header}</Header>
        <InnerContainer>{this.props.children}</InnerContainer>
      </ContainerWrapper>
    );  
  }
}

export default Container;