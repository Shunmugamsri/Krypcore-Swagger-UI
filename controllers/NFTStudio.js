'use strict';

var utils = require('../utils/writer.js');
var NFTStudio = require('../service/NFTStudioService');

module.exports.easy_nftCreateNFTCollectionPOST = function easy_nftCreateNFTCollectionPOST (req, res, next, body) {
  NFTStudio.easy_nftCreateNFTCollectionPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.easy_nftCreateNFTPOST = function easy_nftCreateNFTPOST (req, res, next) {
  NFTStudio.easy_nftCreateNFTPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.easy_nftNft_collectionPOST = function easy_nftNft_collectionPOST (req, res, next, body) {
  NFTStudio.easy_nftNft_collectionPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.easy_nftNft_collection_listPOST = function easy_nftNft_collection_listPOST (req, res, next, body) {
  NFTStudio.easy_nftNft_collection_listPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.easy_nftNft_listPOST = function easy_nftNft_listPOST (req, res, next, body) {
  NFTStudio.easy_nftNft_listPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
