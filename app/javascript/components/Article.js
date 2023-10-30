import React from "react";
import { useParams } from "react-router-dom";

export const Article = () => {
  const { id } = useParams();
  console.log(id);

  return <div>Article</div>;
};
