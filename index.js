// Import contract address and ABI from constants.js
import { contractAddress, abi } from './constants.js';

// Get the 'connectButton' and 'setNumberButton' from the HTML
const connectButton = document.getElementById('connectButton');
const setNumberButton = document.getElementById('setNumberButton');
const incrementButton = document.getElementById('incrementButton');
const readNumberButton = document.getElementById('readNumberButton');

// Add click event listener for the connect button
connectButton.addEventListener('click', async () => {
    // Check if MetaMask or another Ethereum wallet is installed
    if (typeof window.ethereum !== "undefined") {
        try {
            // Request account access from the wallet
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            console.log('Connected account:', accounts[0]);
        } catch (error) {
            console.error('User rejected the request or another error occurred:', error);
        }
    } else {
        alert("Ethereum wallet is not installed. Please install MetaMask or another wallet and try again.");
    }
});

// Function to interact with the smart contract
async function setNumber() {
    const numberValue = document.getElementById("numberInput").value; // Get value from input
    console.log(`Setting number to ${numberValue}...`); // Log the number
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
            const transactionResponse = await contract.setNumber(numberValue); // Call setNumber with user input
            await transactionResponse.wait(1); // Wait for the transaction to be mined
            console.log("Transaction completed successfully.");
        } catch (error) {
            console.error("Error setting number:", error);
        }
    } else {
        alert("Please install MetaMask");
    }
}

// Function to interact with the smart contract for incrementing
async function increment() {
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
            const transactionResponse = await contract.increment(); // Call increment function
            await transactionResponse.wait(1);
            console.log("Incremented number successfully.");
        } catch (error) {
            console.error("Error incrementing number:", error);
        }
    } else {
        alert("Please install MetaMask");
    }
}

// Function to read the current number from the smart contract
async function readCurrentNumber() {
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, abi, provider);
        try {
            const currentNumber = await contract.number(); // Call number function to get the current value
            console.log("Current number:", currentNumber.toString()); // Log the current number
            alert(`Current number: ${currentNumber.toString()}`); // Display current number in an alert
        } catch (error) {
            console.error("Error reading current number:", error);
        }
    } else {
        alert("Please install MetaMask");
    }
}

// Add event listener for the setNumber button
setNumberButton.addEventListener('click', setNumber);

// Add event listener for the increment button
incrementButton.addEventListener('click', increment);

// Add event listener for the read number button
readNumberButton.addEventListener('click', readCurrentNumber);
