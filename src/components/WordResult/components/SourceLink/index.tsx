import React from "react";

import { ExternalLink } from "~/assets/svgs";

import { SourceContainer, SourceLink, SourceText } from "./styles";

const SourceLinks: React.FC<{
  urls: string[];
  theme: "light" | "dark";
}> = ({ urls, theme }) => {
  if (!urls || urls.length === 0) {
    return null;
  }

  return (
    <SourceContainer theme={theme}>
      <SourceText>Source</SourceText>
      {urls.map((url, index) => (
        <div key={index}>
          <SourceLink href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </SourceLink>
        </div>
      ))}
      <ExternalLink />
    </SourceContainer>
  );
};

export default SourceLinks;
