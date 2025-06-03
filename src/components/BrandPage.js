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
  const [activeTab, setActiveTab] = useState("Overview");

  const titlesForBrand = brandTitles[brandName] || [];

  const filteredTitles = titlesForBrand.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tabContent = {
    Overview: `**Title:** Sachihongo Mask
**Artist:** Mbunda artist
**Date:** 19th–early 20th century
**Geography:** Zambia
**Culture:** Mbunda
**Medium:** Wood, pigment(?)
**Dimensions:** H. 17 × W. 12 × D. 10 in. (43.2 × 30.5 × 25.4 cm)
**Classification:** Wood
**Credit Line:** Purchase, Lila Acheson Wallace, Anonymous, Dr. and Mrs. Sidney G. Clyman, The Katcher Family Foundation Inc., Steven Kossak, and Holly and David Ross Gifts, 2016
**Object Number:** 2016.106`,
    Provenance: `Mbunda people, Zambia.
Acquired by a private collector in the mid-20th century.
Gifted to the institution in 2016.`,
    "Exhibition History": `“Art of Zambia” - Metropolitan Museum, 2017
“Voices of Africa” - Brooklyn Museum, 2019-2020`,
    References: `1. African Art and Culture, Smith & Ngozi, 2015
2. Museum Catalog Entry 2016.106
3. Exhibition Archives - Metropolitan Museum`
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center" }}>{brandName}</h2>

      <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
        <input
          type="text"
          placeholder="Search swatches"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
              onClick={() => {
                setSelectedSwatch(item);
                setActiveTab("Overview");
              }}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                backgroundColor: "#fff",
                width: "200px",
                textAlign: "center",
                cursor: "pointer"
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px", marginBottom: "0.5rem" }}
              />
              <h4>{item.title}</h4>
            </div>
          ))
        ) : (
          <p>No matching titles found.</p>
        )}
      </div>

      {selectedSwatch && (
        <div
          onClick={() => setSelectedSwatch(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "8px",
              maxWidth: "900px",
              width: "90%",
              height: "90vh",
              display: "flex",
              flexDirection: "column",
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
              style={{
                maxWidth: "100%",
                maxHeight: "300px",
                objectFit: "contain",
                borderRadius: "6px",
                marginBottom: "1rem",
                alignSelf: "center"
              }}
            />
            <p style={{ textAlign: "center", fontSize: "0.95rem", color: "#777", marginBottom: "1.5rem" }}>
              This is a swatch detail view from the {brandName} collection.
            </p>

            <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
              {/* Sidebar Tabs */}
              <div style={{ width: "200px", borderRight: "1px solid #ccc" }}>
                {Object.keys(tabContent).map((tab) => (
                  <div
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: "1rem",
                      cursor: "pointer",
                      backgroundColor: activeTab === tab ? "#f5f5f5" : "transparent",
                      borderLeft: activeTab === tab ? "4px solid black" : "4px solid transparent",
                      fontWeight: activeTab === tab ? "bold" : "normal"
                    }}
                  >
                    {tab}
                  </div>
                ))}
              </div>

              {/* Tab Content */}
              <div style={{ flex: 1, padding: "1rem 1.5rem", overflowY: "auto" }}>
                {tabContent[activeTab]
                  .split("\n")
                  .map((line, idx) => {
                    const parts = line.split("**");
                    return (
                      <p key={idx} style={{ marginBottom: "0.75rem" }}>
                        {parts.length === 3 ? (
                          <>
                            <strong>{parts[1]}</strong>: {parts[2]}
                          </>
                        ) : (
                          line
                        )}
                      </p>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandPage;
