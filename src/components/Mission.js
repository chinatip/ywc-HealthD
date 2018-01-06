import React, { Component } from 'react';
import styled from 'styled-components';

import { Button } from 'antd';

const Container = styled.div`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

const missions = [
  {
    id: 1,
    date: {
      startDate: '01/01/2018',
      endDate: '06/01/2018'
    },
  },
  {
    id: 2,
    date: {
      startDate: '01/01/2018',
      endDate: '06/01/2018'
    },
  },
  {
    id: 3,
    date: {
      startDate: '01/01/2018',
      endDate: '06/01/2018'
    },
  },
  {
    id: 4,
    date: {
      startDate: '01/01/2018',
      endDate: '06/01/2018'
    },
  }
]

class Mission extends Component {
  render() {
    return (
      <Container>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        {missions.map((mission) => 
          <div>
            {mission.id}
          </div>
        )}
      </Container>
    );
  }
}

export default Mission;
