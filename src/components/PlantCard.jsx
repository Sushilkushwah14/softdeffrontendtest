
import React from "react";

const PlantCard = ({ data, layout = "left" }) => {
  const { name, about, image, price } = data;
  const isLeft = layout === "left";

  return (
    <div
      className={`relative mx-auto flex items-center justify-between overflow-visible`}
      style={{
        width: "1619px",
        height: "526px",
        borderRadius: "151px",
        borderWidth: "0px",
        borderStyle: "solid",
        borderImage:
          "linear-gradient(135.72deg, rgba(255,255,255,0.27) 8.53%, rgba(255,255,255,0) 60.59%, rgba(255,255,255,0.33) 93.17%) 1",
        background: "rgba(255, 255, 255, 0.06)", // subtle glass effect
        WebkitBackdropFilter: "blur(25px)",
        backdropFilter: "blur(25px)",
        zIndex: 3,
        marginTop: "160px", // gives space from previous section
        marginBottom: "100px",
        boxShadow: "0 0 40px rgba(0,0,0,0.25)",
      }}
    >
      {/* Plant Image */}
      <div
        style={{
          position: "absolute",
          top: "-180px", // lifted a bit higher
          left: isLeft ? "100px" : "auto",
          right: isLeft ? "auto" : "100px",
          width: "601px",
          height: "732px",
          zIndex: 5,
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 25px 35px rgba(0,0,0,0.25))",
          }}
        />
      </div>

      {/* Text Section */}
      <div
        style={{
          maxWidth: "732px",
          marginLeft: isLeft ? "auto" : "180px",
          marginRight: isLeft ? "180px" : "auto",
          color: "#ffffff",
          zIndex: 6,
        }}
      >
        <h3
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "38px",
            lineHeight: "110%",
            marginBottom: "18px",
            textShadow: "0 4px 10px rgba(0,0,0,0.4)",
          }}
        >
          {name}
        </h3>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "130%",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "20px",
          }}
        >
          {about}
        </p>

        <span
          style={{
            display: "block",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "38px",
            color: "#FBD300",
            marginBottom: "28px",
            textShadow: "0 3px 8px rgba(0,0,0,0.4)",
          }}
        >
          {price}
        </span>

        {/* Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {/* Explore Button */}
          <button
            style={{
              width: "217px",
              height: "64px",
              borderRadius: "12px",
              border: "2px solid #FFFFFF80",
              background: "#FBD300",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "24px",
              color: "#000",
              cursor: "pointer",
              boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Explore
          </button>

          {/* Bag Button */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "12px",
              border: "2px solid #FFFFFF80",
              background: "#FBD300",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src="/bag.png"
              alt="bag"
              style={{ width: "34px", height: "34px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;

