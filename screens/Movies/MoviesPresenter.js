import React from "react";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SlideContainer = styled.View`
    width: 100%;
    height: ${HEIGHT / 3}px;
    margin-bottom: 50px;
`;

const Container = styled.View``;

const UpcominContainer = styled.View`
    margin-top: 20px;
`;

export default ({ loading, nowPlaying, popular, upcoming }) => (
    <ScrollView
        style={{ backgroundColor: "black" }}
        contentContainerStyle={{
            flexGrow: 1,
            justifyContent: loading ? "center" : "flex-start",
        }}
    >
        {loading ? (
            <ActivityIndicator color="white" size="large" />
        ) : (
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
                    <Title title={"Popular Movies"} />
                    <ScrollView
                        style={{ marginTop: 20, marginBottom: 40 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingLeft: 10 }}
                    >
                        {popular.map((movie) => (
                            <Vertical
                                id={movie.id}
                                key={movie.id}
                                poster={movie.poster_path}
                                title={movie.title}
                                votes={movie.vote_average}
                            />
                        ))}
                    </ScrollView>
                    <Title title={"Coming Soon"} />
                    <UpcominContainer>
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
                    </UpcominContainer>
                </Container>
            </>
        )}
    </ScrollView>
);
