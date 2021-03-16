import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { apiImage } from "../api";

const Image = styled.Image`
    width: 100px;
    height: 150px;
    border-radius: 4px;
`;

const Poster = ({ url }) => <Image source={{ uri: apiImage(url) }} />;

Poster.propTypes = {
    url: PropTypes.string,
};

export default Poster;
