import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 7px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.li`
  background-image: url(${props => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

const Movie = ({ id, bg, isLiked }) => (
    <Container>
        <Link to={`/${id}`}>
            <Poster bg={bg} />
        </Link>
        <button>{isLiked ? "UnLike" : "Like"}</button>
    </Container>
);

export default Movie;
