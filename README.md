# Blockchain_Traninig_Course
Courseware for Dapp development

1. Clone this repository to your local machine

2. Setup hardhat environment in the local folder:
    Execute the following CLI's:
    - npm init --yes
    - npm install --save-dev hardhat
    - npm install --save @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
    - npm i dotenv --save
    - npm i @nomiclabs/hardhat-etherscan --save
    - npm install hardhat-gas-reporter --save
    - npm i solidity-coverage --save

    - npm install --save @nomiclabs/hardhat-web3 web3

3. Install node_modules.
    Execute the following CLI's:
    - npm install @openzeppelin/contracts --save


4. Create contracts under the 'contracts' folder.

    The following contracts come from a Hardhat sample project:
    - Greeter.sol
    - Token.sol

    The following contracts are created now for demonstration:
    - OpenZeppelin_Fixed_Token.sol
    - Token_WETH.sol

5. Configure the project

    Use my configuration 'hardhat.config.js' for the moment.

6. Test
    Execute the following CLI's:
    - npx hardhat compile
    - mpx hardhat test

    The contracts will be compiled.
    The test scripts under the 'test' folder will be run.

7. Investigate the test outputs