const Button = ({ text, className = "", id }) => {
  return (
    <a
      href={`#${id}`}
      className={`${className} cta-wrapper inline-flex items-center`}
    >
      <span className="cta-button group w-full">
        <span className="bg-circle" aria-hidden="true" />
        <span className="text">{text}</span>
        <span className="arrow-wrapper" aria-hidden="true">
          <img src="/images/arrow-down.svg" alt="" />
        </span>
      </span>
    </a>
  );
};

export default Button;