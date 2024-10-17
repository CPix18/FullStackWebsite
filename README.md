## This Repo covers:
1. HTML / JS
   1. To spin up website either use liver server extension or using yarn call - "yarn http-server"
2. NextJS / React and "raw" ethers
3. NextJS & "webs3-react"
4. NextJS & "react-moralis"
5. NextJS & "web3Modal"
6. NextJS & "useDapp"

# run forge and anvil to spin up sample contract

forge init --force
anvil
forge test
forge build
forge create src/Counter.sol:Counter --private-key (Private-Key)

Find contract abi in out folder under contract name (Foundry)

# addition of buttons
since i used the counter.sol contract from foundry, I added setNumber, increment, and getNumber buttons

# couldn't get import { ethers } to work so used cdn.delivr instead in the html file

think this has something to do with 

const provider = new ethers.providers.Web3Provider(window.ethereum);

vs.

const provider = new ethers.BrowswerProvider(window.ethereum);

# also installed browserify using yarn

yarn add browserify - this adds it to the project directory in the package.json file

yarn browserify index.js --standalone bundle -o ./dist/bundle.js (ParseError: 'import' and 'export' may appear only with 'sourceType: module')

would need to change things in html to reflect where the code sits


