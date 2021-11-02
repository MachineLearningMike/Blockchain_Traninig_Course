# Blockchain_Traninig_Course
Courseware for Dapp development

1. Clone this repository to your local machine

2. Setup hardhat environment in the local folder:
    (All are necessary and nothing is optional.)

    // Do not - npm init --yes //, as you should keep the package.json file cloned to your folder.
    - npm install --save-dev hardhat (visible)
    // Do not - npx hardhat <Select Create n advanced sample project> //, as you should keep the cloned project.
    - npm install --save dotenv (in-visible)
    - npm install --save @nomiclabs/hardhat-waffle (visible)

    - npm install --save @nomiclabs/hardhat-ethers (visible)
    - npm install --save--dev @nomiclabs/hardhat-etherscan (visible)
    - npm install --save-dev hardhat-deploy (visible)

    - npm install --save-dev chai (visible)
    - npm install --save ethers (visible) 
    - npm install --save ethereum-waffle

    - npm install --save-dev @openzeppelin/hardhat-upgrades
    - npm install --save-dev @openzeppelin/contracts-upgradeable

    // Do not - npm install --save @nomiclabs/hardhat-web3 web3 //, as you wont be using web3 for this project.

3. Install node_modules.
    
    // If you don't see openzeppelin in node_modules folder,
    - npm install --save @openzeppelin/contracts
