// NftCard.js
'use client'
import React, { useState } from "react";
// import "./NftCard.css";

const NFTCard = ({ nftData }) => {
  const [isLended, setIsLended] = useState(false);

  // Creating an object
  const cardStyles = {
    display: "inline-block",
    marginRight: "10px",
    border: "1px solid #ddd",
    padding: "10px",
    width: "20vw",
    background: "white",
    height: "60vh",
    overflowX: "hidden",
    overflowY: "hidden",
  };

  const handleLendClick = (e) => {
    e.preventDefault();

    // Display a message after 3 seconds
    setTimeout(() => {
      alert("Transaction completed");
      setIsLended(true);
    }, 1000);
  };

  return (
    <>
      <div className="card" style={cardStyles}>
        <img
          className="card-img-top align-items-center justify-content-center rounded"
          src={nftData.image}
          style={{ height: "230px", width: "100%" }}
          alt="Card image cap"
        />
        <div className="card-body text-dark mb-0 pb-0">
          <h5 className="card-title">{nftData.title}</h5>
          <p>Requested Amount: {nftData.requestedAmount}</p>
          <p>Interest Rate: {nftData.interestRate}</p>
          <p>Payback Time: {nftData.paybackTime}</p>
        </div>

        <div className="card-body text-dark">
          <button
            onClick={handleLendClick}
            className="btn btn-outline-dark w-100 rounded-pill"
            disabled={isLended}
          >
            {nftData.button}
          </button>
        </div>
      </div>
    </>
  );
};

export default NFTCard;
