import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { View, SafeAreaView, FlatList, StatusBar } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  padding: 16px;
  flex: 1;
  background-color: white;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          // console.log(item);
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
