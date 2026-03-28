// Ticker section — infinite horizontal scrolling marquee of service keywords

import { TICKER_ITEMS } from '../constants';

export function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((text, i) => (
          <span
            key={i}
            className="mf"
            style={{ fontSize: 11, color: 'var(--m)', padding: '0 28px', whiteSpace: 'nowrap' }}
          >
            <span style={{ color: 'var(--r)', marginRight: 10 }}>◆</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
