// Site footer — branding, service links, company links, and contact info

import { WaIcon } from '../ui/WaIcon';
import { Button } from '../ui/Button';
import { WA, FOOTER_SERVICES, FOOTER_COMPANY_LINKS, PHONE_NUMBER, EMAIL } from '../../constants';

export function Footer() {
  return (
    <footer style={{ background: 'var(--bk)', borderTop: '1px solid var(--bd)', padding: '60px 0 36px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
            gap: 48,
            marginBottom: 52,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  background: 'var(--r)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className="df" style={{ fontSize: 16, color: '#fff' }}>P</span>
              </div>
              <span className="df" style={{ fontSize: 17, letterSpacing: '.08em' }}>
                POWERHOUSE <span style={{ color: 'var(--r)' }}>STUDIO</span>
              </span>
            </div>
            <p style={{ fontSize: 11, color: 'var(--m)', lineHeight: 1.7, fontWeight: 300, maxWidth: 210 }}>
              Premium website development, business automation, and startup product building. Fully remote.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '.1em',
                color: '#fff',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              Services
            </h4>
            {FOOTER_SERVICES.map((s) => (
              <div key={s} style={{ fontSize: 12, color: 'var(--m)', padding: '4px 0', fontWeight: 300 }}>
                {s}
              </div>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '.1em',
                color: '#fff',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              Company
            </h4>
            {FOOTER_COMPANY_LINKS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{
                  fontSize: 12,
                  color: 'var(--m)',
                  padding: '4px 0',
                  fontWeight: 300,
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'color .2s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--m)')}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '.1em',
                color: '#fff',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              Contact
            </h4>
            <div style={{ fontSize: 12, color: 'var(--m)', lineHeight: 2.2, fontWeight: 300 }}>
              <div>📱 +91 75300 29716</div>
              <div>📧 {EMAIL}</div>
              <div>🌐 Fully Remote</div>
            </div>
            <Button href={WA} target="_blank" style={{ marginTop: 16, fontSize: 11, padding: '9px 18px' }}>
              <WaIcon size={13} /> WhatsApp Us
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--bd)',
            paddingTop: 22,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <span className="mf" style={{ fontSize: 9, color: 'var(--m)', letterSpacing: '.08em' }}>
            © 2025 POWERHOUSE STUDIO. ALL RIGHTS RESERVED.
          </span>
          <span className="mf" style={{ fontSize: 9, color: 'rgba(255,255,255,.1)', letterSpacing: '.06em' }}>
            A POWERHOUSE TECHNOLOGY COMPANY
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
