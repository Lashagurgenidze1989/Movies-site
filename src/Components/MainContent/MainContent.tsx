import Movies from "../../pages/Movies";
import Header from "../Header/Header";
import SearchComponent from "../Search/SearchComponent";
import { useParams } from "react-router-dom";
import Trending from "../Trending/Trending";
import { useState } from "react";

export default function MainContent({ movies }: { movies: Movie[] }) {
  /* navigation bar for pages */
  const { nav } = useParams();
  let filteredMovies;
  switch (nav) {
    case "home":
      filteredMovies = movies;
      break;
    case "movies":
      filteredMovies = movies.filter((mov: Movie) => mov.category === "Movie");
      break;
    case "series":
      filteredMovies = movies.filter(
        (mov: Movie) => mov.category === "TV Series"
      );
      break;
    case "bookmarked":
      filteredMovies = movies.filter((mov: Movie) => mov.isBookmarked);
      break;
    default:
      filteredMovies = null;
  }

  /* search logic */
  const [searchText, setSearchText] = useState("");
  /* const [searchContent, setSearchContent] = useState(); */

  return (
    <div className="desktop:flex desktop:gap-9">
      <Header />
      <div>
        <SearchComponent
          setSearchText={setSearchText}
          searchText={searchText}
        />
        {!searchText ? <Trending /> : null}
        <Movies filteredMovies={filteredMovies} searchText={searchText} />
      </div>
    </div>
  );
}
