import { Suspense } from "react";
import "./index.css";
import type { TechnologyType } from "./types/type";
import Technologys from "./Components/Technologys";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const technologyPromise = async (): Promise<TechnologyType[]> => {
  const res = await fetch("/Data/Data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense
        fallback={
          <div className="flex items-center text-4xl text-center justify-center font-bold text-red-500">
            Data Loading...
          </div>
        }
      >
        <Technologys technologyPromise={technologyPromise()}></Technologys>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
