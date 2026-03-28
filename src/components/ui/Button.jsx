// Reusable button component — supports "primary" (btn-r) and "outline" (btn-o) variants

/**
 * @param {{ variant?: 'primary'|'outline', size?: string, href?: string, target?: string, children: React.ReactNode, onClick?: Function, className?: string, style?: object }} props
 */
export function Button({
  variant = 'primary',
  size,
  href,
  target,
  children,
  onClick,
  className = '',
  style = {},
  ...rest
}) {
  const cls = variant === 'primary' ? 'btn-r' : 'btn-o';
  const sizeStyle = size ? { fontSize: size } : {};
  const mergedStyle = { ...sizeStyle, ...style };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={`${cls} ${className}`}
        style={mergedStyle}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${cls} ${className}`} style={mergedStyle} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Button;
