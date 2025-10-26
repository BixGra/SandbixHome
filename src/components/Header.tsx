interface HeaderProps {
  language?: 'fr' | 'en';
  setLanguage: any;
}

function Header({ language = 'fr', setLanguage }: HeaderProps) {
  return (
    <div className='header'>
      <div className='header-left'>
        <div className='logo'>Logo</div>
        <div className='title'>Title</div>
      </div>
      <div
        className='language'
        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
      >
        Language
      </div>
    </div>
  );
}

export default Header;
