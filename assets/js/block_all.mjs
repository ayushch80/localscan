import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";
const provider_eth = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth");
const provider_bsc = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/bsc");
const provider_pol = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/polygon");
const provider_arb = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/arbitrum");
const block_eth = async () => {provider_eth.on("block", async () => { const block = await provider_eth.getBlock(); document.getElementById("block_eth").innerText = block.number; });} 
const block_bsc = async () => {provider_bsc.on("block", async () => { const block = await provider_bsc.getBlock(); document.getElementById("block_bsc").innerText = block.number; });} 
const block_pol = async () => {provider_pol.on("block", async () => { const block = await provider_pol.getBlock(); document.getElementById("block_pol").innerText = block.number; });} 
const block_arb = async () => {provider_arb.on("block", async () => { const block = await provider_arb.getBlock(); document.getElementById("block_arb").innerText = block.number; });} 
block_eth();
block_bsc();
block_pol();
block_arb();