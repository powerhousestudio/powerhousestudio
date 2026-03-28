// FAQ section — expandable accordion of frequently asked questions

import { useState } from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Button } from '../components/ui/Button';
import { WaIcon } from '../components/ui/WaIcon';
import { WA } from '../constants';
import { faqs } from '../data/faq';

export function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ padding: '120px 0', background: 'var(--d1)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <SectionLabel centered>FAQ</SectionLabel>
          <h2 className="df reveal" style={{ fontSize: 'clamp(38px,5.5vw,62px)', lineHeight: 1.05 }}>
            QUESTIONS,
            <br />
            <span style={{ color: 'var(--r)' }}>ANSWERED.</span>
          </h2>
        </div>

        {/* FAQ items */}
        <div className="reveal">
          {faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.question}</span>
                <span
                  style={{
                    color: 'var(--r)',
                    fontSize: 22,
                    fontWeight: 300,
                    flexShrink: 0,
                    transition: 'transform .3s',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    display: 'block',
                  }}
                >
                  +
                </span>
              </button>
              {open === i && <p className="faq-a">{f.answer}</p>}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: 44 }}>
          <p style={{ fontSize: 13, color: 'var(--m2)', marginBottom: 18, fontWeight: 300 }}>
            Still have questions? We&apos;re just a message away.
          </p>
          <Button href={WA} target="_blank">
            <WaIcon size={16} /> Ask on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
