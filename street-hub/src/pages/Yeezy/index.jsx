import React from "react";
import '../Aj1/style.css';
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import Ye from "../../assets/Yeezy500.png"
export default function Yeezy() {
    return (

        <>
            <Header />


            <div className="antiGlobal">
                <section class="section-a">
                    <div class="productContent">
                        <div>
                            <h1>Yeezy 500.</h1>

                            <p>

                                O Yeezy 500 é um tênis de moda urbana criado em colaboração entre a Adidas
                                e o famoso rapper Kanye West. Lançado pela primeira vez em 2018, o Yeezy 500
                                se destaca por sua estética única, caracterizada por linhas robustas e uma s
                                ilhueta volumosa. O design minimalista, combinado com materiais de alta
                                qualidade, como camurça, couro e malha, contribui para uma estética
                                contemporânea e versátil. A ausência de logotipos chamativos reforça a
                                abordagem clean e moderna do tênis. Com diversas colorways lançadas desde
                                sua estreia, o Yeezy 500 consolidou-se como um item de desejo na cultura
                                sneaker, refletindo a influência de Kanye West não apenas na música, mas
                                também na moda.
                            </p>
                            <a href="https://www.xogangbrazil.com/blogs/novidades/historia-adidas-yeezy" class="btn">Saiba Mais</a>
                        </div>
                        <img src={Ye} alt="Yeezy" />
                    </div>
                </section>



            </div>

            <Footer />
        </>
    );
}