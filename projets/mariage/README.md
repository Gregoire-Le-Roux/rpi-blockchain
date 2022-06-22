# Wedding Project

This is a blockchain dev web project with Ethers / Hardhat and React.
This project goal is to formalize a wedding between two partners through a contract created in a blockchain.

This project is based on this video: https://www.youtube.com/watch?v=poyVa6yd4X8

So we created the project with _npx create-react-app mariage_, then we installed ethers and hardhat with _npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers_. Next, in mariage/hardhat.config.js, we added in the bottom :

module.exports = {
    solidity: "0.8.4",
    paths: {
        artifacts: './src/artifacts',
    },
    networks: {
        hardhat: {
            chainId: 1337
        }
    }
};

Then we did _npx hardhat compile_ to generate the solidity files for our dev app based on the contracts and after that we executed _npx hardhat node_ and choose the private key of one account to import it in metamask.
Now, we just needed the private key of the contract so we wrote this command _npx hardhat run scripts/deploy.js --network localhost_ and we took the private key where the contact is deployed and we add it in App.js.

Everything is now all good so we can just launch the project with _npm start_