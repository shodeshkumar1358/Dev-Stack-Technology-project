import { Suspense } from "react";
import "./index.css";
import type { TechnologyType } from "./types/type";
import Technologys from "./Components/Technologys";

const technologyPromise = async (): Promise<TechnologyType[]> => {
  const res = await fetch("/Data/Data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Suspense fallback={<div>Data Loading...</div>}>
        <Technologys technologyPromise={technologyPromise()}></Technologys>
      </Suspense>
    </>
  );
}

export default App;
