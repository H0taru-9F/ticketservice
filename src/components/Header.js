import React, { useState, useEffect } from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import './styles/header.css';
import {LOCALSTORE_USER} from "../data/constants";


const Header = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoginStatus = window.localStorage.getItem(LOCALSTORE_USER);
        if (storedLoginStatus) {
            setLoggedIn(true);
        }
    }, []);

    return(
        <header className="App-header bg-header">
            <Navbar>
                <Container>
                    <Navbar.Brand href="/">
                        <div className='Logo-header'>

                            <svg className='SVG-logo-header' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <g clipPath="url(#clip0_172_41)">
                                    <path d="M53.4375 16.875C52.0275 18.285 50.9016 18.75 48.75 18.75C44.4469 18.75 41.25 15.5531 41.25 11.25C41.25 9.09844 41.715 7.9725 43.125 6.5625L37.5 0.9375L0.9375 37.5L6.5625 43.125C7.9725 41.715 9.09844 41.25 11.25 41.25C15.5531 41.25 18.75 44.4469 18.75 48.75C18.75 50.9016 18.285 52.0275 16.875 53.4375L22.5 59.0625L59.0625 22.5L53.4375 16.875Z" stroke="#3E7ED8" strokeWidth="2" strokeMiterlimit="10"/>
                                    <path d="M24.375 14.0625L28.125 17.8125" stroke="#3E7ED8" strokeWidth="2" strokeMiterlimit="10"/>
                                    <path d="M42.1875 31.875L45.9375 35.625" stroke="#3E7ED8" strokeWidth="2" strokeMiterlimit="10"/>
                                    <path d="M30 19.6875L33.75 23.4375" stroke="#3E7ED8" strokeWidth="2" strokeMiterlimit="10"/>
                                    <path d="M36.5625 26.25L40.3125 30" stroke="#3E7ED8" strokeWidth="2" strokeMiterlimit="10"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_172_41">
                                        <rect width="60" height="60" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                            <p className='title-logo-header tx-grayText Display-2'>Ракета</p>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className='button-header Button-text-1'>
                            <Nav.Link className='Home-header' href='/'><b className='tx-grayText'>Головна</b></Nav.Link>
                            <Nav.Link className='Branches' href='/procedurerooms'><b className='tx-grayText'>Філії</b></Nav.Link>
                            <Nav.Link className='BusTickets' href='/schedule'><b className='tx-grayText'>Квитки</b></Nav.Link>
                        </Nav>
                        {isLoggedIn ? (
                            <Nav className='button-header Button-text-1'>
                                <Nav.Link className=' Button-text-1' href='/account'><b className='tx-grayText'>Аккаунт</b></Nav.Link>
                            </Nav>
                        ) : (
                            <a className='button-login tx-header bg-blue Button-text-1' href='/login'>Увійти</a>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;