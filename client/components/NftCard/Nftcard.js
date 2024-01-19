// NFTCard.js
import React from "react";
import "./NftCard.css";

const NFTCard = ({ nftData }) => {
  return (
    <>
      <div className="card itemStyle bg-dark m-4">
        <img className="card-img-top" src={nftData.image} style={{height:"150px",width:"150px"}}alt="Card image cap" />
        <div className="card-body text-light">
          <h5 className="card-title">{nftData.title}</h5>
          <p className="card-text">{nftData.description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default NFTCard;
