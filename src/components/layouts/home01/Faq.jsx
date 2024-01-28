import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Accordion} from 'react-bootstrap';


class Faq extends Component {
    render() {

        const accordionData = [
            {
              title: 'Reserve with Google” คืออะไร?',
              content: 'Reserve with Google" ช่วยให้สามารถทำการจองและจองบริการได้โดยง่ายแค่คลิกเดียวในหลายๆ ธุรกิจแต่ละกลุ่ม เช่น ร้านอาหาร, สวยร้าน, และฟิตเนส การจองสามารถทำได้โดยตรงจากโปรไฟล์ธุรกิจของร้านค้าใน Google Search and Maps',
            },
            {
              title: 'การทำงานเป็นอย่างไร?',
              content: 'AAppoint ได้เปิดใช้งานความพร้อมของโต๊ะของคุณ ผ่าน Reserve with Google ซึ่งทำให้ร้านอาหารของคุณ สามารถจองได้โดยตรงจากโปรไฟล์ธุรกิจของร้านค้าใน Google Search and Maps',
            },
            {
              title: 'หากฉันไม่มีโปรไฟล์ธุรกิจบน Google จะเป็นอย่างไร?',
              content: 'ถ้าโปรไฟล์ธุรกิจของร้านอาหารคุณยังไม่ได้ถูกตั้งค่า คุณสามารถลงทะเบียนและยืนยันธุรกิจของคุณได้ ที่นี่ หากมีคำถามเพิ่มเติมเกี่ยวกับ Google Business Profile โปรดอ้างอิงไปยัง Google Business Profile Help Center.',
            },
            {
              title: 'ประโยชน์ที่ได้รับจากการที่สามารถจองได้ผ่าน Google คืออะไร?',
              content: 'ลูกค้าใหม่และลูกค้าเก่าสามารถค้นพบและจองโต๊ะในร้านอาหารของคุณผ่าน Google ได้แล้ว คุณมีโอกาสขยายร้านค้าของคุณไปสู่ผู้ใช้ Google Maps & Search จำนวนพันล้านคนทั่วโลก และมีโอกาสที่จะเข้าถึงลูกค้าที่กำลังมองหาร้านอาหารเพื่อรับประทานอาหารได้อย่างง่ายดายมากขึ้น',
            },
            {
                title: 'ลูกค้าของคุณควรคาดหวังอะไรเมื่อพวกเขาทำการจองร้านอาหารผ่าน Google?',
                content: 'ลูกค้าของคุณจะสามารถค้นพบร้านอาหารของคุณใน Google และทำการจองผ่านปุ่ม “Reserve a Table” บนโปรไฟล์ธุรกิจของคุณได้ ลูกค้าจะสามารถเลือก จำนวนคนของพวกเขา, วันที่, และเวลาที่ต้องการ และดูความพร้อมของโต๊ะของคุณได้ด้วย หลังจากยืนยันข้อมูลติดต่อของพวกเขา การจองก็ถือเป็นสิ้นสุด! ถ้าผู้ประกอบการมีการผนวกแบบไม่เสียเวลากับ Google, การจองจะไม่ถูกยืนยันจนกว่าผู้ประกอบการจะยอมรับการจองนั้น',
            },
            {
                title: 'ประโยชน์ของการอนุญาตให้ผู้ใช้เข้าร่วมรายการรอคิวของร้านอาหารผ่าน Google คืออะไร?',
                content: 'ผ่านการผนวก Reserve with Google ลูกค้าใหม่และลูกค้าเก่าสามารถค้นพบและเข้าร่วมรายการรอคิวก่อนที่พวกเขาจะมาถึงร้านอาหารของคุณผ่าน Google ได้แล้ว คุณมีโอกาสขยายการเผยแพร่ของร้านค้าของคุณไปสู่ผู้ใช้ Google Maps & Search ในขนาดพันล้านคน และมีโอกาสที่จะเข้าถึงลูกค้าที่กำลังมองหา ร้านอาหาร เพื่อรับประทานอาหารได้อย่างง่ายดายมากขึ้น',
            },
            {
                title: 'ลูกค้าของคุณควรคาดหวังอะไรเมื่อพวกเขาเข้าร่วมรายการรอคิวผ่าน Google?',
                content: 'ลูกค้าของคุณจะสามารถค้นพบร้านอาหารของคุณใน Google และเข้าร่วมรายการรอคิวโดยออกแบบดิจิตอลผ่านปุ่ม “Join Waitlist” บนโปรไฟล์ธุรกิจ ของคุณได้ ลูกค้าจะสามารถเลือกจำนวนคนของพวกเขา และรับการประมาณรอคิว หลังจากยืนยันข้อมูลติดต่อของพวกเขาแล้ว ลูกค้าของคุณก็จะอยู่ ในรายการรอคิว!',
            },
            {
                title: 'ฉันจะยกเลิกการร่วมรายการกับ Reserve with Google ได้อย่างไร?',
                content: 'ถ้าคุณไม่ต้องการรับการจองโต๊ะโดยตรงผ่าน Google โปรดติดต่อ AAppoint เพื่อขอให้เอาการจองโต๊ะออกจากฟีด Reserve with Google',
            },
            {
                title: 'ฉันจะรู้ได้อย่างไรว่าการจองนัดนี้มาจาก Google?',
                content: 'ใน Google Business Profile Manager ของคุณ > แท็บ "การจอง" คุณสามารถหา insights เกี่ยวกับการจองที่กำหนดไว้ผ่าน Reserve with Google เท่านั้นได้ สำหรับการจองที่กำหนดไว้ผ่าน AAppoint ร้านอาหาร สามารถเข้าสู่ระบบ เพื่อจัดการคิวได้ทันที บนเว็บไซต์ www.aappoint.me',
            },
          ];

        return (
                    
        <section className="faq section-padding bg-grey pt-0" id="faq">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-heading center-heading text-center mb-60">
                            <h3 className="heading-title">คำถามพบบ่อย?</h3>
                        </div>
                    </div>
                </div>

                <div className="row ">
      {accordionData.map((item, index) => (
        <div className="col-lg-6" key={index}>
          <Accordion className="panel-group">
            <Accordion.Item eventKey={index.toString()} className="panel-group">
              <Accordion.Header>
                <i className="more-less fa fa-plus"></i>{item.title}
              </Accordion.Header>
              <Accordion.Body className="panel-body">{item.content}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}
      
    
    </div>
            </div>
        </section>

        );
    }
}

export default Faq;
