import React from "react"

export default function OfferText(props) {
  return (
    <div className="infoText">
      <h2>{props.headline}</h2>
      <p>{props.p1}</p>
      <p>{props.p2}</p>
      <div className="podpis">
        {props.leftAlign ? (
          <>
            <span style={{ fontStyle: "italic", fontSize: "0.8em" }}>
              {props.podpis}
            </span>{" "}
            <span className="line"></span>{" "}
          </>
        ) : (
          <>
            <span className="line"></span>{" "}
            <span style={{ fontStyle: "italic", fontSize: "0.8em" }}>
              {props.podpis}
            </span>{" "}
          </>
        )}
      </div>
    </div>
  )
}
