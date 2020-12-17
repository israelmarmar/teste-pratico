import React, { useState, useEffect } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import api from "../services/api";
import Page from "../components/Page";
import AppLoading from "expo-app-loading";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const [pages, setPages] = useState([]);

  const IconTags = {
    Entypo,
    FontAwesome,
    Foundation,
    Fontisto,
    MaterialCommunityIcons
  };

  const getPages = async () => {
    try {
      const response = await api.get("pages");
      setPages(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getPages();
  }, []);

  if (pages.length == 0) return <AppLoading />;

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {pages.map((page, index) => {
          const IconTag = IconTags[page.typeIcon];
          const PageOne = () => <Page key={index} content={page.content} />
          return (
            <Tab.Screen
              key={index}
              name={page.title}
              component={PageOne}
              options={{
                tabBarLabel: page.title,
                tabBarIcon: ({ color, size }) => (
                  <IconTag name={page.icon} color={color} size={size} />
                ),
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
