interface HeaderProps {
  language?: 'fr' | 'en';
  setLanguage: any;
}

function Header({ language = 'fr', setLanguage }: HeaderProps) {
  return (
    <div className='header'>
      <div className='header-left'>
        <img className='logo' src='./images/logo.png' alt='Logo' />
        <div className='title'>Sandbix</div>
      </div>
      <div
        className='language'
        onClick={() => {
          const newLanguage = language === 'fr' ? 'en' : 'fr';
          localStorage.setItem('language', newLanguage);
          setLanguage(newLanguage);
        }}
      >
        {language === 'fr' ? 'EN' : 'FR'}
      </div>
    </div>
  );
}

export default Header;
