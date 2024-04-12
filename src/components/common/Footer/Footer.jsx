import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"

/**
 * Componente footer
 * 
 * Descrição: Este componente  é responsável por renderizar o rodapé.
 * 
 * @component
 * @example
 * // Exemplo de uso
 * <Footer />
 * 
 * @returns {JSX.Element} O componente renderizado.
 */
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>MKS sistemas © Todos os direitos reservados</p>
                {/* <div className="footer__newsletter">
                    <div className="footer__newsletter-text">
                        Receba nossas novidades assinando a newsletter!
                    </div>
                    <div className="footer__newsletter-form">
                        <input type="email" className="footer__newsletter-input" placeholder="Seu e-mail" />
                        <button className="footer__newsletter-button">Assinar</button>
                    </div>
                </div>
                <div className="footer__pages">
                    <div className="footer__pages-list">
                        <a href="/">Página 1</a>
                        <a href="/produtos">Página 2</a>
                        <a href="/contato">Página 3</a>
                        <a href="/sobre">Página 4</a>
                    </div>
                    <div className="footer__social-icons">
                        <a href="">
                            <FaTwitter />
                        </a>
                        <a href="">
                            <FaFacebook />
                        </a>
                        <a href="">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__rights">© 2024 Todos os direitos reservados</div>
                    <div className="footer__logo">Logo</div>
                    <div className="footer__terms">
                        <a href="/privacidade">Termos de Privacidade</a>
                        <a href="/politicas">Políticas</a>
                    </div>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer
