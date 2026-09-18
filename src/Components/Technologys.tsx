import { use } from "react";
import type { TechnologyType } from "../types/type";
import TechnologyCart from "./TechnologyCart";

export interface TechnologysProps {
  technologyPromise: Promise<TechnologyType[]>;
}

export default function Technologys({ technologyPromise }: TechnologysProps) {
  const technologys = use(technologyPromise);
  // const [yourStack, setYourStack] = useState<TechnologyType[]>([]);
  // const handelYourStack = (addToStack:TechnologyType):void => {
  //   const newAddToStack = [...yourStack, addToStack];
  //   setYourStack(newAddToStack)
  // };
  // console.log(technologys);

  return (
    <div className="mx-auto max-w-[1150px]">
      <h2 className=" text-4xl text-slate-950 font-bold py-2">
        Explore the <span className="text-pink-600">Technologys</span>
      </h2>
      <p className="text-stone-600 font-light-400">
        Pick one technology per category to build your ideal stack.
      </p>

      <TechnologyCart Technologys={technologys}></TechnologyCart>
    </div>
  );
}
