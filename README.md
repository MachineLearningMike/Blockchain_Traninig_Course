# Blockchain_Traninig_Course
Courseware for Dapp development

1. Clone this repository to your local machine

2. Setup hardhat environment in the local folder:
    Execute the following CLI's:
    // Do not - npm init --yes //, as node.js is alresdy intalled
    - npm install --save-dev hardhat
    // Do not - npx hardhat <Select Create n advanced sample project> //, as an existing project was already cloned to your folder.
    - npm install --save @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
    - npm i dotenv --save
    - npm i @nomiclabs/hardhat-etherscan --save
    - npm install hardhat-gas-reporter --save
    - npm i solidity-coverage --savenpm i solidity-coverage --save
    - npm i hardhat-deploy --save
    // Do not - npm install --save @nomiclabs/hardhat-web3 web3 //, as you'll not use web3 in this project.

3. Install node_modules.
    
    // If you don't see openzeppelin in node_modules folder,
    - npm install @openzeppelin/contracts