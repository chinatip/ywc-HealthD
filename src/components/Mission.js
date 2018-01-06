import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

const profile = {
  name: 'นาย YWC',
  lastname: '#15',
  missions: [
    {
      name: 'mission',
      activeDate: {
        startDate: '01/01/2018',
        endDate: '07/01/2018'
      },
      detail: 'blah blah'

    }
  ]
};

class Mission extends Component {
  render() {
    return (
      <Container>
        Profile
      </Container>
    );
  }
}

export default Mission;
