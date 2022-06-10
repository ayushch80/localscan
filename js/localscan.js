import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";

const bData = document.getElementById("uData");
const rpcUrl = bData.elements.namedItem("rpc").value;
const blockData = bData.elements.namedItem("block").value;
const txnHash = bData.elements.namedItem("txn").value;
const addressData = bData.elements.namedItem("address").value;

const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
const blockData = await provider.getBlock(bData)

const blockHash = blockData.hash
document.getElementById("btn_click").addEventListener("click", getData);
function getData() {
  $('.rpcU').append("<p><b>ENTERED JSON RPC URL --></b>" + rpcUrl + "</p>");
  $('.blockD').append("<h4>BLOCK DATA</h4><p><b>Block Number</b>" + blockData + "<br><b>BLOCK HASH</b>" + blockHash + "</p>");
}
