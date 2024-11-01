import React, { useEffect, useState } from "react";
import "./assets/styles/App.css";
import axios from "axios";
import { Header } from "./components/Header/Header";
import { Article } from "./components/Article/Article";
import { ThreeDots } from "react-loader-spinner";

//Componentes em classes são classes que herdam a classe Component do React e retornam HTML dentro do método render
//Componentes funcionais são funcões que retornam HTML

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      const { results } = response.data;

      setNews(results);
    }
    loadNews();
  }, []);

  return (
    <>
      <Header />

      <section id="articleList">
        {news.length === 0 ? (
          <div class="loader">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="deepskyblue"
              ariaLabel="loading"
            />
          </div>
        ) : (
          news.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              thumbnail={article.image_url}
              provider={article.news_site}
              description={article.summary}
            />
          ))
        )}
      </section>
    </>
  );
}

export default App;
