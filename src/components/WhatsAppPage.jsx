import React from 'react';
import './WhatsAppPage.css';

const WhatsAppPage = () => {
  return (
    <div className="whatsapp-container">
      <header className="header">
        <div className="logo">WhatsApp</div>
        <nav className="nav-links">
          <a href="#">Features</a>
          <a href="#">Privacy</a>
          <a href="#">Help Center</a>
          <a href="#">Blog</a>
          <a href="#">For Business</a>
          <a href="#">Apps</a>
        </nav>
        <div className="buttons">
          <button className="login-btn">Log in</button>
          <button className="download-btn">Download</button>
        </div>
      </header>
      <main className="main-content">
        <h1>Chat on WhatsApp with +55 41 99628-4949</h1>
        <button className="chat-btn">Continue to Chat</button>
        <p>
          Don’t have WhatsApp yet? <a href="#">Download</a>
        </p>
      </main>
      <footer className="footer">
        <div className="footer-section">
          <h3>WhatsApp</h3>
          <button className="download-footer-btn">Download</button>
        </div>
        <div className="footer-links">
          <div>
            <h4>What we do</h4>
            <a href="#">Features</a>
            <a href="#">Blog</a>
            <a href="#">Security</a>
            <a href="#">For Business</a>
          </div>
          <div>
            <h4>Who we are</h4>
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Brand Center</a>
            <a href="#">Privacy</a>
          </div>
          <div>
            <h4>Use WhatsApp</h4>
            <a href="#">Android</a>
            <a href="#">iPhone</a>
            <a href="#">Mac/PC</a>
            <a href="#">WhatsApp Web</a>
          </div>
          <div>
            <h4>Need help?</h4>
            <a href="#">Contact Us</a>
            <a href="#">Help Center</a>
            <a href="#">Apps</a>
            <a href="#">Security Advisories</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WhatsAppPage;