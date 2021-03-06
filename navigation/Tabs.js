import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
    useLayoutEffect(() => {
        const name = getFocusedRouteNameFromRoute(route) || "MoviesY";
        navigation.setOptions({
            title: name,
        });
    }, [route]);
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName = Platform.OS === "ios" ? "ios-" : "md-";
                    if (route.name === "Movies") {
                        iconName += "film";
                    } else if (route.name === "TV") {
                        iconName += "tv";
                    }
                    if (route.name === "Search") {
                        iconName += "search";
                    }
                    if (route.name === "Favourites") {
                        iconName += "heart";
                    }
                    return (
                        <Ionicons
                            name={iconName}
                            color={focused ? "white" : "grey"}
                            size={26}
                        />
                    );
                },
            })}
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: "black",
                    borderTopColor: "black",
                },
            }}
        >
            <Tabs.Screen name="Search" component={Search} />
            <Tabs.Screen name="Movies" component={Movies} />
            <Tabs.Screen name="TV" component={Tv} />
            <Tabs.Screen name="Favourites" component={Favs} />
        </Tabs.Navigator>
    );
};
