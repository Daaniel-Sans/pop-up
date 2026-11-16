(() => {
  if (document.getElementById('vueling-newsletter-popup')) {
    return;
  }

  const popup = document.createElement('section');
  popup.id = 'vueling-newsletter-popup';
  
  const title = document.createElement('h2');
  title.textContent = '¡Vuela más por menos!';
  
  const description = document.createElement('p');
  description.textContent =
    'Suscríbete a la newsletter y descubre ofertas y novedades.';
  
  const emailLabel = document.createElement('label');
  emailLabel.htmlFor = 'vueling-newsletter-email';
  emailLabel.textContent = 'Tu correo electrónico';
  
  const emailInput = document.createElement('input');
  emailInput.id = 'vueling-newsletter-email';
  emailInput.type = 'email';
  emailInput.placeholder = 'nombre@ejemplo.com';
  emailInput.autocomplete = 'email';
  
  const ctaLink = document.createElement('a');
  ctaLink.href =
    'https://www.vueling.com/es/servicios-vueling/mas-servicios-vueling/newsletter-vuela';
  ctaLink.textContent = 'Descubre la newsletter';
  
  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.textContent = '×';
  closeButton.setAttribute('aria-label', 'Cerrar banner');
  closeButton.addEventListener('click', () => {
    popup.remove();
    styles.remove();
  });
  
  popup.append(closeButton, title, description, emailLabel, emailInput, ctaLink);
  
  const styles = document.createElement('style');
  styles.textContent = `
    #vueling-newsletter-popup {
      position: fixed;
      right: 24px;
      bottom: 24px;
      transform: translateX(calc(100% + 24px));
      visibility: hidden;
      opacity: 0;
      z-index: 9999;
      box-sizing: border-box;
      width: min(360px, calc(100vw - 32px));
      padding: 24px;
      padding-top: 40px;
      border-radius: 16px;
      background-color: #ffec00;
      color: #333333;
      font-family: Arial, sans-serif;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }
  
    #vueling-newsletter-popup button {
      position: absolute;
      top: 8px;
      right: 12px;
      border: 0;
      background: transparent;
      color: inherit;
      font-size: 24px;
      cursor: pointer;
    }
  
    #vueling-newsletter-popup h2 {
      margin: 0 0 12px;
    }
  
    #vueling-newsletter-popup p {
      margin: 0;
      line-height: 1.5;
    }
  
    #vueling-newsletter-popup label {
      display: block;
      margin-top: 16px;
      font-weight: 700;
    }
  
    #vueling-newsletter-popup input {
      box-sizing: border-box;
      width: 100%;
      margin: 8px 0 16px;
      padding: 12px;
      border: 1px solid #777777;
      border-radius: 8px;
      font: inherit;
    }
  
    #vueling-newsletter-popup a {
      display: block;
      padding: 12px;
      border-radius: 8px;
      background-color: #333333;
      color: #ffffff;
      font-weight: 700;
      text-align: center;
      text-decoration: none;
    }
  
    #vueling-newsletter-popup a:hover {
      background-color: #555555;
    }
  `;
  
  document.head.append(styles);
  popup.style.transition = 'transform 500ms ease, opacity 500ms ease';
  document.body.append(popup);
  
  window.setTimeout(() => {
    popup.style.visibility = 'visible';
    requestAnimationFrame(() => {
      popup.style.transform = 'translateX(0)';
      popup.style.opacity = '1';
    });
  }, 3000);
})();