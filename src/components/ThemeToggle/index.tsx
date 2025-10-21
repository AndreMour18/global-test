import React from "react";

import Moon from "~/assets/svgs/Moon";

import {
  ToggleContainer,
  ToggleInput,
  ToggleLabel,
  ToggleSlider,
  ToggleWrapper,
} from "./styles";

interface ThemeToggleProps {
  onToggle: () => void;
  currentTheme: "light" | "dark";
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  onToggle,
  currentTheme,
}) => {
  const isDark = currentTheme === "dark";
  const moonIconColor = isDark ? "#A445ED" : "#757575";

  return (
    <ToggleContainer>
      <ToggleLabel>
        <ToggleWrapper>
          <ToggleInput
            type="checkbox"
            checked={isDark}
            onChange={onToggle}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          />
          <ToggleSlider />
        </ToggleWrapper>
      </ToggleLabel>
      <Moon color={moonIconColor} />
    </ToggleContainer>
  );
};

export default ThemeToggle;
