import React from "react";

import { Select } from "./styles";

interface Props {
  onChange: (font: string) => void;
}

const FontSelector: React.FC<Props> = ({ onChange }) => (
  <Select onChange={(e) => onChange(e.target.value)}>
    <option value="sans-serif">Sans Serif</option>
    <option value="serif">Serif</option>
    <option value="monospace">Monospace</option>
  </Select>
);

export default FontSelector;
