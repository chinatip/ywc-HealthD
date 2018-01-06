import React, { Component } from 'react';
import styled from 'styled-components';

import Info1 from '../images/Info1.jpg';
import Info2 from '../images/Info2.jpg';
import Info3 from '../images/Info3.jpg';

const Container = styled.div`

`
const Header = styled.p`
  font-size: 2rem;
  margin-top: 50px;
`;

const Content = styled.div`
 img {
  width: 80%;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.5s; 
   &:hover {
    opacity: 0.85;
   }
 }


 .row2{
   margin-top: 40px;
   margin-bottom: 100px;
 }

`

const Modal = styled.div`

`

class Knowledge extends Component {
  render() {
    return (
      <Container>
        <Header>
          <p>เปิดกรุเกร็ดความรู้… ดูซิว่าทำ(ภารกิจ)แล้วได้อะไร</p>
        </Header>
        <Content>
          <div class="row">
            <div class="col col1">
              <img src={Info1} />
            </div>
            <div class="col col2">
              <img src={Info2} data-toggle="modal" data-target="#exampleModalLong" />
            </div>
          </div>
          <div class="row row2">
            <div class="col">
              <img src={Info3} />
            </div>
          </div>
        </Content>

        <Modal>
          <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">“ดื่มน้ำมะเขือเทศ” ผิวใสจริงหรือตามกระแส?
</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <img src={Info2} width='90%' />
                  <p style={{ width: '90%', margin: 'auto', marginTop: 40, marginBottom: 10 }}>“ไม่อร่อย แต่ก็ต้องทนหน่อยจะได้สวยๆ”
หลายคนอาจเคยได้ยินว่าหนึ่งในสรรพคุณอันโดดเด่นของน้ำมะเขือเทศคือการทำให้ผิวสวยใส จนบางคนถึงขนาดทานติดต่อกันเป็นเวลานานเพื่อให้ได้ผลลัพธ์ดังกล่าว ...แต่ความเชื่อนี้เป็นความจริงจริงหรือ?
รศ.รัชนี คงคาฉุยฉาย ผู้อำนวยการสถาบันโภชนาการ มหาวิทยาลัยมหิดล ได้กล่าวว่า หากทาน ‘มะเขือเทศสด’ ติดต่อกันระยะหนึ่ง วิตามินซีและไลโคปีนที่อุดมอยู่ในมะเขือเทศสามารถช่วยให้ผิวใสขึ้นได้จริง แต่หากเลิกทาน ผิวก็จะกลับมาเป็นดังเดิม ส่วนใน ‘น้ำมะเขือเทศ’ แม้จะมีสารอาหารเช่นเดียวกับมะเขือเทศสด แต่ก็มีส่วนผสมอื่นๆ อยู่ด้วย เช่น น้ำตาล ซึ่งหากทานติดต่อกันก็อาจก่อให้เกิดโรคอ้วนแทนได้
ดังนั้น ไม่ว่าจะเป็นการรับประทานมะเขือเทศแบบสดหรือแบบน้ำ ก็ควรทานในปริมาณที่เหมาะสมอย่างสม่ำเสมอ เพื่อสุขภาพที่ดีอย่างยั่งยืนนั่นเอง

ขอบคุณข้อมูลจาก https://www.matichon.co.th/news/105973
</p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </Container>
    );
  }
}

export default Knowledge;
