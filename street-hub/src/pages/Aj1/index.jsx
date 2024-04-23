import React from "react";
import './style.css';
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import AirJ1 from "../../assets/aj1.png"
export default function Aj1() {
    return (

        <>
            <Header />


            <div className="antiGlobal">
                <section class="section-a">
                    <div class="productContent">
                        <div>
                            <h1>Air Jordan 1.</h1>

                            <p>

                                O Air Jordan 1 é um icônico tênis de basquete lançado pela Nike em 1985,
                                em parceria com o lendário jogador Michael Jordan. Projetado por
                                Peter Moore, o sneaker revolucionou a indústria com seu design inovador
                                e a introdução do logotipo "Wings" e do Swoosh. Com sua paleta de cores
                                ousadas e materiais premium, o Air Jordan 1 transcendeu as quadras e se
                                tornou um símbolo de estilo de rua. Ao longo dos anos, diversas versões
                                e colaborações foram lançadas, solidificando seu estatuto como um
                                clássico atemporal na cultura sneaker.
                            </p>
                            <a href="https://blog.jdsports.pt/air-jordan-1-historia-e-curiosidades/" class="btn">Saiba Mais</a>
                        </div>
                        <img src={AirJ1} alt="Air Jordan 1" />
                    </div>
                </section>



            </div>

            <Footer />
        </>
    );
}