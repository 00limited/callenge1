import React from "react";
import img from "../img/img1.jpg";
import datadummy from "../dummy.json";
import { useEffect, useState } from "react";

function Callenge() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(datadummy);
  }, []);

  if (!data || !data.length) return null;
  return (
    <div>
      <div style={{ width: "550px", background: "yellow" }}>
        <div
          style={{
            width: "400px",
            background: "black",
            position: "absolute",
            top: "10px",
            bottom: "0",
            left: "0",
            right: "0",

            margin: "auto",
          }}
        >
          {data.map((item) => {
            const { id, image, username, follower, following } = item;
            return (
              <div
                key={id}
                style={{
                  background: "red",
                  width: "100%",
                  display: "flex",
                  marginTop: "10px",
                  justifyContent: "flex-start",
                }}
              >
                <div style={{ padding: "8px" }}>
                  <img
                    src={image}
                    alt=""
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  />
                </div>
                <div
                  style={{
                    background: "red",
                    width: "100%",
                    paddingBottom: "15px",
                  }}
                >
                  <h3>{username}</h3>
                  <span>followers:{follower}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      ;
    </div>
  );
}

export default Callenge;
