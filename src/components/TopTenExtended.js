import React from "react";
import TopTenCovers from "./TopTenCovers";
import Row from "react-bootstrap/Row";

function TopTenExtended({ item, requestToken }) {
  return (
    <Row className="justify-content-md-center">
      {item.length > 0 &&
        item.map((movie) => (
          <TopTenCovers
            requestToken={requestToken}
            key={movie.id}
            id={movie.id}
            item={movie}
            title={movie.title}
            rating={movie.vote_average}
            image={movie.poster_path}
            overview={movie.overview}
          />
        ))}
    </Row>
  );
}

export default TopTenExtended;
