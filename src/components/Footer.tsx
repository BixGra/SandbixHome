interface FooterProps {
  language?: 'fr' | 'en';
}

function Footer({ language = 'fr' }: FooterProps) {
  return (
    <div className='footer'>
      <div className='footer-grid'>
        <a href='mailto:bixente.grandjean@gmail.com' target='_blank'>
          Mail
        </a>
        <a href='https://me.sandbix.fr' target='_blank'>
          Portfolio
        </a>
        <a href='https://github.com/bixgra' target='_blank'>
          GitHub
        </a>
        <a
          href='https://bsky.app/profile/did:plc:i7dstf2xx7p36hsav6ltfemt'
          target='_blank'
        >
          Contact
        </a>
        <a
          href='https://bsky.app/profile/did:plc:oebjzviw26bgl3uctou4d6gt'
          target='_blank'
        >
          Bluesky
        </a>
        <a href='#top'>
          {language === 'fr' ? 'Retour en haut' : 'Back to top'}
        </a>
      </div>
      <div className='footer-bottom'>Bixente Grandjean - 2025</div>
    </div>
  );
}

export default Footer;
