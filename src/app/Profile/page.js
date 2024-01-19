import React from "react";
import NFTCard from "../../../client/components/NftCard/Nftcard";
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
  {
    id: 2,
    title: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm.",
    ethValue: "0.041",
    timeLeft: "3 days left",
    creatorName: "Jules Wyvern",
    creatorAvatar: "./images/image-avatar.png",
    image: "https://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png",
  },
  {
    id: 3,
    title: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm.",
    ethValue: "0.041",
    timeLeft: "3 days left",
    creatorName: "Jules Wyvern",
    creatorAvatar: "./images/image-avatar.png",
    image: "https://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png",
  },
  {
    id: 6,
    title: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm.",
    ethValue: "0.041",
    timeLeft: "3 days left",
    creatorName: "Jules Wyvern",
    creatorAvatar: "./images/image-avatar.png",
    image: "https://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png",
  },
  {
    id: 5,
    title: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm.",
    ethValue: "0.041",
    timeLeft: "3 days left",
    creatorName: "Jules Wyvern",
    creatorAvatar: "./images/image-avatar.png",
    image: "https://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png",
  },
  {
    id: 4,
    title: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm.",
    ethValue: "0.041",
    timeLeft: "3 days left",
    creatorName: "Jules Wyvern",
    creatorAvatar: "./images/image-avatar.png",
    image: "https://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png",
  },
];
const Profile = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-light">
              Connected
            </h1>
            <p className="lead">
              Name
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
      {temporaryNFTData.map((card) => (
          <NFTCard key={card.id} nftData={card} />
        ))}
      </div>
      

    </>
  );
};

export default Profile;
