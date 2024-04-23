import React from "react";
import "./style.css";
import { Header } from "../../components/header/index";
import { Footer } from "../../components/footer/index";
import LogoImg from '../../assets/Street-hub-azul.png';
import { Link } from "react-router-dom";
export function Privacy() {
    return (
        <>
            <Header />
            <div className="divcontainer">

                <div className="landing-page">
                    <div className="content">
                        <div className="container">
                            <div className="info">
                                <h1>Políticas de Privacidade</h1>
                                <p>O StreetHub prioriza a privacidade e a segurança dos seus usuários.
                                    Não compartilhamos informações pessoais com terceiros sem consentimento.
                                    Coletamos dados estritamente necessários para aprimorar a experiência
                                    do usuário, como histórico de navegação e preferências.
                                    Utilizamos tecnologias seguras para proteger suas informações.
                                    Ao utilizar o StreetHub, você concorda com nossa Política de Privacidade,
                                    assegurando uma experiência confiável e personalizada.
                                </p>
                                <Link to="/">
                                <button>Voltar pra Home</button>
                                </Link>
                            </div>
                            <div className="image">
                                <img src={LogoImg} alt="Description" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}