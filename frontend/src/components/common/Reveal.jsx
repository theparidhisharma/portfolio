import useScrollReveal from "../../hooks/useScrollReveal";

export default function Reveal({ children, delay = 0, className = "" }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
