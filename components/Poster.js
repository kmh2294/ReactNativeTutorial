import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Image = styled.Image`
    width: 100px;
    height: 150px;
    border-radius: 4px;
`;

const Poster = ({ url }) => <Image source={{ uri: url }} />;

Poster.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Poster;
