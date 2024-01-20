// HorizontalScroller.js
import React from "react";
import NFTCard from "../NftCard/Nftcard";
import img from "./tempNft.jpeg";

import Image from "next/image";
const temporaryNFTData = [
  {
    id: 1,
    title: "Harmony Bliss #1256",
    paybackTime: "30 days",
    requestedAmount: "2 ETH",
    interestRate: "5%",
    image: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
    button: 'Lend',
  },
  {
    id: 2,
    title: "Ethereal Dreams #8734",
    paybackTime: "45 days",
    requestedAmount: "3.5 ETH",
    interestRate: "8%",
    image: "https://miro.medium.com/v2/resize:fit:750/format:webp/1*_bLztZTVKgTeRUvkKmrGnQ.png",
    button: 'Lend',
  },
  {
    id: 3,
    title: "Celestial Harmony #5291",
    paybackTime: "60 days",
    requestedAmount: "4 ETH",
    interestRate: "7%",
    image: "https://codespaceinc.co/images/uploads/https___specials-images.forbesimg.com_imageserve_6170e01f8d7639b95a7f2eeb_sotheby-s-nft-natively-digital-1-2-sale-bored-ape-yacht-club-8817-by-yuga-labs_0x0.png",
    button: 'Lend',
  },
  {
    id: 4,
    title: "Galactic Wonders #7753",
    paybackTime: "40 days",
    requestedAmount: "2.5 ETH",
    interestRate: "6%",
    image: "https://static.coincodex.com/en/resources/images//admin/news/10-best-nfts-to-buy/bayc.png",
    button: 'Lend',
  },
  {
    id: 5,
    title: "Enchanted Realms #6218",
    paybackTime: "35 days",
    requestedAmount: "3 ETH",
    interestRate: "9%",
    image: "https://i.em.com.br/iwpMWmXCbQZKdgjC8Y6eeZMmQP8=/750x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/09/22/1565597/nft-macaco-fumando_1_34556.png",
    button: 'Lend',
  },
  {
    id: 6,
    title: "Timeless Elegance #4387",
    paybackTime: "50 days",
    requestedAmount: "5 ETH",
    interestRate: "10%",
    image: "https://conteudo.imguol.com.br/c/noticias/74/2022/06/06/bored-ape-nft-que-integra-a-colecao-do-bored-ape-yacht-club-1654521934017_v2_900x506.jpg",
    button: 'Lend',
  },
];



const HorizontalScroller = () => {
  const containerStyle = {
    width: "100%",
    overflowX: "scroll",
    whiteSpace: "nowrap",
    marginBottom: "-17px",
    backgroundImage: 'url("https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: "cover", // Optional: adjust to your needs
    backgroundPosition: "center", // Optional: adjust to your needs
    backgroundRepeat: "no-repeat", // Optional: adjust to your needs
  };
  

  

  return (
    <div style={containerStyle}  >
        {temporaryNFTData.map((card) => (
          <NFTCard key={card.id} nftData={card} />
        ))}
    </div>
  );
};

export default HorizontalScroller;
