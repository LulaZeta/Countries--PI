import React from "react";
import Countries from "../Countries/countries";
import FilterActivity from "../Filters/filterActivity";
import FilterContinents from "../Filters/filterContienes";
import FilterCountries from "../Filters/filterCountries";
import FilterPopulation from "../Filters/filterPopulation";
import Order from "../Order/order";
import ReLoad from "../Reload/reload";
import SearchBar from "../SearchBar/searchBar";


export default function Home() {
    return (
            <div>
                <div>
                <ReLoad />
                <SearchBar />
                <Order />
                <FilterContinents />
                <FilterCountries />
                <FilterActivity />
                <FilterPopulation />
                </div>
                <div>
                <Countries />
                </div>
            </div>

    )
}