import HeroImg from "../assets/banner-stack.png";
export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-[1200px] px-5 pb-10 pt-15 md:pb-10 md:pt-10"
    >
      <div className="grid items-center gap-12 md:grid-cols-[1.05fr_.95fr]">
        <div>
          <h1 className="max-w-[600px] text-[42px] font-extrabold leading-[1.04] tracking-[-2px] text-slate-900 md:text-[56px]">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-[575px] text-[16px] leading-7 text-slate-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-3 text-[12px] font-bold text-white shadow-sm transition hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-md border border-slate-200 bg-white px-7 py-3 text-[12px] font-semibold text-slate-500 transition hover:border-pink-200 hover:text-pink-500"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-between md:justify-end">
          <img src={HeroImg} alt="Hero Banner Imgage" />
        </div>
      </div>
    </section>
  );
}
