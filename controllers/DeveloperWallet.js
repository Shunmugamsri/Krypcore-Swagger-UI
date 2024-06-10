'use strict';

var utils = require('../utils/writer.js');
var DeveloperWallet = require('../service/DeveloperWalletService');

module.exports.devWalletCallContractPOST = function devWalletCallContractPOST (req, res, next, body) {
  DeveloperWallet.devWalletCallContractPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.devWalletCreateAndExecuteTxPOST = function devWalletCreateAndExecuteTxPOST (req, res, next, body) {
  DeveloperWallet.devWalletCreateAndExecuteTxPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.devWalletDeployContractPOST = function devWalletDeployContractPOST (req, res, next, body) {
  DeveloperWallet.devWalletDeployContractPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.devWalletEstimateGasPOST = function devWalletEstimateGasPOST (req, res, next, body) {
  DeveloperWallet.devWalletEstimateGasPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.devWalletGenerateKeysPOST = function devWalletGenerateKeysPOST (req, res, next, body) {
  DeveloperWallet.devWalletGenerateKeysPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.devWalletGetBalancePOST = function devWalletGetBalancePOST (req, res, next, body) {
  DeveloperWallet.devWalletGetBalancePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.devWalletSignEIP712TxPOST = function devWalletSignEIP712TxPOST (req, res, next, body) {
  DeveloperWallet.devWalletSignEIP712TxPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.devWalletSignMessagePOST = function devWalletSignMessagePOST (req, res, next, body) {
  DeveloperWallet.devWalletSignMessagePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.devWalletSignTxHashPOST = function devWalletSignTxHashPOST (req, res, next, body) {
  DeveloperWallet.devWalletSignTxHashPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.devWalletVerifySignatureOffChainPOST = function devWalletVerifySignatureOffChainPOST (req, res, next, body) {
  DeveloperWallet.devWalletVerifySignatureOffChainPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
