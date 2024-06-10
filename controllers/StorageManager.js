'use strict';

var utils = require('../utils/writer.js');
var StorageManager = require('../service/StorageManagerService');

module.exports.storagemanageripfsDownloadFileFromIPFSPOST = function storagemanageripfsDownloadFileFromIPFSPOST (req, res, next, body) {
  StorageManager.storagemanageripfsDownloadFileFromIPFSPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.storagemanageripfsGetFileDetailsPOST = function storagemanageripfsGetFileDetailsPOST (req, res, next, body) {
  StorageManager.storagemanageripfsGetFileDetailsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.storagemanageripfsStorefilePOST = function storagemanageripfsStorefilePOST (req, res, next) {
  StorageManager.storagemanageripfsStorefilePOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.storagemanageripfsUpdatePinStatusPOST = function storagemanageripfsUpdatePinStatusPOST (req, res, next, body) {
  StorageManager.storagemanageripfsUpdatePinStatusPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
