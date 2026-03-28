// Problem section — highlights pain points that the studio solves

import { SectionLabel } from '../components/ui/SectionLabel';
import { PROBLEM_CARDS } from '../constants';

export function Problem() {
  return (
    <section style={{ padding: '100px 0', background: 'var(--d1)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 680 }}>
          <SectionLabel>The Problem</SectionLabel>
          <h2
            className="df reveal"
            style={{ fontSize: 'clamp(36px,5.5vw,64px)', lineHeight: 1.05, marginBottom: 24 }}
          >
            GREAT BUSINESSES LOSE DEALS{' '}
            <span style={{ color: 'var(--r)' }}>BECAUSE OF WEAK DIGITAL PRESENCE</span>
          </h2>
          <p className="reveal" style={{ fontSize: 15, color: 'var(--m2)', lineHeight: 1.8, fontWeight: 300 }}>
            Your competitor ranks on Google. Their site looks polished. Yours doesn&apos;t exist — or worse, looks
            unprofessional. Customers decide in 3 seconds. Make sure they choose you.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: 2,
            marginTop: 56,
          }}
        >
          {PROBLEM_CARDS.map((c, i) => (
            <div
              key={i}
              className={`reveal d${i + 1}`}
              style={{ background: 'var(--bk)', padding: '36px 28px', borderTop: '3px solid var(--r)' }}
            >
              <span className="mf" style={{ fontSize: 28, color: 'var(--r)', display: 'block', marginBottom: 14 }}>
                {c.icon}
              </span>
              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10 }}>{c.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--m2)', lineHeight: 1.7, fontWeight: 300 }}>{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problem;
