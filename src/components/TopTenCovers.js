import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Rating } from "react-simple-star-rating";
import ImageDefault from "./../assets/images/MovieDefault.png";

function TopTenCovers({ title, rating, image, overview, id, requestToken }) {
  const [colorRating, setColorRating] = useState("lightgreen");
  const [ratingStars, setRatingStars] = useState(0);
  const [ratings, setRatings] = useState(0);
  var axios = require("axios").default;

  useEffect(() => {
    if (rating < 5) {
      setColorRating("red");
    } else if (rating < 7.5) {
      setColorRating("orange");
    } else if (rating < 10) {
      setColorRating("lightgreen");
    }
  }, [rating]);

  const handleRating = (rate) => {
    setRatings(rate);
    setRatingStars(rate.toString().replace("0", ""));
    axios.post(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=05198e442625199bcbb16f52a684f1dc&guest_session_id=${requestToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },

        value: rate.toString().replace("0", ""),
      }
    );
  };

  return (
    <Col
      md="auto"
      style={{ display: "flex", justifyContent: "center", margin: "5px" }}
    >
      <Card border="dark" className="movie">
        <div className="movie-over">
          <h2>Overview</h2>
          <p>{overview}</p>
          <Rating
            fillColor={"rgb(82, 90, 161)"}
            allowHalfIcon
            iconsCount={5}
            initialValue={0}
            onClick={handleRating}
            ratingValue={ratings}
          />
          Your rating is {ratingStars}
        </div>
        <Card.Img
          src={image ? "https://image.tmdb.org/t/p/w200" + image : ImageDefault}
        ></Card.Img>
        <Card.Body>
          <Card.Title
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h6>{title}</h6>
            <h6
              style={{
                color: colorRating,
                backgroundColor: "rgb(1,33,92)",
                margin: "5px",
                padding: "3px",
                borderRadius: "5px",
                display: "initial",
                boxShadow: "3px 3px 3px rgb(1, 9, 75)",
              }}
            >
              {rating}
            </h6>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default TopTenCovers;
