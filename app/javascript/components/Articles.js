import React from "react";
import { getArticles } from "../api/articles";
import { useForm } from "react-hook-form";

const Articles = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    reValidateMode: "onChange",
  });
  const onSubmit = async (data) => {
    await createArticle(data.title, data.body);
    refreshArticlesState();
    reset();
  };

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
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => {
          return (
            <li>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </li>
          );
        })}
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="title"
            {...register("title", { required: "Title is required" })}
          />
          <p style={{ color: "red" }}>{errors.title?.message}</p>
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input
            type="text"
            placeholder="body"
            {...register("body", { required: "Body is required" })}
          />
          <p style={{ color: "red" }}>{errors.body?.message}</p>
        </div>

        <input type="submit" />
      </form>
    </>
  );
};
export default Articles;
