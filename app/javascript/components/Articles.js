import React from "react";
import { getArticles } from "../api/articles";

const Articles = () => {
  const [articles, setArticles] = React.useState([]);

  async function refreshArticlesState() {
    const articles = await getArticles();
    setArticles(articles);
  }

  React.useEffect(() => {
    refreshArticlesState();
  }, []);

  return (
    <>
      <p>{JSON.stringify(articles)}</p>
    </>
  );
};
export default Articles;
