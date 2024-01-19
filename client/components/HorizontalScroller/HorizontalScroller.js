// HorizontalScroller.js
import React from "react";
import NFTCard from "../NftCard/Nftcard";
import img from "./tempNft.jpeg";
const temporaryNFTData = [
  {
    id: 1,
    title: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm.",
    ethValue: "0.041",
    timeLeft: "3 days left",
    creatorName: "Jules Wyvern",
    creatorAvatar: "./images/image-avatar.png",
    image: "https://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png",
  },
  // {
  //   id: 2,
  //   title: "Equilibrium #3429",
  //   description: "Our Equilibrium collection promotes balance and calm.",
  //   ethValue: "0.041",
  //   timeLeft: "3 days left",
  //   creatorName: "Jules Wyvern",
  //   creatorAvatar: "./images/image-avatar.png",
  //   image: './tempNft.jpeg',
  // },
  // {
  //   id: 3,
  //   title: "Equilibrium #3429",
  //   description: "Our Equilibrium collection promotes balance and calm.",
  //   ethValue: "0.041",
  //   timeLeft: "3 days left",
  //   creatorName: "Jules Wyvern",
  //   creatorAvatar: "./images/image-avatar.png",
  //   image: './tempNft.jpeg',
  // },
  // {
  //   id: 6,
  //   title: "Equilibrium #3429",
  //   description: "Our Equilibrium collection promotes balance and calm.",
  //   ethValue: "0.041",
  //   timeLeft: "3 days left",
  //   creatorName: "Jules Wyvern",
  //   creatorAvatar: "./images/image-avatar.png",
  //   image: './tempNft.jpeg',
  // },
  // {
  //   id: 5,
  //   title: "Equilibrium #3429",
  //   description: "Our Equilibrium collection promotes balance and calm.",
  //   ethValue: "0.041",
  //   timeLeft: "3 days left",
  //   creatorName: "Jules Wyvern",
  //   creatorAvatar: "./images/image-avatar.png",
  //   image: './tempNft.jpeg',
  // },
  // {
  //   id: 4,
  //   title: "Equilibrium #3429",
  //   description: "Our Equilibrium collection promotes balance and calm.",
  //   ethValue: "0.041",
  //   timeLeft: "3 days left",
  //   creatorName: "Jules Wyvern",
  //   creatorAvatar: "./images/image-avatar.png",
  //   image: './tempNft.jpeg',
  // },
  // Add more NFT data items as needed
];

const HorizontalScroller = () => {
  const containerStyle = {
    width: "100%",
    overflowX: "scroll",
    whiteSpace: "nowrap",
    marginBottom: "-17px",
    background: "rgb(10,60,206)",
  };

  

  return (
    <div style={containerStyle}>
        {temporaryNFTData.map((card) => (
          <NFTCard key={card.id} nftData={card} />
        ))}
    </div>
  );
};

export default HorizontalScroller;
