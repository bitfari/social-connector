import { asyncToGenerator as _asyncToGenerator, objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import _regeneratorRuntime from 'regenerator-runtime';
import { AppConfig, UserSession } from '@stacks/auth';
import { SECP256K1Client, TokenSigner } from 'jsontokens';
import { getStacksProvider } from '../utils.esm.js';
import { TransactionTypes } from '../types/transactions.esm.js';
import { serializeCV, ChainID, serializePostCondition, deserializeTransaction, BufferReader } from '@stacks/transactions';
import { StacksTestnet } from '@stacks/network';

var _excluded = ["functionArgs", "appDetails", "userSession"],
    _excluded2 = ["appDetails", "userSession"],
    _excluded3 = ["amount", "appDetails", "userSession"];

var getUserSession = function getUserSession(_userSession) {
  var userSession = _userSession;

  if (!userSession) {
    var appConfig = new AppConfig(["store_write"], document.location.href);
    userSession = new UserSession({
      appConfig: appConfig
    });
  }

  return userSession;
};

var getKeys = function getKeys(_userSession) {
  var userSession = getUserSession(_userSession);
  var privateKey = userSession.loadUserData().appPrivateKey;
  var publicKey = SECP256K1Client.derivePublicKey(privateKey);
  return {
    privateKey: privateKey,
    publicKey: publicKey
  };
};

function getStxAddress(options) {
  var _userSession$loadUser, _chainIdToKey;

  var stxAddress = options.stxAddress,
      userSession = options.userSession,
      network = options.network;
  if (stxAddress) return stxAddress;
  if (!userSession || !network) return void 0;
  var stxAddresses = userSession == null ? void 0 : (_userSession$loadUser = userSession.loadUserData().profile) == null ? void 0 : _userSession$loadUser.stxAddress;
  var chainIdToKey = (_chainIdToKey = {}, _chainIdToKey[ChainID.Mainnet] = "mainnet", _chainIdToKey[ChainID.Testnet] = "testnet", _chainIdToKey);
  var address = stxAddresses == null ? void 0 : stxAddresses[chainIdToKey[network.chainId]];
  return address;
}

function getDefaults(options) {
  var network = options.network || new StacksTestnet();
  var userSession = getUserSession(options.userSession);

  var defaults = _extends({}, options, {
    network: network,
    userSession: userSession
  });

  return _extends({
    stxAddress: getStxAddress(defaults)
  }, defaults);
}

var signPayload = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(payload, privateKey) {
    var postConditions, tokenSigner;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            postConditions = payload.postConditions;

            if (postConditions && typeof postConditions[0] !== "string") {
              postConditions = postConditions.map(function (pc) {
                return serializePostCondition(pc).toString("hex");
              });
            }

            tokenSigner = new TokenSigner("ES256k", privateKey);
            return _context.abrupt("return", tokenSigner.signAsync(_extends({}, payload, {
              postConditions: postConditions
            })));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signPayload(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var openTransactionPopup = /*#__PURE__*/function () {
  var _ref3 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(_ref2) {
    var token, options, provider, txResponse, txRaw, txBuffer, stacksTransaction;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = _ref2.token, options = _ref2.options;
            provider = getStacksProvider();

            if (provider) {
              _context2.next = 4;
              break;
            }

            throw new Error("Hiro Wallet not installed.");

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return provider.transactionRequest(token);

          case 7:
            txResponse = _context2.sent;
            txRaw = txResponse.txRaw;
            txBuffer = Buffer.from(txRaw.replace(/^0x/, ""), "hex");
            stacksTransaction = deserializeTransaction(new BufferReader(txBuffer));

            if (!("sponsored" in options && options.sponsored)) {
              _context2.next = 14;
              break;
            }

            options.onFinish == null ? void 0 : options.onFinish(_extends({}, txResponse, {
              stacksTransaction: stacksTransaction
            }));
            return _context2.abrupt("return");

          case 14:
            options.onFinish == null ? void 0 : options.onFinish(_extends({}, txResponse, {
              stacksTransaction: stacksTransaction
            }));
            _context2.next = 21;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](4);
            console.error("[Connect] Error during transaction request", _context2.t0);
            options.onCancel == null ? void 0 : options.onCancel();

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 17]]);
  }));

  return function openTransactionPopup(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var makeContractCallToken = /*#__PURE__*/function () {
  var _ref4 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(options) {
    var functionArgs, appDetails, userSession, _options, _getKeys, privateKey, publicKey, args, payload;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            functionArgs = options.functionArgs, appDetails = options.appDetails, userSession = options.userSession, _options = _objectWithoutPropertiesLoose(options, _excluded);
            _getKeys = getKeys(userSession), privateKey = _getKeys.privateKey, publicKey = _getKeys.publicKey;
            args = functionArgs.map(function (arg) {
              if (typeof arg === "string") {
                return arg;
              }

              return serializeCV(arg).toString("hex");
            });
            payload = _extends({}, _options, {
              functionArgs: args,
              txType: TransactionTypes.ContractCall,
              publicKey: publicKey
            });

            if (appDetails) {
              payload.appDetails = appDetails;
            }

            return _context3.abrupt("return", signPayload(payload, privateKey));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function makeContractCallToken(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var makeContractDeployToken = /*#__PURE__*/function () {
  var _ref5 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(options) {
    var appDetails, userSession, _options, _getKeys2, privateKey, publicKey, payload;

    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            appDetails = options.appDetails, userSession = options.userSession, _options = _objectWithoutPropertiesLoose(options, _excluded2);
            _getKeys2 = getKeys(userSession), privateKey = _getKeys2.privateKey, publicKey = _getKeys2.publicKey;
            payload = _extends({}, _options, {
              publicKey: publicKey,
              txType: TransactionTypes.ContractDeploy
            });

            if (appDetails) {
              payload.appDetails = appDetails;
            }

            return _context4.abrupt("return", signPayload(payload, privateKey));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function makeContractDeployToken(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
var makeSTXTransferToken = /*#__PURE__*/function () {
  var _ref6 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(options) {
    var amount, appDetails, userSession, _options, _getKeys3, privateKey, publicKey, payload;

    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            amount = options.amount, appDetails = options.appDetails, userSession = options.userSession, _options = _objectWithoutPropertiesLoose(options, _excluded3);
            _getKeys3 = getKeys(userSession), privateKey = _getKeys3.privateKey, publicKey = _getKeys3.publicKey;
            payload = _extends({}, _options, {
              amount: amount.toString(10),
              publicKey: publicKey,
              txType: TransactionTypes.STXTransfer
            });

            if (appDetails) {
              payload.appDetails = appDetails;
            }

            return _context5.abrupt("return", signPayload(payload, privateKey));

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function makeSTXTransferToken(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

function generateTokenAndOpenPopup(_x7, _x8) {
  return _generateTokenAndOpenPopup.apply(this, arguments);
}

function _generateTokenAndOpenPopup() {
  _generateTokenAndOpenPopup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(options, makeTokenFn) {
    var token;
    return _regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return makeTokenFn(_extends({}, getDefaults(options), options));

          case 2:
            token = _context6.sent;
            return _context6.abrupt("return", openTransactionPopup({
              token: token,
              options: options
            }));

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _generateTokenAndOpenPopup.apply(this, arguments);
}

function openContractCall(options) {
  return generateTokenAndOpenPopup(options, makeContractCallToken);
}
function openContractDeploy(options) {
  return generateTokenAndOpenPopup(options, makeContractDeployToken);
}
function openSTXTransfer(options) {
  return generateTokenAndOpenPopup(options, makeSTXTransferToken);
}

export { makeContractCallToken, makeContractDeployToken, makeSTXTransferToken, openContractCall, openContractDeploy, openSTXTransfer };
//# sourceMappingURL=index.esm.js.map
