import React, { Component } from 'react';
import styled from 'styled-components';
import Image from '../images/header-img.jpg'

const size = 150

const Container = styled.div`
  height: 100%;
  width: 100%;
`
const Header = styled.div`
  height: 80vh;
  display: flex;
  align-item: center;
  justify-content: center;
  background-image: url('${Image}');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Logo = styled.div`
  width: ${size}px;
  height: ${size}px;
  border-radius: ${size / 2}px;
  margin-top: ${size / 2}px;
  background: grey;
  align-self: flex-end;
  position: absolute;
`
const About = styled.div`
  height: 40vh;
  background-color:: pink
`

class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Logo>
          </Logo>
        </Header>
        <About>
          <h1>อยากให้คนไทย ได้ของฟรีและสุขภาพดีไปพร้อมๆกัน</h1>
        </About>


        {/* ef551f */}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content"  style={{background: '#ef551f'}}>
                <button type="button" style={{position: 'absolute', right: '10px', top: '5px'}} class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              <div class="modal-body">
                <form style={{marginTop: '50px'}}>
                  <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="อีเมล" />
                  </div>
                  <div class="form-group" style={{marginTop: '20px'}}>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="รหัสผ่าน" />
                  </div>

                  <h6 style={{textAlign: 'left', color: 'white', opacity: 0.8}}>ลืมรหัสผ่าน</h6>
                  <button type="submit" class="btn btn-default" style={{width: '100%', backgroundColor: 'transparent', border: '1px solid white', color: 'white', marginTop: '20px'}}>เข้าสู่ระบบ</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
