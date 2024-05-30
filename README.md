# Dpass
### Decentralized Password Management System

## Overview

This project is a secure, decentralized password management system utilizing blockchain technology, IPFS, and cryptographic protocols. The system provides enhanced security, user autonomy, transparency, and scalability.

## Features

- Secure storage of credentials using Lit Protocol and IPFS.
- Smart contracts on the blockchain for secure referencing of stored data.
- Decentralized indexing and querying using The Graph.
- Easy access and decryption of credentials through a web3 browser interface.

## System Architecture

1. User Interface: Web3 Browser for credential input and access.
2. Data Encryption and Storage: Lit Protocol for encryption and ACLs; IPFS for decentralized storage.
3. Data Retrieval and Processing: The Graph for indexing and processing blockchain events; Smart Contracts for storing IPFS hashes.

## Detailed Workflow

1. User enters credentials in the web3 browser.
2. Credentials are encrypted using Lit Protocol and ACLs.
3. Encrypted content and keys are saved to IPFS.
4. IPFS hash is stored in a smart contract on the blockchain.
5. The Graph listens to blockchain events and processes data.
6. Processed data is delivered back to the client's web3 browser.
7. Client checks authorization and decrypts data if authorized.
8. Decrypted credentials are displayed to the user.

## Installation and Setup

### Prerequisites
```
- Node.js=18.20.1
- Yarn=1.22.22
- Hardhat
- IPFS
- The Graph
```

### Environment Variables

#### .env
```bash
PRIV_KEY=
FUJI_RPC_URL=
```
#### Client/.env
```bash
NEXT_PUBLIC_PINATA_API_KEY=
NEXT_PUBLIC_PINATA_API_SECRET_KEY=
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_CONTRACT_ADDRESS=
```
### Deploying Smart Contract

1. Install dependencies:
  ```bash
   yarn install
   ```
2. Compile the smart contracts:
  ```bash
   yarn hardhat compile
   ```
3. Deploy the contracts to the Fuji test network:
  ```bash
   yarn hardhat deploy --network fuji
   ```
4. Copy the deployed contract address and paste it in the ```Client/.env``` file as ```NEXT_PUBLIC_CONTRACT_ADDRESS```.

### Deploying Subgraph

Note: Update the subgraph.yaml file with the deployed contract address. Update the deploy script with your own subgraph name.

1. Navigate to the indexer directory:
  ```bash
   cd indexer
   ```
2. Install dependencies:
  ```bash
   yarn install
   ```
3. Generate code:
  ```bash
   yarn codegen
   ```
4. Deploy the subgraph:
  ```bash
   yarn deploy
   ```
5. Copy the subgraph URL and paste it in the ```Client/.env``` file as ```NEXT_PUBLIC_API_URL```.

### Running the Client

1. Fill in the required values in the Client/.env file.
2. Navigate to the client directory:
  ```bash
   cd client
   ```
3. Install dependencies:
  ```bash
   yarn install
   ```
4. Start the development server:
  ```bash
   yarn dev
   ```
## Additional Information

- Lit Protocol: For encryption and access control.
- IPFS: For decentralized storage.
- The Graph: For data indexing and querying.
- Smart Contracts: For secure and immutable data referencing.

## Conclusion

This decentralized password management system leverages blockchain technology, IPFS, and cryptographic protocols to provide a highly secure and user-controlled solution for credential management. By following the setup instructions, you can deploy and run the system in a development environment.
