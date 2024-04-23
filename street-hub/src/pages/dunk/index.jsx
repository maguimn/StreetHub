import React from "react";
import '../Aj1/style.css';
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import DunkImg from "../../assets/DunkImg.png"
export default function Dunk() {
    return (

        <>
            <Header />


            <div className="antiGlobal">
                <section class="section-a">
                    <div class="productContent">
                        <div>
                            <h1>Nike dunk Low.</h1>

                            <p>

                                O Nike Dunk Low é um clássico tênis de basquete que ganhou destaque desde
                                seu lançamento original em 1985. Reconhecido por sua silhueta elegante e
                                versátil, o Dunk Low tornou-se um ícone tanto nas quadras como nas ruas.
                                Com um design simples e clean, o modelo apresenta uma parte superior de
                                couro durável e uma entressola que oferece excelente suporte. O apelo
                                estético do Dunk Low é amplificado por uma variedade de cores vibrantes
                                e colaborações exclusivas ao longo dos anos, tornando-o uma escolha
                                popular entre os entusiastas de sneakers. Sua capacidade de se adaptar
                                a diferentes estilos e tendências contribui para a atemporalidade do
                                Dunk Low, consolidando seu lugar como um dos modelos mais emblemáticos
                                da linha Nike.
                            </p>
                            <a href="https://manualdohomemmoderno.com.br/tenis/nike-dunk-conheca-sua-historia-e-saiba-por-que-ele-e-o-tenis-do-momento" class="btn">Saiba Mais</a>
                        </div>
                        <img src={DunkImg} alt="Nike Dunk Low" />
                    </div>
                </section>



            </div>

            <Footer />
        </>
    );
}