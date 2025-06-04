import React, { useState } from "react";
import { useParams } from "react-router-dom";

const brandTitles = {
  Hermez: [
    { id: 201, title: "Swatch 01", img: "/hermes/1.png", tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Hermes
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Hermez’s return to classic weave traditions.`
      } },
    { id: 202, title: "Swatch 02", img: "/hermes/2.png",tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Hermes
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Hermez’s return to classic weave traditions.`
      } },
    { id: 203, title: "Swatch 03", img: "/hermes/3.png", tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Hermes
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Hermez’s return to classic weave traditions.`
      } },
    { id: 204, title: "Swatch 04", img: "/hermes/4.png",tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Hermes
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Hermez’s return to classic weave traditions.`
      } },
  ],
  "Jaipur Modern": [
    { id: 301, title: "Swatch 01", img: "/jaipur/2.png",tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Jaipur Modern
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Jaipur Modern’s return to classic weave traditions.`
      } },
    { id: 302, title: "Swatch 02", img: "/jaipur/3.png",tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Jaipur Modern
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Jaipur Modern’s return to classic weave traditions.`
      } },
    { id: 303, title: "Swatch 03", img: "/jaipur/4.png",tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Jaipur Modern
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Jaipur Modern’s return to classic weave traditions.`
      } },
    { id: 304, title: "Swatch 04", img: "/jaipur/5.png", tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Jaipur Modern
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Jaipur Modern’s return to classic weave traditions.`
      } },
  ],
  Chopard: [
    { id: 401, title: "Swatch 01", img: "/chopard/1.png",tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Chopard
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Chopard’s return to classic weave traditions.`
      } },
    { id: 402, title: "Swatch 02", img: "/chopard/2.png", tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Chopard
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Chopard’s return to classic weave traditions.`
      } },
    { id: 403, title: "Swatch 03", img: "/chopard/3.png",tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Chopard
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Chopard’s return to classic weave traditions.`
      } },
    { id: 404, title: "Swatch 04", img: "/chopard/4.png",tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Chopard
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Chopard’s return to classic weave traditions.`
      } },
  ],
  "Isabel Marant": [
    { id: 501, title: "Swatch 01", img: "/marant/1.png",tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Isabel Marant
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Isabel Marant’s return to classic weave traditions.`
      } },
    { id: 502, title: "Swatch 02", img: "/marant/2.png", tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Isabel Marant
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Isabel Marant’s return to classic weave traditions.`
      } },
    { id: 503, title: "Swatch 03", img: "/marant/3.png", tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Isabel Marant
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Isabel Marant’s return to classic weave traditions.`
      } },
    { id: 504, title: "Swatch 04", img: "/marant/4.png",tabContent: {
        "Inventory Details": `**Accession Number**: HZ201-A1
**Shelf Location**: Bay 3, Shelf B`,
        "Record Details": `**Client**: Isabel Marant
**Production Date**: March 2012
**Production & Acquisition**: In-house at Paris Atelier; acquired April 2012
**Applications**: Used in Haute Couture Spring Line`,
        "Material & Design": `**Technique**: Hand-woven
**Color Palette**: Beige, Charcoal
**Dimensions**: 20cm x 20cm
**Motif**: Geometric abstract
**Base Fabric**: Cotton-silk blend
**Thread Type**: Metallic and cotton
**Embellishments**: None`,
        Notes: `This swatch marked the beginning of Isabel Marant’s return to classic weave traditions.`
      } },
  ]
};

const BrandPage = () => {
  const { brandName } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSwatch, setSelectedSwatch] = useState(null);
  const [activeTab, setActiveTab] = useState("Inventory Details");

  const titlesForBrand = brandTitles[brandName] || [];

  const filteredTitles = titlesForBrand.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                setActiveTab("Inventory Details");
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
              <div style={{ width: "200px", borderRight: "1px solid #ccc", overflowY: "auto" }}>
                {Object.keys(selectedSwatch.tabContent).map((tab) => (
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
                {selectedSwatch.tabContent[activeTab]
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