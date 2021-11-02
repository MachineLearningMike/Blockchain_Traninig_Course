# Blockchain_Traninig_Course
Courseware for Dapp development

1. Clone this repository to your local machine

2. Setup hardhat environment in the local folder:
    Execute the following CLI's:
    // Do not - npm init --yes //, as node.js is alresdy intalled
    - npm install --save-dev hardhat
    // Do not - npx hardhat <Select Create n advanced sample project> //, as you should keep the cloned project.

    - ... npm install --save @nomiclabs/hardhat-ethers
    - npm install --save ethers
    - ... npm install --save @nomiclabs/hardhat-waffle
    
    - ... npm install --save ethereum-waffle
    - ... npm install --save chai
    - npm install --save dotenv
    - npm ... install --save @nomiclabs/hardhat-etherscan
    - npm install --save hardhat-gas-reporter
    - npm install solidity-coverage --savenpm install solidity-coverage --save
    - npm install hardhat-deploy --save
    // Do not - npm install --save @nomiclabs/hardhat-web3 web3 //, as you wont be using web3 for this project.

3. Install node_modules.
    
    // If you don't see openzeppelin in node_modules folder,
    - npm install @openzeppelin/contracts