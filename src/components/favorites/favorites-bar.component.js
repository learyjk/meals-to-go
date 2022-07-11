import React from "react";
import { ScrollView } from "react-native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;
const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <View key={key} style={{ marginRight: 10 }}>
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", restaurant)}>
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};

export default FavoritesBar;
