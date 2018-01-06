import React, { Component } from 'react';
import styled from 'styled-components';
import map from 'lodash.map';

import Container from './BaseComponent/Container';

const MissionContainer = styled.div`

`;
const CardContainer = styled.div`
  display: flex;
  text-align: left;
  margin-bottom: 10px;
  background: red;

  img {
    width: 60px;
    height: 60px;
    background: grey;
    margin-right: 10px;
  }
`;
const MissionItemWrapper = styled.div`

`;

const MissionItem = ({ name, detail }) => {
  return (
    <CardContainer>
      <img />
      <MissionItemWrapper>
        <div>{name}</div>
        <div>{detail}</div>
      </MissionItemWrapper>
    </CardContainer>
  );
};

class Mission extends Component {
  render() {
    const { missions } = this.props;

    return (
      <Container header={'Mission'}>
        {map(missions, (m) => {
          return <MissionItem name={m.name} detail={m.detail}/>;
        })}
      </Container>
    );
  }
}

export default Mission;
