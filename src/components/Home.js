import React, { Component } from 'react';
import styled from 'styled-components';
import Image from '../images/header-img.jpg'
import { media, mediaExceed } from './media-style';

import Document from '../images/document.svg'
import Medal from '../images/medal.svg'
import Photo from '../images/photo.svg'
import Tab from '../images/tab.svg'
import TreeImage from '../images/tree.png'

import HealthD from '../images/Logo-orange.png'

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
  background-repeat: no-repeat;
  color: white;

  .col-10 {
    margin-left: -170px;
  }

  h2 {
    text-shadow: 2px 2px 5px #000;
    margin-top: 160px;
  }

  button {
    width: 15%;
    background-color: #ef551f;
    color: white;
    border-radius: 40px;
    margin-top: 20px;
  }

  ${media.mobile`

    h2{
      margin-top: 20px;
      font-size: 22px;
    }
    .col-10 {
      margin-top: 100px;
      margin-left: 30px;
    }
    button {
      width: 40%;
    }
  `}

`;

const size = 350

const Logo = styled.div`
  width: ${size}px;
  height: ${size}px;
  border-radius: ${size / 2}px;
  margin-top: ${size / 2}px;
  background-image: url('${HealthD}');
  background-position: 50px 50px;
  background-repeat: no-repeat;
  align-self: flex-end;
  position: absolute;
`
const About = styled.div`
  height: 30vh;
`

const HowTo = styled.div`
  height: 40vh;

  p {
    margin-top: 5px;
  }

  ${media.tablet`
    margin-top: 50px;
  `}
`

const Icon = styled.img`
  height: 100px;

  ${media.tablet`
    height: 80px;
  `}
`

const Tree = styled.div`
height: 100vh;
align-item: center;
justify-content: center;
background-image: url('${TreeImage}');
background-size: cover;
background-position: 0px -80px;
background-repeat: no-repeat;
color: black;

h1{
  font-size: 25px;
  margin-top: 20px;
}

.row{
  margin-top: 50px;
}
`

class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <div class="row" style={{ width: '100%' }}>
            <div class="col-10">
              <h2>"อยากให้คนไทยสุขภาพดี  <br />และได้ของฟรีไปพร้อมๆกัน"</h2>
              <button type="submit" class="btn btn-default">เริ่มกันเลย</button>
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
          <div class="row">
            <div class="col">
              <Icon src={Document} />
              <p>สมัครสมาชิก</p>
            </div>
            <div class="col">
              <Icon src={Tab} />
              <p>เลือกภารกิจ</p>
            </div>
            <div class="col">
              <Icon src={Photo} />
              <p>ปฎิบัติและยืนยันภาระกิจ</p>
            </div>
            <div class="col">
              <Icon src={Medal} />
              <p>รับคะแนนสะสม</p>
            </div>
          </div>
        </HowTo>

        <Tree>
          <div class="row">
            <div class="col">
              <h1 style={{marginLeft: '30px'}}>ลุ้น Package ทัวร์ ญี่ปุ่น พร้อมผู้ติดตาม 5 วัน 4 คืน </h1>
            </div>
            <div class="col">
            </div>
            <div class="col">
            </div>
          </div>
          <div class="row">
            <div class="col">
            </div>
            <div class="col">
            </div>
            <div class="col">
            <h1>  voucher อาหารคลีน/เพื่อสุขภาพ  10 รางวัล </h1>
            </div>
          </div>
          <div class="row">
            <div class="col">
            <h1>   รองเท้าวิ่ง 1 รางวัล</h1>
            </div>
            <div class="col">
            </div>
            <div class="col">
            </div>
          </div>
          <div class="row">
            <div class="col">
              
            </div>
            <div class="col">
            </div>
            <div class="col">
            <h1> กางเกงโยคะ 1 รางวัล</h1>
            </div>
          </div>
          <div class="row">
            <div class="col">
            <h1> กระเป๋าเดินทาง 1 รางวัล</h1>
            </div>
            <div class="col">
            </div>
            <div class="col">
           
            </div>
          </div>
        </Tree>
      </Container>
    );
  }
}

export default Home;
