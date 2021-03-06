import React from "react";
import { Dimensions, ScrollView } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import Slide from "../../components/Movies/Slide";
import ScrollContainer from "../../components/ScrollContainer";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";

const { height: HEIGHT } = Dimensions.get("window");

const SlideContainer = styled.View`
    width: 100%;
    height: ${HEIGHT / 3}px;
    margin-bottom: 50px;
`;

const Container = styled.View``;

export default ({ loading, nowPlaying, popular, upcoming }) => (
    <ScrollContainer loading={loading}>
        <>
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
            <Container>
                <HorizontalSlider title={"Popular Movies"}>
                    {popular.map((movie) => (
                        <Vertical
                            id={movie.id}
                            key={movie.id}
                            poster={movie.poster_path}
                            title={movie.title}
                            votes={movie.vote_average}
                        />
                    ))}
                </HorizontalSlider>
                <List title={"Coming Soon"}>
                    {upcoming.map((movie) => (
                        <Horizontal
                            key={movie.id}
                            id={movie.id}
                            poster={movie.poster_path}
                            title={movie.title}
                            overview={movie.overview}
                            releaseDate={movie.release_date}
                        />
                    ))}
                </List>
            </Container>
        </>
    </ScrollContainer>
);
