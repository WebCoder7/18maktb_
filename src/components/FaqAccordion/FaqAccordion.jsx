import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Tez-tez beriladigan savollar</h2>
            <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam rem expedita similique necessitatibus dolore magnam natus sit ipsa, quae neque accusantium placeat laudantium mollitia, reprehenderit alias incidunt, delectus obcaecati cupiditate sed omnis repudiandae eos! Quasi unde veritatis labore quibusdam.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Ota-onalar va maktab aloqasi</Accordion.Header>
                    <Accordion.Body>
                    Ota-onalar maktab bilan qanday aloqa qilishi mumkin? Ota-onalar uchrashuvlari qachon o'tkaziladi?  Ota-onalar maktabda qanday yordam bera olishadi?
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Maktab va ta'lim jarayoni</Accordion.Header>
                    <Accordion.Body>
                    Maktabda o'qish uchun qanday hujjatlar kerak? O'qish jarayoni qanday tashkil etiladi?  Qanday fanlar o'qitiladi? O'qituvchilar kimlar? Ularning tajribasi qanday?
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Qo'shimcha faoliyat</Accordion.Header>
                    <Accordion.Body>
                    Maktabda qanday qo'shimcha dasturlar va tadbirlar mavjud? Sport musobaqalari yoki san'at tadbirlari o'tkaziladimi? Talabalar uchun qiziqarli klublar yoki to'garaklar bormi?
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>O'qish va baholash</Accordion.Header>
                    <Accordion.Body>
                    Talabalar qanday baholanadi? Imtihonlar qachon o'tkaziladi? Qanday qilib muvaffaqiyatli o'qish mumkin? O'quvchilarning natijalari qanday e'lon qilinadi?
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;