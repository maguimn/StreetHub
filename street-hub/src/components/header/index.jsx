import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LogoImg from '../../assets/logo-preto.png';
import { Link } from 'react-router-dom';



export function Header() {
    return (
        <header >

            <div className="logoImg">
                <Link to="/">
                    <img src={LogoImg} alt="Logo Street Hub" />
                </Link>
            </div>

            <div className='navColumn'>
                <div className="navBar">
                    <input type="search" placeholder='Pesquise' />

                </div>

                <div className='navLinks'>
                    <ul>
                        <li><Link to="/">Home </Link></li>
                        <li><Link to="/shoes"> Tênis</Link></li>
                        <li><Link to="/clothes">Roupas</Link></li>
                        <li><Link to="/acessories">Acessórios </Link></li>
                        <li><Link to="/sales">Sales</Link></li>
                    </ul>

                </div>
            </div>

            <div className='profile'>
                <Link to="/login">
               <button className='btnLogin'> Login </button>
                </Link>

                <Link to="/signup">
                    <button className='btnSignup'>Criar Conta </button>

                </Link>

            </div>

        </header>
    );
}


