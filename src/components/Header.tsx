interface HeaderProps {
  language?: 'fr' | 'en';
  setLanguage: (newLanguage: 'fr' | 'en') => void;
}

function Header({ language = 'fr', setLanguage }: HeaderProps) {
  return (
    <div className='header'>
      <div className='header-left'>
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
