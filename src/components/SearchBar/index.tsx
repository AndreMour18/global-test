import React from "react";

import { Button, Input, Wrapper } from "./styles";

interface Props {
  value: string;
  onChange: (val: string) => void;
  onSearch: () => void;
  disabled: boolean;
}

const SearchBar: React.FC<Props> = ({
  value,
  onChange,
  onSearch,
  disabled,
}) => (
  <Wrapper>
    <Input
      placeholder="Digite uma palavra..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && onSearch()}
      disabled={disabled}
    />
    <Button onClick={onSearch}>Buscar</Button>
  </Wrapper>
);

export default SearchBar;
