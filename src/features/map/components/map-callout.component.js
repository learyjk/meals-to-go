import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { restaurantsRequest } from "../../../services/restaurants/restaurants.service";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

// const myText = styled.Text``;

const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};

export default MapCallout;
