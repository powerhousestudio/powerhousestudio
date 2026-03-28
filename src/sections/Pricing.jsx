// Pricing section — three-tier pricing cards with feature comparison

import { useState } from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { WA, WA_PLAN } from '../constants';
import { plans } from '../data/pricing';

export function Pricing() {
  return (
    <section id="pricing" style={{ padding: '120px 0', background: 'var(--d1)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <SectionLabel centered>Transparent Pricing</SectionLabel>
          <h2 className="df reveal" style={{ fontSize: 'clamp(38px,5.5vw,62px)', lineHeight: 1.05 }}>
            SIMPLE PLANS,
            <br />
            <span style={{ color: 'var(--r)' }}>NO HIDDEN COSTS</span>
          </h2>
          <p className="reveal" style={{ fontSize: 14, color: 'var(--m2)', marginTop: 14, fontWeight: 300 }}>
            Fixed price. Know upfront. No hourly billing surprises.
          </p>
        </div>

        {/* Plans Grid */}
        <div
          className="price-g reveal"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, alignItems: 'start' }}
        >
          {plans.map((p, i) => (
            <Card
              key={i}
              className={p.popular ? 'popular-card' : ''}
              style={{ padding: '40px 30px', position: 'relative' }}
            >
              {p.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: -1,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--r)',
                    color: '#fff',
                    fontSize: 9,
                    fontWeight: 700,
                    padding: '5px 20px',
                    letterSpacing: '.12em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              <span
                className="mf"
                style={{
                  fontSize: 10,
                  color: 'var(--m)',
                  letterSpacing: '.12em',
                  display: 'block',
                  marginBottom: 16,
                  marginTop: p.popular ? 12 : 0,
                }}
              >
                {p.name.toUpperCase()}
              </span>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                <span className="df" style={{ fontSize: 50, color: '#fff', lineHeight: 1 }}>{p.price}</span>
                <span style={{ fontSize: 12, color: 'var(--m)', fontWeight: 300 }}>{p.usd}</span>
              </div>

              <p
                style={{
                  fontSize: 12,
                  color: 'var(--m2)',
                  lineHeight: 1.6,
                  marginBottom: 28,
                  fontWeight: 300,
                  minHeight: 44,
                }}
              >
                {p.desc}
              </p>

              <div style={{ borderTop: '1px solid var(--bd)', paddingTop: 22, marginBottom: 28 }}>
                {p.features.map(([ok, feature], j) => (
                  <div
                    key={j}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '6px 0',
                      fontSize: 12,
                      color: ok ? 'rgba(255,255,255,.75)' : 'var(--m)',
                    }}
                  >
                    <span
                      style={{ color: ok ? 'var(--r)' : 'var(--m)', fontSize: ok ? 10 : 12, flexShrink: 0 }}
                    >
                      {ok ? '◆' : '✕'}
                    </span>
                    {feature}
                  </div>
                ))}
              </div>

              <Button
                variant={p.popular ? 'primary' : 'outline'}
                href={WA_PLAN(p.name)}
                target="_blank"
                style={{ width: '100%', justifyContent: 'center', fontSize: 13, padding: '14px 0' }}
              >
                Get {p.name} Plan
              </Button>

              <p
                style={{ fontSize: 10, color: 'var(--m)', textAlign: 'center', marginTop: 10, fontWeight: 300 }}
              >
                Free consultation included
              </p>
            </Card>
          ))}
        </div>

        {/* Custom Quote Banner */}
        <div
          className="reveal"
          style={{
            marginTop: 28,
            background: 'var(--d3)',
            border: '1px solid var(--bd)',
            padding: '22px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 3 }}>Need something custom?</p>
            <p style={{ fontSize: 12, color: 'var(--m2)', fontWeight: 300 }}>
              Automation systems, SaaS tools, large platforms — quoted based on your exact requirements.
            </p>
          </div>
          <Button href={WA} target="_blank" style={{ fontSize: 12, padding: '11px 22px' }}>
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
