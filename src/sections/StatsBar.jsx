// Stats bar section — red-background row of key business metrics

import { STATS_BAR_DATA } from '../constants';

export function StatsBar() {
  return (
    <section style={{ padding: '72px 0', background: 'var(--r)', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(0,0,0,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.07) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
            gap: 40,
            textAlign: 'center',
          }}
        >
          {STATS_BAR_DATA.map(([value, label, sub]) => (
            <div key={label} className="reveal">
              <div className="df" style={{ fontSize: 50, color: '#fff', lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,.9)', marginTop: 8 }}>
                {label}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.55)', marginTop: 3, fontWeight: 300 }}>
                {sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
