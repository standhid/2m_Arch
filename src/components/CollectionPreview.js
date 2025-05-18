import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const artworks = [
  { title: "Hermez", img: "logo_hermez.png"},
  { title: "Chopard", img: "logo_chopard.png"},
  { title: "Isabel Marant", img: "logo_isabel_marant.png"},
  { title: "Jaipur Modern", img: "/jaipur/1.png"},
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
          placeholder="Search clients"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <h3>Featured Clients</h3>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((art, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                backgroundColor: "#fff",
                width: "200px",
                textAlign: "center",
              }}
            >
              <img
                src={art.img}
                alt={art.title}
                style={{ width: "100%", borderRadius: "4px" }}
              />
              <h4>
                <Link
                  to={`/brand/${encodeURIComponent(art.title)}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {art.title}
                </Link>
              </h4>
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
