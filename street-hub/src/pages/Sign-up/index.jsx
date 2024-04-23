import React, { useState } from 'react';
import '../Sign-in/style.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const showPassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <div className='signIn-Page'>
                <div className="login">
                    <div className="main-login">
                        <div className="top">

                        <Link to="/login">
                            <button>Login</button>
                            </Link>

                            <Link to="/signup">
                            <button>Registre-se</button>
                            </Link>
                        </div>
                        <form>
                            <h1>Crie sua Conta</h1>
                            <input className="usr put" placeholder="Insira o seu e-mail" type="email" />
                            <br />


                            <input className='usr put' placeholder='Insira o seu Nome de Usuário' type="text" />
                            <br />
                            <input
                                id="pass"
                                className="pss put"
                                placeholder="Crie uma nova senha"
                                type={passwordVisible ? 'text' : 'password'}
                            />
                            <br />
                            <input
                                id="pass"
                                className="pss put"
                                placeholder="Redigite essa senha"
                                type={passwordVisible ? 'text' : 'password'}
                            />

                            <br />
                            <br />


                            <input value="Criar Conta" id="btn" className="sub" type="submit" />
                            <div className="lines">
                                <div style={{ backgroundColor: '#a5a5a5' }} className="line"></div>
                                <p style={{ color: '#a5a5a5' }} className="p-b">
                                    ou
                                </p>
                                <div style={{ backgroundColor: '#a5a5a5' }} className="line"></div>
                            </div>
                            <button
                                style={{ border: '2px solid' }}
                                id="btn"
                                className="sub pic facebook"
                                type="submit"
                            >
                                <div className="logo2"></div>Crie sua conta com o Facebook
                            </button>
                            <button style={{ border: '2px solid' }} id="btn" className="sub pic google" type="submit">
                                <i style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}
                                    className="logo fab fa-google"></i>
                                Crie sua conta com o Google
                            </button>
                        </form>
                    </div>
                    <div className="banner">
                        <div className="blob">

                        </div>
                        <div className="blob">
                            <Link to="/">
                                <i className="fas fa-home home-icon"></i>
                            </Link>
                        </div>
                        <div className="contain">
                            <h1>Seja Bem-Vindo ao Street Hub</h1>
                            <h4>Estamos feliz em recebe-lo</h4>
                            <div className="lines">
                                <div className="line"></div>
                                <p className="p-b">ou</p>
                                <div className="line"></div>
                            </div>
                            <p className="pp">Já possui uma conta? Faça Login agora.</p>
                            <Link to="/login">
                            <button className="main-btn">Login</button>
                            </Link>
                        </div>
                    </div>
                </div >





            </div>

        </>

    );
};

export default SignUp;
