import React from "react";
import "./style.css";
import { Header } from "../../components/header/index";
import { Footer } from "../../components/footer/index";
import { Link } from "react-router-dom";
import LogoImg from '../../assets/Street-hub-azul.png';
export function Doubts() {
    return (
        <>
            <Header />
            <div className="divcontainer">

                <div className="landing-page">
                    <div className="content">
                        <div className="container">
                            <div className="info">
                                <h1>Dúvidas Frequentes</h1>

                                <h3>O que é o StreetHub?</h3>
                                <p>O StreetHub é uma plataforma dedicada ao universo do streetwear,
                                    onde você pode explorar a história das marcas, informações sobre
                                    produtos, faixas de preço e tamanhos disponíveis.</p>

                                    <br />
                                    <br />


                                <h3>Como posso confiar nas informações apresentadas?</h3>
                                <p>Nosso compromisso é fornecer informações precisas e confiáveis.
                                    Estabelecemos parcerias com lojas respeitáveis, como Artwalk,
                                    Maze, Authentic Feet e Pineapple.co, para garantir a autenticidade
                                    das informações.</p>
                                    <br />
                                    <br />

                                <h3>O StreetHub realiza vendas diretamente?</h3>
                                <p>Não, o StreetHub é uma plataforma informativa. Não realizamos vendas
                                    diretamente, mas indicamos lojas confiáveis e parceiras onde você
                                    pode adquirir os produtos apresentados.</p>
                                    <br />
                                    <br />

                                <h3>Como faço para comprar produtos apresentados no site?</h3>
                                <p>Para comprar, basta seguir o link direto para as lojas parceiras
                                    recomendadas, como Artwalk, Maze, Authentic Feet e Pineapple.co,
                                    onde você encontrará as opções disponíveis para compra.</p>

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