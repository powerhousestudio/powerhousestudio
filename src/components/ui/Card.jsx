// Base card wrapper with hover effect — uses .card CSS class

/**
 * @param {{ children: React.ReactNode, className?: string, style?: object }} props
 */
export function Card({ children, className = '', style = {}, ...rest }) {
  return (
    <div className={`card ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
}

export default Card;
