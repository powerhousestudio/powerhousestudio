// Red monospace uppercase label used above every section heading

/**
 * @param {{ children: React.ReactNode, centered?: boolean, className?: string }} props
 */
export function SectionLabel({ children, centered = false, className = '' }) {
  return (
    <span
      className={`lbl reveal ${className}`}
      style={centered ? { display: 'block', textAlign: 'center' } : undefined}
    >
      {children}
    </span>
  );
}

export default SectionLabel;
