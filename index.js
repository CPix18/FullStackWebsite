import { ethers } from "ethers";
import { abi, contractAddress } from "./constants.js"

const connectButton = document.getElementById('connectButton');
const { ethers } = require("ethers");


connectButton.addEventListener('click', async () => {
    // Check if Wallet is installed
    if (typeof window.ethereum !== "undefined") {
        try {
            // Request account access
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            console.log('Connected account:', accounts[0]);
        } catch (error) {
            console.error('User rejected the request or another error occurred:', error);
        }
    } else {
        alert("Ethereum wallet is not installed. Please install MetaMask or another wallet and try again.");
    }
    async function execute() {

    }

    module.exports = {
        connect,
        execute,
    }


});