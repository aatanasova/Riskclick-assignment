"use client";
import Input from "./UI/Input";
import Image from "next/image";
import SearchIcon from "../images/search.png";
import FilterIcon from "../images/Filters lines.png";
import { useInterventionContext } from "@/context/InterventionContext";

const SearchBar = () => {
  const { query, setQuery, filter } = useInterventionContext();

  return (
    <div className="relative flex items-center mt-6">
      <Input
        type="search"
        value={query}
        placeholder="Search for trades"
        onChange={(e) => setQuery(e.target.value)}
        className="h-8 w-64 px-9 text-xs text-gray-400 outline-none"
      />
      <Image src={SearchIcon} alt="Search" className="absolute left-4 top-2" />
      <div
        className="ml-auto flex items-center gap-2 px-2 py-1 border border-gray-300 rounded shadow-sm cursor-pointer"
        onClick={() => filter({ status: "Draft" })}
      >
        <Image src={FilterIcon} alt="Filter" />
        <span className="text-xs font-medium text-gray-700 cursor-pointer">
          Filters
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
