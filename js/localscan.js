document.getElementById("btn_click").addEventListener("click", getData);
function getData() {
  
  const bData = document.getElementById("uData");
  const rpcUrl = bData.elements.namedItem("rpc").value;
  const blockData = bData.elements.namedItem("block").value;
  const txnHash = bData.elements.namedItem("txn").value;
  const addressData = bData.elements.namedItem("address").value;

  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const block = provider.getBlock(0x1);

  const blockHash = block.hash
  
  $('.rpcU').append("<p><b>ENTERED JSON RPC URL --></b>" + rpcUrl + "</p>");
  $('.blockD').append("<h4>BLOCK DATA</h4><p><b>Block Number</b>" + blockData + "<br><b>BLOCK HASH</b>" + blockHash + "</p>");
}
