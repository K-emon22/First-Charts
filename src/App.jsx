import "./App.css";
import NavBar from "./components/NavBAr/NavBar";
import JymFacility from "./JymFacility/JymFacility";
import { Suspense } from "react";
import Chart from "./Charts/Chart";
const JymPromise = fetch("JymData.json").then((res) => res.json());

function App() {
  return (
    <>
      <nav className=" sticky top-0 z-50">
        <NavBar></NavBar>
      </nav>

      <main>
        <Suspense fallback={<h1 className="text-center py-52 font-bold text-4xl"> Loding Data..... <span><span className="loading loading-spinner loading-xl"></span></span> </h1>}>
          <JymFacility JymPromise={JymPromise}> </JymFacility>
        </Suspense>


        <Chart> </Chart>
      </main>
    </>
  );
}

export default App;
