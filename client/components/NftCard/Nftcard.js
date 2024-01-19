// NFTCard.js
import React from "react";
import "./NftCard.css";

const NFTCard = ({ nftData }) => {
  return (
    <>
      <div className="card itemStyle bg-light m-4 shadow-lg" >
        <img className="card-img-top align-items-center justify-content-center" src={nftData.image} style={{height:"125px",width:"150px"}}alt="Card image cap" />
        <div className="card-body text-dark">
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
