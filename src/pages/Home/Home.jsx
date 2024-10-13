import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: "Bosh Direktor",
        description: "Direktor — bu muassasa yoki tashkilotda rahbarlik qiluvchi shaxs bo'lib, uning asosiy vazifalari rahbarlik, boshqarish va strategik qarorlar qabul qilishdan iborat. Direktor tashkilotning maqsadlariga erishish uchun resurslarni samarali boshqarish, jamoani boshqarish va muhim qarorlar qabul qilish bilan shug'ullanadi."
    },
    {
        id: 2,
        img: [Blog2Img],
        title: "Zam Direktor",
        description: "Direktor — bu muassasa yoki tashkilotda rahbarlik qiluvchi shaxs bo'lib, uning asosiy vazifalari rahbarlik, boshqarish va strategik qarorlar qabul qilishdan iborat. Direktor tashkilotning maqsadlariga erishish uchun resurslarni samarali boshqarish, jamoani boshqarish va muhim qarorlar qabul qilish bilan shug'ullanadi."
    },
    {
        id: 3,
        img: [Blog3Img],
        title: "Yetakchi",
        description: "Direktor — bu muassasa yoki tashkilotda rahbarlik qiluvchi shaxs bo'lib, uning asosiy vazifalari rahbarlik, boshqarish va strategik qarorlar qabul qilishdan iborat. Direktor tashkilotning maqsadlariga erishish uchun resurslarni samarali boshqarish, jamoani boshqarish va muhim qarorlar qabul qilish bilan shug'ullanadi."
    }
];

function Home() {
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2>Xush kelibsiz</h2>
                    <h1 className='text-center fw-semibold'>18-Maktab Website</h1>
                    <p>Toshkent viloyati, Olmaliq shahridagi 18-umumiy o'rta ta'lim maktabi O'zbekiston ta'lim tizimi doirasida faoliyat yuritadigan ta'lim muassasalaridan biridir Maktabda o‘quvchilar uchun umumiy fanlar o‘qitilib, davlat ta'lim standartlariga muvofiq dasturlar asosida ta'lim beriladi. Bundan tashqari, ba'zi maktablarda qo‘shimcha to‘garaklar, sport mashg‘ulotlari va ijodiy rivojlanish uchun imkoniyatlar ham bo‘lishi mumkin.</p>
                    <div className='d-flex flex-column flex-sm-row align-items-center'>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'> Maktab Fanlar</button>
                        </Link>
                        <Link to="/contact">
                            <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Joylashuv</button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="py-5">
                <ChooseSection />
            </div>

            <div className='py-5 bg-light'>
                <div className="container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'>18-Maktab fanlari haqida </h2>
                            <p>Toshkent viloyati, Olmaliq shahridagi 18-umumiy o'rta ta'lim maktabida o'quvchilarga quyidagi asosiy fanlar o'qitiladi</p>
                            <Link to="/courses">
                                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Ko'proq ma'lumot</button>
                            </Link>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={StartCoursesImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5">
                <FaqAccordion />
            </div>

            <div className='blog-section text-light py-5'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='text-center text-capitalize mb-5'>18-Maktab boshqaruvini qo'lga olgan masullar</h2>
                    <div className='row g-4'>
                        {blogs.map((blog) => (
                            <div key={blog.id} className='col-md-6 col-lg-4'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <Link to="/blog">
                        <button type='button' className='btn btn-danger btn-lg mt-5'>O'qituvchilar haqida</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;