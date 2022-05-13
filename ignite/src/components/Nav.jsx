import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg'

const Nav = () => {
    return (
        <StyledNav>
            <Logo>
                <img src={logo} alt="Logo" />
                <h1>Ignite</h1>
            </Logo>
            <Search>
                <input type="text" />
                <button>Seacrch</button>
            </Search>
        </StyledNav>
    );
};

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img{
        width: 2rem;
        height: 2rem;
    }
`;

const Search = styled(motion.div)`
    input{
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        /* outline: thick double #32a1ce;; */
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
    }
    button{
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: steelblue;
        color: #fff;
    }
`;

export default Nav;