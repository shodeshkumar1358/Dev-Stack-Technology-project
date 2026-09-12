import { use } from "react";
import type { TechnologyType } from "../types/type";

export interface TechnologysProps {
  technologyPromise: Promise<TechnologyType[]>;
}

export default function Technologys({ technologyPromise }: TechnologysProps) {
  const technologys = use(technologyPromise);
  console.log(technologys);

  return (
    <div>
      <h2>Technology :{technologys.length}</h2>
      <ul>
        {technologys.map((technology) => (
          <li> {technology.name}</li>
        ))}
      </ul>
    </div>
  );
}
