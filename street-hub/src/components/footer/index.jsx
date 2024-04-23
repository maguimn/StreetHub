import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Privacy } from '../../pages/privacy';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Sobre Nós</h6>
            <p className="text-justify">Street Hub, o seu destino definitivo para explorar e mergulhar no emocionante universo do streetwear. Neste espaço vibrante e dinâmico, reunimos cuidadosamente informações sobre os produtos mais estilosos e as lojas mais cobiçadas pelo público apaixonado por moda urbana. Seja você um entusiasta do streetwear de longa data ou alguém que está apenas começando a explorar esse estilo único, o Street Hub é a sua plataforma central para descobrir, inspirar-se e conectar-se com as últimas tendências do streetwear. Entre, explore e mergulhe no mundo da moda urbana como nunca antes. Street Hub - onde a cultura urbana se encontra com a moda de maneira inovadora e autêntica.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Lojas Parceiras</h6>
            <ul className="footer-links">
              <li><a href="https://www.maze.com.br/">Maze</a></li>
              <li><a href="https://artwalk.com.br/">Artwalk</a></li>
              <li><a href="https://artwalk.com.br/">AuthenticFeet</a></li>
              <li><a href="https://www.shop-pineapple.co/">Pineapple.co</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Páginas de Suporte</h6>
            <ul className="footer-links">
              <li><Link to="/about">Sobre Nós</Link></li>
              <li><Link to="/relationships">Nossas Ligações Com as Lojas</Link></li>
              <li><Link to="/privacy">Política de Privacidade</Link></li>
              <li><Link to="/doubts">Dúvidas Frequentes</Link></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 Todos os direitos reservados a
              <Link to="/"> Street Hub</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="instagram" href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a className="twitter" href="#"><i className="fab fa-x"></i></a></li>
              <li><a className="youtube" href="#"><i className="fab fa-youtube"></i></a></li>
              <li><a className="whatsapp" href="#"><i className="fab fa-whatsapp"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
