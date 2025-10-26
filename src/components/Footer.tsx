interface FooterProps {
  language?: 'fr' | 'en';
}

function Footer({ language = 'fr' }: FooterProps) {
  return <h1>Footer {language}</h1>;
}

export default Footer;
