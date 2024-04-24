"use client";

import { useState } from "react";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const starStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#8381D9",
  inactiveFillColor: "#2A2879",
};

export function RatingStars() {
  const [rating, setRating] = useState(3);

  return (
    <Rating
      style={{ maxWidth: 100 }}
      value={rating}
      onChange={setRating}
      itemStyles={starStyles}
      readOnly
    />
  );
}
