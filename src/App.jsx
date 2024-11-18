import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [articles, setArticles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    setArticles([...articles, title]);
    setTitle("");
  };

  const handleDelete = (index) => {
    setArticles(articles.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Gestione Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Inserisci il titolo dell'articolo"
        />
        <button type="submit">Aggiungi</button>
      </form>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            {article}
            <button
              className="delete"
              onClick={() => handleDelete(index)}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
