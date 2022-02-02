import React, { useEffect } from "react";
import TopTenExtended from "./TopTenExtended";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function TopTenList({ counter, setCounter, topTen, setTopTen, requestToken }) {
  useEffect(() => {
    var axios = require("axios").default;
    axios
      .request(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=05198e442625199bcbb16f52a684f1dc&language=en-US&page=${counter}`
      )
      .then(function (response) {
        setTopTen((topTen) => [...topTen, response.data.results]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [counter, setTopTen]);

  return (
    <div>
      <Container fluid>
        {topTen.length > 0 &&
          topTen.map((item, index) => (
            <TopTenExtended
              item={item}
              key={index}
              requestToken={requestToken}
            />
          ))}
        <Button
          onClick={() => setCounter(counter + 1)}
          style={{ margin: "10px" }}
        >
          Show more
        </Button>
      </Container>
    </div>
  );
}

export default TopTenList;
