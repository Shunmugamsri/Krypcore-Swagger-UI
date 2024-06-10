'use strict';


/**
 * Call a smart contract method
 * - **Local development server**: http://localhost:8889 
 *
 * body Wallet_callContract_body 
 * chainId Integer The chain ID
 * returns inline_response_200_7
 **/
exports.walletCallContractPOST = function(body,chainId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "",
  "Data" : {
    "response" : [ ]
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
 * Create a new wallet
 * - **Local development server**: http://localhost:8889 
 *
 * body Wallet_createWallet_body 
 * returns inline_response_200
 **/
exports.walletCreateWalletPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "wallet created successfully",
  "Data" : {
    "Address" : "0x688c17c7FF9Def682b04699C31Dxxxxxxxxxxxxx",
    "WalletId" : "20775f3e-8be1-4e4c-8c80-xxxxxxxxxxx"
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
 * Deploy a smart contract
 * - **Local development server**: http://localhost:8889 
 *
 * body Wallet_deployContract_body 
 * chainId Integer The chain ID
 * returns inline_response_200_4
 **/
exports.walletDeployContractPOST = function(body,chainId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "Signed and executed txn successfully",
  "Data" : {
    "contractAddress" : "0xfvhkjkpw******",
    "txHash" : "0xaf324b3717e******"
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
 * Estimate gas for a transaction
 * - **Local development server**: http://localhost:8889 
 *
 * body Wallet_estimateGas_body 
 * chainId Integer The chain ID
 * returns inline_response_200_6
 **/
exports.walletEstimateGasPOST = function(body,chainId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "",
  "Data" : {
    "address" : "0xa287e3DE5f629fc49321De34F40da40aAd799fa7",
    "estimatedGas" : 23912
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
 * Get wallet balance
 * - **Local development server**: http://localhost:8889 
 *
 * body Wallet_getBalance_body 
 * returns inline_response_200_1
 **/
exports.walletGetBalancePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "",
  "Data" : {
    "address" : "xxxxxxxxxxxxxxxxx",
    "balance" : 190909345505164350
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
 * Sign a message
 * - **Local development server**: http://localhost:8889 
 *
 * body Wallet_signMessage_body 
 * returns inline_response_200_2
 **/
exports.walletSignMessagePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "Signed message successfully",
  "Data" : "0x911deaf5473405b8fe2e8c3f37f90d111655b47b79e7c10dea89104f5efa84b12e1c762e453209d031e5010ca1c26002c1d0faaaf770066ebdb4d126e899c8b701"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Submit a transaction
 * - **Local development server**: http://localhost:8889 
 *
 * body Wallet_submitTransaction_body 
 * chainId Integer The chain ID
 * returns inline_response_200_5
 **/
exports.walletSubmitTransactionPOST = function(body,chainId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "Signed and executed txn successfully",
  "Data" : {
    "txHash" : "0x*****"
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
 * Verify signature off-chain
 * - **Local development server**: http://localhost:8889 
 *
 * body Wallet_verifySignatureOffChain_body 
 * returns inline_response_200_3
 **/
exports.walletVerifySignatureOffChainPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "",
  "Data" : {
    "isVerified" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

