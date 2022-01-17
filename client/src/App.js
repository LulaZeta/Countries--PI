import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/landingPage";
import Home from "./components/Home/home";
import CountryDetails from "./components/CountryDetails/countryDetails";
import CreatActivity from "./components/CreatActivity/crearActivity";
import ActivitiesDetails from "./components/CreatActivity/activividad";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home/:id" element={<CountryDetails />}></Route>
          <Route
            path="/home/activity/:id"
            element={<ActivitiesDetails />}
          ></Route>
          <Route path="/home/activity" element={<CreatActivity />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
