import React, { Component } from 'react';
import styled from 'styled-components';
import map from 'lodash.map';

import Container from './BaseComponent/Container';

const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
const ImageWrapper = styled.div`
  background: grey;
  margin-right: 20px;

  img {
    width: 150px;
    height: 150px;
  }
`;

const MissionContainer = styled.div`

`;

const InfoItemContainer = styled.div`
  display: flex;
  margin-bottom: 5px;

  ${props => props.update && 'align-self: flex-end'};
`;
const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Field = styled.div`
  width: 55px;
  text-align: left;

  ${props => props.update && 'width: 100%'};
`;
const Value = styled.div`

`;

const MissionItemContainer = styled.div`
  display: flex;
  text-align: left;
  margin-bottom: 10px;

  img {
    width: 60px;
    height: 60px;
    background: grey;
    margin-right: 10px;
  }
`;
const MissionItemWrapper = styled.div`

`;

const InfoItem = ({ update = false, field, value }) => {
  return (
    <InfoItemContainer update={update}>
      <Field update={update}>{field}</Field>
      <Value>{value}</Value>
    </InfoItemContainer>
  );
};

const MissionItem = ({ name, detail }) => {
  return (
    <MissionItemContainer>
      <img />
      <MissionItemWrapper>
        <div>{name}</div>
        <div>{detail}</div>
      </MissionItemWrapper>
    </MissionItemContainer>
  );
};

class Profile extends Component {
  render() {
    const { profile, missions } = this.props;
    const { name, lastname, age, weight, height, registerDate } = profile;

    return (
      <Container header={'Profile'}>
        <InfoContainer>
          <ImageWrapper><img /></ImageWrapper>
          <InfoWrapper>
            <InfoItem field={"ชื่อ: "} value={`${name} ${lastname}`} />
            <InfoItem field={"อายุ: "} value={age} />
            <InfoItem field={"น้ำหนัก: "} value={weight} />
            <InfoItem field={"ส่วนสูง: "} value={height} />
            <InfoItem update field={"เข้าร่วมเมื่อ: "} value={registerDate} />
          </InfoWrapper>
        </InfoContainer>
        <MissionContainer>
          {
            map(missions, (m, id) => {
              return <MissionItem name={m.name} detail={m.detail} />
            })
          }
        </MissionContainer>
      </Container>
    );
  }
}

export default Profile;
