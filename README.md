# Blockchain_Traninig_Course
Courseware for Dapp development

1. Clone this repository to your local machine

2. Setup node.js environment in the local folder:

    - npm init --yes
    - npm install --save-dev hardhat

    - npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai

    - npm i dotenv --save-dev
    - npm i @nomiclabs/hardhat-etherscan --save-dev
    - npm install hardhat-gas-reporter --save-dev
    - npm i solidity-coverage --save-dev

    - npm install --save-dev @nomiclabs/hardhat-web3 web3

3. Install node_modules.

    - npm install @openzeppelin/contracts --save-dev


4. Create contracts under the 'contracts' folder.

    The following contracts come from a Hardhat sample project:
    - Greeter.sol

    The following contracts are created now for demonstration:
    - OpenZeppelin_Fixed_Token.sol
    - Token_WETH.sol

5. Configure the project

    Use my configuration 'hardhat.config.js' for the moment.

6. Test

    npx hardhat compile
    mpx hardhat test

    The contracts will be compiled.
    The test scripts under the 'test' folder will be run.
