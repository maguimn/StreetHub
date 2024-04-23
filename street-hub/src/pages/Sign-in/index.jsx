import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Login = () => {
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
              <h1>Faça seu Login</h1>
              <input className="usr put" placeholder="E-mail ou nome de usuário" type="text" />
              <br />
              <input
                id="pass"
                className="pss put"
                placeholder="Senha"
                type={passwordVisible ? 'text' : 'password'}
              />



              <a className="pass" href="">
                Esqueceu sua senha?
              </a>

              <input value="Sign In" id="btn" className="sub" type="submit" />
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
                <div className="logo2"></div>Fazer login com o Facebook
              </button>
              <button style={{ border: '2px solid' }} id="btn" className="sub pic google" type="submit">
                <i style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}
                  className="logo fab fa-google"></i>
                Fazer login com o Google
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
              <h1>Bem-Vindo de volta ao Street Hub</h1>
              <h4>Estamos feliz de ter você conosco novamente</h4>
              <div className="lines">
                <div className="line"></div>
                <p className="p-b">ou</p>
                <div className="line"></div>
              </div>
              <p className="pp">Não possui conta? Crie uma agora.</p>
              <Link to="/signup">
              <button className="main-btn">Criar Conta</button>
              </Link>
            </div>
          </div>
        </div >





      </div>

    </>

  );
};

export default Login;
