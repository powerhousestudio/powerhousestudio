// Hero section — main landing area with typewriter effect and key stats

import { WaIcon } from '../components/ui/WaIcon';
import { Button } from '../components/ui/Button';
import { useTypewriter } from '../hooks/useTypewriter';
import { WA, TYPEWRITER_WORDS, HERO_STATS } from '../constants';

export function Hero() {
  const { typed } = useTypewriter(TYPEWRITER_WORDS);

  return (
    <section
      id="home"
      className="grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 0 80px',
      }}
    >
      {/* Background glows */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          right: '8%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle,rgba(220,38,38,.1) 0%,transparent 70%)',
          animation: 'glow 4s ease infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle,rgba(220,38,38,.06) 0%,transparent 70%)',
          animation: 'glow 6s ease infinite 2s',
          pointerEvents: 'none',
        }}
      />

      {/* Spinning circle */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '6%',
          width: 180,
          height: 180,
          border: '1px solid rgba(220,38,38,.1)',
          borderRadius: '50%',
          animation: 'spin 25s linear infinite',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -4,
            left: '50%',
            width: 8,
            height: 8,
            background: 'var(--r)',
            borderRadius: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        {/* Badge */}
        <div
          className="fu"
          style={{
            animationDelay: '.1s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'rgba(220,38,38,.08)',
            border: '1px solid rgba(220,38,38,.2)',
            padding: '8px 18px',
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              background: 'var(--r)',
              borderRadius: '50%',
              animation: 'pulse 2s infinite',
              display: 'block',
            }}
          />
          <span
            className="mf"
            style={{ fontSize: 10, color: 'rgba(255,255,255,.7)', letterSpacing: '.16em', textTransform: 'uppercase' }}
          >
            Building Products · Fully Remote
          </span>
        </div>

        {/* Headings */}
        <h1
          className="df hero-h fu"
          style={{ fontSize: 'clamp(64px,10vw,118px)', lineHeight: 0.93, animationDelay: '.2s', marginBottom: 6 }}
        >
          YOUR BUSINESS,
        </h1>
        <h1
          className="df hero-h fu"
          style={{
            fontSize: 'clamp(64px,10vw,118px)',
            lineHeight: 0.93,
            color: 'var(--r)',
            animationDelay: '.3s',
            marginBottom: 36,
            minHeight: '1.05em',
          }}
        >
          {typed}
          <span style={{ animation: 'blink 1s step-end infinite', color: '#fff' }}>|</span>
        </h1>

        {/* Subtitle */}
        <p
          className="fu"
          style={{
            fontSize: 17,
            color: 'var(--m2)',
            maxWidth: 540,
            lineHeight: 1.75,
            animationDelay: '.44s',
            marginBottom: 48,
            fontWeight: 300,
          }}
        >
          We build <strong style={{ color: '#fff', fontWeight: 600 }}>websites</strong>,{' '}
          <strong style={{ color: '#fff', fontWeight: 600 }}>automation systems</strong>, and{' '}
          <strong style={{ color: '#fff', fontWeight: 600 }}>full products</strong> for businesses and startups —
          hardware, software, or anything in between.
        </p>

        {/* CTA Buttons */}
        <div className="fu" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', animationDelay: '.54s' }}>
          <Button href={WA} target="_blank" style={{ fontSize: 15, padding: '16px 34px' }}>
            <WaIcon size={18} /> Start Free Consultation
          </Button>
          <Button variant="outline" href="#portfolio" style={{ fontSize: 15, padding: '16px 34px' }}>
            View Our Work →
          </Button>
        </div>

        {/* Stats */}
        <div
          className="fu"
          style={{
            display: 'flex',
            gap: 48,
            marginTop: 72,
            animationDelay: '.68s',
            flexWrap: 'wrap',
            paddingTop: 48,
            borderTop: '1px solid var(--bd)',
          }}
        >
          {HERO_STATS.map(([value, label]) => (
            <div key={label}>
              <div className="df" style={{ fontSize: 36, color: '#fff', lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: 11, color: 'var(--m)', marginTop: 5, fontWeight: 500, letterSpacing: '.04em' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side text */}
      <div style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%) rotate(90deg)' }}>
        <span
          className="mf"
          style={{ fontSize: 9, color: 'rgba(255,255,255,.08)', letterSpacing: '.22em', whiteSpace: 'nowrap' }}
        >
          POWERHOUSE STUDIO · EST. 2024
        </span>
      </div>
    </section>
  );
}

export default Hero;
