import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import DropBtn from '../../drop-down/DropBtn';
import { Link } from 'react-router-dom';

const Navba = () => {
    return (
        <Navbar expand='lg' className='navbar bg-success' >
        <Container fluid>
        <Navbar.Brand href="#" className='d-lg-none'><DropBtn/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className='justify-content-center'>
            <Nav className=" my-2 my-lg-0"  navbarScroll >
                <Link to="/" className='fs-5 nav-link'>الرئيسية</Link>
                <Link to="/About" className='fs-5 nav-link'>عن المؤلف</Link>
                <Link to="/Cover" className='fs-5 nav-link'>الغلاف</Link>
                <Link to="/Basmalah" className='fs-5 nav-link'>البسملة</Link>
                <Link to="/FlipBook" className='fs-5 nav-link'>قراءة الكتاب</Link>
                <Link to="/pricing" className='fs-5 nav-link'>فهرس المراجع</Link>
                <Link to="/pricing" className='fs-5 nav-link'>التعليقات</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navba;
