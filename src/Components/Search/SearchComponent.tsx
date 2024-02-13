import SearchIcon from "/assets/icon-search.svg";

export default function SearchComponent({
  searchText,
  setSearchText,
}: SearchComponentProps) {
  return (
    <div className="pl-4 flex gap-3 my-5 tablet:my-8">
      <img src={SearchIcon} alt="search-icon" className="tablet:w-[2.5rem]" />
      <input
        value={searchText}
        className="border-none focus:outline-none placeholder-gray-500 bg-black text-gray-500 text-white w-full tablet:text-[1.5rem]"
        type="text"
        placeholder="Search for movies or TV series"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

interface SearchComponentProps {
  searchText: string;
  setSearchText: (text: string) => void;
}
