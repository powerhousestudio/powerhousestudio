// Process section — four-step workflow visualization

import { SectionLabel } from '../components/ui/SectionLabel';
import { PROCESS_STEPS } from '../constants';

export function Process() {
  return (
    <section style={{ padding: '100px 0', background: 'var(--d1)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel>How We Work</SectionLabel>
        <h2
          className="df reveal"
          style={{ fontSize: 'clamp(38px,5.5vw,62px)', lineHeight: 1.05, marginBottom: 64 }}
        >
          IDEA TO LIVE <span style={{ color: 'var(--r)' }}>IN DAYS</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 2 }}>
          {PROCESS_STEPS.map((s, i) => (
            <div
              key={i}
              className={`reveal d${i + 1}`}
              style={{
                padding: '36px 24px',
                background: 'var(--bk)',
                borderLeft: i === 0 ? '3px solid var(--r)' : '1px solid var(--bd)',
                position: 'relative',
              }}
            >
              <span
                className="df"
                style={{
                  fontSize: 88,
                  color: 'rgba(220,38,38,.05)',
                  position: 'absolute',
                  top: 8,
                  right: 12,
                  lineHeight: 1,
                }}
              >
                {s.n}
              </span>
              <span
                className="mf"
                style={{ fontSize: 10, color: 'var(--r)', letterSpacing: '.14em', display: 'block', marginBottom: 18 }}
              >
                {s.n}
              </span>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--m2)', lineHeight: 1.7, fontWeight: 300 }}>{s.description}</p>
              {i < PROCESS_STEPS.length - 1 && (
                <span
                  style={{
                    position: 'absolute',
                    right: -10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--r)',
                    fontSize: 22,
                    zIndex: 2,
                  }}
                >
                  ›
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
