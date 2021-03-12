import React from "react";
import { View, Text } from "react-native";
import { useEffect } from "react/cjs/react.development";
import { tvApi } from "../api";
export default () => {
    const [shows, setShows] = useState({
        today: [],
        todayError: null,
        thisWeek: [],
        thisWeekError: null,
        topRated: [],
        topRatedError: null,
        popular: [],
        popularError: null,
    });
    const getData = async () => {
        const [today, todayError] = await tvApi.today();
        const [thisWeek, thisWeekError] = await tvApi.thisWeek();
        const [topRated, topRatedError] = await tvApi.topRated();
        const [popular, popularError] = await tvApi.popular();
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <View>
            <Text>TV</Text>
        </View>
    );
};
