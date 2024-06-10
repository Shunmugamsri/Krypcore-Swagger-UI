'use strict';


/**
 * Approve ERC20Token
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body Ftmanager_approveFT_body 
 * returns inline_response_200_20
 **/
exports.ft_managerApproveFTPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "Status",
  "Message" : "Message",
  "Data" : {
    "txnHash" : "txnHash",
    "referenceId" : "referenceId"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Balance of Address
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body Ftmanager_balanceOf_body 
 * returns inline_response_200_23
 **/
exports.ft_managerBalanceOfPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "Status",
  "Message" : "Message",
  "Data" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Burn ERC20Token
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body Ftmanager_burnFT_body 
 * returns inline_response_200_20
 **/
exports.ft_managerBurnFTPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "Status",
  "Message" : "Message",
  "Data" : {
    "txnHash" : "txnHash",
    "referenceId" : "referenceId"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create ERC20 Token
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body Ftmanager_createERC20_body 
 * returns inline_response_200_18
 **/
exports.ft_managerCreateERC20POST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "Status",
  "Message" : "Message",
  "Data" : {
    "txnHash" : "txnHash",
    "contractAddress" : "contractAddress",
    "referenceId" : "referenceId"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get All FT Details
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body Ftmanager_erc20token_body 
 * returns inline_response_200_19
 **/
exports.ft_managerErc20_tokenPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "Status",
  "Message" : "Message",
  "Data" : {
    "result" : [ {
      "apiKey" : "apiKey",
      "walletType" : "walletType",
      "tokenName" : "tokenName",
      "contractAddress" : "contractAddress",
      "instanceRef" : "instanceRef",
      "ercStandard" : "ercStandard",
      "referenceId" : "referenceId",
      "txnHash" : "txnHash",
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "privatekey" : "privatekey",
      "premintAddress" : "premintAddress",
      "projectID" : "projectID",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00",
      "quantity" : "quantity",
      "tokenSymbol" : "tokenSymbol",
      "custodialWalletAccessToken" : "custodialWalletAccessToken",
      "isDefault" : true,
      "chainId" : "chainId",
      "createdBy" : "createdBy",
      "_id" : "_id",
      "decimal" : 6,
      "subscriptionId" : "subscriptionId",
      "walletAddress" : "walletAddress",
      "uniqueId" : "uniqueId",
      "status" : "status"
    }, {
      "apiKey" : "apiKey",
      "walletType" : "walletType",
      "tokenName" : "tokenName",
      "contractAddress" : "contractAddress",
      "instanceRef" : "instanceRef",
      "ercStandard" : "ercStandard",
      "referenceId" : "referenceId",
      "txnHash" : "txnHash",
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "privatekey" : "privatekey",
      "premintAddress" : "premintAddress",
      "projectID" : "projectID",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00",
      "quantity" : "quantity",
      "tokenSymbol" : "tokenSymbol",
      "custodialWalletAccessToken" : "custodialWalletAccessToken",
      "isDefault" : true,
      "chainId" : "chainId",
      "createdBy" : "createdBy",
      "_id" : "_id",
      "decimal" : 6,
      "subscriptionId" : "subscriptionId",
      "walletAddress" : "walletAddress",
      "uniqueId" : "uniqueId",
      "status" : "status"
    } ],
    "pageCount" : 0
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Total Supply
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body Ftmanager_getTotalSupply_body 
 * returns inline_response_200_22
 **/
exports.ft_managerGetTotalSupplyPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "Total Supply fetched successfully",
  "Data" : 10000
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Mint ERC20 Token
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body Ftmanager_mintFT_body 
 * returns inline_response_200_20
 **/
exports.ft_managerMintFTPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "Status",
  "Message" : "Message",
  "Data" : {
    "txnHash" : "txnHash",
    "referenceId" : "referenceId"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Transfer ERC20 Token
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body Ftmanager_transferFT_body 
 * returns inline_response_200_21
 **/
exports.ft_managerTransferFTPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "FT transferred successfully",
  "Data" : {
    "txnHash" : "7d62f83b-5e73-45cb-bac5-d19708063f58",
    "referenceId" : "7d62f83b-5e73-45cb-bac5-d19708063f58"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

