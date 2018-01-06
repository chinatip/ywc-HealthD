import React, { Component } from 'react';
import styled from 'styled-components';
import map from 'lodash.map';

import Container from './BaseComponent/Container';

const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  background: #ececec;
  padding: 20px;
`;
const ImageWrapper = styled.div`
  position: relative;
  background: grey;
  margin-right: 50px;
  border: none;
  border-radius: 50%;

  img {
    width: 200px;
    height: 200px; 
    border-radius: 50%;
  }
`;

const MissionContainer = styled.div`

`;
const MissionTitle = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  text-align: left;
  font-weight: bold;
`;
const InfoItemWrapper = styled.div`
  display: flex;
  background: white;
  padding: 10px;
  border-radius: 10px;
  width: 350px;
`;
const InfoItemContainer = styled.div`
  display: flex;
  margin-right: 10px;

  ${props => props.update && 'align-self: flex-end'};
`;
const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Name = styled.div`
  text-align: left;
  color: #ef551f;
  font-size: 30px;
  font-weight: bold;
`;
const Field = styled.div`
  text-align: left;
  margin-right: 10px;
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
    border-radius: 2px;
    background: grey;
    margin-right: 10px;
  }
`;
const MissionItemWrapper = styled.div`

`;

const InfoItem = ({ update = false, field, value }) => {
  return (
    <InfoItemContainer>
      <Field>{field}</Field>
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

const ScoreWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  background: #ef551f;
  justify-content: center;
  align-items: center;
  color: white;
`;

class Profile extends Component {
  render() {
    const { profile } = this.props;
    const { name, lastname, age, weight, height, registerDate, missions, score } = profile;

    return (
      <Container header={'โปรไฟล์'}>
        <InfoContainer>
          <ImageWrapper>
            <img />
            <ScoreWrapper>{`${score} คะแนน`}</ScoreWrapper>
          </ImageWrapper>
          <InfoWrapper>
            <Name>{`${name} ${lastname}`}</Name>
            <InfoItemWrapper>
              <InfoItem field={"อายุ: "} value={`${age} ปี`} />
              <InfoItem field={"น้ำหนัก: "} value={`${weight} กก.`} />
              <InfoItem field={"ส่วนสูง: "} value={`${height} ซม.`} />
            </InfoItemWrapper>
          </InfoWrapper>
        </InfoContainer>
        <MissionContainer>
          <MissionTitle>ภารกิจประจำสัปดาห์นี้</MissionTitle>
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
