import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { restaurantsRequest } from "../../../services/restaurants/restaurants.service";

// const myText = styled.Text``;

const MapCallout = ({ restaurant }) => {
  return <Text>{restaurant.name}</Text>;
};

export default MapCallout;
