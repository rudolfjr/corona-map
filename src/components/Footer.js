import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; { new Date().getFullYear() }, Criado por <a href="">rudolf.dev</a></p>
      </Container>
    </footer>
  );
};

export default Footer;
