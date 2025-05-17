import React, { useState } from "react";
import { useParams } from "react-router-dom";

const brandTitles = {
  Hermez: [
    { id: 201, title: "Golden Horizon", img: "/hermes/1.png" },
    { id: 202, title: "Silk Road", img: "/hermes/2.png" },
    { id: 203, title: "Leather Whisper", img: "/hermes/3.png" },
    { id: 204, title: "Orchid Trail", img: "/hermes/4.png" },
  ],
  "Jaipur Modern": [
    { id: 301, title: "Midnight Muse", img: "/jaipur/2.png" },
    { id: 302, title: "Ivory Pulse", img: "/jaipur/3.png" },
    { id: 303, title: "Velvet Noir", img: "/jaipur/4.png" },
    { id: 304, title: "Crimson Frost", img: "/jaipur/5.png" },
  ],
  Chopard: [
    { id: 401, title: "Sapphire Rain", img: "/chopard/1.png" },
    { id: 402, title: "Diamond Echo", img: "/chopard/2.png" },
    { id: 403, title: "Ruby Flame", img: "/chopard/3.png" },
    { id: 404, title: "Gold Drift", img: "/chopard/4.png" },
  ],
  "Isabel Marant": [
    { id: 501, title: "Wild Petal", img: "/marant/1.png" },
    { id: 502, title: "River Thread", img: "/marant/2.png" },
    { id: 503, title: "Bohemian Glow", img: "/marant/3.png" },
    { id: 504, title: "Crimson Root", img: "/marant/4.png" },
  ]
};

const BrandPage = () => {
  const { brandName } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const titlesForBrand = brandTitles[brandName] || [];

  const filteredTitles = titlesForBrand.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center" }}>Welcome to {brandName}</h2>

      <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
        <input
          type="text"
          placeholder="Search titles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
          style={{
            padding: "0.5rem 1rem",
            width: "100%",
            maxWidth: "600px",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
            marginBottom: "1rem"
          }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
        {filteredTitles.length > 0 ? (
          filteredTitles.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                backgroundColor: "#fff",
                width: "200px",
                textAlign: "center"
              }}
            >
              {item.img && (
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px", marginBottom: "0.5rem" }}
                />
              )}
              <h4>{item.title}</h4>
              <p>ID: {item.id}</p>
            </div>
          ))
        ) : (
          <p>No matching titles found.</p>
        )}
      </div>
    </div>
  );
};

export default BrandPage;
