import React from "react";
import "./style.css";
import { Header } from "../../components/header/index";
import { Footer } from "../../components/footer/index";
import { Link } from "react-router-dom";
import LogoImg from '../../assets/Street-hub-azul.png';
export function About() {
    return (
        <>
            <Header />
            <div className="divcontainer">

                <div className="landing-page">
                    <div className="content">
                        <div className="container">
                            <div className="info">
                                <h1>Sobre Nós</h1>
                                <p>Em StreetHub, concentramo-nos em apresentar de forma sucinta e direta os detalhes essenciais.
                                    Saiba tudo sobre a faixa de preço de peças exclusivas, os tamanhos disponíveis e, o mais importante,
                                    as lojas confiáveis e parceiras que recomendamos para suas compras. Nosso compromisso é proporcionar
                                    uma experiência de compra segura, conectando você às melhores opções do cenário streetwear.
                                    <br /> 
                                    <br />Explore a cultura, a inovação e o estilo que definem o streetwear através de StreetHub -
                                    onde a moda encontra a autenticidade.</p>
                                    <Link to="/">
                                <button>Voltar pra Home</button>
                                </Link>
                            </div>
                            <div className="image">
                                <img src={LogoImg} alt="Logo Street Hub" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}