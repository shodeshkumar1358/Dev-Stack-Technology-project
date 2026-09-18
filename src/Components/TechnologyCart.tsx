import type { TechnologyType } from "../types/type";

const TechnologyCart = ({ Technologys }: { Technologys: TechnologyType[] }) => {
  return (
    <div>
      <section className="mx-auto max-w-[1200px] py-10">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_250px]">
          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Technologys.map((technology) => (
              <div
                key={technology.id}
                className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
              >
                {/* Card Top */}
                <div className="flex items-center justify-between">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-7 w-7 object-contain"
                  />

                  <span className="rounded-full bg-sky-50 px-2 py-1 text-[8px] text-sky-500">
                    {technology.badge}
                  </span>
                </div>

                {/* Name */}
                <h2 className="mt-2 text-sm font-semibold text-slate-800">
                  {technology.name}
                </h2>

                {/* Description */}
                <p className="mt-1 min-h-[42px] text-[9px] leading-[14px] text-slate-500">
                  {technology.description}
                </p>

                {/* Card Info */}
                <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-2">
                  <span className="rounded bg-slate-50 px-2 py-1 text-[7px] text-slate-500">
                    {technology.category}
                  </span>

                  <span className="text-[7px] text-slate-500">
                    {technology.difficulty}
                  </span>

                  <span className="text-[8px] text-slate-600">
                    <span className="text-yellow-400">★</span>{" "}
                    {technology.rating}
                  </span>
                </div>

                {/* Button */}
                <button className="mt-2 w-full rounded-md bg-slate-950 py-2 text-[8px] font-medium text-white transition hover:bg-slate-800">
                  Add to Stack
                </button>
              </div>
            ))}
          </div>

          {/* Your Stack */}
          <aside className="h-fit rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-bold text-slate-800">
                Your Stack
              </h3>

              <span className="text-[px] text-slate-400">
                2 Technology Selected
              </span>
            </div>

            {/* Stack Item */}
            <div className="mt-3 flex items-center justify-between border-b border-slate-100 pb-2">
              <div className="flex items-center gap-2">
                <img
                  src="https://icon.icepanel.io/Technology/svg/Svelte.svg"
                  alt="Svelte"
                  className="h-5 w-5"
                />

                <span className="text-[8px] text-slate-700">Svelte</span>
              </div>

              <button className="text-[12px] text-slate-300 hover:text-red-500">
                ×
              </button>
            </div>

            {/* Stack Item */}
            <div className="flex items-center justify-between border-b border-slate-100 py-2">
              <div className="flex items-center gap-2">
                <img
                  src="https://icon.icepanel.io/Technology/svg/Redis.svg"
                  alt="Redis"
                  className="h-5 w-5"
                />

                <span className="text-[8px] text-slate-700">Redis</span>
              </div>

              <button className="text-[12px] text-slate-300 hover:text-red-500">
                ×
              </button>
            </div>

            {/* Remove All */}
            <button className="mt-3 w-full rounded-md border border-red-100 py-2 text-[8px] font-medium text-red-400 hover:bg-red-50">
              Remove All
            </button>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default TechnologyCart;
