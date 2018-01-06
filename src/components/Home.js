import React, { Component } from 'react';
import styled from 'styled-components';
import Image from '../images/header-img.jpg'

import Document from '../images/document.svg'
import Medal from '../images/medal.svg'
import Photo from '../images/photo.svg'
import Tab from '../images/tab.svg'

import HealthD from '../images/Logo.png'

const Container = styled.div`
  height: 100%;
  width: 100%;
`
const Header = styled.div`
  height: 70vh;
  display: flex;
  align-item: center;
  justify-content: center;
  background-image: url('${Image}');
  background-size: cover;
  background-position: 0px -80px; 

  h2 {
    text-shadow: 2px 2px 5px #000;
  }

`;

const size = 250

const Logo = styled.div`
  width: ${size}px;
  height: ${size}px;
  border-radius: ${size / 2}px;
  margin-top: ${size / 2}px;
  background-image: url('${HealthD}');
  background-position: 30px 50px;
  background-repeat: no-repeat;
  align-self: flex-end;
  position: absolute;
`
const About = styled.div`
  height: 30vh;
`

const HowTo = styled.div`
  height: 40vh;
`

const Icon = styled.img`
  margin-top: 70px;
  height: 100px;
`

class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <div class="row" style={{ width: '100%' }}>
            <div class="col">
              <h2 style={{ color: 'white', marginTop: '160px' }}>ของฟรีไม่มีขาย ถ้าอยากได้มาทำ <br />Mission เรา!</h2>
              <button type="submit" class="btn btn-default" style={{ width: '30%', backgroundColor: '#ef551f', color: 'white', borderRadius: '40px', marginTop: '20px' }}>เริ่มกันเลย</button>
            </div>
            <div class="col">
            </div>
          </div>
          <Logo>
          </Logo>
        </Header>
        <About>
          <h2 style={{ marginTop: '120px', color: '#ef551f' }}>"อยากให้คนไทย ได้ของฟรีและสุขภาพดีไปพร้อมๆกัน"</h2>
          <h5 style={{ marginTop: '20px' }}>จึงเกิดเป็นเว็บไซต์ที่พร้อมเปย์ของรางวัลสุดพิเศษให้กับคุณ <br />
            ไม่ต้องลุ้นชิงโชค ไม่ต้องกลัวนกของแจก <br />
            เพียงแค่ทำภารกิจให้สำเร็จก็แลกรับของรางวัลจากเราไปเลย! <br />
          </h5>
        </About>
        <HowTo>
        <div class="row" style={{}}>
    <div class="col">
      <Icon src={Document}/>
      <p>สมัครสมาชิก</p>
    </div>
    <div class="col">
    <Icon src={Tab}/>
      <p>เลือกภารกิจ</p>
    </div>
    <div class="col">
    <Icon src={Photo}/>
     <p>ปฎิบัติและยืนยันภาระกิจ</p>
    </div>
    <div class="col">
    <Icon src={Medal}/>
      <p>รับคะแนนสะสม</p>
    </div>
  </div>
        </HowTo>
      </Container>
    );
  }
}

export default Home;
