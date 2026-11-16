const popup = document.createElement('section');
popup.id = 'vueling-newsletter-popup';

const title = document.createElement('h2');
title.textContent = '¡Vuela más por menos!';

const description = document.createElement('p');
description.textContent =
  'Suscríbete a la newsletter y descubre ofertas y novedades.';

popup.append(title, description);

const styles = document.createElement('style');
styles.textContent = `
  #vueling-newsletter-popup {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 9999;
    box-sizing: border-box;
    width: min(360px, calc(100vw - 32px));
    padding: 24px;
    border-radius: 16px;
    background-color: #ffec00;
    color: #333333;
    font-family: Arial, sans-serif;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  #vueling-newsletter-popup h2 {
    margin: 0 0 12px;
  }

  #vueling-newsletter-popup p {
    margin: 0;
    line-height: 1.5;
  }
`;

document.head.append(styles);
document.body.append(popup);