import { counterItems } from "../constants";

const AnimatedCounter = () => {
  return (
    <section
      id="metrics"
      aria-label="Profile metrics"
      className="padding-x-lg xl:mt-0 mt-32"
    >
      <dl className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-6 md:p-10 flex flex-col justify-center"
          >
            <dd className="text-white-50 text-4xl md:text-5xl font-bold mb-2">
              {item.value}{item.suffix}
            </dd>
            <dt className="text-white-50 text-base md:text-lg">{item.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default AnimatedCounter;