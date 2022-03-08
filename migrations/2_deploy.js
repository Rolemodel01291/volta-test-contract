var CCRToken = artifacts.require("CCRToken");

const name = "Certificate of Carbon Removal"
const symbol = "CCR"

module.exports = async function (deployer) {
  deployer.deploy(CCRToken, name, symbol);
};