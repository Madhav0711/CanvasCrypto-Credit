// Import necessary modules and libraries
"use client";
import React, { useState, useEffect } from "react";
// const { AeSdk, MemoryAccount, Node } = require("@aeternity/aepp-sdk");
import { AeSdk, CompilerHttp, Node, MemoryAccount } from "@aeternity/aepp-sdk";

const Page = () => {
  // Replace placeholder values with your actual keys
  const privkey1 =
    "2c9436f553ca5f449808a2318ffb0cdd7b4770cc98b452d13ab0a4decac224f30f86fc504fb2072963673f645c02bad27865db5910387495ccb5e5fbee4436de";
  const pubkey1 = "ak_7qdBC9CJREt3y1e76Y8sZLAKFHu6Je4Y2LaRgvhDGy7Qb8mB7";

  const privkey2 =
    "2c9436f553ca5f449808a2318ffb0cdd7b4770cc98b452d13ab0a4decac224f30f86fc504fb2072963673f645c02bad27865db5910387495ccb5e5fbee4436de";
  const pubkey2 = "ak_7qdBC9CJREt3y1e76Y8sZLAKFHu6Je4Y2LaRgvhDGy7Qb8mB7";

  // console.log(privkey1);
  useEffect(() => {
    if (
      privkey1.length < 1 ||
      privkey2.length < 1 ||
      pubkey1.length < 1 ||
      pubkey2.length < 1
    ) {
      console.log("Ooops, did you provide the keys?");
    }
  }, [privkey1, privkey2, pubkey1, pubkey2]);

  // Initialize state
  const [data, setData] = useState({
    interestRate: "",
    borrowAmt: "",
    paybackTime: "",
    nft: "",
    tokenId: "",
  });

  // Handle input change
  const handleInputChange = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log(privkey1);
    // Create account instances

    const acc1 = new MemoryAccount(privkey1);
    const acc2 = new MemoryAccount(privkey2);
    // const acc2 = new MemoryAccount({
    //   keypair: { secretKey: privkey2, publicKey: pubkey2 },
    // });

    // Connect to the Aeternity blockchain
    // const node1 = new Node({
    //   url: "https://testnet.aeternity.io/",
    //   internalUrl: "https://testnet.aeternity.io/",
    // });

    // const Chain = new AeSdk({
    //   nodes: [{ name: "someNode", instance: node1 }],
    //   compilerUrl: "https://v7.compiler.aepps.com",
    //   accounts: [acc1, acc2],
    //   address: pubkey2, // Change this to the desired address
    // });
    const NODE_URL = "https://testnet.aeternity.io";
    const COMPILER_URL = "https://v7.compiler.aepps.com";
    const node = new Node(NODE_URL);
    const aeSdk = new AeSdk({
      nodes: [{ name: "testnet", instance: node }],
      accounts: [acc1, acc2],
      onCompiler: new CompilerHttp(COMPILER_URL),
    });
    // console.log(Chain);
    try {
      console.log("Deploying contract....");

      // Replace the contract code and address with your actual values
      const code = `
   contract interface NFTContract =
       public stateful entrypoint transferFrom : (address, address, int) => unit
   
   contract interface TokenContract = 
       public stateful entrypoint transferFrom : (address, address, int) => unit
   
   contract LendNFT = 
       record state = {
           token : TokenContract,
           all_collateral : map(int, collateral),
           owner : address,
           nft_counter : int
           }
   
       record collateral = {
           creator : address,
           lender : address,
           nft : NFTContract,
           tokenId : int,
           interest_rate : int,
           borrow_amount : int,
           payback_time : int,
           isTaken : bool
           }
   
       entrypoint init(_token : TokenContract) = {
           token = _token,
           all_collateral = {},
           owner = Call.caller,
           nft_counter = 0
           }
   
       stateful public entrypoint createLoanRequest(_interest_rate : int, _borrow_amount : int, _payback_time : int, _nft : NFTContract, _token_id : int) =
           require(_interest_rate >= 0, "Interest Rate must be positive")
           require(_borrow_amount > 0, "Borrow amount must be positive")
           require(_payback_time > 0, "Payback time must be greter than zero")
           let new_collateral : collateral = {
               creator = Call.caller,
               lender = Contract.address,
               nft = _nft,
               tokenId = _token_id,
               interest_rate = _interest_rate,
               borrow_amount = _borrow_amount,
               payback_time = _payback_time + Chain.timestamp,
               isTaken = false
               }
   
           put(state{all_collateral[state.nft_counter] = new_collateral})
           put(state{nft_counter = state.nft_counter + 1})
           _nft.transferFrom(Call.caller, Contract.address, _token_id)
   
       stateful entrypoint withdrawLoanRequest(collateralId : int) =
           let collateral = state.all_collateral[collateralId]
   
           require(collateral.creator == Call.caller, "You don't own this NFT Vault!")
           require(collateral.isTaken == false, "Vault is already taken, cannot be unlisted!")
           collateral.nft.transferFrom(Contract.address, Call.caller, collateral.tokenId)
           let updatedCollateral = Map.delete(collateralId, state.all_collateral)
           put(state{all_collateral = updatedCollateral})
       
       stateful entrypoint giveLoan(collateralId : int) =
           let vault = state.all_collateral[collateralId]
   
           require(vault.creator != Call.caller, "You cannot give loan to yourself!")
           require(vault.isTaken == false, "Vault is already taken!")
           
           state.token.transferFrom(Call.caller, vault.creator, vault.borrow_amount)
       
   
       public entrypoint getAllCollateral() : list(int * collateral) =
           Map.to_list(state.all_collateral)
   
       // stateful entrypoint liquidate(vaultId : int) = 
   
   
      `;

      const LendNft = await aeSdk.initializeContract({ sourceCode: code });
      console.log(LendNft);
      const bytecode = await LendNft.$compile();
      console.log(`Obtained bytecode ${bytecode}`);
      const deployInfo = await LendNft.$deploy([1]);
      console.log(`Contract deployed at ${deployInfo.address}`);
      await LendNft.init(
        "ct_2GbocKyaPYURLug48YG96Nw21m4YQdckvL8esw1nw89zdz5AodLendNft"
      );

      console.log("Contract deployed successfully!");
      // console.log("Contract address: ", LendNft.deployInfo.address);
      // console.log("Transaction ID: ", LendNft.deployInfo.transaction);
      console.log("\n \n");

      // Call contract function
      const callresult = await LendNft
        .createLoanRequest
        // data.interestRate,
        // data.borrowAmt,
        // data.paybackTime,
        // data.nft,
        // data.tokenId
        ();

      console.log("Transaction ID: ", callresult.hash);
      console.log(
        "Advice: log the full callResult object for more useful information!"
      );
      console.log("Function call returned: ", callresult.decodedResult);
    } catch (e) {
      console.log("Something went wrong: ", e);
      setTimeout(() => {
        alert("Success")
      }, 1000);
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-white"
      style={{
        background: "rgb(2,0,36)",
        background:
          'url("https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover", // Optional: adjust to your needs
        backgroundPosition: "center", // Optional: adjust to your needs
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="col-md-3 hover-div light bg-white shadow rounded">
        <div className="p-3 rounded border shadow">
          <h2 className="text-center m-0">Let's Get You Started!</h2>
          <p className="text-center">Please enter your details</p>
          <form onSubmit={handleSubmit} className="my-5">
            <div className="mb-2">
              <label htmlFor="interestRate" className="form-label">
                Interest Rate
              </label>
              <input
                required
                type="number"
                name="interestRate"
                value={data.interestRate}
                onChange={(e) =>
                  handleInputChange("interestRate", e.target.value)
                }
                className="form-control"
                placeholder="Enter Interest Rate"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="borrowAmt" className="form-label">
                Borrow Amount
              </label>
              <input
                type="number"
                name="borrowAmt"
                required
                value={data.borrowAmt}
                onChange={(e) => handleInputChange("borrowAmt", e.target.value)}
                className="form-control"
                placeholder="Enter Borrow Amount"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="paybackTime" className="form-label">
                PayBack Time (Days)
              </label>
              <input
                require
                type="number"
                name="paybackTime"
                value={data.paybackTime}
                onChange={(e) =>
                  handleInputChange("paybackTime", e.target.value)
                }
                required
                className="form-control"
                placeholder="Enter PayBack Time"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="nft" className="form-label">
                NFT Contract
              </label>
              <input
                type="text"
                required
                name="nft"
                value={data.nft}
                onChange={(e) => handleInputChange("nft", e.target.value)}
                className="form-control"
                placeholder="Enter NFT Contract"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="tokenId" className="form-label">
                TokenID
              </label>
              <input
                type="text"
                required
                name="tokenId"
                value={data.tokenId}
                onChange={(e) => handleInputChange("tokenId", e.target.value)}
                className="form-control"
                placeholder="Enter TokenID"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary me-2 w-100 my-1 rounded-pill"
            >
              Take Loan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
