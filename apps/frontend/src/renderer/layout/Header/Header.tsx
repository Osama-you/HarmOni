import './style.css';

import { useMemo } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import hornsImageSource from '../../assets/images/horns.png';
import { useMobileNav } from '../../hooks/useMobileNav';
import type { HeaderProps } from './Header.types';
import { Brand } from './styles';

function Header({ name = '' }: HeaderProps) {
  const nameCharacters = useMemo(() => {
    return name
      .split('')
      .map((char, index) => <span key={`${char + index}`}>{char}</span>);
  }, [name]);

  const { toggleMobileNav } = useMobileNav();

  return (
    <header className="header">
      <div className="content">
        <Brand characterCount={name.length} className="brand">
          <div className="horns-icon">
            <img
              src={hornsImageSource}
              style={{ width: 'auto', height: '100%' }}
              alt="Horns logo"
            />
          </div>
          <h3>{nameCharacters}</h3>
        </Brand>
        <div className="actions">
          <div
            className="option navigation"
            onClick={toggleMobileNav}
            aria-label="navigation Menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleMobileNav()}
          >
            <div className="content">
              <div className="icon">
                <div className="line">
                  <div className="content" />
                </div>
                <div className="line">
                  <div className="content" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
