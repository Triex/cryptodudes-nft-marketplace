const CryptoDudes = artifacts.require("CryptoDudes");

module.exports = async function(deployer) {
  await deployer.deploy(CryptoDudes);
};
