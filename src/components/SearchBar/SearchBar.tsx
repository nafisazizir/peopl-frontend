import { ChangeEvent, useState } from "react";
import "./SearchBarStyle.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newKeyword = event.target.value;
    setKeyword(newKeyword);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClick = () => {
    if (keyword !== "") {
      navigate(`/search?keyword=${keyword}`);
    }
  };
  return (
    <div className={`searchbar${isFocused ? "-focus" : ""}`}>
      <div className="searchbar-input">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.86 4.22963C7.21488 4.22963 4.25996 7.18455 4.25996 10.8296C4.25996 14.4747 7.21488 17.4296 10.86 17.4296C12.6827 17.4296 14.3315 16.6919 15.5269 15.4965C16.7222 14.3012 17.46 12.6524 17.46 10.8296C17.46 7.18455 14.505 4.22963 10.86 4.22963ZM2.45996 10.8296C2.45996 6.19043 6.22077 2.42963 10.86 2.42963C15.4992 2.42963 19.26 6.19043 19.26 10.8296C19.26 12.8247 18.5636 14.6583 17.402 16.0989L21.3964 20.0932C21.7478 20.4447 21.7478 21.0146 21.3964 21.366C21.0449 21.7175 20.475 21.7175 20.1236 21.366L16.1292 17.3717C14.6886 18.5333 12.855 19.2296 10.86 19.2296C6.22077 19.2296 2.45996 15.4688 2.45996 10.8296Z"
          />
        </svg>
        <input
          className="search-input-nav"
          placeholder="Search something"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={keyword}
          onChange={handleKeywordChange}
        />
        {keyword !== "" ? (
          <div className="search-button" onClick={handleClick}>
            Search
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
