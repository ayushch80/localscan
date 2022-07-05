document.getElementById("btn_click").addEventListener("click", getData);
async function getData() {
const bData = document.getElementById("uData");
const jsonRpc = bData.elements.namedItem("rpc").value;
const blockD = bData.elements.namedItem("block").value;
var web3Provider = new Web3.providers.HttpProvider(jsonRpc);
var web3 = new Web3(web3Provider);
const block = await web3.eth.getBlock(parseInt(blockD));
var html = `<div class="alert alert-success d-xl-flex align-items-left align-content-left align-self-left justify-content-xl-left col-md-12" role="alert" style="text-align: left;border-color: var(--bs-blue);background: linear-gradient(var(--bs-secondary), var(--bs-secondary));"><span style="color: var(--bs-white);" class="output">
<strong>Data from </strong><i>${jsonRpc}</i><br>
<br><strong>Block Height : </strong>${block.number}
<br><strong>Unix Timestamp : </strong>${block.timestamp}
<br><strong>Transactions : </strong>${web3.eth.getBlockTransactionCount(block.hash)}
<br><strong>Mined By : </strong>${block.miner}
<br><strong>Difficulty : </strong>${block.difficulty}
<br><strong>Total Difficulty : </strong>${block.totalDifficulty}
<br><strong>Size : </strong>${block.size} bytes
<br><strong>Gas Used : </strong>${block.gasUsed}
<br><strong>Gas Limit : </strong>${block.gasLimit}
<br><strong>Base Fee Per Gas : </strong>${block.baseFeePerGas}
<br><strong>Extra Data : </strong>${block.extraData}
<br><strong>Hash : </strong>${block.hash}
<br><strong>Parent Hash : </strong>${block.parentHash}
<br><strong>Sha3Uncles : </strong>${block.sha3Uncles}
<br><strong>State Root : </strong>${block.stateRoot}
<br><strong>Nonce : </strong>${block.nonce}</span></div>`
$(".output").html(html);
}