import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: " O'qituvchi 1",
        description: "O'qituvchi - bu o'quvchilarga bilim berish, ularni tarbiyalash va rivojlantirish maqsadida dars beradigan shaxsdir. O'qituvchilar ta'lim tizimining muhim qismi bo'lib, ular o'z o'quvchilarining akademik va shaxsiy rivojlanishiga katta ta'sir ko'rsatadilar."
    },
    {
        id: 2,
        img: [Blog2Img],
        title: " O'qituvchi 2",
        description: "O'qituvchi - bu o'quvchilarga bilim berish, ularni tarbiyalash va rivojlantirish maqsadida dars beradigan shaxsdir. O'qituvchilar ta'lim tizimining muhim qismi bo'lib, ular o'z o'quvchilarining akademik va shaxsiy rivojlanishiga katta ta'sir ko'rsatadilar."
    },
    {
        id: 3,
        img: [Blog3Img],
        title: " O'qituvchi 3",
        description: "O'qituvchi - bu o'quvchilarga bilim berish, ularni tarbiyalash va rivojlantirish maqsadida dars beradigan shaxsdir. O'qituvchilar ta'lim tizimining muhim qismi bo'lib, ular o'z o'quvchilarining akademik va shaxsiy rivojlanishiga katta ta'sir ko'rsatadilar."
    },
    {
        id: 4,
        img: [Blog4Img],
        title: " O'qituvchi 4",
        description: "O'qituvchi - bu o'quvchilarga bilim berish, ularni tarbiyalash va rivojlantirish maqsadida dars beradigan shaxsdir. O'qituvchilar ta'lim tizimining muhim qismi bo'lib, ular o'z o'quvchilarining akademik va shaxsiy rivojlanishiga katta ta'sir ko'rsatadilar."
    },
    {
        id: 5,
        img: [Blog5Img],
        title: " O'qituvchi 5",
        description: "O'qituvchi - bu o'quvchilarga bilim berish, ularni tarbiyalash va rivojlantirish maqsadida dars beradigan shaxsdir. O'qituvchilar ta'lim tizimining muhim qismi bo'lib, ular o'z o'quvchilarining akademik va shaxsiy rivojlanishiga katta ta'sir ko'rsatadilar."
    },
    {
        id: 6,
        img: [Blog6Img],
        title: " O'qituvchi 6",
        description: "O'qituvchi - bu o'quvchilarga bilim berish, ularni tarbiyalash va rivojlantirish maqsadida dars beradigan shaxsdir. O'qituvchilar ta'lim tizimining muhim qismi bo'lib, ular o'z o'quvchilarining akademik va shaxsiy rivojlanishiga katta ta'sir ko'rsatadilar."
    },
    {
        id: 7,
        img: [Blog7Img],
        title: " O'qituvchi 7",
        description: "O'qituvchi - bu o'quvchilarga bilim berish, ularni tarbiyalash va rivojlantirish maqsadida dars beradigan shaxsdir. O'qituvchilar ta'lim tizimining muhim qismi bo'lib, ular o'z o'quvchilarining akademik va shaxsiy rivojlanishiga katta ta'sir ko'rsatadilar."
    },
    {
        id: 8,
        img: [Blog8Img],
        title: " O'qituvchi 8",
        description: "O'qituvchi - bu o'quvchilarga bilim berish, ularni tarbiyalash va rivojlantirish maqsadida dars beradigan shaxsdir. O'qituvchilar ta'lim tizimining muhim qismi bo'lib, ular o'z o'quvchilarining akademik va shaxsiy rivojlanishiga katta ta'sir ko'rsatadilar."
    },
    {
        id: 9,
        img: [Blog9Img],
        title: " O'qituvchi 9",
        description: "O'qituvchi - bu o'quvchilarga bilim berish, ularni tarbiyalash va rivojlantirish maqsadida dars beradigan shaxsdir. O'qituvchilar ta'lim tizimining muhim qismi bo'lib, ular o'z o'quvchilarining akademik va shaxsiy rivojlanishiga katta ta'sir ko'rsatadilar."
    },
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>O'qituvchilarimiz haqida ma'lumot</h1>
                <p className='text-center w-75 mb-5'>O'qituvchilar ta'lim jarayonida muhim rol o'ynaydi va ularning vazifalari nafaqat bilim berish, balki o'quvchilarning shaxsiy rivojlanishi va ijtimoiy ko'nikmalarini shakllantirishdan iborat. O'qituvchilar o'z kasblarida malakali va fidokorona ishlashlari bilan ajralib turadilar.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;