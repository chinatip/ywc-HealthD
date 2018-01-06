import React, { Component } from 'react';
import styled from 'styled-components';
import map from 'lodash.map';

import Container from './BaseComponent/Container';
import { Button } from './BaseComponent/Button';

const MissionContainer = styled.div`
  display: flex;
`;

const WelcomeWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 7px;

`;
const Header = styled.div`
  font-size: 30px;
  line-height: 50px;
  font-weight: 700;
  color: #de653b;
`;
const SubHeader = styled.div`
  width: 410px;
  font-size: 16px;
  color: #848181f7;
  flex: 1;
`;
const Condition = styled.div`
  width: 410px;
`;

const MissionList = styled.div`
  flex: 1;
`;
const CardContainer = styled.div`
  display: flex;
  width: 95%;
  text-align: left;
  padding: 10px;
  margin: 0 2.5%;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #cccccc45;
  box-shadow: 5px 2px 12px -2px #ccc;

  img {
    width: 60px;
    height: 60px;
    background: grey;
    margin-right: 10px;
  }
`;
const MissionItemWrapper = styled.div`

`;
const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #504c4cf7;
`;
const Subtitle = styled.div`
  font-size: 11px;
  letter-spacing: 0.5px;
  color: #848181f7;
`;

const MissionItem = ({ name, detail }) => {
  return (
    <CardContainer>
      <img />
      <MissionItemWrapper>
        <Title>{name}</Title>
        <Subtitle>{detail}</Subtitle>
      </MissionItemWrapper>
      <Button value="เข้าร่วม" />
    </CardContainer>
  );
};

class Mission extends Component {
  render() {
    const { missions } = this.props;

    return (
      <Container header={'Mission'}>
        <MissionContainer>
          <WelcomeWrapper>
            <Header>ภารกิจประจำสัปดาห์</Header>
            <SubHeader>ในสัปดาห์นี้ ภารกิจที่คุณสามารถเลือกทำได้ มีทั้งหมด 3 ภารกิจ ได้แก่...</SubHeader>
            <Condition>* เงื่อนไขการปฏิบัติภารกิจ: แต่ละภารกิจมีอายุ 1 สัปดาห์ (เริ่มต้นวันจันทร์ สิ้นสุดวันอาทิตย์) หากยืนยันภารกิจได้ไม่ครบถ้วนภายในเวลา จะถือว่าภารกิจนั้นไม่สำเร็จ และจะไม่ได้รับคะแนนของภารกิจดังกล่าว</Condition>
          </WelcomeWrapper>
          <MissionList>
            { map(missions, (m) => {
              return <MissionItem name={m.name} detail={m.detail}/>;
            })}
          </MissionList>
        </MissionContainer>
      </Container>
    );
  }
}

export default Mission;
