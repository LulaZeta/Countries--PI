import "./App.css";
import Countries from "./components/Countries/countries";
import CountryDetails from "./components/CountryDetails/countryDetails";
import FilterContinents from "./components/Filters/filterContienes";
import Order from "./components/Order/order";
import ReLoad from "./components/Reload/reload";
import SearchBar from "./components/SearchBar/searchBar";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Countries</h1>
      <SearchBar />
      <ReLoad />
      <FilterContinents />
      <Order />
      <CountryDetails />
      <Countries />
    </div>
  );
}

export default App;
