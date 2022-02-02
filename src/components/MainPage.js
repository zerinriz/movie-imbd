import React, { useState } from "react";
import MovieCovers from "./MovieCovers";
import TopTenList from "./TopTenList";
import SearchBar from "./SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function MainPage({ requestToken }) {
  const [query, setQuery] = useState("");
  const [movieArray, setMovieArray] = useState([]);
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(1);
  const [topTen, setTopTen] = useState([]);

  function compare(a, b) {
    if (a.vote_average < b.vote_average) {
      return 1;
    }
    if (a.vote_average > b.vote_average) {
      return -1;
    }
    return 0;
  }
  movieArray.sort(compare);

  return (
    <Container>
      <SearchBar
        query={query}
        setQuery={setQuery}
        setMovieArray={setMovieArray}
        setShow={setShow}
        setCounter={setCounter}
        topTen={topTen}
      />
      {!show && (
        <TopTenList
          requestToken={requestToken}
          topTen={topTen}
          setTopTen={setTopTen}
          counter={counter}
          setCounter={setCounter}
        />
      )}
      <Container fluid>
        <Row className="justify-content-md-center">
          {show &&
            movieArray.map((item) => (
              <MovieCovers
                requestToken={requestToken}
                key={item.id}
                id={item.id}
                item={item}
                title={item.title}
                rating={item.vote_average}
                image={item.poster_path}
                overview={item.overview}
              />
            ))}
        </Row>
      </Container>
    </Container>
  );
}

export default MainPage;
