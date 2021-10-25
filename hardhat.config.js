require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");


// If you want to use Web3 an web3, instead of ethers:
//require("@nomiclabs/hardhat-web3");
// task action function receives the Hardhat Runtime Environment as second argument
//task("accounts", "Prints accounts", async (_, { web3 }) => {
//  console.log(await web3.eth.getAccounts());
//});
//module.exports = {};
// see for more: https://hardhat.org/plugins/nomiclabs-hardhat-web3.html


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
      { // for uniswap v3
        version: '0.7.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 0 //ORG 800
          },
          metadata: {
            // do not include the metadata hash, since this is machine dependent
            // and we want all generated code to be deterministic
            // https://docs.soliditylang.org/en/v0.7.6/metadata.html
            bytecodeHash: 'none',
          },
        },
      },
			{ // for Token_WETH
				version: "0.4.18",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					}
				},
			},
    ],
    overrides: {
      // To save console.sol from being compiled in lower version.
      "hardhat/console.sol": {
        version: '0.8.0',
        settings: {}  
      },
      // The following 7 overrides are used to compile OpenZeppelin_Fixed_Token.sol.
      // You can't put version 0.8.0 in the regular compiler list, 
      // because UniswapV3 code will accept that version of compiler, wrongfully.
      "contracts/OpenZeppelin_Fixed_Token.sol": {
        version: '0.8.0',
        settings: {}
      },
      "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol": {
        version: '0.8.0',
        settings: {}
      },
      "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol": {
        version: '0.8.0',
        settings: {}
      },
      "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol": {
        version: '0.8.0',
        settings: {}
      },
      "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
        version: '0.8.0',
        settings: {}
      },
      "@openzeppelin/contracts/token/ERC20/IERC20.sol": {
        version: '0.8.0',
        settings: {}
      },
      "@openzeppelin/contracts/token/ERC20/ERC20.sol": {
        version: '0.8.0',
        settings: {}
      },
      "@openzeppelin/contracts/utils/Context.sol": {
        version: '0.8.0',
        settings: {}
      },
    }
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
};
