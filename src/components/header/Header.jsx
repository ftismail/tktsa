import React from 'react';
import Searchbar from '../searchbar/Searchbar';
import {Col,Row} from 'react-bootstrap';

import './header.css'
import Navba from './navbar/Navbar';
import DropBtn from '../drop-down/DropBtn';
const Header = () => {
    return (
        <header >
            <Row className='top-header container py-3'>
                <Col  className="language d-lg-block d-none">   
                <DropBtn/> 
                </Col>
                <Col lg={6} className="site-title text-align-center"> 
                    <h1 className=''>التحول المعرفي</h1>
                    <h4>سبل و مراحل</h4>
                </Col>
                <Col className="search-container d-lg-block d-none ">
                    <Searchbar/>
                </Col>
            </Row>
            <Navba/>
            
        </header>
    );
}

export default Header;
