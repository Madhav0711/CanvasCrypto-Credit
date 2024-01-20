"use client";
import React, { useState } from "react";

const LoanInfo = () => {
  const [activeButton, setActiveButton] = useState("buyers");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div
      className=""
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row justify-content-center mb-5 p-5">
        <div className="d-flex justify-content-center">
          <h1
            className={`btn  col-3 btn-lg ${
              activeButton === "buyers" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("buyers")}
          >
            Borrowers
          </h1>

          <button
            className={`btn  col-3 btn-lg ${
              activeButton === "sellers" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("sellers")}
          >
            Lenders
          </button>
        </div>
      </div>

      {activeButton === "buyers" && (
        <div className="row justify-content-center text-dark ">
          <div className="col-lg-8">
            <h3><b>List your NFT & start getting loan offers.</b></h3>
            <p>
              {" "}
              First, you need to list your NFT and set the desired terms of the
              loan. After you list your NFT, other users will give you loan
              offers.
            </p>
            <h3><b>Receive loan offers & accept the best one.</b> </h3>
            <p>
              When you accept a loan offer, your NFT goes into a secure escrow
              smart contract, and you receive the wETH, DAI, or USDC from the
              lender directly to your wallet!
            </p>
            <h3><b>Repay the loan & get your NFT back.</b></h3>
            <p>
              {" "}
              If you repay your loan in time, you will automatically receive
              your NFT back in your wallet!
            </p>
          </div>
        </div>
      )}

      {activeButton === "sellers" && (
        <div className="row justify-content-center text-dark">
          <div className="col-lg-8">
            <h3><b>Explore NFTs & collections and send loan offers</b></h3>
            <p>
              View all listed NFTs & collections that are currently seeking out
              loan offers. Make custom offers or accept desired loan terms from
              the borrower.
            </p>

            <h3><b>Borrower accepts your loan offer</b></h3>
            <p>
              When your loan offer is accepted, your principal is sent to the
              borrower. The NFT is put in a secure escrow smart contract for the
              duration of the loan.
            </p>

            <h3><b>Earn interest</b></h3>
            <p>
              When the borrower repays the loan, you will automatically receive
              your principal plus the interest in your wallet!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanInfo;
