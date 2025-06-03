import React, { useState } from "react";
import { useParams } from "react-router-dom";

const brandTitles = {
  Hermez: [
    { id: 201, title: "Swatch 01", img: "/hermes/1.png" },
    { id: 202, title: "Swatch 02", img: "/hermes/2.png" },
    { id: 203, title: "Swatch 03", img: "/hermes/3.png" },
    { id: 204, title: "Swatch 04", img: "/hermes/4.png" },
  ],
  "Jaipur Modern": [
    { id: 301, title: "Swatch 01", img: "/jaipur/2.png" },
    { id: 302, title: "Swatch 02", img: "/jaipur/3.png" },
    { id: 303, title: "Swatch 03", img: "/jaipur/4.png" },
    { id: 304, title: "Swatch 04", img: "/jaipur/5.png" },
  ],
  Chopard: [
    { id: 401, title: "Swatch 01", img: "/chopard/1.png" },
    { id: 402, title: "Swatch 02", img: "/chopard/2.png" },
    { id: 403, title: "Swatch 03", img: "/chopard/3.png" },
    { id: 404, title: "Swatch 04", img: "/chopard/4.png" },
  ],
  "Isabel Marant": [
    { id: 501, title: "Swatch 01", img: "/marant/1.png" },
    { id: 502, title: "Swatch 02", img: "/marant/2.png" },
    { id: 503, title: "Swatch 03", img: "/marant/3.png" },
    { id: 504, title: "Swatch 04", img: "/marant/4.png" },
  ]
};

const BrandPage = () => {
  const { brandName } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSwatch, setSelectedSwatch] = useState(null);

  const titlesForBrand = brandTitles[brandName] || [];

  const filteredTitles = titlesForBrand.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f9f9f9", minHeight: "80vh" }}>
      <h2 style={{ textAlign: "center" }}>{brandName}</h2>

      <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
        <input
          type="text"
          placeholder="Search swatches"
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
              onClick={() => setSelectedSwatch(item)}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                backgroundColor: "#fff",
                width: "200px",
                textAlign: "center",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
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
            </div>
          ))
        ) : (
          <p>No matching titles found.</p>
        )}
      </div>

      {/* Modal for enlarged swatch */}
      {selectedSwatch && (
        <div
          onClick={() => setSelectedSwatch(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "8px",
              maxWidth: "600px",
              width: "90%",
              textAlign: "center",
              position: "relative"
            }}
          >
            <button
              onClick={() => setSelectedSwatch(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                border: "none",
                background: "none",
                fontSize: "1.5rem",
                cursor: "pointer"
              }}
            >
              &times;
            </button>
            <img
              src={selectedSwatch.img}
              alt={selectedSwatch.title}
              style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: "4px", marginBottom: "1rem" }}
            />
            <h3>{selectedSwatch.title}</h3>
            <p style={{ color: "#555", fontSize: "0.95rem", marginTop: "0.5rem" }}>
              This is a sample description of the swatch. Details about material, color, or origin can be added here.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandPage;
