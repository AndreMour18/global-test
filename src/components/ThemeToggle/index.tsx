import React from "react";

import { Button } from "./styles";

interface Props {
  onToggle: () => void;
}

const ThemeToggle: React.FC<Props> = ({ onToggle }) => (
  <Button onClick={onToggle}>🌓</Button>
);

export default ThemeToggle;
