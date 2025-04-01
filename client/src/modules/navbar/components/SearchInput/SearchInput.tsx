import { useState, KeyboardEvent } from "react";
import styles from "./SearchInput.module.scss";
import SearchIcon from "@/assets/icons/ic_search.webp";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log("buscando...");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder= "Nunca dejes de buscar"
        className={styles.searchInput}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button 
        className={styles.searchButton}
        onClick={handleSearch}
        aria-label="Buscar"
      >
        <img 
          src={SearchIcon} 
          alt="Buscar" 
          className={styles.searchIcon}
        />
      </button>
    </div>
  );
};

export default SearchInput;
