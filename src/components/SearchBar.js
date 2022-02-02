import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function SearchBar({
  setQuery,
  query,
  setMovieArray,
  setShow,
  setCounter,
  topTen,
}) {
  const [lengthAlert, setLengthAlert] = useState("");
  var axios = require("axios").default;

  const onSubmit = (event) => {
    event.preventDefault();
    if (query.length === 0) {
      setShow(false);
      setLengthAlert("");
      setCounter(1);
      topTen.length = 0;
    } else if (query.length <= 2) {
      setLengthAlert("Must add more letters!");
    } else {
      setLengthAlert("");
      axios
        .request(
          `https://api.themoviedb.org/3/search/movie?api_key=05198e442625199bcbb16f52a684f1dc&language=en-US&query=${query}&page=1&include_adult=false`
        )
        .then(function (response) {
          setMovieArray(response.data.results);
          setShow(true);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  return (
    <Form
      style={{ marginTop: "10px", marginBottom: "10px" }}
      onSubmit={onSubmit}
    >
      <Form.Group>
        <Form.Control
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
        <Form.Text className="text-muted">{lengthAlert}</Form.Text>
      </Form.Group>
    </Form>
  );
}

export default SearchBar;
