const Migrations = artifacts.require("Certificate");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};