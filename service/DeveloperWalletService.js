'use strict';


/**
 * Call a Smart Contract Method
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body DevWallet_callContract_body 
 * returns inline_response_200_10
 **/
exports.devWalletCallContractPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "",
  "Data" : {
    "response" : [ 35 ]
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
 * Create and Execute Transaction
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body DevWallet_createAndExecuteTx_body 
 * returns inline_response_200_12
 **/
exports.devWalletCreateAndExecuteTxPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "Signed and executed txn successfully",
  "Data" : {
    "txHash" : "0x8a7552326a39d3cc92725f55ecde0f8a65e3a1f98a683f707540c90e5294045b"
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
 * Deploy Contract
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body DevWallet_deployContract_body 
 * returns inline_response_200_9
 **/
exports.devWalletDeployContractPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "Signed and executed txn successfully",
  "Data" : {
    "contractAddress" : "0xe090232446154edc643B81e2BE984C010e6850e2",
    "txHash" : "0x610508484f9d8df4530aecbc9bdc7e65c81228fcea5dd8831a2737f3cfd5fc90"
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
 * Estimate Gas
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body DevWallet_estimateGas_body 
 * returns inline_response_200_17
 **/
exports.devWalletEstimateGasPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "",
  "Data" : {
    "address" : "0x67468FFc02100FA6E926484D8754dC00DdB8AE74",
    "estimatedGas" : 24156
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
 * Generate wallet keys
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body DevWallet_generateKeys_body 
 * returns inline_response_200_8
 **/
exports.devWalletGenerateKeysPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "Keys generated successfully",
  "Data" : {
    "privateKey" : "0x8899ef362e8f0dc82c053caa0c6b5001a463d109e838d5bcd28a703e51e45cb6",
    "address" : "0xe64f6f3c516475B352cE7127dfA98a0f848Eb323",
    "publicKey" : "0x04b23b7329b21ba9876e380247d6473a471f0dc2b43cbfc81594aa1a9f460032ba51dc912db4fa41f3a9780f97df54728032bad9b71fbc0d8c793829bc2fcd143a"
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
 * Get Balance of an Address
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body DevWallet_getBalance_body 
 * returns inline_response_200_11
 **/
exports.devWalletGetBalancePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "",
  "Data" : {
    "address" : "0x67468FFc02100FA6E926484D8754dC00DdB8AE74",
    "balance" : 79265400000000000,
    "chainId" : "43113"
  },
  "Code" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sign EIP712 Transaction
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body DevWallet_signEIP712Tx_body 
 * returns inline_response_200_13
 **/
exports.devWalletSignEIP712TxPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "Data signed successfully",
  "Data" : "0x24a8bd39d50f7fe6708687578801c753d9171b422b0d5621be65fd189c04404a1d0d6bba2cf28016f2da5080337d99d01bc56dc07a688466fd6d79191c8b82351c"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sign Message
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body DevWallet_signMessage_body 
 * returns inline_response_200_15
 **/
exports.devWalletSignMessagePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "Message signed successfully",
  "Data" : "0x..."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sign Transaction Hash
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body DevWallet_signTxHash_body 
 * returns inline_response_200_16
 **/
exports.devWalletSignTxHashPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "Signed txn hash successfully",
  "Data" : "kODr+vTZZSu88rltJytOGVwITUBU1N6uzpvqtGg4FwYDMDEJ6T2dZZTRwiT5biGQZnhT0l5LyYw6rIeFHH+cWwE="
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Verify Signature Off-Chain
 * - **Development server**: https://web3-proxy-dev.krypcore.com/api/v0 
 *
 * body DevWallet_verifySignatureOffChain_body 
 * returns inline_response_200_14
 **/
exports.devWalletVerifySignatureOffChainPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "SUCCESS",
  "Message" : "",
  "Data" : {
    "isVerified" : false
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

