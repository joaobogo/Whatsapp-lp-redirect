import React from 'react';
import './WhatsAppPage.css';
import logo from '../assets/no-background-logo.png';

const WhatsAppPage = () => {
  return (
    <div className="whatsapp-container">
      {/* Header Section */}
      <header className="header">
        <button className="menu-icon">☰</button>
        <div className="logo">
          <img src={logo} alt="WhatsApp Logo" />
        </div>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <h1>Conversar com +55 41 99628-4949 no WhatsApp</h1>
        <button className="chat-btn">Iniciar conversa</button>
        <p>
          Ainda não tem o WhatsApp? <a href="#">Baixar</a>
        </p>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <button className="footer-download-btn">Baixar</button>

        {/* Social Media Icons */}
        <div className="footer-icons">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div>
            <h4>O que fazemos</h4>
            <ul>
              <li><a href="#">Recursos</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Segurança</a></li>
              <li><a href="#">Para empresas</a></li>
            </ul>
          </div>
          <div>
            <h4>Quem somos</h4>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Central de marcas</a></li>
              <li><a href="#">Privacidade</a></li>
            </ul>
          </div>
          <div>
            <h4>Use o WhatsApp</h4>
            <ul>
              <li><a href="#">Android</a></li>
              <li><a href="#">iPhone</a></li>
              <li><a href="#">Mac/PC</a></li>
              <li><a href="#">WhatsApp Web</a></li>
            </ul>
          </div>
          <div>
            <h4>Precisa de ajuda?</h4>
            <ul>
              <li><a href="#">Fale conosco</a></li>
              <li><a href="#">Central de ajuda</a></li>
              <li><a href="#">Apps</a></li>
              <li><a href="#">Alertas de Segurança</a></li>
            </ul>
          </div>
        </div>

        {/* Sitemap and Language Selector */}
        <div className="sitemap">
          <p>Sitemap | Termos e Política de Privacidade</p>
          <p>2024 © WhatsApp LLC</p>
          <div className="language-selector">
            <select>
              <option>Português (Brasil)</option>
              <option>English</option>
              <option>Español</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WhatsAppPage;
