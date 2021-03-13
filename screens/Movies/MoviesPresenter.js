import React from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Slide from "../../components/Movies/Slide";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
    flex: 1;
    background-color: black;
    justify-content: center;
`;

const SlideContainer = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT / 3}px;
`;

export default ({ loading, nowPlaying }) => (
    <Container>
        {loading ? (
            <ActivityIndicator color="white" size="large" />
        ) : (
            <SlideContainer>
                <Swiper controlsEnabled={false} loop timeout={3}>
                    {nowPlaying.map((movie) => (
                        <Slide
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            overview={movie.overview}
                            votes={movie.vote_average}
                            backgroundImage={movie.backdrop_path}
                            poster={movie.poster_path}
                        />
                    ))}
                </Swiper>
            </SlideContainer>
        )}
    </Container>
);
