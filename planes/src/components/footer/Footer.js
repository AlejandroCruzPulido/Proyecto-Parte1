import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "../footer/Footer.css"
import "../css/Style.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='words'>
        <h3>Síguenos en redes sociales</h3>
      </div>
      <div className='icons'>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div className='duty'>
        <p>Derechos de autor © 2023 Museo Alquitran. Todos los derechos reservados.</p>
        </div>
        <div className='privacy'>
        <p>
          <a href="/privacy-policy">Política de privacidad</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;


