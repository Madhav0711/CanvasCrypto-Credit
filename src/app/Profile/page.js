import React from "react";
import NFTCard from "../../../client/components/NftCard/Nftcard";

const temporaryNFTData = [
  {
    id: 1,
    title: "Harmony Bliss #1256",
    paybackTime: "30 days",
    requestedAmount: "2 ETH",
    interestRate: "5%",
    image: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
    button: 'Borrow',
  },
  {
    id: 2,
    title: "Ethereal Dreams #8734",
    paybackTime: "45 days",
    requestedAmount: "3.5 ETH",
    interestRate: "8%",
    image: "https://miro.medium.com/v2/resize:fit:750/format:webp/1*_bLztZTVKgTeRUvkKmrGnQ.png",
    button: 'Borrow',
  },
  {
    id: 3,
    title: "Celestial Harmony #5291",
    paybackTime: "60 days",
    requestedAmount: "4 ETH",
    interestRate: "7%",
    image: "https://codespaceinc.co/images/uploads/https___specials-images.forbesimg.com_imageserve_6170e01f8d7639b95a7f2eeb_sotheby-s-nft-natively-digital-1-2-sale-bored-ape-yacht-club-8817-by-yuga-labs_0x0.png",
    button: 'Borrow',
  },
  {
    id: 4,
    title: "Galactic Wonders #7753",
    paybackTime: "40 days",
    requestedAmount: "2.5 ETH",
    interestRate: "6%",
    image: "https://static.coincodex.com/en/resources/images//admin/news/10-best-nfts-to-buy/bayc.png",
    button: 'Borrow',
  },
  {
    id: 5,
    title: "Enchanted Realms #6218",
    paybackTime: "35 days",
    requestedAmount: "3 ETH",
    interestRate: "9%",
    image: "https://i.em.com.br/iwpMWmXCbQZKdgjC8Y6eeZMmQP8=/750x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/09/22/1565597/nft-macaco-fumando_1_34556.png",
    button: 'Borrow',
  },
];

const Profile = () => {
  return (
    <div style={{background:'url("https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: "cover", // Optional: adjust to your needs
    backgroundPosition: "center", // Optional: adjust to your needs
    backgroundRepeat: "no-repeat",}}>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            
          </div>
          <div className="border p-5" style={{ border: "4px solid black", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
            <h1 className="display-5 fw-bold lh-1 mb-3 text-dark">
              Connected
            </h1>
            <p className="lead">
              Address : ak_7qdBC9CJREt3y1e76Y8sZLAKFHu6Je4Y2LaRgvhDGy7Qb8mB7
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-outline-dark btn-lg px-4 me-md-2"
              >
                Disconnect
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
                disabled
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-5 text-center">
        <h3>Your Collateral</h3>
      {temporaryNFTData.map((card) => (
          <NFTCard key={card.id} nftData={card} />
        ))}
      </div>
      

    </div>
  );
};

export default Profile;
