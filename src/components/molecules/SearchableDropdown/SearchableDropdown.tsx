"use client";

import { optionsType } from "@/lib/types";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { useState } from "react";

interface SearchableDropdownProps {
  options: optionsType[];
  value?: string;
  onChange: (value: string | number) => void;
  placeholder?: string;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option...",
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const showSearch = options.length > 6;

  const filteredOptions = showSearch
    ? options.filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
      )
    : options;

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="relative w-full flex items-center justify-between sm:h-11 h-10 backdrop-blur-2xl bg-white/25 rounded-lg border border-gray-200 transition-all focus:border-[#009933] duration-300 disabled:cursor-not-allowed disabled:opacity-50 px-2"
      >
        <span
          className={
            selectedOption ? "text-gray-900 block" : "text-gray-500 block"
          }
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronsUpDown className="h-4 w-4 opacity-50" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
            {showSearch && (
              <div className="border-b border-gray-200 p-2">
                <div className="flex items-center rounded-md border border-gray-300 px-3">
                  <Search className="h-4 w-4 text-gray-500" />
                  <input
                    type="text"
                    className="flex h-9 w-full bg-transparent py-2 px-2 text-sm outline-none placeholder:text-gray-500"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            )}

            <div className="max-h-60 overflow-y-auto p-1">
              {filteredOptions.length === 0 ? (
                <div className="py-6 text-center text-sm text-gray-500">
                  No results found
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100 ${
                      value === option.value ? "bg-gray-100" : ""
                    }`}
                    onClick={() => {
                      onChange(option.value);
                      setOpen(false);
                      setSearch("");
                    }}
                  >
                    <Check
                      className={`mr-2 h-4 w-4 ${
                        value === option.value ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {option.label}
                  </button>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchableDropdown;
