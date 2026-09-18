import { Suspense } from "react";
import "./index.css";
import type { TechnologyType } from "./types/type";
import Technologys from "./Components/Technologys";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

const technologyPromise = async (): Promise<TechnologyType[]> => {
  const res = await fetch("/Data/Data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<div>Data Loading...</div>}>
        <Technologys technologyPromise={technologyPromise()}></Technologys>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
