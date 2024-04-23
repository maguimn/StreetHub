import React from "react";
import "./style.css";
import { Header } from "../../components/header/index";
import { Footer } from "../../components/footer/index";
import LogoImg from '../../assets/Street-hub-azul.png';
import { Link } from "react-router-dom";
export function Relationships() {
    return (
        <>
            <Header />
            <div className="divcontainer">

                <div className="landing-page">
                    <div className="content">
                        <div className="container">
                            <div className="info">
                                <h1>Nossas Ligações com as Lojas</h1>
                                <p>Nossa relação com as lojas é importante para que possamos oferecer
                                    aos nossos clientes as melhores opções, quando quiserem comprar
                                    novos looks.
                                    <br />
                                    <br />
                                    Sabemos que as pessoas ficam indecisas do que comprar em determinadas
                                    situações, por isso fizemos diversas parcerias para que adquirissemos
                                    exclusivades nos nossos produtos.</p>
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