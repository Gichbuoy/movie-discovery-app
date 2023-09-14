import { useState, useEffect } from "react";

function useMovieSearch(apiKey) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
        );
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery.trim() !== "") {
      fetchMovies();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, apiKey]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    loading,
  };
}

export default useMovieSearch;
