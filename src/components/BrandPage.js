import React, { useState } from "react";
import { useParams } from "react-router-dom";

const brandTitles = {
  Hermez: [
    { id: 201, title: "Golden Horizon" },
    { id: 202, title: "Silk Road" },
    { id: 203, title: "Leather Whisper" },
    { id: 204, title: "Orchid Trail" },
    { id: 205, title: "Amber Sky" }
  ],
  "Jaipur Modern": [
    { id: 301, title: "Midnight Muse" },
    { id: 302, title: "Ivory Pulse" },
    { id: 303, title: "Velvet Noir" },
    { id: 304, title: "Crimson Frost" },
    { id: 305, title: "Eau Brillante" }
  ],
  Chopard: [
    { id: 401, title: "Sapphire Rain" },
    { id: 402, title: "Diamond Echo" },
    { id: 403, title: "Ruby Flame" },
    { id: 404, title: "Gold Drift" },
    { id: 405, title: "Emerald Soul" }
  ],
  "Isabel Marant": [
    { id: 501, title: "Wild Petal" },
    { id: 502, title: "River Thread" },
    { id: 503, title: "Bohemian Glow" },
    { id: 504, title: "Crimson Root" },
    { id: 505, title: "Feathered Bloom" }
  ],
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
