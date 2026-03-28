// CTA section — final call-to-action with contact buttons

import { SectionLabel } from '../components/ui/SectionLabel';
import { Button } from '../components/ui/Button';
import { WaIcon } from '../components/ui/WaIcon';
import { WA, EMAIL } from '../constants';

export function CTA() {
  return (
    <section id="contact" style={{ padding: '140px 0', background: 'var(--d2)', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 700,
          height: 700,
          background: 'radial-gradient(circle,rgba(220,38,38,.09) 0%,transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 780,
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <SectionLabel centered>Ready?</SectionLabel>
        <h2
          className="df reveal"
          style={{ fontSize: 'clamp(50px,8vw,96px)', lineHeight: 0.93, marginBottom: 22 }}
        >
          LET&apos;S BUILD
          <br />
          <span style={{ color: 'var(--r)' }}>SOMETHING GREAT.</span>
        </h2>
        <p
          className="reveal"
          style={{
            fontSize: 15,
            color: 'var(--m2)',
            maxWidth: 420,
            margin: '0 auto 46px',
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          Whether you&apos;re a business that needs a website or a startup that needs to build a product — let&apos;s
          talk about what you need.
        </p>

        <div className="reveal" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button href={WA} target="_blank" style={{ fontSize: 16, padding: '17px 36px' }}>
            <WaIcon size={20} /> WhatsApp Us Now
          </Button>
          <Button variant="outline" href={`mailto:${EMAIL}`} style={{ fontSize: 16, padding: '17px 36px' }}>
            Send an Email
          </Button>
        </div>

        <p className="reveal" style={{ fontSize: 11, color: 'var(--m)', marginTop: 22, fontWeight: 300 }}>
          Replies within 30 min · Mon–Sat 9AM–7PM · Fully Remote
        </p>
      </div>
    </section>
  );
}

export default CTA;
