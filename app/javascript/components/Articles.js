import React from "react";

const getArticles = async () => {
  const response = await fetch("/articles_v2");
  const articles = await response.json();
  return articles;
};

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
