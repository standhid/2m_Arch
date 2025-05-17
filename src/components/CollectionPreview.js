import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const artworks = [
  { title: "Hermez", img: "https://via.placeholder.com/200", period: "Greek" },
  { title: "Chopard", img: "https://via.placeholder.com/200", period: "Medieval" },
  { title: "Isabel Marant", img: "https://via.placeholder.com/200", period: "18th Century" },
  { title: "Jaipur Modern", img: "https://via.placeholder.com/200", period: "Modern" },
];

const CollectionPreview = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArtworks = artworks.filter((art) =>
    art.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section style={{ padding: "2rem", backgroundColor: "#f8f8f8" }}>
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search artworks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <h3>Featured Artworks</h3>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
          gap: "1rem",
        }}
      >
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((art, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={art.img}
                alt={art.title}
                style={{ width: "100%", borderRadius: "4px" }}
              />
              <h4>
                <Link to={`/brand/${encodeURIComponent(art.title)}`}>
                  {art.title}
                </Link>
              </h4>
              <p>{art.period}</p>
            </div>
          ))
        ) : (
          <p>No brands found.</p>
        )}
      </div>
    </section>
  );
};

export default CollectionPreview;
