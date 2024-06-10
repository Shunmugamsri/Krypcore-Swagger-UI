'use strict';

var utils = require('../utils/writer.js');
var FTManager = require('../service/FTManagerService');

module.exports.ft_managerApproveFTPOST = function ft_managerApproveFTPOST (req, res, next, body) {
  FTManager.ft_managerApproveFTPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ft_managerBalanceOfPOST = function ft_managerBalanceOfPOST (req, res, next, body) {
  FTManager.ft_managerBalanceOfPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ft_managerBurnFTPOST = function ft_managerBurnFTPOST (req, res, next, body) {
  FTManager.ft_managerBurnFTPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ft_managerCreateERC20POST = function ft_managerCreateERC20POST (req, res, next, body) {
  FTManager.ft_managerCreateERC20POST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ft_managerErc20_tokenPOST = function ft_managerErc20_tokenPOST (req, res, next, body) {
  FTManager.ft_managerErc20_tokenPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ft_managerGetTotalSupplyPOST = function ft_managerGetTotalSupplyPOST (req, res, next, body) {
  FTManager.ft_managerGetTotalSupplyPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ft_managerMintFTPOST = function ft_managerMintFTPOST (req, res, next, body) {
  FTManager.ft_managerMintFTPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ft_managerTransferFTPOST = function ft_managerTransferFTPOST (req, res, next, body) {
  FTManager.ft_managerTransferFTPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
