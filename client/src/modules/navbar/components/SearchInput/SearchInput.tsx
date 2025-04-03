import { useState, KeyboardEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./SearchInput.module.scss";
import SearchIcon from "@/assets/icons/ic_search.webp";
import { ROUTES } from "@/common/urls";

const SearchInput = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialSearchValue = searchParams.get("search") || "";

  const [searchValue, setSearchValue] = useState(
    decodeURIComponent(initialSearchValue)
  );

  const handleSearch = () => {
    if (searchValue.trim()) {
      const encodedSearch = encodeURIComponent(searchValue.trim());
      navigate(ROUTES.PRODUCT_LIST(encodedSearch));
    }
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
        placeholder="Nunca dejes de buscar"
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
        <img src={SearchIcon} alt="Buscar" className={styles.searchIcon} />
      </button>
    </div>
  );
};

export default SearchInput;
