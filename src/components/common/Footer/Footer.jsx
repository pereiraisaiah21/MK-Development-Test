import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"

/**
 * Componente Footer
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
        <footer className="Footer">
            <div className="container">
                <div className="Footer__newsletter">
                    <div className="Footer__newsletter-text">
                        Receba nossas novidades assinando a newsletter!
                    </div>
                    <div className="Footer__newsletter-form">
                        <input type="email" className="Footer__newsletter-input" placeholder="Seu e-mail" />
                        <button className="Footer__newsletter-button">Assinar</button>
                    </div>
                </div>
                <div className="Footer__pages">
                    <div className="Footer__pages-list">
                        <a href="/">Página 1</a>
                        <a href="/produtos">Página 2</a>
                        <a href="/contato">Página 3</a>
                        <a href="/sobre">Página 4</a>
                    </div>
                    <div className="Footer__social-icons">
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
                <div className="Footer__bottom">
                    <div className="Footer__rights">© 2024 Todos os direitos reservados</div>
                    <div className="Footer__logo">Logo</div>
                    <div className="Footer__terms">
                        <a href="/privacidade">Termos de Privacidade</a>
                        <a href="/politicas">Políticas</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
