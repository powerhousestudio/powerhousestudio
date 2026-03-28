// Testimonials section — client review cards with star ratings

import { SectionLabel } from '../components/ui/SectionLabel';
import { Card } from '../components/ui/Card';
import { testimonials } from '../data/testimonials';

export function Testimonials() {
  return (
    <section style={{ padding: '100px 0', background: 'var(--bk)', borderTop: '1px solid var(--bd)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel centered>Client Stories</SectionLabel>
        <h2
          className="df reveal"
          style={{ fontSize: 'clamp(36px,5vw,56px)', textAlign: 'center', marginBottom: 56 }}
        >
          WHAT CLIENTS <span style={{ color: 'var(--r)' }}>SAY</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 2 }}>
          {testimonials.map((t, i) => (
            <Card key={i} className={`reveal d${i + 1}`} style={{ padding: '30px 26px' }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 18 }}>
                {Array(5)
                  .fill(0)
                  .map((_, j) => (
                    <span key={j} style={{ color: 'var(--r)', fontSize: 13 }}>★</span>
                  ))}
              </div>

              <p
                style={{
                  fontSize: 13,
                  color: 'rgba(255,255,255,.76)',
                  lineHeight: 1.75,
                  marginBottom: 22,
                  fontStyle: 'italic',
                  fontWeight: 300,
                }}
              >
                &quot;{t.quote}&quot;
              </p>

              <div style={{ borderTop: '1px solid var(--bd)', paddingTop: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{t.name}</div>
                <div style={{ fontSize: 10, color: 'var(--m)', marginTop: 2 }}>{t.location}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
