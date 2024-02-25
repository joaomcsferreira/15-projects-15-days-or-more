"use client";

import React from "react";
import SearchIcon from "./Helper/SearchIcon";

interface ISearch {
  setImages: React.Dispatch<
    React.SetStateAction<
      Array<{ id: number; src: { original: string }; alt: string; avg_color: string }>
    >
  >;
}

const Search = ({ setImages }: ISearch) => {
  const [search, setSearch] = React.useState("");

  const handleClick = async () => {
    alert("The function has not been implemented yet.");
  };

  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-xs font-bold text-[#7B61FF]">Find some news images</h3>
      <div className="flex gap-2">
        <input
          value={search}
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(target.value)
          }
          type="text"
          placeholder="Ex: Sunflowers..."
          className="border border-zinc-200 outline-[#b6a8ff] text-zinc-700 text-sm rounded-3xl px-4 py-2"
        />
        <button
          onClick={handleClick}
          className="w-12 aspect-square rounded-full p-3 bg-[#7B61FF] hover:bg-[#644fcf]"
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default Search;
