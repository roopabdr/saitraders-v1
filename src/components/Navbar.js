import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* 
https://www.iconfinder.com/iconsets/spring-flat-11
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
            <Link to='/'>
                <img src={logo} alt="store" className="navbar-brand">
                </img>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5"></li>
                <Link to="/" className="nav-link">
                    Sai Traders Products
                </Link>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                    </span>
                    My Cart
                </ButtonContainer>
            </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;