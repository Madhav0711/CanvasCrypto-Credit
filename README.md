# CanvasCrypto Credit

Welcome to CanvasCrypto Credit, a decentralized lending platform built on the Aeternity blockchain. Borrow money by leveraging your NFTs as collateral and retrieve them once the loan is repaid.

## Table of Contents

- [Getting Started](#getting-started)
- [How it Works](#how-it-works)
- [Smart Contracts](#smart-contracts)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with CanvasCrypto Credit, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/CanvasCryptoCredit.git
    cd CanvasCryptoCredit
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Compile Sophia smart contracts:

    ```bash
    sophia-compiler contract.aes -o contract.ac
    ```

4. Deploy the smart contracts to the Aeternity blockchain.

## How it Works

CanvasCrypto Credit operates on the principle of borrowing against NFT collateral. Here's an overview:

1. **Collateral Locking:**
    - Users lock their NFTs as collateral by invoking the `lockNFT` function on the smart contract.
    - NFT details, including ownership, are securely stored on the blockchain.

2. **Loan Request:**
    - Users request a loan by specifying the desired amount and loan terms using the `requestLoan` function.
    - The smart contract approves or denies the loan based on predefined criteria.

3. **Loan Approval and Disbursement:**
    - If approved, the requested amount is transferred to the user's account.

4. **Repayment:**
    - Users repay the loan by invoking the `repayLoan` function, including the borrowed amount plus interest.

5. **Collateral Release:**
    - Upon full repayment confirmation, the collateralized NFT is released back to the user.

