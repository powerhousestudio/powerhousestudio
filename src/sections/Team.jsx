// Team section — team member cards with avatars, roles, and skill tags

import { SectionLabel } from '../components/ui/SectionLabel';
import { Card } from '../components/ui/Card';
import { members } from '../data/team';

export function Team() {
  return (
    <section id="team" style={{ padding: '120px 0', background: 'var(--d1)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <SectionLabel centered>The Team</SectionLabel>
          <h2 className="df reveal" style={{ fontSize: 'clamp(38px,5.5vw,62px)', lineHeight: 1.05 }}>
            BUILT BY ENGINEERS,
            <br />
            <span style={{ color: 'var(--r)' }}>RUN LIKE A STARTUP</span>
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: 14,
              color: 'var(--m2)',
              marginTop: 14,
              maxWidth: 440,
              margin: '14px auto 0',
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            A tight-knit team who&apos;ve shipped real products and built systems that scale.
          </p>
        </div>

        {/* Team grid */}
        <div
          className="team-g reveal"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }}
        >
          {members.map((m, i) => (
            <Card key={i} style={{ padding: '32px 22px', textAlign: 'center' }}>
              {/* Avatar */}
              <div
                style={{
                  width: 68,
                  height: 68,
                  background: 'var(--r)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 18px',
                  position: 'relative',
                }}
              >
                <span className="df" style={{ fontSize: 26, color: '#fff', lineHeight: 1 }}>{m.avatar}</span>
                <div
                  style={{
                    position: 'absolute',
                    bottom: 2,
                    right: 2,
                    width: 13,
                    height: 13,
                    background: '#22c55e',
                    borderRadius: '50%',
                    border: '2px solid var(--d2)',
                  }}
                />
              </div>

              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{m.name}</h3>
              <p
                style={{
                  fontSize: 10,
                  color: 'var(--r)',
                  fontWeight: 600,
                  marginBottom: 10,
                  letterSpacing: '.05em',
                  textTransform: 'uppercase',
                }}
              >
                {m.role}
              </p>
              <p
                style={{ fontSize: 11, color: 'var(--m2)', lineHeight: 1.65, marginBottom: 14, fontWeight: 300 }}
              >
                {m.bio}
              </p>

              {/* Skill tags */}
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'center' }}>
                {m.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 8,
                      color: 'var(--m2)',
                      background: 'var(--d3)',
                      border: '1px solid var(--bd)',
                      padding: '2px 8px',
                      fontWeight: 600,
                      letterSpacing: '.05em',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
