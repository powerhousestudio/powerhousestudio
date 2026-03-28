// Portfolio section — filterable project showcase with live and coming soon cards

import { useState } from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { WA, PORTFOLIO_CATEGORIES, PHONE_NUMBER } from '../constants';
import { projects } from '../data/portfolio';

function getProjectWaLink(title) {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    `Hi, I saw your project '${title}' and I'm interested in a similar website.`
  )}`;
}

export function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" style={{ padding: '120px 0', background: 'var(--bk)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 24,
            marginBottom: 56,
          }}
        >
          <div>
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="df reveal" style={{ fontSize: 'clamp(38px,5.5vw,62px)', lineHeight: 1.05 }}>
              PROJECTS WE&apos;RE
              <br />
              <span style={{ color: 'var(--r)' }}>PROUD OF</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="reveal" style={{ display: 'flex', border: '1px solid var(--bd)', flexWrap: 'wrap' }}>
            {PORTFOLIO_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                style={{
                  background: active === c ? 'var(--r)' : 'transparent',
                  color: active === c ? '#fff' : 'var(--m2)',
                  border: 'none',
                  padding: '10px 16px',
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'Instrument Sans,sans-serif',
                  transition: 'all .2s',
                  letterSpacing: '.05em',
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 2 }}>
          {filtered.map((p, i) => {
            const isLive = p.status === 'live';
            const isComingSoon = p.status === 'coming_soon';

            const cardContent = (
              <Card
                className="reveal"
                style={{
                  overflow: 'hidden',
                  opacity: isComingSoon ? 0.5 : 1,
                  cursor: isLive ? 'pointer' : 'default',
                  position: 'relative',
                }}
              >
                {/* Coming Soon overlay badge */}
                {isComingSoon && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      pointerEvents: 'none',
                    }}
                  >
                    <span
                      className="df"
                      style={{
                        fontSize: 28,
                        color: 'rgba(255,255,255,.18)',
                        letterSpacing: '.14em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Coming Soon
                    </span>
                  </div>
                )}

                {/* Project image area */}
                <div
                  style={{
                    height: 170,
                    background: p.color,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <span
                    className="df"
                    style={{
                      fontSize: 42,
                      color: 'rgba(220,38,38,.15)',
                      textAlign: 'center',
                      padding: '0 16px',
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title.split('—')[0].trim().toUpperCase()}
                  </span>
                  <div style={{ position: 'absolute', top: 14, right: 14, background: isComingSoon ? 'var(--m)' : 'var(--r)', padding: '3px 10px' }}>
                    <span style={{ fontSize: 8, fontWeight: 700, color: '#fff', letterSpacing: '.1em' }}>
                      {p.cat.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Project details */}
                <div style={{ padding: '24px 22px' }}>
                  <p
                    style={{ fontSize: 10, color: 'var(--m)', marginBottom: 8, fontWeight: 500, letterSpacing: '.06em' }}
                  >
                    {p.tag}
                  </p>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, lineHeight: 1.3 }}>{p.title}</h3>
                  <p
                    style={{ fontSize: 12, color: 'var(--m2)', lineHeight: 1.65, marginBottom: 18, fontWeight: 300 }}
                  >
                    {p.description}
                  </p>
                  {isLive && p.stack.length > 0 && (
                    <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          style={{
                            fontSize: 9,
                            color: 'var(--m2)',
                            background: 'var(--d3)',
                            border: '1px solid var(--bd)',
                            padding: '3px 9px',
                            fontWeight: 600,
                            letterSpacing: '.04em',
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            );

            if (isLive) {
              return (
                <a
                  key={i}
                  href={getProjectWaLink(p.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {cardContent}
                </a>
              );
            }

            return <div key={i}>{cardContent}</div>;
          })}
        </div>

        {/* Bottom CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: 44 }}>
          <Button variant="outline" href={WA} target="_blank" style={{ fontSize: 14 }}>
            Discuss Your Project →
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
