import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import styled from "styled-components";

// query에 arg가 있는 경우, 
const GET_MOVIE = gql`
    # apollo를 위한 코드 => apollo가 type 검사를 해줌
    query getMovie($id: Int!) {
        # gql 서버로 전달되는 쿼리 
        movie(id: $id) {
            title
            medium_cover_image
            language
            rating
            description_intro
        }
        suggestions(id: $id) {
            id
            medium_cover_image
        }
    }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;

const Detail = () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: { id: parseInt(id, 10) }
    });

    console.log(data);

    return (
        <Container>
          <Column>
            <Title>{loading ? "loading..." : data.movie.title}</Title>
            <Subtitle>{data?.movie?.language} · {data?.movie?.rating}</Subtitle>
            <Description>{data?.movie?.description_intro}</Description>
          </Column>
          <Poster bg={data?.movie?.medium_cover_image}></Poster>
          {data?.suggestions?.map(s => <div key={s.id}>{s.id}</div>)}
        </Container>
    );
};

export default Detail;