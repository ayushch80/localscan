import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";
const bData = document.getElementById("uData");
const rpcUrl = bData.elements.namedItem("rpc").value;  const blockData = bData.elements.namedItem("block").value;
const txnHash = bData.elements.namedItem("txn").value;
const addressData = bData.elements.namedItem("address").value;
document.getElementById("btn_click").addEventListener("click", getData);
function getData() {
  $('.rpcU').append("<b>ENTERED JSON RPC URL --><b>" + rpcUrl);
}
