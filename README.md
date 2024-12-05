# booknify-frontend
Booknify (BNF) NFT ERC-721 Frontend
NFT Minting Dapp

### Features
1. **Base URI** to set Base URI.
2. **Mint NFT** to Minting NFT.
3. **Name** to show NFT name.
4. **Symbol** to show NFT symbol.
5. **Owner** to show Owner wallet address.

## Getting Started
This is an example of how you can set up this project locally. To get a local copy up and running, follow these steps.

### Prerequisites
1. You must have a MetaMask Wallet Account.
2. We use Arbitrum Sepolia Testnet so we need to use a Arbitrum faucet to obtain test ether.
Make sure you have MetaMask balance on Arbitrum Sepolia Testnet Network.

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/ras-24/booknify-frontend.git
   ```
2. Go to booknify frontend directory
   ```sh
   cd booknify-frontend
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. On app directory, create **ABI.json** file that include your own **ABI code** from your smart contract deployment.
   ```sh
    [YOUR_ABI]
   ```
5. On root directory, create **.env.local** file that include your deployed **contract address**.
   ```sh
   NEXT_PUBLIC_CONTRACT_ADDRESS="YOUR_CONTRACT_ADDRESS"
   ```
6. Run project
   ```sh
    npm run start
   ```

## License

Distributed under the MIT License. See `LICENSE` for more information.
