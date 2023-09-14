import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Movies from "../components/Movies";

const Home = ({
  topTen,
  searchQuery,
  setSearchQuery,
  searchResults,
  loading,
}) => {
  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Movies topTen={topTen} searchResults={searchResults} loading={loading} />
      <Footer />
    </div>
  );
};

export default Home;
