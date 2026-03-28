// Sticky navigation bar with scroll-aware background transition

import { useState, useEffect } from 'react';
import { WaIcon } from '../ui/WaIcon';
import { Button } from '../ui/Button';
import { WA, NAV_LINKS } from '../../constants';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        padding: '18px 0',
        background: scrolled ? 'rgba(8,8,8,.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--bd)' : 'none',
        transition: 'all .4s',
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div
            style={{
              width: 30,
              height: 30,
              background: 'var(--r)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span className="df" style={{ fontSize: 18, color: '#fff', lineHeight: 1 }}>P</span>
          </div>
          <span className="df" style={{ fontSize: 19, color: '#fff', letterSpacing: '.1em' }}>
            POWERHOUSE <span style={{ color: 'var(--r)' }}>STUDIO</span>
          </span>
        </a>

        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{ color: 'var(--m2)', fontSize: 13, fontWeight: 500, textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={(e) => (e.target.style.color = '#fff')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--m2)')}
            >
              {label}
            </a>
          ))}
        </div>

        <Button href={WA} target="_blank" style={{ fontSize: 13, padding: '10px 22px' }}>
          <WaIcon size={15} /> Free Consultation
        </Button>
      </div>
    </nav>
  );
}

export default Nav;
