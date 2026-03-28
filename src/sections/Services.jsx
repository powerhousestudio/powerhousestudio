// Services section — displays the four core service offerings in a grid

import { SectionLabel } from '../components/ui/SectionLabel';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { WA } from '../constants';
import { services } from '../data/services';

export function Services() {
  return (
    <section id="services" style={{ padding: '120px 0', background: 'var(--bk)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 24,
            marginBottom: 60,
          }}
        >
          <div>
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="df reveal" style={{ fontSize: 'clamp(38px,5.5vw,62px)', lineHeight: 1.05 }}>
              SERVICES THAT
              <br />
              <span style={{ color: 'var(--r)' }}>DRIVE REVENUE</span>
            </h2>
          </div>
          <p
            className="reveal"
            style={{ fontSize: 14, color: 'var(--m2)', maxWidth: 300, lineHeight: 1.7, fontWeight: 300 }}
          >
            Every product engineered for one outcome: more customers, less manual work.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: 2 }}>
          {services.map((s, i) => (
            <Card
              key={i}
              className={`reveal d${(i % 4) + 1}`}
              style={{ padding: '36px 28px', position: 'relative', overflow: 'hidden' }}
            >
              <span
                className="df"
                style={{
                  position: 'absolute',
                  top: 12,
                  right: 16,
                  fontSize: 80,
                  color: 'rgba(255,255,255,.03)',
                  lineHeight: 1,
                }}
              >
                {s.n}
              </span>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                <span className="mf" style={{ fontSize: 10, color: 'var(--m)', letterSpacing: '.12em' }}>
                  {s.n}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: 'var(--r)',
                    background: 'rgba(220,38,38,.1)',
                    padding: '4px 10px',
                  }}
                >
                  Let&apos;s Talk
                </span>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 5 }}>{s.title}</h3>
              <p
                style={{
                  fontSize: 11,
                  color: 'var(--r)',
                  fontWeight: 600,
                  marginBottom: 14,
                  letterSpacing: '.06em',
                  textTransform: 'uppercase',
                }}
              >
                {s.tag}
              </p>
              <p
                style={{ fontSize: 13, color: 'var(--m2)', lineHeight: 1.7, marginBottom: 24, fontWeight: 300 }}
              >
                {s.description}
              </p>
              <ul style={{ listStyle: 'none' }}>
                {s.features.map((f, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 12,
                      color: 'rgba(255,255,255,.55)',
                      padding: '5px 0',
                      borderBottom: '1px solid var(--bd)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <span style={{ color: 'var(--r)', fontSize: 10, flexShrink: 0 }}>◆</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href={WA}
                target="_blank"
                style={{ marginTop: 28, width: '100%', justifyContent: 'center', fontSize: 12, padding: '12px 0' }}
              >
                Enquire Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
