import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Home from "~/screens/Home";
import { darkTheme, lightTheme } from "~/styles/themes";

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [fontFamily, setFontFamily] = useState("sans-serif");

  return (
    <ThemeProvider theme={{ ...(isDark ? darkTheme : lightTheme), fontFamily }}>
      <Home
        toggleTheme={() => setIsDark(!isDark)}
        setFontFamily={setFontFamily}
      />
    </ThemeProvider>
  );
};

export default App;
