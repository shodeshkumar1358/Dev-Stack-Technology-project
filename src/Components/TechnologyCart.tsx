import { useState } from "react";
import type { TechnologyType } from "../types/type";
import { toast } from "react-toastify";

const TechnologyCart = ({ Technologys }: { Technologys: TechnologyType[] }) => {
  const [yourStack, setYourStack] = useState<TechnologyType[]>([]);

  const handelYourStack = (addToStack: TechnologyType): void => {
    const alreadyAdded = yourStack.some(
      (technology) => technology.id === addToStack.id,
    );

    if (alreadyAdded) {
      return;
    }

    setYourStack([...yourStack, addToStack]);
    toast.success(`${addToStack.name} added to your stack!`);
  };

  const handleRemove = (id: string): void => {
    setYourStack(yourStack.filter((technology) => technology.id !== id));
  };

  const handleRemoveAll = (): void => {
    setYourStack([]);
  };

  return (
    <div>
      <section className="mx-auto max-w-[1200px] py-10">
        <div className="grid grid-cols-4 gap-5 lg:grid-cols-[1fr_250px]">
          <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Technologys.map((technology) => {
              const isAdded = yourStack.some(
                (item) => item.id === technology.id,
              );

              return (
                <div
                  key={technology.id}
                  className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md"
                >
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

                  <h2 className="mt-2 text-sm font-semibold text-slate-800">
                    {technology.name}
                  </h2>

                  <p className="mt-1 min-h-[42px] text-[9px] leading-[14px] text-slate-500">
                    {technology.description}
                  </p>

                  <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-2">
                    <span className="rounded bg-slate-50 px-2 py-1 text-[7px] text-slate-500">
                      {technology.category}
                    </span>

                    <span className="text-[7px] text-slate-500">
                      {technology.difficulty}
                    </span>

                    <span className="text-[12px] text-slate-600">
                      <span className="text-yellow-400">★</span>{" "}
                      {technology.rating}
                    </span>
                  </div>

                  <button
                    onClick={() => handelYourStack(technology)}
                    disabled={isAdded}
                    className={`mt-2 w-full rounded-md py-2 text-[8px] font-medium transition ${
                      isAdded
                        ? "cursor-not-allowed bg-green-50 text-green-600"
                        : "bg-slate-950 text-white hover:bg-slate-800"
                    }`}
                  >
                    {isAdded ? "Added to Stack" : "Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>

          <aside className="h-fit rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:sticky lg:top-5">
            <div>
              <h3 className="text-[15px] font-bold text-slate-800">
                Your Stack
              </h3>

              <p className="text-[9px] text-slate-500">
                {yourStack.length} Technology Selected
              </p>
            </div>

            <div className="mt-3 space-y-2">
              {yourStack.length === 0 ? (
                <div className="rounded-md border border-dashed border-slate-200 px-2 py-3 text-center">
                  <p className="text-[9px] text-slate-400">
                    No technology selected
                  </p>
                </div>
              ) : (
                yourStack.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between rounded-md border border-slate-100 px-2 py-1"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-5 w-5 object-contain"
                      />

                      <div>
                        <span className="text-[10px] font-bold text-slate-700">
                          {technology.name}
                        </span>

                        <p className="text-[7px] text-slate-400">
                          {technology.category}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemove(technology.id)}
                      className="text-[20px] leading-none text-slate-400 transition hover:text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>

            {yourStack.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="mt-3 w-full rounded-md border border-red-100 py-2 text-[8px] font-medium text-red-400 transition hover:bg-red-50"
              >
                Remove All
              </button>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
};

export default TechnologyCart;
