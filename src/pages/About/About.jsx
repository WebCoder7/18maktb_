import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Person1 from '../../utils/images/person1.jpg';
import Person2 from '../../utils/images/person2.jpg';
import Person3 from '../../utils/images/person3.jpg';
import Person4 from '../../utils/images/person4.jpg';
import Person5 from '../../utils/images/person5.jpg';
import Person6 from '../../utils/images/person6.jpg';
import Person7 from '../../utils/images/person7.jpg';
import Person8 from '../../utils/images/person8.jpg';
import Person9 from '../../utils/images/person9.jpg';

const persons = [
    {
        id: 1,
        img: [Person1]
    },
    {
        id: 2,
        img: [Person2]
    },
    {
        id: 3,
        img: [Person3]
    },
    {
        id: 4,
        img: [Person4]
    },
    {
        id: 5,
        img: [Person5]
    },
    {
        id: 6,
        img: [Person6]
    },
    {
        id: 7,
        img: [Person7]
    },
    {
        id: 8,
        img: [Person8]
    },
    {
        id: 9,
        img: [Person9]
    },
];

function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Biz Haqimizda</h1>
                <p className='text-center w-75 mb-5'>O'quvchilarga zamonaviy ta'lim metodlarini qo'llab, mustaqil fikrlash qobiliyatini rivojlantirish. O'quvchilarning ijtimoiy ko'nikmalarini va jamoada ishlash qobiliyatlarini oshirish. O'zbek va boshqa tillarda sifatli ta'lim berish, shuningdek, ilmiy va madaniy tadbirlarda ishtirok etishni rag'batlantirish. Maktabda turli fanlar o'qitiladi, jumladan matematik, fizik, kimyo, biologiya, ona tili va adabiyot, ingliz tili, tarix va geografiya.</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Biz bilan o'qing </h2>
                    <p>18-maktab sizni ta'lim olishingiz uchun taklif qiladi! Maktabimizda sizga sifatli va zamonaviy ta'lim berish, shaxsiy va ijtimoiy rivojlanishingizga yordam berish maqsadida barcha imkoniyatlar yaratilgan.
                    Bizning jamoamiz tajribali va malakali o'qituvchilar bilan to'ldirilgan. Ular sizga zamonaviy pedagogik usullar yordamida ta'lim berishadi. Maktabda siz matematikadan tortib, san'at va jismoniy tarbiyagacha bo'lgan keng spektrdagi fanlar o'qitiladi. Har bir o'quvchi o'z qiziqishlariga mos keladigan fanlarni tanlash imkoniyatiga ega.
                    </p>
                    <p className='mb-4 mb-lg-5'> Biz turli xil tadbirlar, musobaqalar va festivalar o'tkazamiz. Bu tadbirlar nafaqat bilim olish, balki ijtimoiy ko'nikmalarni rivojlantirishga ham yordam beradi. Maktabimizda zamonaviy sinflar, laboratoriyalar va sport zallari mavjud. Sizning bilim olish jarayoningizni yanada qiziqarli va samarali qilish uchun barcha zarur sharoitlar yaratilgan. O'quvchilarimiz uchun turli xil qiziqarli dasturlar va seminarlar tashkil etiladi. Bu dasturlar bilimlarni kengaytirish va ijodiy fikrlashni rivojlantirishga yordam beradi.</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Joylashuv</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <h2 className='text-center mb-5'>Maktabimiz yutuqlari</h2>
                <div className='row g-4'>
                    {persons.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <img src={person.img} className='img-fluid' alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;