// Why Us section — competitive advantages

import { SectionLabel } from '../components/ui/SectionLabel';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { WaIcon } from '../components/ui/WaIcon';
import { WA, WHY_US_REASONS } from '../constants';

export function WhyUs() {
  return (
    <section id="why-us" style={{ padding: '120px 0', background: 'var(--bk)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        <div
          className="two-col"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}
        >
          {/* Left column */}
          <div>
            <SectionLabel>Why Powerhouse</SectionLabel>
            <h2
              className="df reveal"
              style={{ fontSize: 'clamp(34px,4.5vw,54px)', lineHeight: 1.05, marginBottom: 24 }}
            >
              NOT JUST DEVS.
              <br />
              <span style={{ color: 'var(--r)' }}>YOUR GROWTH PARTNER.</span>
            </h2>
            <p
              className="reveal"
              style={{ fontSize: 15, color: 'var(--m2)', lineHeight: 1.8, marginBottom: 36, fontWeight: 300 }}
            >
              Most agencies hand you a website and disappear. We stay, iterate, and help your digital presence produce
              real results.
            </p>

            <Button href={WA} target="_blank" className="reveal">
              <WaIcon size={16} /> Start Free Consultation
            </Button>
          </div>

          {/* Right column — reasons grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {WHY_US_REASONS.map((r, i) => (
              <Card key={i} className={`reveal d${(i % 4) + 1}`} style={{ padding: '22px 18px' }}>
                <span style={{ fontSize: 17, color: 'var(--r)', display: 'block', marginBottom: 10 }}>{r.icon}</span>
                <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 7, lineHeight: 1.3 }}>{r.title}</h4>
                <p style={{ fontSize: 11, color: 'var(--m2)', lineHeight: 1.6, fontWeight: 300 }}>{r.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
