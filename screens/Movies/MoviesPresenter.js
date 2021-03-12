import React from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
    flex: 1;
    background-color: black;
    justify-content: center;
`;

const Header = styled.View`
    width: 100%;
    height: ${height / 3};
`;

const Section = styled.View`
    background-color: red;
    height: 100%;
`;

const Text = styled.Text``;

export default ({ loading, nowPlaying }) => (
    <Container>
        {loading ? (
            <ActivityIndicator color="white" size="large" />
        ) : (
            <Header>
                <Swiper controlsEnabled={false} loop timeout={3}>
                    {nowPlaying.map((movie) => (
                        <Section key={movie.id}>
                            <Text>{movie.original_title}</Text>
                        </Section>
                    ))}
                    <Section>
                        <Text>hello</Text>
                    </Section>
                    <Section>
                        <Text>vvawe</Text>
                    </Section>
                    <Section>
                        <Text>sefsefes</Text>
                    </Section>
                </Swiper>
            </Header>
        )}
    </Container>
);
