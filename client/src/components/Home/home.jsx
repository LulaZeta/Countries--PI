import React from "react";
import Countries from "../Countries/countries";
import FilterContinents from "../Filters/filterContienes";
import Order from "../Order/order";
import ReLoad from "../Reload/reload";
import SearchBar from "../SearchBar/searchBar";

export default function Home() {
    return (
            <div>
                <SearchBar />
                <ReLoad />
                <FilterContinents />
                <Order />
                <Countries />
            </div>

    )
}