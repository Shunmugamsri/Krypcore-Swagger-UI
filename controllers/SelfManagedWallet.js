'use strict';

var utils = require('../utils/writer.js');
var SelfManagedWallet = require('../service/SelfManagedWalletService');

module.exports.walletCallContractPOST = function walletCallContractPOST (req, res, next, body, chainId) {
  SelfManagedWallet.walletCallContractPOST(body, chainId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.walletCreateWalletPOST = function walletCreateWalletPOST (req, res, next, body) {
  SelfManagedWallet.walletCreateWalletPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.walletDeployContractPOST = function walletDeployContractPOST (req, res, next, body, chainId) {
  SelfManagedWallet.walletDeployContractPOST(body, chainId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.walletEstimateGasPOST = function walletEstimateGasPOST (req, res, next, body, chainId) {
  SelfManagedWallet.walletEstimateGasPOST(body, chainId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.walletGetBalancePOST = function walletGetBalancePOST (req, res, next, body) {
  SelfManagedWallet.walletGetBalancePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.walletSignMessagePOST = function walletSignMessagePOST (req, res, next, body) {
  SelfManagedWallet.walletSignMessagePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.walletSubmitTransactionPOST = function walletSubmitTransactionPOST (req, res, next, body, chainId) {
  SelfManagedWallet.walletSubmitTransactionPOST(body, chainId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.walletVerifySignatureOffChainPOST = function walletVerifySignatureOffChainPOST (req, res, next, body) {
  SelfManagedWallet.walletVerifySignatureOffChainPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
