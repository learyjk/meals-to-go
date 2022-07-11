import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: 16px;
`;

export const Search = ({ isFavoritesToggled, onFavoritesToggled }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const onChangeSearch = (query) => {
    setSearchKeyword(query);
  };
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavoritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavoritesToggled}
        placeholder="Search Location"
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={onChangeSearch}
        value={searchKeyword}
      />
    </SearchContainer>
  );
};
