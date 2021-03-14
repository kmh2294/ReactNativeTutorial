import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { TouchableOpacity } from "react-native";
import { formatDate, trimText } from "../utils";

const Container = styled.View`
    padding: 0 30px 0 30px;
    margin-bottom: 30px;
    flex-direction: row;
    align-items: flex-start;
`;

const Data = styled.View`
    align-items: flex-start;
    width: 60%;
    margin-left: 20px;
`;

const Title = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
`;
const Overview = styled.Text`
    color: white;
    margin-top: 10px;
`;

const ReleaseDate = styled.Text`
    color: white;
    font-size: 12px;
`;

const Horizontal = ({ id, poster, title, overview, releaseDate }) => (
    <TouchableOpacity>
        <Container>
            <Poster url={poster} />
            <Data>
                <Title>{trimText(title, 40)}</Title>
                {releaseDate ? (
                    <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>
                ) : null}

                <Overview>{trimText(overview, 110)}</Overview>
            </Data>
        </Container>
    </TouchableOpacity>
);

Horizontal.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
};

export default Horizontal;
