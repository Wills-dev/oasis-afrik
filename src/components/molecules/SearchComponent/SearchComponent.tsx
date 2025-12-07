import { FormEvent } from "react";

import { SearchIcon, X } from "lucide-react";

interface SearchComponentProps {
  search: string;
  handleChange: (search: string) => void;
  initiateSearch: () => void;
  handleClear: () => void;
}

const SearchComponent = ({
  search,
  handleChange,
  initiateSearch,
  handleClear,
}: SearchComponentProps) => {
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    initiateSearch();
  };

  return (
    <form
      onSubmit={handleSearch}
      className="focus-within:border-green-600 border border-gray-200 transition-all duration-300 px-2 flex items-center h-10 gap-2 rounded-full max-w-sm w-full"
    >
      <button type="submit" className="text-gray-300">
        <SearchIcon className="w-6 h-6" />
      </button>
      <input
        type="search"
        name="search"
        id="search"
        value={search}
        onChange={(e) => handleChange(e.target.value)}
        className="flex-1 w-full outline-none placeholder:text-gray-300"
        placeholder="Search..."
      />
      {search && (
        <button type="button" onClick={handleClear} className="cursor-pointer">
          <X className="w-4 h-4 text-red-500" />
        </button>
      )}
    </form>
  );
};

export default SearchComponent;
