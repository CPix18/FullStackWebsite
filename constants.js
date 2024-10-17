// constants.js

// Define contract address and ABI
export const contractAddress = "0xDe744943ddd4148F73bDbb4f9DD0968407011B7D";
export const abi = [
    {
        "type": "function",
        "name": "increment",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "number",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "setNumber",
        "inputs": [{ "name": "newNumber", "type": "uint256", "internalType": "uint256" }],
        "outputs": [],
        "stateMutability": "nonpayable"
    }
];
