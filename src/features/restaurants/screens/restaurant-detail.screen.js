import React, { useState } from "react";
import { Text } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "./restaurants.screen";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Menu">
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
            <List.Item title="B1" />
            <List.Item title="B2" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}>
            <List.Item title="L1" />
            <List.Item title="L2" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}>
            <List.Item title="D1" />
            <List.Item title="D2" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}>
            <List.Item title="D1" />
            <List.Item title="D2" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};

export default RestaurantDetailScreen;
