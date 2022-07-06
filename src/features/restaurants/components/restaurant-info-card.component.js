import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/isOpen";

const RestaurantCard = styled(Card)`
  background-color: white;
  margin-bottom: 16px;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const SpaceBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Row = styled.View`
  flex-direction: row;
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    ],
    address = "100 Random St.",
    isOpenNow = true,
    rating = 4,
    placeId,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <SpaceBetween>
          <Row>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Row>
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
        </SpaceBetween>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
