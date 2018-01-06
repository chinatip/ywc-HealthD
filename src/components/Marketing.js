import React, { Component } from 'react';
import styled from 'styled-components';
import { media, mediaExceed } from './media-style';

import MarketingImage from '../images/5555.jpg'

const Container = styled.div`
    height: 100vh;
`

class Marketing extends Component {
  render() {
    return (
      <Container>
          <img src={MarketingImage} style={{width:'90%', marginTop: -150}}/>
        </Container>
    );
  }
}

export default Marketing;
