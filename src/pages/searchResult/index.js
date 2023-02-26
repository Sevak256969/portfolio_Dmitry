import React from "react";
import { SearchSection, SearchWidthDiv } from "../../MainTags";
import { useLocation } from "react-router-dom";
import SearchResult from "./SearchResult";

export default function SearchIndex() {
  const { state } = useLocation();
  return (
    <SearchSection>
      <SearchWidthDiv>
        <SearchResult />
      </SearchWidthDiv>
    </SearchSection>
  );
}
