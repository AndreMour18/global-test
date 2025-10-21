import React, { useState, useRef, useEffect } from "react";

import { fontOptions } from "~/utils/fonts";
import Arrow from "~/assets/svgs/Arrow";

import { Container, SelectButton, Dropdown, FontOption } from "./styles";

interface FontSelectorProps {
  onChange: (font: string) => void;
  currentFont: string;
  theme: "light" | "dark";
}

const FontSelector: React.FC<FontSelectorProps> = ({
  onChange,
  currentFont,
  theme,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (fontValue: string, fontFamily: string) => {
    onChange(fontValue);
    setIsOpen(false);
  };

  const currentOption =
    fontOptions.find((option) => option.value === currentFont) ||
    fontOptions[0];

  return (
    <Container ref={containerRef}>
      <SelectButton
        onClick={() => setIsOpen(!isOpen)}
        theme={theme}
        isOpen={isOpen}
      >
        <span style={{ fontFamily: currentOption.fontFamily }}>
          {currentOption.label}
        </span>
        <Arrow />
      </SelectButton>
      {isOpen && (
        <Dropdown theme={theme}>
          {fontOptions.map((option) => (
            <FontOption
              key={option.value}
              fontFamily={option.fontFamily}
              isSelected={option.value === currentFont}
              onClick={() => handleOptionClick(option.value, option.fontFamily)}
            >
              {option.label}
            </FontOption>
          ))}
        </Dropdown>
      )}
    </Container>
  );
};

export default FontSelector;
