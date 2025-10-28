


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
        borderWidth: "2px",
        borderStyle: "solid",
        borderImage:
          "linear-gradient(135.72deg, rgba(255,255,255,0.27) 8.53%, rgba(255,255,255,0) 60.59%, rgba(255,255,255,0.33) 93.17%) 1",
        background: "rgba(255,255,255,0.06)",
        WebkitBackdropFilter: "blur(20px)",
        backdropFilter: "blur(20px)",
        zIndex: 2,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-206px", 
          left: isLeft ? "126px" : "auto",
          right: isLeft ? "auto" : "126px",
          width: "601px",
          height: "732px",
          zIndex: 10,
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "601px",
            height: "732px",
            objectFit: "contain",
            boxShadow: `
              0px 0.54px 1.59px 0px #00000007,
              0px 1.22px 3.62px 0px #0000000B,
              0px 2.13px 6.31px 0px #0000000D,
              0px 3.38px 10.02px 0px #0000000F,
              0px 5.22px 15.46px 0px #00000011,
              0px 8.14px 24.12px 0px #00000014,
              0px 13.51px 40.04px 0px #00000017,
              0px 27px 80px 0px #0000001F
            `,
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "732px",
          marginLeft: isLeft ? "auto" : "180px",
          marginRight: isLeft ? "180px" : "auto",
          color: "#0b0b0b", 
          zIndex: 5,
        }}
      >
        <h3
          style={{
            width: "508px", 
            height: "46px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "38px",
            lineHeight: "100%",
            margin: "0 0 16px 0",
          }}
        >
          {name}
        </h3>

        <p
          style={{
            width: "732px",
            height: "48px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "100%",
            margin: "0 0 18px 0",
            color: "rgba(0,0,0,0.6)",
          }}
        >
          {about}
        </p>

        <div
          style={{
            width: "171px",
            height: "46px",
            marginBottom: "18px",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "38px",
              lineHeight: "100%",
              textShadow: `
                0px 1.02px 2.21px rgba(0,0,0,0.176),
                0px 2.46px 5.32px rgba(0,0,0,0.25),
                0px 4.63px 10.02px rgba(0,0,0,0.31),
                0px 8.26px 17.87px rgba(0,0,0,0.37),
                0px 15.46px 33.42px rgba(0,0,0,0.45),
                0px 37px 80px rgba(0,0,0,0.62)
              `,
              display: "inline-block",
            }}
          >
            {price}
          </span>
        </div>

       
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
   
          <button
            style={{
              width: "217px",
              height: "64px",
              borderRadius: "12px",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#FFFFFF",
              background: "#FBD300",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "28px",
              lineHeight: "100%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                "0px 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            Explore
          </button>

        
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "12px",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#FFFFFF",
              background: "#FBD300",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            
            <img src="/bag.png" alt="bag" style={{ width: "34px", height: "34px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
