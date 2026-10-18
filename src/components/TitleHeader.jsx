const TitleHeader = ({ title, sub, id }) => {
  return (
    <header className="flex flex-col items-center gap-5">
      <p className="hero-badge text-center">{sub}</p>
      <h2 id={id} className="font-semibold md:text-5xl text-3xl text-center">
        {title}
      </h2>
    </header>
  );
};

export default TitleHeader;