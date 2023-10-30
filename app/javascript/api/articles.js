export const getArticles = async () => {
  const response = await fetch("/articles_v2");
  const articles = await response.json();
  return articles;
};

export const createArticle = async (title, body) => {
  const response = await fetch("/articles_v2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ article: { title, body } }),
  });
  const article = await response.json();
  return article;
};

export const deleteArticle = async (id) => {
  const response = await fetch(`/articles_v2/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 204) {
    return true;
  }

  throw "Article was not deleted";
};

window.getArticles = getArticles;
window.createArticle = createArticle;
window.deleteArticle = deleteArticle;
