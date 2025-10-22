import React from "react";

import Search from "~/assets/svgs/Search";

import { SearchContainer, Input, SearchButton } from "./styles";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  disabled?: boolean;
  theme: "light" | "dark";
  hasError?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSearch,
  disabled = false,
  theme,
  hasError = false,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <SearchContainer theme={theme} hasError={hasError}>
      <Input
        type="text"
        placeholder="Search for any word..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={disabled}
        theme={theme}
        hasError={hasError}
      />
      <SearchButton onClick={onSearch} disabled={disabled} aria-label="Search">
        <Search />
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
