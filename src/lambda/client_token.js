(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("http"), require("https"), require("zlib"), require("buffer"), require("fs"), require("path"), require("stream"), require("string_decoder"), require("events"), require("util"), require("crypto"));
	else if(typeof define === 'function' && define.amd)
		define(["http", "https", "zlib", "buffer", "fs", "path", "stream", "string_decoder", "events", "util", "crypto"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("http"), require("https"), require("zlib"), require("buffer"), require("fs"), require("path"), require("stream"), require("string_decoder"), require("events"), require("util"), require("crypto")) : factory(root["http"], root["https"], root["zlib"], root["buffer"], root["fs"], root["path"], root["stream"], root["string_decoder"], root["events"], root["util"], root["crypto"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_66__, __WEBPACK_EXTERNAL_MODULE_126__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var braintree = __webpack_require__(1);
	var gateway = braintree.connect({ accessToken: ("access_token$sandbox$x7fp5c9rgnw64c66$2666d074b17b95079c17671344450a9c") });
	
	exports.handler = function (event, context, callback) {
	
	  return gateway.clientToken.generate({}).then(function (result) {
	    var response = {
	      statusCode: 200,
	      headers: {
	        'Access-Control-Allow-Origin': '*'
	      },
	      body: JSON.stringify({ clientToken: result.clientToken })
	    };
	    callback(null, response);
	  }).catch(function (err) {
	    console.log(err);
	    var response = {
	      statusCode: 500,
	      headers: {
	        'Access-Control-Allow-Origin': '*'
	      },
	      body: JSON.stringify({
	        error: err.message
	      })
	    };
	    callback(null, response);
	  });
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let version = __webpack_require__(3).version;
	let Config = __webpack_require__(4).Config;
	let Environment = __webpack_require__(6).Environment;
	let BraintreeGateway = __webpack_require__(7).BraintreeGateway;
	let errorTypes = __webpack_require__(21).errorTypes;
	
	let Transaction = __webpack_require__(33).Transaction;
	
	let CreditCard = __webpack_require__(37).CreditCard;
	let PayPalAccount = __webpack_require__(40).PayPalAccount;
	let AndroidPayCard = __webpack_require__(35).AndroidPayCard;
	let ApplePayCard = __webpack_require__(34).ApplePayCard;
	let VenmoAccount = __webpack_require__(86).VenmoAccount;
	let CoinbaseAccount = __webpack_require__(41).CoinbaseAccount;
	let AmexExpressCheckoutCard = __webpack_require__(85).AmexExpressCheckoutCard;
	let VisaCheckoutCard = __webpack_require__(51).VisaCheckoutCard;
	let MasterpassCard = __webpack_require__(52).MasterpassCard;
	
	let CreditCardVerification = __webpack_require__(38).CreditCardVerification;
	let Subscription = __webpack_require__(117).Subscription;
	let MerchantAccount = __webpack_require__(98).MerchantAccount;
	let PaymentInstrumentTypes = __webpack_require__(140).PaymentInstrumentTypes;
	let WebhookNotification = __webpack_require__(132).WebhookNotification;
	let TestingGateway = __webpack_require__(121).TestingGateway;
	let ValidationErrorCodes = __webpack_require__(141).ValidationErrorCodes;
	
	let CreditCardDefaults = __webpack_require__(142).CreditCardDefaults;
	let CreditCardNumbers = __webpack_require__(143).CreditCardNumbers;
	let MerchantAccountTest = __webpack_require__(144).MerchantAccountTest;
	let Nonces = __webpack_require__(145).Nonces;
	let TransactionAmounts = __webpack_require__(146).TransactionAmounts;
	
	let connect = config => new BraintreeGateway(new Config(config)); // eslint-disable-line func-style
	let Test = {
	  CreditCardDefaults: CreditCardDefaults,
	  CreditCardNumbers: CreditCardNumbers,
	  MerchantAccountTest: MerchantAccountTest,
	  Nonces: Nonces,
	  TransactionAmounts: TransactionAmounts
	};
	
	module.exports = {
	  connect: connect,
	  version: version,
	  Environment: Environment,
	  errorTypes: errorTypes,
	
	  Transaction: Transaction,
	
	  CreditCard: CreditCard,
	  PayPalAccount: PayPalAccount,
	  AndroidPayCard: AndroidPayCard,
	  ApplePayCard: ApplePayCard,
	  VenmoAccount: VenmoAccount,
	  CoinbaseAccount: CoinbaseAccount,
	  AmexExpressCheckoutCard: AmexExpressCheckoutCard,
	  VisaCheckoutCard: VisaCheckoutCard,
	  MasterpassCard: MasterpassCard,
	
	  CreditCardVerification: CreditCardVerification,
	  Subscription: Subscription,
	  MerchantAccount: MerchantAccount,
	  PaymentInstrumentTypes: PaymentInstrumentTypes,
	  WebhookNotification: WebhookNotification,
	  TestingGateway: TestingGateway,
	  ValidationErrorCodes: ValidationErrorCodes,
	
	  Test: Test
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = {"name":"braintree","version":"2.7.0","description":"A library for integrating with Braintree.","keywords":["braintree","payments"],"homepage":"https://github.com/braintree/braintree_node","author":"Braintree <code@braintreepayments.com> (https://www.braintreepayments.com)","main":"index","directories":{"lib":"./lib"},"repository":{"type":"git","url":"https://github.com/braintree/braintree_node.git"},"engines":{"node":">=4"},"dependencies":{"dateformat":"1.0.1-1.2.3","depd":"~1.1.0","readable-stream":"1.1.10","semver":"5.1.0","underscore":"1.8.3","xml2js":"0.1.13","@braintree/wrap-promise":"1.1.1"},"devDependencies":{"chai":"4.1.0","eslint":"^2.7.0","eslint-config-braintree":"^1.0.2","mocha":"3.4.2"},"license":"MIT","scripts":{"lint":"eslint lib/ spec/","pretest":"npm run lint","test:unit":"mocha spec/unit --recursive -r spec/spec_helper","test:integration":"mocha --timeout 60000 --slow 2000 spec/integration --recursive -r spec/spec_helper","test":"npm run test:unit"}}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let CredentialsParser = __webpack_require__(5).CredentialsParser;
	
	class Config {
	  constructor(rawConfig) {
	    this.timeout = 60000;
	    this.apiVersion = '4';
	    let parser = new CredentialsParser();
	
	    if (rawConfig.clientId || rawConfig.clientSecret) {
	      parser.parseClientCredentials(rawConfig.clientId, rawConfig.clientSecret);
	      this.clientId = parser.clientId;
	      this.clientSecret = parser.clientSecret;
	      this.environment = parser.environment;
	    } else if (rawConfig.accessToken) {
	      parser.parseAccessToken(rawConfig.accessToken);
	      this.accessToken = parser.accessToken;
	      this.environment = parser.environment;
	      this.merchantId = parser.merchantId;
	    } else {
	      this.publicKey = rawConfig.publicKey;
	      this.privateKey = rawConfig.privateKey;
	      this.merchantId = rawConfig.merchantId || rawConfig.partnerId;
	      this.environment = rawConfig.environment;
	      if (!this.publicKey) { throw new Error('Missing publicKey'); }
	      if (!this.privateKey) { throw new Error('Missing privateKey'); }
	      if (!this.merchantId) { throw new Error('Missing merchantId'); }
	      if (!this.environment) { throw new Error('Missing environment'); }
	    }
	  }
	
	  baseMerchantPath() { return `/merchants/${this.merchantId}`; }
	
	  baseUrl() { return this.environment.baseUrl(); }
	
	  baseMerchantUrl() { return this.baseUrl() + this.baseMerchantPath(); }
	}
	
	module.exports = {Config: Config};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Environment = __webpack_require__(6).Environment;
	
	class CredentialsParser {
	  parseClientCredentials(clientId, clientSecret) {
	    this.clientId = clientId;
	    this.clientSecret = clientSecret;
	    if (!this.clientId) { throw new Error('Missing clientId'); }
	    if (!this.clientSecret) { throw new Error('Missing clientSecret'); }
	
	    if (this.clientId.indexOf('client_id') !== 0) { throw new Error('Value passed for clientId is not a client id'); }
	    if (this.clientSecret.indexOf('client_secret') !== 0) { throw new Error('Value passed for clientSecret is not a client secret'); }
	
	    let clientIdEnvironment = this.parseEnvironment(this.clientId);
	    let clientSecretEnvironment = this.parseEnvironment(this.clientSecret);
	
	    if (clientIdEnvironment !== clientSecretEnvironment) {
	      throw new Error(`Mismatched credential environments: clientId environment is ${clientIdEnvironment} and clientSecret environment is ${clientSecretEnvironment}`);
	    }
	
	    this.environment = clientIdEnvironment;
	
	    return this.environment;
	  }
	
	  parseAccessToken(accessToken) {
	    this.accessToken = accessToken;
	    if (!this.accessToken) { throw new Error('Missing access token'); }
	
	    if (this.accessToken.indexOf('access_token') !== 0) { throw new Error('Value passed for accessToken is not a valid access token'); }
	
	    this.merchantId = this.accessToken.split('$')[2];
	    this.environment = this.parseEnvironment(this.accessToken);
	
	    return this.environment;
	  }
	
	  parseEnvironment(credential) {
	    let env = credential.split('$')[1];
	
	    switch (env) {
	      case 'development':
	      case 'integration': return Environment.Development;
	      case 'qa': return Environment.Qa;
	      case 'sandbox': return Environment.Sandbox;
	      case 'production': return Environment.Production;
	      default: throw new Error(`Unknown environment: ${env}`);
	    }
	  }
	}
	
	module.exports = {CredentialsParser: CredentialsParser};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let DEVELOPMENT_PORT;
	
	class Environment {
	  static initClass() {
	    DEVELOPMENT_PORT = ({"CONTENTFUL_SPACE_ID":"x77ncy6osjfp","CONTENTFUL_ACCESS_TOKEN":"6fdf96f860ab5e01bc6fbc7d4c87910dfc1059a54b6455d59b31114faee94ab0","PWINTY_API_KEY":"b3e6f775-062a-49ed-acce-9c634480bbbc","PWINTY_MERCHANT_ID":"1e06e880-1240-4139-b28c-81bcb1841b8a","PAYPAL_CLIENT_ID":"AQ3q-OOyuIvoAC05hzthboEgalHqO9ApAE0D5Uu4SK_1zE2m0SHhZlgu5FsgQloXdmXWCki6gC_AiLFU","PAYPAL_SECRET":"EEK-yx_IW_LQ4V2SXqMf1WiK7abUEHLKMMrtVqY9tq6355cSrGYPVmWxxn_ZBWp5EpPL9O88zaYb2kki","BRAINTREE_TOKEN":"access_token$sandbox$x7fp5c9rgnw64c66$2666d074b17b95079c17671344450a9c","NODE_ENV":"development","PUBLIC_DIR":"/Users/justanotherdavemartin/Projects/photography/public"}).GATEWAY_PORT || '3000';
	    this.Development = new Environment('localhost', DEVELOPMENT_PORT, 'http://auth.venmo.dev:9292', false);
	    this.Qa = new Environment('gateway.qa.braintreepayments.com', '443', 'https://auth.venmo.qa2.braintreegateway.com', true);
	    this.Sandbox = new Environment('api.sandbox.braintreegateway.com', '443', 'https://auth.sandbox.venmo.com', true);
	    this.Production = new Environment('api.braintreegateway.com', '443', 'https://auth.venmo.com', true);
	  }
	
	  constructor(server, port, authUrl, ssl) {
	    this.server = server;
	    this.port = port;
	    this.authUrl = authUrl;
	    this.ssl = ssl;
	  }
	
	  baseUrl() {
	    let url = this.uriScheme() + this.server;
	
	    if (this === Environment.Development) {
	      url += `:${this.port}`;
	    }
	
	    return url;
	  }
	
	  uriScheme() {
	    return this.ssl ? 'https://' : 'http://';
	  }
	}
	Environment.initClass();
	
	module.exports = {Environment: Environment};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Http = __webpack_require__(8).Http;
	let AddOnGateway = __webpack_require__(28).AddOnGateway;
	let AddressGateway = __webpack_require__(76).AddressGateway;
	let ClientTokenGateway = __webpack_require__(78).ClientTokenGateway;
	let CreditCardGateway = __webpack_require__(79).CreditCardGateway;
	let CreditCardVerificationGateway = __webpack_require__(80).CreditCardVerificationGateway;
	let CustomerGateway = __webpack_require__(83).CustomerGateway;
	let DisbursementGateway = __webpack_require__(88).DisbursementGateway;
	let DiscountGateway = __webpack_require__(89).DiscountGateway;
	let DisputeGateway = __webpack_require__(91).DisputeGateway;
	let DocumentUploadGateway = __webpack_require__(95).DocumentUploadGateway;
	let MerchantAccountGateway = __webpack_require__(97).MerchantAccountGateway;
	let MerchantGateway = __webpack_require__(99).MerchantGateway;
	let OAuthGateway = __webpack_require__(102).OAuthGateway;
	let PaymentMethodGateway = __webpack_require__(103).PaymentMethodGateway;
	let PaymentMethodNonceGateway = __webpack_require__(110).PaymentMethodNonceGateway;
	let PayPalAccountGateway = __webpack_require__(111).PayPalAccountGateway;
	let PlanGateway = __webpack_require__(112).PlanGateway;
	let SettlementBatchSummaryGateway = __webpack_require__(114).SettlementBatchSummaryGateway;
	let SubscriptionGateway = __webpack_require__(116).SubscriptionGateway;
	let TestingGateway = __webpack_require__(121).TestingGateway;
	let TransactionGateway = __webpack_require__(119).TransactionGateway;
	let TransactionLineItemGateway = __webpack_require__(122).TransactionLineItemGateway;
	let TransparentRedirectGateway = __webpack_require__(124).TransparentRedirectGateway;
	let UsBankAccountGateway = __webpack_require__(129).UsBankAccountGateway;
	let IdealPaymentGateway = __webpack_require__(130).IdealPaymentGateway;
	let WebhookNotificationGateway = __webpack_require__(131).WebhookNotificationGateway;
	let WebhookTestingGateway = __webpack_require__(139).WebhookTestingGateway;
	
	class BraintreeGateway {
	  constructor(config) {
	    this.config = config;
	    this.http = new Http(this.config);
	    this.addOn = new AddOnGateway(this);
	    this.address = new AddressGateway(this);
	    this.clientToken = new ClientTokenGateway(this);
	    this.creditCard = new CreditCardGateway(this);
	    this.creditCardVerification = new CreditCardVerificationGateway(this);
	    this.customer = new CustomerGateway(this);
	    this.disbursement = new DisbursementGateway(this);
	    this.discount = new DiscountGateway(this);
	    this.dispute = new DisputeGateway(this);
	    this.documentUpload = new DocumentUploadGateway(this);
	    this.merchantAccount = new MerchantAccountGateway(this);
	    this.merchant = new MerchantGateway(this);
	    this.oauth = new OAuthGateway(this);
	    this.paymentMethod = new PaymentMethodGateway(this);
	    this.paymentMethodNonce = new PaymentMethodNonceGateway(this);
	    this.paypalAccount = new PayPalAccountGateway(this);
	    this.plan = new PlanGateway(this);
	    this.settlementBatchSummary = new SettlementBatchSummaryGateway(this);
	    this.subscription = new SubscriptionGateway(this);
	    this.testing = new TestingGateway(this);
	    this.transaction = new TransactionGateway(this);
	    this.transactionLineItem = new TransactionLineItemGateway(this);
	    this.transparentRedirect = new TransparentRedirectGateway(this);
	    this.usBankAccount = new UsBankAccountGateway(this);
	    this.idealPayment = new IdealPaymentGateway(this);
	    this.webhookNotification = new WebhookNotificationGateway(this);
	    this.webhookTesting = new WebhookTestingGateway(this);
	  }
	}
	
	module.exports = {BraintreeGateway: BraintreeGateway};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let http = __webpack_require__(9);
	let https = __webpack_require__(10);
	let zlib = __webpack_require__(11);
	let Buffer = __webpack_require__(12).Buffer;
	let fs = __webpack_require__(13);
	let path = __webpack_require__(14);
	
	let version = __webpack_require__(3).version;
	let xml2js = __webpack_require__(15);
	let exceptions = __webpack_require__(20);
	let Util = __webpack_require__(22).Util;
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class Http {
	  constructor(config) {
	    this.config = config;
	  }
	
	  checkHttpStatus(status) {
	    switch (status.toString()) {
	      case '200':
	      case '201':
	      case '422': return null;
	      case '401': return exceptions.AuthenticationError('Authentication Error'); // eslint-disable-line new-cap
	      case '403': return exceptions.AuthorizationError('Authorization Error'); // eslint-disable-line new-cap
	      case '404': return exceptions.NotFoundError('Not Found'); // eslint-disable-line new-cap
	      case '426': return exceptions.UpgradeRequired('Upgrade Required'); // eslint-disable-line new-cap
	      case '429': return exceptions.TooManyRequestsError('Too Many Requests'); // eslint-disable-line new-cap
	      case '500': return exceptions.ServerError('Server Error'); // eslint-disable-line new-cap
	      case '503': return exceptions.DownForMaintenanceError('Down for Maintenance'); // eslint-disable-line new-cap
	      default: return exceptions.UnexpectedError(`Unexpected HTTP response: ${status}`); // eslint-disable-line new-cap
	    }
	  }
	
	  delete(url) {
	    return this.request('DELETE', url, null);
	  }
	
	  get(url) {
	    return this.request('GET', url, null);
	  }
	
	  post(url, body) {
	    return this.request('POST', url, body);
	  }
	
	  postMultipart(url, body, file) {
	    return this.request('POST', url, body, file);
	  }
	
	  put(url, body) {
	    return this.request('PUT', url, body);
	  }
	
	  request(method, url, body, file) {
	    let boundary, requestBody, requestAborted;
	    let client = this.config.environment.ssl ? https : http;
	
	    let options = {
	      host: this.config.environment.server,
	      port: this.config.environment.port,
	      method,
	      path: url,
	      headers: this._headers()
	    };
	
	    if (file) {
	      boundary = 'boundary' + Date.now();
	      requestBody = this._prepareMultipart(boundary, body, file);
	      options.headers['Content-Type'] = `multipart/form-data; boundary=${boundary}`;
	    } else if (body) {
	      requestBody = JSON.stringify(Util.convertObjectKeysToUnderscores(body));
	    }
	
	    if (requestBody) {
	      options.headers['Content-Length'] = Buffer.byteLength(requestBody).toString();
	    }
	
	    return new Promise((resolve, reject) => {
	      let theRequest = client.request(options, (response) => {
	        let chunks = [];
	
	        response.on('data', (responseBody) => {
	          chunks.push(responseBody);
	        });
	
	        response.on('end', () => {
	          let buffer = Buffer.concat(chunks);
	          let error = this.checkHttpStatus(response.statusCode);
	
	          if (error) {
	            reject(error);
	            return;
	          }
	
	          if (buffer.length > 0) {
	            if (response.headers['content-encoding'] === 'gzip') {
	              zlib.gunzip(buffer, (gunzipError, result) => {
	                if (gunzipError) {
	                  reject(gunzipError);
	                } else {
	                  parseResponse(result.toString('utf8'));
	                }
	              });
	            } else {
	              parseResponse(buffer.toString('utf8'));
	            }
	          } else {
	            resolve();
	          }
	        });
	
	        response.on('error', function (err) {
	          let error = exceptions.UnexpectedError(`Unexpected response error: ${err}`); // eslint-disable-line new-cap
	
	          reject(error);
	        });
	      });
	
	      function parseResponse(responseBody) {
	        if (responseBody.match(/^\s+$/)) {
	          resolve({});
	        } else {
	          new xml2js.Parser({
	            explicitRoot: true
	          }).parseString(responseBody, (err, result) => {
	            if (err) {
	              reject(err);
	            } else if (result) {
	              resolve(Util.convertNodeToObject(result));
	            }
	          });
	        }
	      }
	
	      function timeoutHandler() {
	        theRequest.abort();
	        requestAborted = true;
	        let error = exceptions.UnexpectedError('Request timed out'); // eslint-disable-line new-cap
	
	        reject(error);
	      }
	
	      theRequest.setTimeout(this.config.timeout, timeoutHandler);
	
	      let requestSocket;
	
	      theRequest.on('socket', (socket) => {
	        requestSocket = socket;
	      });
	
	      theRequest.on('error', err => {
	        if (requestAborted) { return; }
	        if (this.config.timeout > 0) {
	          requestSocket.removeListener('timeout', timeoutHandler);
	        }
	        let error = exceptions.UnexpectedError(`Unexpected request error: ${err}`); // eslint-disable-line new-cap
	
	        reject(error);
	      });
	
	      if (body) { theRequest.write(requestBody); }
	      theRequest.end();
	    });
	  }
	
	  _prepareMultipart(boundary, body, file) {
	    let val;
	    let requestBody = '';
	
	    requestBody += this._filePart('file', file, boundary);
	    for (const key of Object.keys(body)) {
	      val = body[key];
	
	      requestBody += this._formPart(key, val, boundary);
	    }
	
	    requestBody += `--${boundary}--`;
	    requestBody += '\r\n\r\n';
	
	    return requestBody;
	  }
	
	  _partHeader(key, filename, boundary) {
	    let part = `--${boundary}`;
	
	    part += '\r\n';
	    part += `Content-Disposition: form-data; name="${key}"`;
	    if (filename) {
	      part += `; filename="${filename}"`;
	      part += '\r\n';
	      part += `Content-Type: ${this._filetype(filename)}`;
	    }
	    part += '\r\n\r\n';
	
	    return part;
	  }
	
	  _formPart(key, formPart, boundary) {
	    let part = this._partHeader(key, null, boundary);
	
	    part += formPart;
	    part += '\r\n';
	
	    return part;
	  }
	
	  _filePart(key, readStream, boundary) {
	    let part = this._partHeader(key, path.basename(readStream.path), boundary);
	
	    let fileData = fs.readFileSync(readStream.path);
	
	    part += fileData;
	    part += '\r\n';
	
	    return part;
	  }
	
	  _filetype(filename) {
	    let ext = path.extname(filename);
	
	    if (ext === '.jpeg' || ext === '.jpg') {
	      return 'image/jpeg';
	    } else if (ext === '.png') {
	      return 'image/png';
	    } else if (ext === '.pdf') {
	      return 'application/pdf';
	    }
	
	    return 'application/octet-stream';
	  }
	
	  _headers() {
	    return {
	      Authorization: this.authorizationHeader(),
	      'X-ApiVersion': this.config.apiVersion,
	      Accept: 'application/xml',
	      'Content-Type': 'application/json',
	      'User-Agent': `Braintree Node ${version}`,
	      'Accept-Encoding': 'gzip'
	    };
	  }
	
	  authorizationHeader() {
	    if (this.config.accessToken) {
	      return `Bearer ${this.config.accessToken}`;
	    } else if (this.config.clientId) {
	      return `Basic ${(new Buffer(this.config.clientId + ':' + this.config.clientSecret)).toString('base64')}`;
	    }
	
	    return `Basic ${(new Buffer(this.config.publicKey + ':' + this.config.privateKey)).toString('base64')}`;
	  }
	}
	
	module.exports = {Http: wrapPrototype(Http)};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("http");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("https");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = require("zlib");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = require("buffer");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = require("fs");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	  var events, isEmpty, sax;
	  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };
	
	  sax = __webpack_require__(16);
	
	  events = __webpack_require__(19);
	
	  isEmpty = function(thing) {
	    return typeof thing === "object" && (thing != null) && Object.keys(thing).length === 0;
	  };
	
	  exports.Parser = (function() {
	
	    __extends(Parser, events.EventEmitter);
	
	    function Parser(opts) {
	      this.parseString = __bind(this.parseString, this);
	      this.reset = __bind(this.reset, this);
	      var key, value;
	      this.options = {
	        explicitCharkey: false,
	        trim: true,
	        normalize: true,
	        attrkey: "@",
	        charkey: "#",
	        explicitArray: false,
	        ignoreAttrs: false,
	        mergeAttrs: false
	      };
	      for (key in opts) {
	        if (!__hasProp.call(opts, key)) continue;
	        value = opts[key];
	        this.options[key] = value;
	      }
	      this.reset();
	    }
	
	    Parser.prototype.reset = function() {
	      var attrkey, charkey, err, stack;
	      var _this = this;
	      this.removeAllListeners();
	      this.saxParser = sax.parser(true, {
	        trim: false,
	        normalize: false
	      });
	      err = false;
	      this.saxParser.onerror = function(error) {
	        if (!err) {
	          err = true;
	          return _this.emit("error", error);
	        }
	      };
	      this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
	      this.resultObject = null;
	      stack = [];
	      attrkey = this.options.attrkey;
	      charkey = this.options.charkey;
	      this.saxParser.onopentag = function(node) {
	        var key, obj, _ref;
	        obj = {};
	        obj[charkey] = "";
	        if (!_this.options.ignoreAttrs) {
	          _ref = node.attributes;
	          for (key in _ref) {
	            if (!__hasProp.call(_ref, key)) continue;
	            if (!(attrkey in obj) && !_this.options.mergeAttrs) obj[attrkey] = {};
	            if (_this.options.mergeAttrs) {
	              obj[key] = node.attributes[key];
	            } else {
	              obj[attrkey][key] = node.attributes[key];
	            }
	          }
	        }
	        obj["#name"] = node.name;
	        return stack.push(obj);
	      };
	      this.saxParser.onclosetag = function() {
	        var nodeName, obj, old, s;
	        obj = stack.pop();
	        nodeName = obj["#name"];
	        delete obj["#name"];
	        s = stack[stack.length - 1];
	        if (obj[charkey].match(/^\s*$/)) {
	          delete obj[charkey];
	        } else {
	          if (_this.options.trim) obj[charkey] = obj[charkey].trim();
	          if (_this.options.normalize) {
	            obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
	          }
	          if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
	            obj = obj[charkey];
	          }
	        }
	        if (_this.options.emptyTag !== void 0 && isEmpty(obj)) {
	          obj = _this.options.emptyTag;
	        }
	        if (stack.length > 0) {
	          if (!_this.options.explicitArray) {
	            if (!(nodeName in s)) {
	              return s[nodeName] = obj;
	            } else if (s[nodeName] instanceof Array) {
	              return s[nodeName].push(obj);
	            } else {
	              old = s[nodeName];
	              s[nodeName] = [old];
	              return s[nodeName].push(obj);
	            }
	          } else {
	            if (!(s[nodeName] instanceof Array)) s[nodeName] = [];
	            return s[nodeName].push(obj);
	          }
	        } else {
	          if (_this.options.explicitRoot) {
	            old = obj;
	            obj = {};
	            obj[nodeName] = old;
	          }
	          _this.resultObject = obj;
	          return _this.emit("end", _this.resultObject);
	        }
	      };
	      return this.saxParser.ontext = this.saxParser.oncdata = function(text) {
	        var s;
	        s = stack[stack.length - 1];
	        if (s) return s[charkey] += text;
	      };
	    };
	
	    Parser.prototype.parseString = function(str, cb) {
	      if ((cb != null) && typeof cb === "function") {
	        this.on("end", function(result) {
	          this.reset();
	          return cb(null, result);
	        });
	        this.on("error", function(err) {
	          this.reset();
	          return cb(err);
	        });
	      }
	      if (str.toString().trim() === '') {
	        this.emit("end", null);
	        return true;
	      }
	      return this.saxParser.write(str.toString());
	    };
	
	    return Parser;
	
	  })();
	
	}).call(this);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	;(function (sax) { // wrapper for non-node envs
	  sax.parser = function (strict, opt) { return new SAXParser(strict, opt) }
	  sax.SAXParser = SAXParser
	  sax.SAXStream = SAXStream
	  sax.createStream = createStream
	
	  // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
	  // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
	  // since that's the earliest that a buffer overrun could occur.  This way, checks are
	  // as rare as required, but as often as necessary to ensure never crossing this bound.
	  // Furthermore, buffers are only tested at most once per write(), so passing a very
	  // large string into write() might have undesirable effects, but this is manageable by
	  // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
	  // edge case, result in creating at most one complete copy of the string passed in.
	  // Set to Infinity to have unlimited buffers.
	  sax.MAX_BUFFER_LENGTH = 64 * 1024
	
	  var buffers = [
	    'comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype',
	    'procInstName', 'procInstBody', 'entity', 'attribName',
	    'attribValue', 'cdata', 'script'
	  ]
	
	  sax.EVENTS = [
	    'text',
	    'processinginstruction',
	    'sgmldeclaration',
	    'doctype',
	    'comment',
	    'opentagstart',
	    'attribute',
	    'opentag',
	    'closetag',
	    'opencdata',
	    'cdata',
	    'closecdata',
	    'error',
	    'end',
	    'ready',
	    'script',
	    'opennamespace',
	    'closenamespace'
	  ]
	
	  function SAXParser (strict, opt) {
	    if (!(this instanceof SAXParser)) {
	      return new SAXParser(strict, opt)
	    }
	
	    var parser = this
	    clearBuffers(parser)
	    parser.q = parser.c = ''
	    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH
	    parser.opt = opt || {}
	    parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags
	    parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase'
	    parser.tags = []
	    parser.closed = parser.closedRoot = parser.sawRoot = false
	    parser.tag = parser.error = null
	    parser.strict = !!strict
	    parser.noscript = !!(strict || parser.opt.noscript)
	    parser.state = S.BEGIN
	    parser.strictEntities = parser.opt.strictEntities
	    parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES)
	    parser.attribList = []
	
	    // namespaces form a prototype chain.
	    // it always points at the current tag,
	    // which protos to its parent tag.
	    if (parser.opt.xmlns) {
	      parser.ns = Object.create(rootNS)
	    }
	
	    // mostly just for error reporting
	    parser.trackPosition = parser.opt.position !== false
	    if (parser.trackPosition) {
	      parser.position = parser.line = parser.column = 0
	    }
	    emit(parser, 'onready')
	  }
	
	  if (!Object.create) {
	    Object.create = function (o) {
	      function F () {}
	      F.prototype = o
	      var newf = new F()
	      return newf
	    }
	  }
	
	  if (!Object.keys) {
	    Object.keys = function (o) {
	      var a = []
	      for (var i in o) if (o.hasOwnProperty(i)) a.push(i)
	      return a
	    }
	  }
	
	  function checkBufferLength (parser) {
	    var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10)
	    var maxActual = 0
	    for (var i = 0, l = buffers.length; i < l; i++) {
	      var len = parser[buffers[i]].length
	      if (len > maxAllowed) {
	        // Text/cdata nodes can get big, and since they're buffered,
	        // we can get here under normal conditions.
	        // Avoid issues by emitting the text node now,
	        // so at least it won't get any bigger.
	        switch (buffers[i]) {
	          case 'textNode':
	            closeText(parser)
	            break
	
	          case 'cdata':
	            emitNode(parser, 'oncdata', parser.cdata)
	            parser.cdata = ''
	            break
	
	          case 'script':
	            emitNode(parser, 'onscript', parser.script)
	            parser.script = ''
	            break
	
	          default:
	            error(parser, 'Max buffer length exceeded: ' + buffers[i])
	        }
	      }
	      maxActual = Math.max(maxActual, len)
	    }
	    // schedule the next check for the earliest possible buffer overrun.
	    var m = sax.MAX_BUFFER_LENGTH - maxActual
	    parser.bufferCheckPosition = m + parser.position
	  }
	
	  function clearBuffers (parser) {
	    for (var i = 0, l = buffers.length; i < l; i++) {
	      parser[buffers[i]] = ''
	    }
	  }
	
	  function flushBuffers (parser) {
	    closeText(parser)
	    if (parser.cdata !== '') {
	      emitNode(parser, 'oncdata', parser.cdata)
	      parser.cdata = ''
	    }
	    if (parser.script !== '') {
	      emitNode(parser, 'onscript', parser.script)
	      parser.script = ''
	    }
	  }
	
	  SAXParser.prototype = {
	    end: function () { end(this) },
	    write: write,
	    resume: function () { this.error = null; return this },
	    close: function () { return this.write(null) },
	    flush: function () { flushBuffers(this) }
	  }
	
	  var Stream
	  try {
	    Stream = __webpack_require__(17).Stream
	  } catch (ex) {
	    Stream = function () {}
	  }
	
	  var streamWraps = sax.EVENTS.filter(function (ev) {
	    return ev !== 'error' && ev !== 'end'
	  })
	
	  function createStream (strict, opt) {
	    return new SAXStream(strict, opt)
	  }
	
	  function SAXStream (strict, opt) {
	    if (!(this instanceof SAXStream)) {
	      return new SAXStream(strict, opt)
	    }
	
	    Stream.apply(this)
	
	    this._parser = new SAXParser(strict, opt)
	    this.writable = true
	    this.readable = true
	
	    var me = this
	
	    this._parser.onend = function () {
	      me.emit('end')
	    }
	
	    this._parser.onerror = function (er) {
	      me.emit('error', er)
	
	      // if didn't throw, then means error was handled.
	      // go ahead and clear error, so we can write again.
	      me._parser.error = null
	    }
	
	    this._decoder = null
	
	    streamWraps.forEach(function (ev) {
	      Object.defineProperty(me, 'on' + ev, {
	        get: function () {
	          return me._parser['on' + ev]
	        },
	        set: function (h) {
	          if (!h) {
	            me.removeAllListeners(ev)
	            me._parser['on' + ev] = h
	            return h
	          }
	          me.on(ev, h)
	        },
	        enumerable: true,
	        configurable: false
	      })
	    })
	  }
	
	  SAXStream.prototype = Object.create(Stream.prototype, {
	    constructor: {
	      value: SAXStream
	    }
	  })
	
	  SAXStream.prototype.write = function (data) {
	    if (typeof Buffer === 'function' &&
	      typeof Buffer.isBuffer === 'function' &&
	      Buffer.isBuffer(data)) {
	      if (!this._decoder) {
	        var SD = __webpack_require__(18).StringDecoder
	        this._decoder = new SD('utf8')
	      }
	      data = this._decoder.write(data)
	    }
	
	    this._parser.write(data.toString())
	    this.emit('data', data)
	    return true
	  }
	
	  SAXStream.prototype.end = function (chunk) {
	    if (chunk && chunk.length) {
	      this.write(chunk)
	    }
	    this._parser.end()
	    return true
	  }
	
	  SAXStream.prototype.on = function (ev, handler) {
	    var me = this
	    if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {
	      me._parser['on' + ev] = function () {
	        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)
	        args.splice(0, 0, ev)
	        me.emit.apply(me, args)
	      }
	    }
	
	    return Stream.prototype.on.call(me, ev, handler)
	  }
	
	  // this really needs to be replaced with character classes.
	  // XML allows all manner of ridiculous numbers and digits.
	  var CDATA = '[CDATA['
	  var DOCTYPE = 'DOCTYPE'
	  var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace'
	  var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/'
	  var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE }
	
	  // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
	  // This implementation works on strings, a single character at a time
	  // as such, it cannot ever support astral-plane characters (10000-EFFFF)
	  // without a significant breaking change to either this  parser, or the
	  // JavaScript language.  Implementation of an emoji-capable xml parser
	  // is left as an exercise for the reader.
	  var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
	
	  var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/
	
	  var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
	  var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/
	
	  function isWhitespace (c) {
	    return c === ' ' || c === '\n' || c === '\r' || c === '\t'
	  }
	
	  function isQuote (c) {
	    return c === '"' || c === '\''
	  }
	
	  function isAttribEnd (c) {
	    return c === '>' || isWhitespace(c)
	  }
	
	  function isMatch (regex, c) {
	    return regex.test(c)
	  }
	
	  function notMatch (regex, c) {
	    return !isMatch(regex, c)
	  }
	
	  var S = 0
	  sax.STATE = {
	    BEGIN: S++, // leading byte order mark or whitespace
	    BEGIN_WHITESPACE: S++, // leading whitespace
	    TEXT: S++, // general stuff
	    TEXT_ENTITY: S++, // &amp and such.
	    OPEN_WAKA: S++, // <
	    SGML_DECL: S++, // <!BLARG
	    SGML_DECL_QUOTED: S++, // <!BLARG foo "bar
	    DOCTYPE: S++, // <!DOCTYPE
	    DOCTYPE_QUOTED: S++, // <!DOCTYPE "//blah
	    DOCTYPE_DTD: S++, // <!DOCTYPE "//blah" [ ...
	    DOCTYPE_DTD_QUOTED: S++, // <!DOCTYPE "//blah" [ "foo
	    COMMENT_STARTING: S++, // <!-
	    COMMENT: S++, // <!--
	    COMMENT_ENDING: S++, // <!-- blah -
	    COMMENT_ENDED: S++, // <!-- blah --
	    CDATA: S++, // <![CDATA[ something
	    CDATA_ENDING: S++, // ]
	    CDATA_ENDING_2: S++, // ]]
	    PROC_INST: S++, // <?hi
	    PROC_INST_BODY: S++, // <?hi there
	    PROC_INST_ENDING: S++, // <?hi "there" ?
	    OPEN_TAG: S++, // <strong
	    OPEN_TAG_SLASH: S++, // <strong /
	    ATTRIB: S++, // <a
	    ATTRIB_NAME: S++, // <a foo
	    ATTRIB_NAME_SAW_WHITE: S++, // <a foo _
	    ATTRIB_VALUE: S++, // <a foo=
	    ATTRIB_VALUE_QUOTED: S++, // <a foo="bar
	    ATTRIB_VALUE_CLOSED: S++, // <a foo="bar"
	    ATTRIB_VALUE_UNQUOTED: S++, // <a foo=bar
	    ATTRIB_VALUE_ENTITY_Q: S++, // <foo bar="&quot;"
	    ATTRIB_VALUE_ENTITY_U: S++, // <foo bar=&quot
	    CLOSE_TAG: S++, // </a
	    CLOSE_TAG_SAW_WHITE: S++, // </a   >
	    SCRIPT: S++, // <script> ...
	    SCRIPT_ENDING: S++ // <script> ... <
	  }
	
	  sax.XML_ENTITIES = {
	    'amp': '&',
	    'gt': '>',
	    'lt': '<',
	    'quot': '"',
	    'apos': "'"
	  }
	
	  sax.ENTITIES = {
	    'amp': '&',
	    'gt': '>',
	    'lt': '<',
	    'quot': '"',
	    'apos': "'",
	    'AElig': 198,
	    'Aacute': 193,
	    'Acirc': 194,
	    'Agrave': 192,
	    'Aring': 197,
	    'Atilde': 195,
	    'Auml': 196,
	    'Ccedil': 199,
	    'ETH': 208,
	    'Eacute': 201,
	    'Ecirc': 202,
	    'Egrave': 200,
	    'Euml': 203,
	    'Iacute': 205,
	    'Icirc': 206,
	    'Igrave': 204,
	    'Iuml': 207,
	    'Ntilde': 209,
	    'Oacute': 211,
	    'Ocirc': 212,
	    'Ograve': 210,
	    'Oslash': 216,
	    'Otilde': 213,
	    'Ouml': 214,
	    'THORN': 222,
	    'Uacute': 218,
	    'Ucirc': 219,
	    'Ugrave': 217,
	    'Uuml': 220,
	    'Yacute': 221,
	    'aacute': 225,
	    'acirc': 226,
	    'aelig': 230,
	    'agrave': 224,
	    'aring': 229,
	    'atilde': 227,
	    'auml': 228,
	    'ccedil': 231,
	    'eacute': 233,
	    'ecirc': 234,
	    'egrave': 232,
	    'eth': 240,
	    'euml': 235,
	    'iacute': 237,
	    'icirc': 238,
	    'igrave': 236,
	    'iuml': 239,
	    'ntilde': 241,
	    'oacute': 243,
	    'ocirc': 244,
	    'ograve': 242,
	    'oslash': 248,
	    'otilde': 245,
	    'ouml': 246,
	    'szlig': 223,
	    'thorn': 254,
	    'uacute': 250,
	    'ucirc': 251,
	    'ugrave': 249,
	    'uuml': 252,
	    'yacute': 253,
	    'yuml': 255,
	    'copy': 169,
	    'reg': 174,
	    'nbsp': 160,
	    'iexcl': 161,
	    'cent': 162,
	    'pound': 163,
	    'curren': 164,
	    'yen': 165,
	    'brvbar': 166,
	    'sect': 167,
	    'uml': 168,
	    'ordf': 170,
	    'laquo': 171,
	    'not': 172,
	    'shy': 173,
	    'macr': 175,
	    'deg': 176,
	    'plusmn': 177,
	    'sup1': 185,
	    'sup2': 178,
	    'sup3': 179,
	    'acute': 180,
	    'micro': 181,
	    'para': 182,
	    'middot': 183,
	    'cedil': 184,
	    'ordm': 186,
	    'raquo': 187,
	    'frac14': 188,
	    'frac12': 189,
	    'frac34': 190,
	    'iquest': 191,
	    'times': 215,
	    'divide': 247,
	    'OElig': 338,
	    'oelig': 339,
	    'Scaron': 352,
	    'scaron': 353,
	    'Yuml': 376,
	    'fnof': 402,
	    'circ': 710,
	    'tilde': 732,
	    'Alpha': 913,
	    'Beta': 914,
	    'Gamma': 915,
	    'Delta': 916,
	    'Epsilon': 917,
	    'Zeta': 918,
	    'Eta': 919,
	    'Theta': 920,
	    'Iota': 921,
	    'Kappa': 922,
	    'Lambda': 923,
	    'Mu': 924,
	    'Nu': 925,
	    'Xi': 926,
	    'Omicron': 927,
	    'Pi': 928,
	    'Rho': 929,
	    'Sigma': 931,
	    'Tau': 932,
	    'Upsilon': 933,
	    'Phi': 934,
	    'Chi': 935,
	    'Psi': 936,
	    'Omega': 937,
	    'alpha': 945,
	    'beta': 946,
	    'gamma': 947,
	    'delta': 948,
	    'epsilon': 949,
	    'zeta': 950,
	    'eta': 951,
	    'theta': 952,
	    'iota': 953,
	    'kappa': 954,
	    'lambda': 955,
	    'mu': 956,
	    'nu': 957,
	    'xi': 958,
	    'omicron': 959,
	    'pi': 960,
	    'rho': 961,
	    'sigmaf': 962,
	    'sigma': 963,
	    'tau': 964,
	    'upsilon': 965,
	    'phi': 966,
	    'chi': 967,
	    'psi': 968,
	    'omega': 969,
	    'thetasym': 977,
	    'upsih': 978,
	    'piv': 982,
	    'ensp': 8194,
	    'emsp': 8195,
	    'thinsp': 8201,
	    'zwnj': 8204,
	    'zwj': 8205,
	    'lrm': 8206,
	    'rlm': 8207,
	    'ndash': 8211,
	    'mdash': 8212,
	    'lsquo': 8216,
	    'rsquo': 8217,
	    'sbquo': 8218,
	    'ldquo': 8220,
	    'rdquo': 8221,
	    'bdquo': 8222,
	    'dagger': 8224,
	    'Dagger': 8225,
	    'bull': 8226,
	    'hellip': 8230,
	    'permil': 8240,
	    'prime': 8242,
	    'Prime': 8243,
	    'lsaquo': 8249,
	    'rsaquo': 8250,
	    'oline': 8254,
	    'frasl': 8260,
	    'euro': 8364,
	    'image': 8465,
	    'weierp': 8472,
	    'real': 8476,
	    'trade': 8482,
	    'alefsym': 8501,
	    'larr': 8592,
	    'uarr': 8593,
	    'rarr': 8594,
	    'darr': 8595,
	    'harr': 8596,
	    'crarr': 8629,
	    'lArr': 8656,
	    'uArr': 8657,
	    'rArr': 8658,
	    'dArr': 8659,
	    'hArr': 8660,
	    'forall': 8704,
	    'part': 8706,
	    'exist': 8707,
	    'empty': 8709,
	    'nabla': 8711,
	    'isin': 8712,
	    'notin': 8713,
	    'ni': 8715,
	    'prod': 8719,
	    'sum': 8721,
	    'minus': 8722,
	    'lowast': 8727,
	    'radic': 8730,
	    'prop': 8733,
	    'infin': 8734,
	    'ang': 8736,
	    'and': 8743,
	    'or': 8744,
	    'cap': 8745,
	    'cup': 8746,
	    'int': 8747,
	    'there4': 8756,
	    'sim': 8764,
	    'cong': 8773,
	    'asymp': 8776,
	    'ne': 8800,
	    'equiv': 8801,
	    'le': 8804,
	    'ge': 8805,
	    'sub': 8834,
	    'sup': 8835,
	    'nsub': 8836,
	    'sube': 8838,
	    'supe': 8839,
	    'oplus': 8853,
	    'otimes': 8855,
	    'perp': 8869,
	    'sdot': 8901,
	    'lceil': 8968,
	    'rceil': 8969,
	    'lfloor': 8970,
	    'rfloor': 8971,
	    'lang': 9001,
	    'rang': 9002,
	    'loz': 9674,
	    'spades': 9824,
	    'clubs': 9827,
	    'hearts': 9829,
	    'diams': 9830
	  }
	
	  Object.keys(sax.ENTITIES).forEach(function (key) {
	    var e = sax.ENTITIES[key]
	    var s = typeof e === 'number' ? String.fromCharCode(e) : e
	    sax.ENTITIES[key] = s
	  })
	
	  for (var s in sax.STATE) {
	    sax.STATE[sax.STATE[s]] = s
	  }
	
	  // shorthand
	  S = sax.STATE
	
	  function emit (parser, event, data) {
	    parser[event] && parser[event](data)
	  }
	
	  function emitNode (parser, nodeType, data) {
	    if (parser.textNode) closeText(parser)
	    emit(parser, nodeType, data)
	  }
	
	  function closeText (parser) {
	    parser.textNode = textopts(parser.opt, parser.textNode)
	    if (parser.textNode) emit(parser, 'ontext', parser.textNode)
	    parser.textNode = ''
	  }
	
	  function textopts (opt, text) {
	    if (opt.trim) text = text.trim()
	    if (opt.normalize) text = text.replace(/\s+/g, ' ')
	    return text
	  }
	
	  function error (parser, er) {
	    closeText(parser)
	    if (parser.trackPosition) {
	      er += '\nLine: ' + parser.line +
	        '\nColumn: ' + parser.column +
	        '\nChar: ' + parser.c
	    }
	    er = new Error(er)
	    parser.error = er
	    emit(parser, 'onerror', er)
	    return parser
	  }
	
	  function end (parser) {
	    if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag')
	    if ((parser.state !== S.BEGIN) &&
	      (parser.state !== S.BEGIN_WHITESPACE) &&
	      (parser.state !== S.TEXT)) {
	      error(parser, 'Unexpected end')
	    }
	    closeText(parser)
	    parser.c = ''
	    parser.closed = true
	    emit(parser, 'onend')
	    SAXParser.call(parser, parser.strict, parser.opt)
	    return parser
	  }
	
	  function strictFail (parser, message) {
	    if (typeof parser !== 'object' || !(parser instanceof SAXParser)) {
	      throw new Error('bad call to strictFail')
	    }
	    if (parser.strict) {
	      error(parser, message)
	    }
	  }
	
	  function newTag (parser) {
	    if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]()
	    var parent = parser.tags[parser.tags.length - 1] || parser
	    var tag = parser.tag = { name: parser.tagName, attributes: {} }
	
	    // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
	    if (parser.opt.xmlns) {
	      tag.ns = parent.ns
	    }
	    parser.attribList.length = 0
	    emitNode(parser, 'onopentagstart', tag)
	  }
	
	  function qname (name, attribute) {
	    var i = name.indexOf(':')
	    var qualName = i < 0 ? [ '', name ] : name.split(':')
	    var prefix = qualName[0]
	    var local = qualName[1]
	
	    // <x "xmlns"="http://foo">
	    if (attribute && name === 'xmlns') {
	      prefix = 'xmlns'
	      local = ''
	    }
	
	    return { prefix: prefix, local: local }
	  }
	
	  function attrib (parser) {
	    if (!parser.strict) {
	      parser.attribName = parser.attribName[parser.looseCase]()
	    }
	
	    if (parser.attribList.indexOf(parser.attribName) !== -1 ||
	      parser.tag.attributes.hasOwnProperty(parser.attribName)) {
	      parser.attribName = parser.attribValue = ''
	      return
	    }
	
	    if (parser.opt.xmlns) {
	      var qn = qname(parser.attribName, true)
	      var prefix = qn.prefix
	      var local = qn.local
	
	      if (prefix === 'xmlns') {
	        // namespace binding attribute. push the binding into scope
	        if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {
	          strictFail(parser,
	            'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' +
	            'Actual: ' + parser.attribValue)
	        } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {
	          strictFail(parser,
	            'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' +
	            'Actual: ' + parser.attribValue)
	        } else {
	          var tag = parser.tag
	          var parent = parser.tags[parser.tags.length - 1] || parser
	          if (tag.ns === parent.ns) {
	            tag.ns = Object.create(parent.ns)
	          }
	          tag.ns[local] = parser.attribValue
	        }
	      }
	
	      // defer onattribute events until all attributes have been seen
	      // so any new bindings can take effect. preserve attribute order
	      // so deferred events can be emitted in document order
	      parser.attribList.push([parser.attribName, parser.attribValue])
	    } else {
	      // in non-xmlns mode, we can emit the event right away
	      parser.tag.attributes[parser.attribName] = parser.attribValue
	      emitNode(parser, 'onattribute', {
	        name: parser.attribName,
	        value: parser.attribValue
	      })
	    }
	
	    parser.attribName = parser.attribValue = ''
	  }
	
	  function openTag (parser, selfClosing) {
	    if (parser.opt.xmlns) {
	      // emit namespace binding events
	      var tag = parser.tag
	
	      // add namespace info to tag
	      var qn = qname(parser.tagName)
	      tag.prefix = qn.prefix
	      tag.local = qn.local
	      tag.uri = tag.ns[qn.prefix] || ''
	
	      if (tag.prefix && !tag.uri) {
	        strictFail(parser, 'Unbound namespace prefix: ' +
	          JSON.stringify(parser.tagName))
	        tag.uri = qn.prefix
	      }
	
	      var parent = parser.tags[parser.tags.length - 1] || parser
	      if (tag.ns && parent.ns !== tag.ns) {
	        Object.keys(tag.ns).forEach(function (p) {
	          emitNode(parser, 'onopennamespace', {
	            prefix: p,
	            uri: tag.ns[p]
	          })
	        })
	      }
	
	      // handle deferred onattribute events
	      // Note: do not apply default ns to attributes:
	      //   http://www.w3.org/TR/REC-xml-names/#defaulting
	      for (var i = 0, l = parser.attribList.length; i < l; i++) {
	        var nv = parser.attribList[i]
	        var name = nv[0]
	        var value = nv[1]
	        var qualName = qname(name, true)
	        var prefix = qualName.prefix
	        var local = qualName.local
	        var uri = prefix === '' ? '' : (tag.ns[prefix] || '')
	        var a = {
	          name: name,
	          value: value,
	          prefix: prefix,
	          local: local,
	          uri: uri
	        }
	
	        // if there's any attributes with an undefined namespace,
	        // then fail on them now.
	        if (prefix && prefix !== 'xmlns' && !uri) {
	          strictFail(parser, 'Unbound namespace prefix: ' +
	            JSON.stringify(prefix))
	          a.uri = prefix
	        }
	        parser.tag.attributes[name] = a
	        emitNode(parser, 'onattribute', a)
	      }
	      parser.attribList.length = 0
	    }
	
	    parser.tag.isSelfClosing = !!selfClosing
	
	    // process the tag
	    parser.sawRoot = true
	    parser.tags.push(parser.tag)
	    emitNode(parser, 'onopentag', parser.tag)
	    if (!selfClosing) {
	      // special case for <script> in non-strict mode.
	      if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {
	        parser.state = S.SCRIPT
	      } else {
	        parser.state = S.TEXT
	      }
	      parser.tag = null
	      parser.tagName = ''
	    }
	    parser.attribName = parser.attribValue = ''
	    parser.attribList.length = 0
	  }
	
	  function closeTag (parser) {
	    if (!parser.tagName) {
	      strictFail(parser, 'Weird empty close tag.')
	      parser.textNode += '</>'
	      parser.state = S.TEXT
	      return
	    }
	
	    if (parser.script) {
	      if (parser.tagName !== 'script') {
	        parser.script += '</' + parser.tagName + '>'
	        parser.tagName = ''
	        parser.state = S.SCRIPT
	        return
	      }
	      emitNode(parser, 'onscript', parser.script)
	      parser.script = ''
	    }
	
	    // first make sure that the closing tag actually exists.
	    // <a><b></c></b></a> will close everything, otherwise.
	    var t = parser.tags.length
	    var tagName = parser.tagName
	    if (!parser.strict) {
	      tagName = tagName[parser.looseCase]()
	    }
	    var closeTo = tagName
	    while (t--) {
	      var close = parser.tags[t]
	      if (close.name !== closeTo) {
	        // fail the first time in strict mode
	        strictFail(parser, 'Unexpected close tag')
	      } else {
	        break
	      }
	    }
	
	    // didn't find it.  we already failed for strict, so just abort.
	    if (t < 0) {
	      strictFail(parser, 'Unmatched closing tag: ' + parser.tagName)
	      parser.textNode += '</' + parser.tagName + '>'
	      parser.state = S.TEXT
	      return
	    }
	    parser.tagName = tagName
	    var s = parser.tags.length
	    while (s-- > t) {
	      var tag = parser.tag = parser.tags.pop()
	      parser.tagName = parser.tag.name
	      emitNode(parser, 'onclosetag', parser.tagName)
	
	      var x = {}
	      for (var i in tag.ns) {
	        x[i] = tag.ns[i]
	      }
	
	      var parent = parser.tags[parser.tags.length - 1] || parser
	      if (parser.opt.xmlns && tag.ns !== parent.ns) {
	        // remove namespace bindings introduced by tag
	        Object.keys(tag.ns).forEach(function (p) {
	          var n = tag.ns[p]
	          emitNode(parser, 'onclosenamespace', { prefix: p, uri: n })
	        })
	      }
	    }
	    if (t === 0) parser.closedRoot = true
	    parser.tagName = parser.attribValue = parser.attribName = ''
	    parser.attribList.length = 0
	    parser.state = S.TEXT
	  }
	
	  function parseEntity (parser) {
	    var entity = parser.entity
	    var entityLC = entity.toLowerCase()
	    var num
	    var numStr = ''
	
	    if (parser.ENTITIES[entity]) {
	      return parser.ENTITIES[entity]
	    }
	    if (parser.ENTITIES[entityLC]) {
	      return parser.ENTITIES[entityLC]
	    }
	    entity = entityLC
	    if (entity.charAt(0) === '#') {
	      if (entity.charAt(1) === 'x') {
	        entity = entity.slice(2)
	        num = parseInt(entity, 16)
	        numStr = num.toString(16)
	      } else {
	        entity = entity.slice(1)
	        num = parseInt(entity, 10)
	        numStr = num.toString(10)
	      }
	    }
	    entity = entity.replace(/^0+/, '')
	    if (isNaN(num) || numStr.toLowerCase() !== entity) {
	      strictFail(parser, 'Invalid character entity')
	      return '&' + parser.entity + ';'
	    }
	
	    return String.fromCodePoint(num)
	  }
	
	  function beginWhiteSpace (parser, c) {
	    if (c === '<') {
	      parser.state = S.OPEN_WAKA
	      parser.startTagPosition = parser.position
	    } else if (!isWhitespace(c)) {
	      // have to process this as a text node.
	      // weird, but happens.
	      strictFail(parser, 'Non-whitespace before first tag.')
	      parser.textNode = c
	      parser.state = S.TEXT
	    }
	  }
	
	  function charAt (chunk, i) {
	    var result = ''
	    if (i < chunk.length) {
	      result = chunk.charAt(i)
	    }
	    return result
	  }
	
	  function write (chunk) {
	    var parser = this
	    if (this.error) {
	      throw this.error
	    }
	    if (parser.closed) {
	      return error(parser,
	        'Cannot write after close. Assign an onready handler.')
	    }
	    if (chunk === null) {
	      return end(parser)
	    }
	    if (typeof chunk === 'object') {
	      chunk = chunk.toString()
	    }
	    var i = 0
	    var c = ''
	    while (true) {
	      c = charAt(chunk, i++)
	      parser.c = c
	
	      if (!c) {
	        break
	      }
	
	      if (parser.trackPosition) {
	        parser.position++
	        if (c === '\n') {
	          parser.line++
	          parser.column = 0
	        } else {
	          parser.column++
	        }
	      }
	
	      switch (parser.state) {
	        case S.BEGIN:
	          parser.state = S.BEGIN_WHITESPACE
	          if (c === '\uFEFF') {
	            continue
	          }
	          beginWhiteSpace(parser, c)
	          continue
	
	        case S.BEGIN_WHITESPACE:
	          beginWhiteSpace(parser, c)
	          continue
	
	        case S.TEXT:
	          if (parser.sawRoot && !parser.closedRoot) {
	            var starti = i - 1
	            while (c && c !== '<' && c !== '&') {
	              c = charAt(chunk, i++)
	              if (c && parser.trackPosition) {
	                parser.position++
	                if (c === '\n') {
	                  parser.line++
	                  parser.column = 0
	                } else {
	                  parser.column++
	                }
	              }
	            }
	            parser.textNode += chunk.substring(starti, i - 1)
	          }
	          if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
	            parser.state = S.OPEN_WAKA
	            parser.startTagPosition = parser.position
	          } else {
	            if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
	              strictFail(parser, 'Text data outside of root node.')
	            }
	            if (c === '&') {
	              parser.state = S.TEXT_ENTITY
	            } else {
	              parser.textNode += c
	            }
	          }
	          continue
	
	        case S.SCRIPT:
	          // only non-strict
	          if (c === '<') {
	            parser.state = S.SCRIPT_ENDING
	          } else {
	            parser.script += c
	          }
	          continue
	
	        case S.SCRIPT_ENDING:
	          if (c === '/') {
	            parser.state = S.CLOSE_TAG
	          } else {
	            parser.script += '<' + c
	            parser.state = S.SCRIPT
	          }
	          continue
	
	        case S.OPEN_WAKA:
	          // either a /, ?, !, or text is coming next.
	          if (c === '!') {
	            parser.state = S.SGML_DECL
	            parser.sgmlDecl = ''
	          } else if (isWhitespace(c)) {
	            // wait for it...
	          } else if (isMatch(nameStart, c)) {
	            parser.state = S.OPEN_TAG
	            parser.tagName = c
	          } else if (c === '/') {
	            parser.state = S.CLOSE_TAG
	            parser.tagName = ''
	          } else if (c === '?') {
	            parser.state = S.PROC_INST
	            parser.procInstName = parser.procInstBody = ''
	          } else {
	            strictFail(parser, 'Unencoded <')
	            // if there was some whitespace, then add that in.
	            if (parser.startTagPosition + 1 < parser.position) {
	              var pad = parser.position - parser.startTagPosition
	              c = new Array(pad).join(' ') + c
	            }
	            parser.textNode += '<' + c
	            parser.state = S.TEXT
	          }
	          continue
	
	        case S.SGML_DECL:
	          if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
	            emitNode(parser, 'onopencdata')
	            parser.state = S.CDATA
	            parser.sgmlDecl = ''
	            parser.cdata = ''
	          } else if (parser.sgmlDecl + c === '--') {
	            parser.state = S.COMMENT
	            parser.comment = ''
	            parser.sgmlDecl = ''
	          } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
	            parser.state = S.DOCTYPE
	            if (parser.doctype || parser.sawRoot) {
	              strictFail(parser,
	                'Inappropriately located doctype declaration')
	            }
	            parser.doctype = ''
	            parser.sgmlDecl = ''
	          } else if (c === '>') {
	            emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl)
	            parser.sgmlDecl = ''
	            parser.state = S.TEXT
	          } else if (isQuote(c)) {
	            parser.state = S.SGML_DECL_QUOTED
	            parser.sgmlDecl += c
	          } else {
	            parser.sgmlDecl += c
	          }
	          continue
	
	        case S.SGML_DECL_QUOTED:
	          if (c === parser.q) {
	            parser.state = S.SGML_DECL
	            parser.q = ''
	          }
	          parser.sgmlDecl += c
	          continue
	
	        case S.DOCTYPE:
	          if (c === '>') {
	            parser.state = S.TEXT
	            emitNode(parser, 'ondoctype', parser.doctype)
	            parser.doctype = true // just remember that we saw it.
	          } else {
	            parser.doctype += c
	            if (c === '[') {
	              parser.state = S.DOCTYPE_DTD
	            } else if (isQuote(c)) {
	              parser.state = S.DOCTYPE_QUOTED
	              parser.q = c
	            }
	          }
	          continue
	
	        case S.DOCTYPE_QUOTED:
	          parser.doctype += c
	          if (c === parser.q) {
	            parser.q = ''
	            parser.state = S.DOCTYPE
	          }
	          continue
	
	        case S.DOCTYPE_DTD:
	          parser.doctype += c
	          if (c === ']') {
	            parser.state = S.DOCTYPE
	          } else if (isQuote(c)) {
	            parser.state = S.DOCTYPE_DTD_QUOTED
	            parser.q = c
	          }
	          continue
	
	        case S.DOCTYPE_DTD_QUOTED:
	          parser.doctype += c
	          if (c === parser.q) {
	            parser.state = S.DOCTYPE_DTD
	            parser.q = ''
	          }
	          continue
	
	        case S.COMMENT:
	          if (c === '-') {
	            parser.state = S.COMMENT_ENDING
	          } else {
	            parser.comment += c
	          }
	          continue
	
	        case S.COMMENT_ENDING:
	          if (c === '-') {
	            parser.state = S.COMMENT_ENDED
	            parser.comment = textopts(parser.opt, parser.comment)
	            if (parser.comment) {
	              emitNode(parser, 'oncomment', parser.comment)
	            }
	            parser.comment = ''
	          } else {
	            parser.comment += '-' + c
	            parser.state = S.COMMENT
	          }
	          continue
	
	        case S.COMMENT_ENDED:
	          if (c !== '>') {
	            strictFail(parser, 'Malformed comment')
	            // allow <!-- blah -- bloo --> in non-strict mode,
	            // which is a comment of " blah -- bloo "
	            parser.comment += '--' + c
	            parser.state = S.COMMENT
	          } else {
	            parser.state = S.TEXT
	          }
	          continue
	
	        case S.CDATA:
	          if (c === ']') {
	            parser.state = S.CDATA_ENDING
	          } else {
	            parser.cdata += c
	          }
	          continue
	
	        case S.CDATA_ENDING:
	          if (c === ']') {
	            parser.state = S.CDATA_ENDING_2
	          } else {
	            parser.cdata += ']' + c
	            parser.state = S.CDATA
	          }
	          continue
	
	        case S.CDATA_ENDING_2:
	          if (c === '>') {
	            if (parser.cdata) {
	              emitNode(parser, 'oncdata', parser.cdata)
	            }
	            emitNode(parser, 'onclosecdata')
	            parser.cdata = ''
	            parser.state = S.TEXT
	          } else if (c === ']') {
	            parser.cdata += ']'
	          } else {
	            parser.cdata += ']]' + c
	            parser.state = S.CDATA
	          }
	          continue
	
	        case S.PROC_INST:
	          if (c === '?') {
	            parser.state = S.PROC_INST_ENDING
	          } else if (isWhitespace(c)) {
	            parser.state = S.PROC_INST_BODY
	          } else {
	            parser.procInstName += c
	          }
	          continue
	
	        case S.PROC_INST_BODY:
	          if (!parser.procInstBody && isWhitespace(c)) {
	            continue
	          } else if (c === '?') {
	            parser.state = S.PROC_INST_ENDING
	          } else {
	            parser.procInstBody += c
	          }
	          continue
	
	        case S.PROC_INST_ENDING:
	          if (c === '>') {
	            emitNode(parser, 'onprocessinginstruction', {
	              name: parser.procInstName,
	              body: parser.procInstBody
	            })
	            parser.procInstName = parser.procInstBody = ''
	            parser.state = S.TEXT
	          } else {
	            parser.procInstBody += '?' + c
	            parser.state = S.PROC_INST_BODY
	          }
	          continue
	
	        case S.OPEN_TAG:
	          if (isMatch(nameBody, c)) {
	            parser.tagName += c
	          } else {
	            newTag(parser)
	            if (c === '>') {
	              openTag(parser)
	            } else if (c === '/') {
	              parser.state = S.OPEN_TAG_SLASH
	            } else {
	              if (!isWhitespace(c)) {
	                strictFail(parser, 'Invalid character in tag name')
	              }
	              parser.state = S.ATTRIB
	            }
	          }
	          continue
	
	        case S.OPEN_TAG_SLASH:
	          if (c === '>') {
	            openTag(parser, true)
	            closeTag(parser)
	          } else {
	            strictFail(parser, 'Forward-slash in opening tag not followed by >')
	            parser.state = S.ATTRIB
	          }
	          continue
	
	        case S.ATTRIB:
	          // haven't read the attribute name yet.
	          if (isWhitespace(c)) {
	            continue
	          } else if (c === '>') {
	            openTag(parser)
	          } else if (c === '/') {
	            parser.state = S.OPEN_TAG_SLASH
	          } else if (isMatch(nameStart, c)) {
	            parser.attribName = c
	            parser.attribValue = ''
	            parser.state = S.ATTRIB_NAME
	          } else {
	            strictFail(parser, 'Invalid attribute name')
	          }
	          continue
	
	        case S.ATTRIB_NAME:
	          if (c === '=') {
	            parser.state = S.ATTRIB_VALUE
	          } else if (c === '>') {
	            strictFail(parser, 'Attribute without value')
	            parser.attribValue = parser.attribName
	            attrib(parser)
	            openTag(parser)
	          } else if (isWhitespace(c)) {
	            parser.state = S.ATTRIB_NAME_SAW_WHITE
	          } else if (isMatch(nameBody, c)) {
	            parser.attribName += c
	          } else {
	            strictFail(parser, 'Invalid attribute name')
	          }
	          continue
	
	        case S.ATTRIB_NAME_SAW_WHITE:
	          if (c === '=') {
	            parser.state = S.ATTRIB_VALUE
	          } else if (isWhitespace(c)) {
	            continue
	          } else {
	            strictFail(parser, 'Attribute without value')
	            parser.tag.attributes[parser.attribName] = ''
	            parser.attribValue = ''
	            emitNode(parser, 'onattribute', {
	              name: parser.attribName,
	              value: ''
	            })
	            parser.attribName = ''
	            if (c === '>') {
	              openTag(parser)
	            } else if (isMatch(nameStart, c)) {
	              parser.attribName = c
	              parser.state = S.ATTRIB_NAME
	            } else {
	              strictFail(parser, 'Invalid attribute name')
	              parser.state = S.ATTRIB
	            }
	          }
	          continue
	
	        case S.ATTRIB_VALUE:
	          if (isWhitespace(c)) {
	            continue
	          } else if (isQuote(c)) {
	            parser.q = c
	            parser.state = S.ATTRIB_VALUE_QUOTED
	          } else {
	            strictFail(parser, 'Unquoted attribute value')
	            parser.state = S.ATTRIB_VALUE_UNQUOTED
	            parser.attribValue = c
	          }
	          continue
	
	        case S.ATTRIB_VALUE_QUOTED:
	          if (c !== parser.q) {
	            if (c === '&') {
	              parser.state = S.ATTRIB_VALUE_ENTITY_Q
	            } else {
	              parser.attribValue += c
	            }
	            continue
	          }
	          attrib(parser)
	          parser.q = ''
	          parser.state = S.ATTRIB_VALUE_CLOSED
	          continue
	
	        case S.ATTRIB_VALUE_CLOSED:
	          if (isWhitespace(c)) {
	            parser.state = S.ATTRIB
	          } else if (c === '>') {
	            openTag(parser)
	          } else if (c === '/') {
	            parser.state = S.OPEN_TAG_SLASH
	          } else if (isMatch(nameStart, c)) {
	            strictFail(parser, 'No whitespace between attributes')
	            parser.attribName = c
	            parser.attribValue = ''
	            parser.state = S.ATTRIB_NAME
	          } else {
	            strictFail(parser, 'Invalid attribute name')
	          }
	          continue
	
	        case S.ATTRIB_VALUE_UNQUOTED:
	          if (!isAttribEnd(c)) {
	            if (c === '&') {
	              parser.state = S.ATTRIB_VALUE_ENTITY_U
	            } else {
	              parser.attribValue += c
	            }
	            continue
	          }
	          attrib(parser)
	          if (c === '>') {
	            openTag(parser)
	          } else {
	            parser.state = S.ATTRIB
	          }
	          continue
	
	        case S.CLOSE_TAG:
	          if (!parser.tagName) {
	            if (isWhitespace(c)) {
	              continue
	            } else if (notMatch(nameStart, c)) {
	              if (parser.script) {
	                parser.script += '</' + c
	                parser.state = S.SCRIPT
	              } else {
	                strictFail(parser, 'Invalid tagname in closing tag.')
	              }
	            } else {
	              parser.tagName = c
	            }
	          } else if (c === '>') {
	            closeTag(parser)
	          } else if (isMatch(nameBody, c)) {
	            parser.tagName += c
	          } else if (parser.script) {
	            parser.script += '</' + parser.tagName
	            parser.tagName = ''
	            parser.state = S.SCRIPT
	          } else {
	            if (!isWhitespace(c)) {
	              strictFail(parser, 'Invalid tagname in closing tag')
	            }
	            parser.state = S.CLOSE_TAG_SAW_WHITE
	          }
	          continue
	
	        case S.CLOSE_TAG_SAW_WHITE:
	          if (isWhitespace(c)) {
	            continue
	          }
	          if (c === '>') {
	            closeTag(parser)
	          } else {
	            strictFail(parser, 'Invalid characters in closing tag')
	          }
	          continue
	
	        case S.TEXT_ENTITY:
	        case S.ATTRIB_VALUE_ENTITY_Q:
	        case S.ATTRIB_VALUE_ENTITY_U:
	          var returnState
	          var buffer
	          switch (parser.state) {
	            case S.TEXT_ENTITY:
	              returnState = S.TEXT
	              buffer = 'textNode'
	              break
	
	            case S.ATTRIB_VALUE_ENTITY_Q:
	              returnState = S.ATTRIB_VALUE_QUOTED
	              buffer = 'attribValue'
	              break
	
	            case S.ATTRIB_VALUE_ENTITY_U:
	              returnState = S.ATTRIB_VALUE_UNQUOTED
	              buffer = 'attribValue'
	              break
	          }
	
	          if (c === ';') {
	            parser[buffer] += parseEntity(parser)
	            parser.entity = ''
	            parser.state = returnState
	          } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
	            parser.entity += c
	          } else {
	            strictFail(parser, 'Invalid character in entity name')
	            parser[buffer] += '&' + parser.entity + c
	            parser.entity = ''
	            parser.state = returnState
	          }
	
	          continue
	
	        default:
	          throw new Error(parser, 'Unknown state: ' + parser.state)
	      }
	    } // while
	
	    if (parser.position >= parser.bufferCheckPosition) {
	      checkBufferLength(parser)
	    }
	    return parser
	  }
	
	  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
	  /* istanbul ignore next */
	  if (!String.fromCodePoint) {
	    (function () {
	      var stringFromCharCode = String.fromCharCode
	      var floor = Math.floor
	      var fromCodePoint = function () {
	        var MAX_SIZE = 0x4000
	        var codeUnits = []
	        var highSurrogate
	        var lowSurrogate
	        var index = -1
	        var length = arguments.length
	        if (!length) {
	          return ''
	        }
	        var result = ''
	        while (++index < length) {
	          var codePoint = Number(arguments[index])
	          if (
	            !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
	            codePoint < 0 || // not a valid Unicode code point
	            codePoint > 0x10FFFF || // not a valid Unicode code point
	            floor(codePoint) !== codePoint // not an integer
	          ) {
	            throw RangeError('Invalid code point: ' + codePoint)
	          }
	          if (codePoint <= 0xFFFF) { // BMP code point
	            codeUnits.push(codePoint)
	          } else { // Astral code point; split in surrogate halves
	            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	            codePoint -= 0x10000
	            highSurrogate = (codePoint >> 10) + 0xD800
	            lowSurrogate = (codePoint % 0x400) + 0xDC00
	            codeUnits.push(highSurrogate, lowSurrogate)
	          }
	          if (index + 1 === length || codeUnits.length > MAX_SIZE) {
	            result += stringFromCharCode.apply(null, codeUnits)
	            codeUnits.length = 0
	          }
	        }
	        return result
	      }
	      /* istanbul ignore next */
	      if (Object.defineProperty) {
	        Object.defineProperty(String, 'fromCodePoint', {
	          value: fromCodePoint,
	          configurable: true,
	          writable: true
	        })
	      } else {
	        String.fromCodePoint = fromCodePoint
	      }
	    }())
	  }
	})( false ? this.sax = {} : exports)


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = require("stream");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = require("string_decoder");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = require("events");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let errorTypes = __webpack_require__(21).errorTypes;
	
	function errorMaker(type) {
	  return function (message) {
	    let err = new Error(message || '');
	
	    err.type = err.name = type;
	    return err;
	  };
	}
	
	module.exports = {
	  AuthenticationError: errorMaker(errorTypes.authenticationError),
	  AuthorizationError: errorMaker(errorTypes.authorizationError),
	  DownForMaintenanceError: errorMaker(errorTypes.downForMaintenanceError),
	  InvalidSignatureError: errorMaker(errorTypes.invalidSignatureError),
	  InvalidChallengeError: errorMaker(errorTypes.invalidChallengeError),
	  InvalidTransparentRedirectHashError: errorMaker(errorTypes.invalidTransparentRedirectHashError),
	  NotFoundError: errorMaker(errorTypes.notFoundError),
	  ServerError: errorMaker(errorTypes.serverError),
	  TestOperationPerformedInProductionError: errorMaker(errorTypes.testOperationPerformedInProductionError),
	  TooManyRequestsError: errorMaker(errorTypes.tooManyRequestsError),
	  UnexpectedError: errorMaker(errorTypes.unexpectedError),
	  InvalidKeysError: errorMaker(errorTypes.invalidKeysError),
	  UpgradeRequired: errorMaker(errorTypes.upgradeRequired)
	};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	const errorTypes = {
	  authenticationError: 'authenticationError',
	  authorizationError: 'authorizationError',
	  downForMaintenanceError: 'downForMaintenanceError',
	  invalidSignatureError: 'invalidSignatureError',
	  invalidChallengeError: 'invalidChallengeError',
	  invalidTransparentRedirectHashError: 'invalidTransparentRedirectHashError',
	  notFoundError: 'notFoundError',
	  serverError: 'serverError',
	  testOperationPerformedInProductionError: 'testOperationPerformedInProductionError',
	  tooManyRequestsError: 'tooManyRequestsError',
	  unexpectedError: 'unexpectedError',
	  invalidKeysError: 'invalidKeysError',
	  upgradeRequired: 'upgradeRequired'
	};
	
	module.exports = {
	  errorTypes: errorTypes
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let semver = __webpack_require__(23);
	let exceptions = __webpack_require__(20);
	
	class Util {
	  static convertObjectKeysToUnderscores(obj) {
	    let newObj = {};
	
	    for (let key in obj) {
	      if (!obj.hasOwnProperty(key)) {
	        continue;
	      }
	      let value = obj[key];
	      let newKey = Util.toUnderscore(key);
	
	      if (value instanceof Array) {
	        newObj[newKey] =
	          value.map((item) => typeof item === 'object' ? Util.convertObjectKeysToUnderscores(item) : item)
	        ;
	      } else if (typeof value === 'object') {
	        if (value instanceof Date || value === null) {
	          newObj[newKey] = value;
	        } else {
	          newObj[newKey] = Util.convertObjectKeysToUnderscores(value);
	        }
	      } else {
	        newObj[newKey] = value;
	      }
	    }
	    return newObj;
	  }
	
	  static convertNodeToObject(obj) {
	    if (typeof obj === 'object' && obj['@']) {
	      if (obj['@'].type === 'array') {
	        let newArray = [];
	
	        for (let key in obj) {
	          if (!obj.hasOwnProperty(key)) {
	            continue;
	          }
	          let value = obj[key];
	
	          if (key !== '@') {
	            if (value instanceof Array) {
	              for (let item of value) {
	                newArray.push(this.convertNodeToObject(item));
	              }
	            } else {
	              newArray.push(this.convertNodeToObject(value));
	            }
	          }
	        }
	        return newArray;
	      } else if (obj['@'].type === 'collection') {
	        let newObj = {};
	
	        for (let key in obj) {
	          if (!obj.hasOwnProperty(key)) {
	            continue;
	          }
	          let value = obj[key];
	
	          if (key !== '@') {
	            newObj[this.toCamelCase(key)] = this.convertNodeToObject(value);
	          }
	        }
	        return newObj;
	      } else if (obj['@'].nil === 'true') {
	        return null;
	      } else if (obj['@'].type === 'integer') {
	        return parseInt(obj['#'], 10);
	      } else if (obj['@'].type === 'boolean') {
	        return obj['#'] === 'true';
	      }
	
	      return obj['#'];
	    } else if (obj instanceof Array) {
	      return obj.map((item) => this.convertNodeToObject(item));
	    } else if (typeof obj === 'object' && this.objectIsEmpty(obj)) {
	      return '';
	    } else if (typeof obj === 'object') {
	      let newObj = {};
	
	      for (let key in obj) {
	        if (!obj.hasOwnProperty(key)) {
	          continue;
	        }
	        let value = obj[key];
	
	        newObj[this.toCamelCase(key)] = this.convertNodeToObject(value);
	      }
	      return newObj;
	    }
	
	    return obj;
	  }
	
	  static objectIsEmpty(obj) {
	    for (let key in obj) { // eslint-disable-line no-unused-vars
	      if (!obj.hasOwnProperty(key)) {
	        continue;
	      }
	      return false;
	    }
	    return true;
	  }
	
	  static arrayIsEmpty(array) {
	    if (!(array instanceof Array)) { return false; }
	    if (array.length > 0) { return false; }
	    return true;
	  }
	
	  static toCamelCase(string) {
	    return string.replace(/([\-\_][a-z0-9])/g, match => match.toUpperCase().replace('-', '').replace('_', ''));
	  }
	
	  static toUnderscore(string) {
	    return string.replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
	  }
	
	  static flatten(array) {
	    while (this._containsArray(array)) {
	      array = array.reduce((first, rest) => {
	        first = first instanceof Array ? first : [first];
	        rest = rest instanceof Array ? this.flatten(rest) : rest;
	        return first.concat(rest);
	      }
	      );
	    }
	    return array;
	  }
	
	  static merge(obj1, obj2) {
	    for (let key in obj2) {
	      if (!obj2.hasOwnProperty(key)) {
	        continue;
	      }
	      let value = obj2[key];
	
	      obj1[key] = value;
	    }
	    return obj1;
	  }
	
	  static without(array1, array2) {
	    let newArray = [];
	
	    for (let value of array1) {
	      if (!this._containsValue(array2, value)) { newArray.push(value); }
	    }
	    return newArray;
	  }
	
	  static supportsStreams2() {
	    return semver.satisfies(process.version, '>=0.10');
	  }
	
	  static flattenKeys(obj, prefix) {
	    let keys = [];
	
	    for (let key in obj) {
	      if (!obj.hasOwnProperty(key)) {
	        continue;
	      }
	
	      let value = obj[key];
	
	      if (typeof value === 'object') {
	        let keyToPush = null;
	
	        if (this.isNumeric(key)) {
	          keyToPush = prefix ? prefix : key;
	        } else {
	          keyToPush = prefix ? prefix + '[' + key + ']' : key;
	        }
	
	        keys.push(Util.flattenKeys(value, keyToPush));
	      } else if (prefix) {
	        keys.push(prefix + '[' + key + ']');
	      } else {
	        keys.push(key);
	      }
	    }
	
	    return this.flatten(keys);
	  }
	
	  static isNumeric(value) {
	    return !isNaN(value);
	  }
	
	  static verifyKeys(keys, obj) { // eslint-disable-line consistent-return
	    let invalidKeys;
	    let unrecognizedKeys = this.without(this.flattenKeys(obj), keys.valid);
	
	    if (keys.ignore) {
	      invalidKeys = unrecognizedKeys.filter(function (key) {
	        for (let ignoredKey of keys.ignore) {
	          if (key.indexOf(ignoredKey) === 0) { return false; }
	        }
	        return true;
	      });
	    } else {
	      invalidKeys = unrecognizedKeys;
	    }
	
	    if (invalidKeys.length > 0) {
	      return exceptions.InvalidKeysError(`These keys are invalid: ${invalidKeys.join(', ')}`); // eslint-disable-line new-cap
	    }
	  }
	
	  static _containsValue(array, element) {
	    return array.indexOf(element) !== -1;
	  }
	
	  static _containsArray(array) {
	    for (let element of array) {
	      if (element instanceof Array) {
	        return true;
	      }
	    }
	
	    return false;
	  }
	}
	
	module.exports = {Util: Util};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = SemVer;
	
	// The debug function is excluded entirely from the minified version.
	/* nomin */ var debug;
	/* nomin */ if (typeof process === 'object' &&
	    /* nomin */ ({"CONTENTFUL_SPACE_ID":"x77ncy6osjfp","CONTENTFUL_ACCESS_TOKEN":"6fdf96f860ab5e01bc6fbc7d4c87910dfc1059a54b6455d59b31114faee94ab0","PWINTY_API_KEY":"b3e6f775-062a-49ed-acce-9c634480bbbc","PWINTY_MERCHANT_ID":"1e06e880-1240-4139-b28c-81bcb1841b8a","PAYPAL_CLIENT_ID":"AQ3q-OOyuIvoAC05hzthboEgalHqO9ApAE0D5Uu4SK_1zE2m0SHhZlgu5FsgQloXdmXWCki6gC_AiLFU","PAYPAL_SECRET":"EEK-yx_IW_LQ4V2SXqMf1WiK7abUEHLKMMrtVqY9tq6355cSrGYPVmWxxn_ZBWp5EpPL9O88zaYb2kki","BRAINTREE_TOKEN":"access_token$sandbox$x7fp5c9rgnw64c66$2666d074b17b95079c17671344450a9c","NODE_ENV":"development","PUBLIC_DIR":"/Users/justanotherdavemartin/Projects/photography/public"}) &&
	    /* nomin */ ({"CONTENTFUL_SPACE_ID":"x77ncy6osjfp","CONTENTFUL_ACCESS_TOKEN":"6fdf96f860ab5e01bc6fbc7d4c87910dfc1059a54b6455d59b31114faee94ab0","PWINTY_API_KEY":"b3e6f775-062a-49ed-acce-9c634480bbbc","PWINTY_MERCHANT_ID":"1e06e880-1240-4139-b28c-81bcb1841b8a","PAYPAL_CLIENT_ID":"AQ3q-OOyuIvoAC05hzthboEgalHqO9ApAE0D5Uu4SK_1zE2m0SHhZlgu5FsgQloXdmXWCki6gC_AiLFU","PAYPAL_SECRET":"EEK-yx_IW_LQ4V2SXqMf1WiK7abUEHLKMMrtVqY9tq6355cSrGYPVmWxxn_ZBWp5EpPL9O88zaYb2kki","BRAINTREE_TOKEN":"access_token$sandbox$x7fp5c9rgnw64c66$2666d074b17b95079c17671344450a9c","NODE_ENV":"development","PUBLIC_DIR":"/Users/justanotherdavemartin/Projects/photography/public"}).NODE_DEBUG &&
	    /* nomin */ /\bsemver\b/i.test(({"CONTENTFUL_SPACE_ID":"x77ncy6osjfp","CONTENTFUL_ACCESS_TOKEN":"6fdf96f860ab5e01bc6fbc7d4c87910dfc1059a54b6455d59b31114faee94ab0","PWINTY_API_KEY":"b3e6f775-062a-49ed-acce-9c634480bbbc","PWINTY_MERCHANT_ID":"1e06e880-1240-4139-b28c-81bcb1841b8a","PAYPAL_CLIENT_ID":"AQ3q-OOyuIvoAC05hzthboEgalHqO9ApAE0D5Uu4SK_1zE2m0SHhZlgu5FsgQloXdmXWCki6gC_AiLFU","PAYPAL_SECRET":"EEK-yx_IW_LQ4V2SXqMf1WiK7abUEHLKMMrtVqY9tq6355cSrGYPVmWxxn_ZBWp5EpPL9O88zaYb2kki","BRAINTREE_TOKEN":"access_token$sandbox$x7fp5c9rgnw64c66$2666d074b17b95079c17671344450a9c","NODE_ENV":"development","PUBLIC_DIR":"/Users/justanotherdavemartin/Projects/photography/public"}).NODE_DEBUG))
	  /* nomin */ debug = function() {
	    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
	    /* nomin */ args.unshift('SEMVER');
	    /* nomin */ console.log.apply(console, args);
	    /* nomin */ };
	/* nomin */ else
	  /* nomin */ debug = function() {};
	
	// Note: this is the semver.org version of the spec that it implements
	// Not necessarily the package version of this code.
	exports.SEMVER_SPEC_VERSION = '2.0.0';
	
	var MAX_LENGTH = 256;
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
	
	// Max safe segment length for coercion.
	var MAX_SAFE_COMPONENT_LENGTH = 16;
	
	// The actual regexps go on exports.re
	var re = exports.re = [];
	var src = exports.src = [];
	var R = 0;
	
	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.
	
	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.
	
	var NUMERICIDENTIFIER = R++;
	src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
	var NUMERICIDENTIFIERLOOSE = R++;
	src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';
	
	
	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.
	
	var NONNUMERICIDENTIFIER = R++;
	src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
	
	
	// ## Main Version
	// Three dot-separated numeric identifiers.
	
	var MAINVERSION = R++;
	src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
	                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
	                   '(' + src[NUMERICIDENTIFIER] + ')';
	
	var MAINVERSIONLOOSE = R++;
	src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
	                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
	                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';
	
	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.
	
	var PRERELEASEIDENTIFIER = R++;
	src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
	                            '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	var PRERELEASEIDENTIFIERLOOSE = R++;
	src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
	                                 '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	
	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.
	
	var PRERELEASE = R++;
	src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
	                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';
	
	var PRERELEASELOOSE = R++;
	src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
	                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';
	
	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.
	
	var BUILDIDENTIFIER = R++;
	src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';
	
	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.
	
	var BUILD = R++;
	src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
	             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';
	
	
	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.
	
	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.
	
	var FULL = R++;
	var FULLPLAIN = 'v?' + src[MAINVERSION] +
	                src[PRERELEASE] + '?' +
	                src[BUILD] + '?';
	
	src[FULL] = '^' + FULLPLAIN + '$';
	
	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
	var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
	                 src[PRERELEASELOOSE] + '?' +
	                 src[BUILD] + '?';
	
	var LOOSE = R++;
	src[LOOSE] = '^' + LOOSEPLAIN + '$';
	
	var GTLT = R++;
	src[GTLT] = '((?:<|>)?=?)';
	
	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
	var XRANGEIDENTIFIERLOOSE = R++;
	src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
	var XRANGEIDENTIFIER = R++;
	src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';
	
	var XRANGEPLAIN = R++;
	src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:' + src[PRERELEASE] + ')?' +
	                   src[BUILD] + '?' +
	                   ')?)?';
	
	var XRANGEPLAINLOOSE = R++;
	src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:' + src[PRERELEASELOOSE] + ')?' +
	                        src[BUILD] + '?' +
	                        ')?)?';
	
	var XRANGE = R++;
	src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
	var XRANGELOOSE = R++;
	src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';
	
	// Coercion.
	// Extract anything that could conceivably be a part of a valid semver
	var COERCE = R++;
	src[COERCE] = '(?:^|[^\\d])' +
	              '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' +
	              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
	              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
	              '(?:$|[^\\d])';
	
	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
	var LONETILDE = R++;
	src[LONETILDE] = '(?:~>?)';
	
	var TILDETRIM = R++;
	src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
	re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
	var tildeTrimReplace = '$1~';
	
	var TILDE = R++;
	src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
	var TILDELOOSE = R++;
	src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';
	
	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
	var LONECARET = R++;
	src[LONECARET] = '(?:\\^)';
	
	var CARETTRIM = R++;
	src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
	re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
	var caretTrimReplace = '$1^';
	
	var CARET = R++;
	src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
	var CARETLOOSE = R++;
	src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';
	
	// A simple gt/lt/eq thing, or just "" to indicate "any version"
	var COMPARATORLOOSE = R++;
	src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
	var COMPARATOR = R++;
	src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';
	
	
	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
	var COMPARATORTRIM = R++;
	src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
	                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';
	
	// this one has to use the /g flag
	re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
	var comparatorTrimReplace = '$1$2$3';
	
	
	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
	var HYPHENRANGE = R++;
	src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
	                   '\\s+-\\s+' +
	                   '(' + src[XRANGEPLAIN] + ')' +
	                   '\\s*$';
	
	var HYPHENRANGELOOSE = R++;
	src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
	                        '\\s+-\\s+' +
	                        '(' + src[XRANGEPLAINLOOSE] + ')' +
	                        '\\s*$';
	
	// Star ranges basically just allow anything at all.
	var STAR = R++;
	src[STAR] = '(<|>)?=?\\s*\\*';
	
	// Compile to actual regexp objects.
	// All are flag-free, unless they were created above with a flag.
	for (var i = 0; i < R; i++) {
	  debug(i, src[i]);
	  if (!re[i])
	    re[i] = new RegExp(src[i]);
	}
	
	exports.parse = parse;
	function parse(version, loose) {
	  if (version instanceof SemVer)
	    return version;
	
	  if (typeof version !== 'string')
	    return null;
	
	  if (version.length > MAX_LENGTH)
	    return null;
	
	  var r = loose ? re[LOOSE] : re[FULL];
	  if (!r.test(version))
	    return null;
	
	  try {
	    return new SemVer(version, loose);
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.valid = valid;
	function valid(version, loose) {
	  var v = parse(version, loose);
	  return v ? v.version : null;
	}
	
	
	exports.clean = clean;
	function clean(version, loose) {
	  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
	  return s ? s.version : null;
	}
	
	exports.SemVer = SemVer;
	
	function SemVer(version, loose) {
	  if (version instanceof SemVer) {
	    if (version.loose === loose)
	      return version;
	    else
	      version = version.version;
	  } else if (typeof version !== 'string') {
	    throw new TypeError('Invalid Version: ' + version);
	  }
	
	  if (version.length > MAX_LENGTH)
	    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')
	
	  if (!(this instanceof SemVer))
	    return new SemVer(version, loose);
	
	  debug('SemVer', version, loose);
	  this.loose = loose;
	  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);
	
	  if (!m)
	    throw new TypeError('Invalid Version: ' + version);
	
	  this.raw = version;
	
	  // these are actually numbers
	  this.major = +m[1];
	  this.minor = +m[2];
	  this.patch = +m[3];
	
	  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
	    throw new TypeError('Invalid major version')
	
	  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
	    throw new TypeError('Invalid minor version')
	
	  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
	    throw new TypeError('Invalid patch version')
	
	  // numberify any prerelease numeric ids
	  if (!m[4])
	    this.prerelease = [];
	  else
	    this.prerelease = m[4].split('.').map(function(id) {
	      if (/^[0-9]+$/.test(id)) {
	        var num = +id;
	        if (num >= 0 && num < MAX_SAFE_INTEGER)
	          return num;
	      }
	      return id;
	    });
	
	  this.build = m[5] ? m[5].split('.') : [];
	  this.format();
	}
	
	SemVer.prototype.format = function() {
	  this.version = this.major + '.' + this.minor + '.' + this.patch;
	  if (this.prerelease.length)
	    this.version += '-' + this.prerelease.join('.');
	  return this.version;
	};
	
	SemVer.prototype.toString = function() {
	  return this.version;
	};
	
	SemVer.prototype.compare = function(other) {
	  debug('SemVer.compare', this.version, this.loose, other);
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);
	
	  return this.compareMain(other) || this.comparePre(other);
	};
	
	SemVer.prototype.compareMain = function(other) {
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);
	
	  return compareIdentifiers(this.major, other.major) ||
	         compareIdentifiers(this.minor, other.minor) ||
	         compareIdentifiers(this.patch, other.patch);
	};
	
	SemVer.prototype.comparePre = function(other) {
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);
	
	  // NOT having a prerelease is > having one
	  if (this.prerelease.length && !other.prerelease.length)
	    return -1;
	  else if (!this.prerelease.length && other.prerelease.length)
	    return 1;
	  else if (!this.prerelease.length && !other.prerelease.length)
	    return 0;
	
	  var i = 0;
	  do {
	    var a = this.prerelease[i];
	    var b = other.prerelease[i];
	    debug('prerelease compare', i, a, b);
	    if (a === undefined && b === undefined)
	      return 0;
	    else if (b === undefined)
	      return 1;
	    else if (a === undefined)
	      return -1;
	    else if (a === b)
	      continue;
	    else
	      return compareIdentifiers(a, b);
	  } while (++i);
	};
	
	// preminor will bump the version up to the next minor release, and immediately
	// down to pre-release. premajor and prepatch work the same way.
	SemVer.prototype.inc = function(release, identifier) {
	  switch (release) {
	    case 'premajor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor = 0;
	      this.major++;
	      this.inc('pre', identifier);
	      break;
	    case 'preminor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor++;
	      this.inc('pre', identifier);
	      break;
	    case 'prepatch':
	      // If this is already a prerelease, it will bump to the next version
	      // drop any prereleases that might already exist, since they are not
	      // relevant at this point.
	      this.prerelease.length = 0;
	      this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	    // If the input is a non-prerelease version, this acts the same as
	    // prepatch.
	    case 'prerelease':
	      if (this.prerelease.length === 0)
	        this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	
	    case 'major':
	      // If this is a pre-major version, bump up to the same major version.
	      // Otherwise increment major.
	      // 1.0.0-5 bumps to 1.0.0
	      // 1.1.0 bumps to 2.0.0
	      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
	        this.major++;
	      this.minor = 0;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'minor':
	      // If this is a pre-minor version, bump up to the same minor version.
	      // Otherwise increment minor.
	      // 1.2.0-5 bumps to 1.2.0
	      // 1.2.1 bumps to 1.3.0
	      if (this.patch !== 0 || this.prerelease.length === 0)
	        this.minor++;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'patch':
	      // If this is not a pre-release version, it will increment the patch.
	      // If it is a pre-release it will bump up to the same patch version.
	      // 1.2.0-5 patches to 1.2.0
	      // 1.2.0 patches to 1.2.1
	      if (this.prerelease.length === 0)
	        this.patch++;
	      this.prerelease = [];
	      break;
	    // This probably shouldn't be used publicly.
	    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
	    case 'pre':
	      if (this.prerelease.length === 0)
	        this.prerelease = [0];
	      else {
	        var i = this.prerelease.length;
	        while (--i >= 0) {
	          if (typeof this.prerelease[i] === 'number') {
	            this.prerelease[i]++;
	            i = -2;
	          }
	        }
	        if (i === -1) // didn't increment anything
	          this.prerelease.push(0);
	      }
	      if (identifier) {
	        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
	        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
	        if (this.prerelease[0] === identifier) {
	          if (isNaN(this.prerelease[1]))
	            this.prerelease = [identifier, 0];
	        } else
	          this.prerelease = [identifier, 0];
	      }
	      break;
	
	    default:
	      throw new Error('invalid increment argument: ' + release);
	  }
	  this.format();
	  this.raw = this.version;
	  return this;
	};
	
	exports.inc = inc;
	function inc(version, release, loose, identifier) {
	  if (typeof(loose) === 'string') {
	    identifier = loose;
	    loose = undefined;
	  }
	
	  try {
	    return new SemVer(version, loose).inc(release, identifier).version;
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.diff = diff;
	function diff(version1, version2) {
	  if (eq(version1, version2)) {
	    return null;
	  } else {
	    var v1 = parse(version1);
	    var v2 = parse(version2);
	    if (v1.prerelease.length || v2.prerelease.length) {
	      for (var key in v1) {
	        if (key === 'major' || key === 'minor' || key === 'patch') {
	          if (v1[key] !== v2[key]) {
	            return 'pre'+key;
	          }
	        }
	      }
	      return 'prerelease';
	    }
	    for (var key in v1) {
	      if (key === 'major' || key === 'minor' || key === 'patch') {
	        if (v1[key] !== v2[key]) {
	          return key;
	        }
	      }
	    }
	  }
	}
	
	exports.compareIdentifiers = compareIdentifiers;
	
	var numeric = /^[0-9]+$/;
	function compareIdentifiers(a, b) {
	  var anum = numeric.test(a);
	  var bnum = numeric.test(b);
	
	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }
	
	  return (anum && !bnum) ? -1 :
	         (bnum && !anum) ? 1 :
	         a < b ? -1 :
	         a > b ? 1 :
	         0;
	}
	
	exports.rcompareIdentifiers = rcompareIdentifiers;
	function rcompareIdentifiers(a, b) {
	  return compareIdentifiers(b, a);
	}
	
	exports.major = major;
	function major(a, loose) {
	  return new SemVer(a, loose).major;
	}
	
	exports.minor = minor;
	function minor(a, loose) {
	  return new SemVer(a, loose).minor;
	}
	
	exports.patch = patch;
	function patch(a, loose) {
	  return new SemVer(a, loose).patch;
	}
	
	exports.compare = compare;
	function compare(a, b, loose) {
	  return new SemVer(a, loose).compare(new SemVer(b, loose));
	}
	
	exports.compareLoose = compareLoose;
	function compareLoose(a, b) {
	  return compare(a, b, true);
	}
	
	exports.rcompare = rcompare;
	function rcompare(a, b, loose) {
	  return compare(b, a, loose);
	}
	
	exports.sort = sort;
	function sort(list, loose) {
	  return list.sort(function(a, b) {
	    return exports.compare(a, b, loose);
	  });
	}
	
	exports.rsort = rsort;
	function rsort(list, loose) {
	  return list.sort(function(a, b) {
	    return exports.rcompare(a, b, loose);
	  });
	}
	
	exports.gt = gt;
	function gt(a, b, loose) {
	  return compare(a, b, loose) > 0;
	}
	
	exports.lt = lt;
	function lt(a, b, loose) {
	  return compare(a, b, loose) < 0;
	}
	
	exports.eq = eq;
	function eq(a, b, loose) {
	  return compare(a, b, loose) === 0;
	}
	
	exports.neq = neq;
	function neq(a, b, loose) {
	  return compare(a, b, loose) !== 0;
	}
	
	exports.gte = gte;
	function gte(a, b, loose) {
	  return compare(a, b, loose) >= 0;
	}
	
	exports.lte = lte;
	function lte(a, b, loose) {
	  return compare(a, b, loose) <= 0;
	}
	
	exports.cmp = cmp;
	function cmp(a, op, b, loose) {
	  var ret;
	  switch (op) {
	    case '===':
	      if (typeof a === 'object') a = a.version;
	      if (typeof b === 'object') b = b.version;
	      ret = a === b;
	      break;
	    case '!==':
	      if (typeof a === 'object') a = a.version;
	      if (typeof b === 'object') b = b.version;
	      ret = a !== b;
	      break;
	    case '': case '=': case '==': ret = eq(a, b, loose); break;
	    case '!=': ret = neq(a, b, loose); break;
	    case '>': ret = gt(a, b, loose); break;
	    case '>=': ret = gte(a, b, loose); break;
	    case '<': ret = lt(a, b, loose); break;
	    case '<=': ret = lte(a, b, loose); break;
	    default: throw new TypeError('Invalid operator: ' + op);
	  }
	  return ret;
	}
	
	exports.Comparator = Comparator;
	function Comparator(comp, loose) {
	  if (comp instanceof Comparator) {
	    if (comp.loose === loose)
	      return comp;
	    else
	      comp = comp.value;
	  }
	
	  if (!(this instanceof Comparator))
	    return new Comparator(comp, loose);
	
	  debug('comparator', comp, loose);
	  this.loose = loose;
	  this.parse(comp);
	
	  if (this.semver === ANY)
	    this.value = '';
	  else
	    this.value = this.operator + this.semver.version;
	
	  debug('comp', this);
	}
	
	var ANY = {};
	Comparator.prototype.parse = function(comp) {
	  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var m = comp.match(r);
	
	  if (!m)
	    throw new TypeError('Invalid comparator: ' + comp);
	
	  this.operator = m[1];
	  if (this.operator === '=')
	    this.operator = '';
	
	  // if it literally is just '>' or '' then allow anything.
	  if (!m[2])
	    this.semver = ANY;
	  else
	    this.semver = new SemVer(m[2], this.loose);
	};
	
	Comparator.prototype.toString = function() {
	  return this.value;
	};
	
	Comparator.prototype.test = function(version) {
	  debug('Comparator.test', version, this.loose);
	
	  if (this.semver === ANY)
	    return true;
	
	  if (typeof version === 'string')
	    version = new SemVer(version, this.loose);
	
	  return cmp(version, this.operator, this.semver, this.loose);
	};
	
	Comparator.prototype.intersects = function(comp, loose) {
	  if (!(comp instanceof Comparator)) {
	    throw new TypeError('a Comparator is required');
	  }
	
	  var rangeTmp;
	
	  if (this.operator === '') {
	    rangeTmp = new Range(comp.value, loose);
	    return satisfies(this.value, rangeTmp, loose);
	  } else if (comp.operator === '') {
	    rangeTmp = new Range(this.value, loose);
	    return satisfies(comp.semver, rangeTmp, loose);
	  }
	
	  var sameDirectionIncreasing =
	    (this.operator === '>=' || this.operator === '>') &&
	    (comp.operator === '>=' || comp.operator === '>');
	  var sameDirectionDecreasing =
	    (this.operator === '<=' || this.operator === '<') &&
	    (comp.operator === '<=' || comp.operator === '<');
	  var sameSemVer = this.semver.version === comp.semver.version;
	  var differentDirectionsInclusive =
	    (this.operator === '>=' || this.operator === '<=') &&
	    (comp.operator === '>=' || comp.operator === '<=');
	  var oppositeDirectionsLessThan =
	    cmp(this.semver, '<', comp.semver, loose) &&
	    ((this.operator === '>=' || this.operator === '>') &&
	    (comp.operator === '<=' || comp.operator === '<'));
	  var oppositeDirectionsGreaterThan =
	    cmp(this.semver, '>', comp.semver, loose) &&
	    ((this.operator === '<=' || this.operator === '<') &&
	    (comp.operator === '>=' || comp.operator === '>'));
	
	  return sameDirectionIncreasing || sameDirectionDecreasing ||
	    (sameSemVer && differentDirectionsInclusive) ||
	    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
	};
	
	
	exports.Range = Range;
	function Range(range, loose) {
	  if (range instanceof Range) {
	    if (range.loose === loose) {
	      return range;
	    } else {
	      return new Range(range.raw, loose);
	    }
	  }
	
	  if (range instanceof Comparator) {
	    return new Range(range.value, loose);
	  }
	
	  if (!(this instanceof Range))
	    return new Range(range, loose);
	
	  this.loose = loose;
	
	  // First, split based on boolean or ||
	  this.raw = range;
	  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
	    return this.parseRange(range.trim());
	  }, this).filter(function(c) {
	    // throw out any that are not relevant for whatever reason
	    return c.length;
	  });
	
	  if (!this.set.length) {
	    throw new TypeError('Invalid SemVer Range: ' + range);
	  }
	
	  this.format();
	}
	
	Range.prototype.format = function() {
	  this.range = this.set.map(function(comps) {
	    return comps.join(' ').trim();
	  }).join('||').trim();
	  return this.range;
	};
	
	Range.prototype.toString = function() {
	  return this.range;
	};
	
	Range.prototype.parseRange = function(range) {
	  var loose = this.loose;
	  range = range.trim();
	  debug('range', range, loose);
	  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
	  range = range.replace(hr, hyphenReplace);
	  debug('hyphen replace', range);
	  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
	  debug('comparator trim', range, re[COMPARATORTRIM]);
	
	  // `~ 1.2.3` => `~1.2.3`
	  range = range.replace(re[TILDETRIM], tildeTrimReplace);
	
	  // `^ 1.2.3` => `^1.2.3`
	  range = range.replace(re[CARETTRIM], caretTrimReplace);
	
	  // normalize spaces
	  range = range.split(/\s+/).join(' ');
	
	  // At this point, the range is completely trimmed and
	  // ready to be split into comparators.
	
	  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var set = range.split(' ').map(function(comp) {
	    return parseComparator(comp, loose);
	  }).join(' ').split(/\s+/);
	  if (this.loose) {
	    // in loose mode, throw out any that are not valid comparators
	    set = set.filter(function(comp) {
	      return !!comp.match(compRe);
	    });
	  }
	  set = set.map(function(comp) {
	    return new Comparator(comp, loose);
	  });
	
	  return set;
	};
	
	Range.prototype.intersects = function(range, loose) {
	  if (!(range instanceof Range)) {
	    throw new TypeError('a Range is required');
	  }
	
	  return this.set.some(function(thisComparators) {
	    return thisComparators.every(function(thisComparator) {
	      return range.set.some(function(rangeComparators) {
	        return rangeComparators.every(function(rangeComparator) {
	          return thisComparator.intersects(rangeComparator, loose);
	        });
	      });
	    });
	  });
	};
	
	// Mostly just for testing and legacy API reasons
	exports.toComparators = toComparators;
	function toComparators(range, loose) {
	  return new Range(range, loose).set.map(function(comp) {
	    return comp.map(function(c) {
	      return c.value;
	    }).join(' ').trim().split(' ');
	  });
	}
	
	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
	function parseComparator(comp, loose) {
	  debug('comp', comp);
	  comp = replaceCarets(comp, loose);
	  debug('caret', comp);
	  comp = replaceTildes(comp, loose);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, loose);
	  debug('xrange', comp);
	  comp = replaceStars(comp, loose);
	  debug('stars', comp);
	  return comp;
	}
	
	function isX(id) {
	  return !id || id.toLowerCase() === 'x' || id === '*';
	}
	
	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
	function replaceTildes(comp, loose) {
	  return comp.trim().split(/\s+/).map(function(comp) {
	    return replaceTilde(comp, loose);
	  }).join(' ');
	}
	
	function replaceTilde(comp, loose) {
	  var r = loose ? re[TILDELOOSE] : re[TILDE];
	  return comp.replace(r, function(_, M, m, p, pr) {
	    debug('tilde', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M))
	      ret = '';
	    else if (isX(m))
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    else if (isX(p))
	      // ~1.2 == >=1.2.0 <1.3.0
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    else if (pr) {
	      debug('replaceTilde pr', pr);
	      if (pr.charAt(0) !== '-')
	        pr = '-' + pr;
	      ret = '>=' + M + '.' + m + '.' + p + pr +
	            ' <' + M + '.' + (+m + 1) + '.0';
	    } else
	      // ~1.2.3 == >=1.2.3 <1.3.0
	      ret = '>=' + M + '.' + m + '.' + p +
	            ' <' + M + '.' + (+m + 1) + '.0';
	
	    debug('tilde return', ret);
	    return ret;
	  });
	}
	
	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
	// ^1.2.3 --> >=1.2.3 <2.0.0
	// ^1.2.0 --> >=1.2.0 <2.0.0
	function replaceCarets(comp, loose) {
	  return comp.trim().split(/\s+/).map(function(comp) {
	    return replaceCaret(comp, loose);
	  }).join(' ');
	}
	
	function replaceCaret(comp, loose) {
	  debug('caret', comp, loose);
	  var r = loose ? re[CARETLOOSE] : re[CARET];
	  return comp.replace(r, function(_, M, m, p, pr) {
	    debug('caret', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M))
	      ret = '';
	    else if (isX(m))
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    else if (isX(p)) {
	      if (M === '0')
	        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	      else
	        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (pr.charAt(0) !== '-')
	        pr = '-' + pr;
	      if (M === '0') {
	        if (m === '0')
	          ret = '>=' + M + '.' + m + '.' + p + pr +
	                ' <' + M + '.' + m + '.' + (+p + 1);
	        else
	          ret = '>=' + M + '.' + m + '.' + p + pr +
	                ' <' + M + '.' + (+m + 1) + '.0';
	      } else
	        ret = '>=' + M + '.' + m + '.' + p + pr +
	              ' <' + (+M + 1) + '.0.0';
	    } else {
	      debug('no pr');
	      if (M === '0') {
	        if (m === '0')
	          ret = '>=' + M + '.' + m + '.' + p +
	                ' <' + M + '.' + m + '.' + (+p + 1);
	        else
	          ret = '>=' + M + '.' + m + '.' + p +
	                ' <' + M + '.' + (+m + 1) + '.0';
	      } else
	        ret = '>=' + M + '.' + m + '.' + p +
	              ' <' + (+M + 1) + '.0.0';
	    }
	
	    debug('caret return', ret);
	    return ret;
	  });
	}
	
	function replaceXRanges(comp, loose) {
	  debug('replaceXRanges', comp, loose);
	  return comp.split(/\s+/).map(function(comp) {
	    return replaceXRange(comp, loose);
	  }).join(' ');
	}
	
	function replaceXRange(comp, loose) {
	  comp = comp.trim();
	  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
	  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    var xM = isX(M);
	    var xm = xM || isX(m);
	    var xp = xm || isX(p);
	    var anyX = xp;
	
	    if (gtlt === '=' && anyX)
	      gtlt = '';
	
	    if (xM) {
	      if (gtlt === '>' || gtlt === '<') {
	        // nothing is allowed
	        ret = '<0.0.0';
	      } else {
	        // nothing is forbidden
	        ret = '*';
	      }
	    } else if (gtlt && anyX) {
	      // replace X with 0
	      if (xm)
	        m = 0;
	      if (xp)
	        p = 0;
	
	      if (gtlt === '>') {
	        // >1 => >=2.0.0
	        // >1.2 => >=1.3.0
	        // >1.2.3 => >= 1.2.4
	        gtlt = '>=';
	        if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else if (xp) {
	          m = +m + 1;
	          p = 0;
	        }
	      } else if (gtlt === '<=') {
	        // <=0.7.x is actually <0.8.0, since any 0.7.x should
	        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	        gtlt = '<';
	        if (xm)
	          M = +M + 1;
	        else
	          m = +m + 1;
	      }
	
	      ret = gtlt + M + '.' + m + '.' + p;
	    } else if (xm) {
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    } else if (xp) {
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    }
	
	    debug('xRange return', ret);
	
	    return ret;
	  });
	}
	
	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
	function replaceStars(comp, loose) {
	  debug('replaceStars', comp, loose);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp.trim().replace(re[STAR], '');
	}
	
	// This function is passed to string.replace(re[HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0 <3.5.0
	function hyphenReplace($0,
	                       from, fM, fm, fp, fpr, fb,
	                       to, tM, tm, tp, tpr, tb) {
	
	  if (isX(fM))
	    from = '';
	  else if (isX(fm))
	    from = '>=' + fM + '.0.0';
	  else if (isX(fp))
	    from = '>=' + fM + '.' + fm + '.0';
	  else
	    from = '>=' + from;
	
	  if (isX(tM))
	    to = '';
	  else if (isX(tm))
	    to = '<' + (+tM + 1) + '.0.0';
	  else if (isX(tp))
	    to = '<' + tM + '.' + (+tm + 1) + '.0';
	  else if (tpr)
	    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
	  else
	    to = '<=' + to;
	
	  return (from + ' ' + to).trim();
	}
	
	
	// if ANY of the sets match ALL of its comparators, then pass
	Range.prototype.test = function(version) {
	  if (!version)
	    return false;
	
	  if (typeof version === 'string')
	    version = new SemVer(version, this.loose);
	
	  for (var i = 0; i < this.set.length; i++) {
	    if (testSet(this.set[i], version))
	      return true;
	  }
	  return false;
	};
	
	function testSet(set, version) {
	  for (var i = 0; i < set.length; i++) {
	    if (!set[i].test(version))
	      return false;
	  }
	
	  if (version.prerelease.length) {
	    // Find the set of versions that are allowed to have prereleases
	    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	    // That should allow `1.2.3-pr.2` to pass.
	    // However, `1.2.4-alpha.notready` should NOT be allowed,
	    // even though it's within the range set by the comparators.
	    for (var i = 0; i < set.length; i++) {
	      debug(set[i].semver);
	      if (set[i].semver === ANY)
	        continue;
	
	      if (set[i].semver.prerelease.length > 0) {
	        var allowed = set[i].semver;
	        if (allowed.major === version.major &&
	            allowed.minor === version.minor &&
	            allowed.patch === version.patch)
	          return true;
	      }
	    }
	
	    // Version has a -pre, but it's not one of the ones we like.
	    return false;
	  }
	
	  return true;
	}
	
	exports.satisfies = satisfies;
	function satisfies(version, range, loose) {
	  try {
	    range = new Range(range, loose);
	  } catch (er) {
	    return false;
	  }
	  return range.test(version);
	}
	
	exports.maxSatisfying = maxSatisfying;
	function maxSatisfying(versions, range, loose) {
	  var max = null;
	  var maxSV = null;
	  try {
	    var rangeObj = new Range(range, loose);
	  } catch (er) {
	    return null;
	  }
	  versions.forEach(function (v) {
	    if (rangeObj.test(v)) { // satisfies(v, range, loose)
	      if (!max || maxSV.compare(v) === -1) { // compare(max, v, true)
	        max = v;
	        maxSV = new SemVer(max, loose);
	      }
	    }
	  })
	  return max;
	}
	
	exports.minSatisfying = minSatisfying;
	function minSatisfying(versions, range, loose) {
	  var min = null;
	  var minSV = null;
	  try {
	    var rangeObj = new Range(range, loose);
	  } catch (er) {
	    return null;
	  }
	  versions.forEach(function (v) {
	    if (rangeObj.test(v)) { // satisfies(v, range, loose)
	      if (!min || minSV.compare(v) === 1) { // compare(min, v, true)
	        min = v;
	        minSV = new SemVer(min, loose);
	      }
	    }
	  })
	  return min;
	}
	
	exports.validRange = validRange;
	function validRange(range, loose) {
	  try {
	    // Return '*' instead of '' so that truthiness works.
	    // This will throw if it's invalid anyway
	    return new Range(range, loose).range || '*';
	  } catch (er) {
	    return null;
	  }
	}
	
	// Determine if version is less than all the versions possible in the range
	exports.ltr = ltr;
	function ltr(version, range, loose) {
	  return outside(version, range, '<', loose);
	}
	
	// Determine if version is greater than all the versions possible in the range.
	exports.gtr = gtr;
	function gtr(version, range, loose) {
	  return outside(version, range, '>', loose);
	}
	
	exports.outside = outside;
	function outside(version, range, hilo, loose) {
	  version = new SemVer(version, loose);
	  range = new Range(range, loose);
	
	  var gtfn, ltefn, ltfn, comp, ecomp;
	  switch (hilo) {
	    case '>':
	      gtfn = gt;
	      ltefn = lte;
	      ltfn = lt;
	      comp = '>';
	      ecomp = '>=';
	      break;
	    case '<':
	      gtfn = lt;
	      ltefn = gte;
	      ltfn = gt;
	      comp = '<';
	      ecomp = '<=';
	      break;
	    default:
	      throw new TypeError('Must provide a hilo val of "<" or ">"');
	  }
	
	  // If it satisifes the range it is not outside
	  if (satisfies(version, range, loose)) {
	    return false;
	  }
	
	  // From now on, variable terms are as if we're in "gtr" mode.
	  // but note that everything is flipped for the "ltr" function.
	
	  for (var i = 0; i < range.set.length; ++i) {
	    var comparators = range.set[i];
	
	    var high = null;
	    var low = null;
	
	    comparators.forEach(function(comparator) {
	      if (comparator.semver === ANY) {
	        comparator = new Comparator('>=0.0.0')
	      }
	      high = high || comparator;
	      low = low || comparator;
	      if (gtfn(comparator.semver, high.semver, loose)) {
	        high = comparator;
	      } else if (ltfn(comparator.semver, low.semver, loose)) {
	        low = comparator;
	      }
	    });
	
	    // If the edge version comparator has a operator then our version
	    // isn't outside it
	    if (high.operator === comp || high.operator === ecomp) {
	      return false;
	    }
	
	    // If the lowest version comparator has an operator and our version
	    // is less than it then it isn't higher than the range
	    if ((!low.operator || low.operator === comp) &&
	        ltefn(version, low.semver)) {
	      return false;
	    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	exports.prerelease = prerelease;
	function prerelease(version, loose) {
	  var parsed = parse(version, loose);
	  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
	}
	
	exports.intersects = intersects;
	function intersects(r1, r2, loose) {
	  r1 = new Range(r1, loose)
	  r2 = new Range(r2, loose)
	  return r1.intersects(r2)
	}
	
	exports.coerce = coerce;
	function coerce(version) {
	  if (version instanceof SemVer)
	    return version;
	
	  if (typeof version !== 'string')
	    return null;
	
	  var match = version.match(re[COERCE]);
	
	  if (match == null)
	    return null;
	
	  return parse((match[1] || '0') + '.' + (match[2] || '0') + '.' + (match[3] || '0')); 
	}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var deferred = __webpack_require__(25);
	var once = __webpack_require__(26);
	var promiseOrCallback = __webpack_require__(27);
	
	function wrapPromise(fn) {
	  return function () {
	    var callback;
	    var args = Array.prototype.slice.call(arguments);
	    var lastArg = args[args.length - 1];
	
	    if (typeof lastArg === 'function') {
	      callback = args.pop();
	      callback = once(deferred(callback));
	    }
	    return promiseOrCallback(fn.apply(this, args), callback); // eslint-disable-line no-invalid-this
	  };
	}
	
	wrapPromise.wrapPrototype = function (target, options) {
	  var methods, ignoreMethods, includePrivateMethods;
	
	  options = options || {};
	  ignoreMethods = options.ignoreMethods || [];
	  includePrivateMethods = options.transformPrivateMethods === true;
	
	  methods = Object.getOwnPropertyNames(target.prototype).filter(function (method) {
	    var isNotPrivateMethod;
	    var isNonConstructorFunction = method !== 'constructor' &&
	      typeof target.prototype[method] === 'function';
	    var isNotAnIgnoredMethod = ignoreMethods.indexOf(method) === -1;
	
	    if (includePrivateMethods) {
	      isNotPrivateMethod = true;
	    } else {
	      isNotPrivateMethod = method.charAt(0) !== '_';
	    }
	
	    return isNonConstructorFunction &&
	      isNotPrivateMethod &&
	      isNotAnIgnoredMethod;
	  });
	
	  methods.forEach(function (method) {
	    var original = target.prototype[method];
	
	    target.prototype[method] = wrapPromise(original);
	  });
	
	  return target;
	};
	
	module.exports = wrapPromise;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	function deferred(fn) {
	  return function () {
	    // IE9 doesn't support passing arguments to setTimeout so we have to emulate it.
	    var args = arguments;
	
	    setTimeout(function () {
	      fn.apply(null, args);
	    }, 1);
	  };
	}
	
	module.exports = deferred;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';
	
	function once(fn) {
	  var called = false;
	
	  return function () {
	    if (!called) {
	      called = true;
	      fn.apply(null, arguments);
	    }
	  };
	}
	
	module.exports = once;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';
	
	function promiseOrCallback(promise, callback) { // eslint-disable-line consistent-return
	  if (callback) {
	    promise
	      .then(function (data) {
	        callback(null, data);
	      })
	      .catch(function (err) {
	        callback(err);
	      });
	  } else {
	    return promise;
	  }
	}
	
	module.exports = promiseOrCallback;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AddOn = __webpack_require__(29).AddOn;
	let Gateway = __webpack_require__(31).Gateway;
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class AddOnGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  all() {
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/add_ons`).then(this.createResponseHandler('add_on', AddOn));
	  }
	}
	
	module.exports = {AddOnGateway: wrapPrototype(AddOnGateway)};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class AddOn extends AttributeSetter {}
	
	module.exports = {AddOn: AddOn};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';
	
	class AttributeSetter {
	  constructor(attributes, gateway) {
	    for (let key in attributes) {
	      if (!attributes.hasOwnProperty(key)) {
	        continue;
	      }
	      let value = attributes[key];
	
	      this[key] = value;
	    }
	
	    this.getGateway = () => gateway;
	  }
	}
	
	module.exports = {AttributeSetter: AttributeSetter};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let ErrorResponse = __webpack_require__(32).ErrorResponse;
	let SearchResponse = __webpack_require__(55).SearchResponse;
	let exceptions = __webpack_require__(20);
	let _ = __webpack_require__(56);
	
	class Gateway {
	  createResponseHandler(attributeKlassMap, Klass) {
	    let gateway = this.gateway;
	
	    return function (response) { // eslint-disable-line consistent-return
	      if (response.apiErrorResponse) {
	        return Promise.resolve(new ErrorResponse(response.apiErrorResponse, gateway));
	      }
	
	      response.success = true;
	      if (attributeKlassMap === null) {
	        return Promise.resolve(response);
	      } else if (typeof attributeKlassMap === 'string') {
	        let attributeName = attributeKlassMap;
	
	        if (response[attributeName]) {
	          if (Klass != null) { response[attributeName] = new Klass(response[attributeName], gateway); }
	        }
	        return Promise.resolve(response);
	      }
	      let unknown = true;
	
	      for (let attributeName in attributeKlassMap) {
	        if (!attributeKlassMap.hasOwnProperty(attributeName)) {
	          continue;
	        }
	        Klass = attributeKlassMap[attributeName];
	        if (response[attributeName]) {
	          unknown = false;
	          if (Klass != null) { response[attributeName] = new Klass(response[attributeName], gateway); }
	          return Promise.resolve(response);
	        }
	      }
	      if (unknown) {
	        return Promise.resolve(response);
	      }
	    };
	  }
	
	  createSearchResponse(url, search, pagingFunction, callback) {
	    let gateway = this.gateway;
	
	    if (callback != null) {
	      return gateway.http.post(url, {search: search.toHash()}, this.searchResponseHandler(pagingFunction, callback));
	    }
	
	    let searchResponse = new SearchResponse();
	
	    gateway.http.post(url, {search: search.toHash()}, function (err, response) {
	      if (err != null) {
	        searchResponse.setFatalError(err);
	      } else if (response.searchResults) {
	        searchResponse.setResponse(response);
	        searchResponse.setPagingFunction(pagingFunction);
	      } else if (response.apiErrorResponse) {
	        searchResponse.setFatalError(new ErrorResponse(response.apiErrorResponse, gateway));
	      } else {
	        searchResponse.setFatalError(exceptions.DownForMaintenanceError('Down for Maintenance')); // eslint-disable-line new-cap
	      }
	
	      return searchResponse.ready();
	    });
	
	    return searchResponse.stream;
	  }
	
	  searchResponseHandler(pagingFunction, callback) {
	    let gateway = this.gateway;
	
	    return function (err, response) {
	      if (err) { return callback(err, response); }
	      if (response.searchResults) {
	        let container = new SearchResponse(pagingFunction, response);
	
	        return callback(null, container);
	      } else if (response.apiErrorResponse) {
	        return callback(null, new ErrorResponse(response.apiErrorResponse, gateway));
	      }
	
	      return callback(exceptions.DownForMaintenanceError('Down for Maintenance'), null); // eslint-disable-line new-cap
	    };
	  }
	
	  pagingFunctionGenerator(search, url, SubjectType, pagedResultsKey, getSubject) {
	    return (ids, callback) => {
	      search.ids().in(ids);
	      this.gateway.http.post(`${this.config.baseMerchantPath()}/` + url + '/advanced_search', {search: search.toHash()}, function (err, response) {
	        if (err) {
	          callback(err, null);
	          return;
	        } else if (pagedResultsKey in response) {
	          if (_.isArray(getSubject(response))) {
	            getSubject(response).map((subject) => {
	              callback(null, new SubjectType(subject));
	            });
	            return;
	          }
	
	          callback(null, new SubjectType(getSubject(response)));
	          return;
	        }
	
	        callback(exceptions.DownForMaintenanceError('Down for Maintenance'), null); // eslint-disable-line new-cap
	      });
	    };
	  }
	}
	
	module.exports = {Gateway: Gateway};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Transaction = __webpack_require__(33).Transaction;
	let ValidationErrorsCollection = __webpack_require__(53).ValidationErrorsCollection;
	
	class ErrorResponse {
	  constructor(attributes, gateway) {
	    for (let key in attributes) {
	      if (!attributes.hasOwnProperty(key)) {
	        continue;
	      }
	      let value = attributes[key];
	
	      this[key] = value;
	    }
	    this.success = false;
	    this.errors = new ValidationErrorsCollection(attributes.errors);
	    if (attributes.transaction) { this.transaction = new Transaction(attributes.transaction, gateway); }
	  }
	}
	
	module.exports = {ErrorResponse: ErrorResponse};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	let ApplePayCard = __webpack_require__(34).ApplePayCard;
	let AndroidPayCard = __webpack_require__(35).AndroidPayCard;
	let AuthorizationAdjustment = __webpack_require__(36).AuthorizationAdjustment;
	let CreditCard = __webpack_require__(37).CreditCard;
	let PayPalAccount = __webpack_require__(40).PayPalAccount;
	let CoinbaseAccount = __webpack_require__(41).CoinbaseAccount;
	let DisbursementDetails = __webpack_require__(42).DisbursementDetails;
	let Dispute = __webpack_require__(43).Dispute;
	let FacilitatedDetails = __webpack_require__(45).FacilitatedDetails;
	let FacilitatorDetails = __webpack_require__(46).FacilitatorDetails;
	let RiskData = __webpack_require__(39).RiskData;
	let ThreeDSecureInfo = __webpack_require__(47).ThreeDSecureInfo;
	let UsBankAccount = __webpack_require__(48).UsBankAccount;
	let IdealPayment = __webpack_require__(50).IdealPayment;
	let VisaCheckoutCard = __webpack_require__(51).VisaCheckoutCard;
	let MasterpassCard = __webpack_require__(52).MasterpassCard;
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class Transaction extends AttributeSetter {
	  static initClass() {
	    this.CreatedUsing = {
	      FullInformation: 'full_information',
	      Token: 'token'
	    };
	
	    this.EscrowStatus = {
	      HoldPending: 'hold_pending',
	      Held: 'held',
	      ReleasePending: 'release_pending',
	      Released: 'released',
	      Refunded: 'refunded'
	    };
	
	    this.Source = {
	      Api: 'api',
	      ControlPanel: 'control_panel',
	      Recurring: 'recurring'
	    };
	
	    this.Type = {
	      Credit: 'credit',
	      Sale: 'sale',
	      All() {
	        let all = [];
	
	        for (let key in this) {
	          if (!this.hasOwnProperty(key)) {
	            continue;
	          }
	          let value = this[key];
	
	          if (key !== 'All') { all.push(value); }
	        }
	        return all;
	      }
	    };
	
	    this.GatewayRejectionReason = {
	      ApplicationIncomplete: 'application_incomplete',
	      Avs: 'avs',
	      Cvv: 'cvv',
	      AvsAndCvv: 'avs_and_cvv',
	      Duplicate: 'duplicate',
	      Fraud: 'fraud',
	      ThreeDSecure: 'three_d_secure'
	    };
	
	    this.IndustryData = {
	      Lodging: 'lodging',
	      TravelAndCruise: 'travel_cruise'
	    };
	
	    this.Status = {
	      AuthorizationExpired: 'authorization_expired',
	      Authorizing: 'authorizing',
	      Authorized: 'authorized',
	      GatewayRejected: 'gateway_rejected',
	      Failed: 'failed',
	      ProcessorDeclined: 'processor_declined',
	      Settled: 'settled',
	      Settling: 'settling',
	      SettlementConfirmed: 'settlement_confirmed',
	      SettlementDeclined: 'settlement_declined',
	      SettlementPending: 'settlement_pending',
	      SubmittedForSettlement: 'submitted_for_settlement',
	      Voided: 'voided',
	      All() {
	        let all = [];
	
	        for (let key in this) {
	          if (!this.hasOwnProperty(key)) {
	            continue;
	          }
	          let value = this[key];
	
	          if (key !== 'All') { all.push(value); }
	        }
	        return all;
	      }
	    };
	  }
	
	  constructor(attributes, gateway) {
	    super(attributes, gateway);
	    this.creditCard = new CreditCard(attributes.creditCard);
	    this.paypalAccount = new PayPalAccount(attributes.paypal);
	    this.coinbaseAccount = new CoinbaseAccount(attributes.coinbaseAccount);
	    this.applePayCard = new ApplePayCard(attributes.applePay);
	    this.androidPayCard = new AndroidPayCard(attributes.androidPayCard);
	    this.disbursementDetails = new DisbursementDetails(attributes.disbursementDetails);
	    this.visaCheckoutCard = new VisaCheckoutCard(attributes.visaCheckoutCard);
	    this.masterpassCard = new MasterpassCard(attributes.masterpassCard);
	    if (attributes.disputes != null) { this.disputes = attributes.disputes.map((disputeAttributes) => new Dispute(disputeAttributes)); }
	    if (attributes.facilitatedDetails) { this.facilitatedDetails = new FacilitatedDetails(attributes.facilitatedDetails); }
	    if (attributes.facilitatorDetails) { this.facilitatorDetails = new FacilitatorDetails(attributes.facilitatorDetails); }
	    if (attributes.riskData) { this.riskData = new RiskData(attributes.riskData); }
	    if (attributes.threeDSecureInfo) { this.threeDSecureInfo = new ThreeDSecureInfo(attributes.threeDSecureInfo); }
	    if (attributes.usBankAccount) { this.usBankAccount = new UsBankAccount(attributes.usBankAccount); }
	    if (attributes.idealPayment) { this.idealPaymentDetails = new IdealPayment(attributes.idealPayment); }
	    if (attributes.authorizationAdjustments) { this.authorizationAdjustments = attributes.authorizationAdjustments.map((authorizationAdjustmentAttributes) => new AuthorizationAdjustment(authorizationAdjustmentAttributes)); }
	  }
	
	  isDisbursed() {
	    return this.disbursementDetails.isValid();
	  }
	
	  lineItems() {
	    return this.getGateway().transactionLineItem.findAll(this.id);
	  }
	}
	Transaction.initClass();
	
	module.exports = {Transaction: wrapPrototype(Transaction, {})};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class ApplePayCard extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {ApplePayCard: ApplePayCard};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class AndroidPayCard extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	
	    if (attributes) {
	      this.cardType = attributes.virtualCardType;
	      this.last4 = attributes.virtualCardLast4;
	    }
	  }
	}
	
	module.exports = {AndroidPayCard: AndroidPayCard};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class AuthorizationAdjustment extends AttributeSetter {}
	
	module.exports = {AuthorizationAdjustment: AuthorizationAdjustment};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	let CreditCardVerification = __webpack_require__(38).CreditCardVerification;
	
	class CreditCard extends AttributeSetter {
	  static initClass() {
	    this.CardType = {
	      AmEx: 'American Express',
	      CarteBlanche: 'Carte Blanche',
	      ChinaUnionPay: 'China UnionPay',
	      DinersClubInternational: 'Diners Club',
	      Discover: 'Discover',
	      JCB: 'JCB',
	      Laser: 'Laser',
	      UKMaestro: 'UK Maestro',
	      Maestro: 'Maestro',
	      MasterCard: 'MasterCard',
	      Solo: 'Solo',
	      Switch: 'Switch',
	      Visa: 'Visa',
	      Unknown: 'Unknown',
	      All() {
	        let all = [];
	
	        for (let key in this) {
	          if (!this.hasOwnProperty(key)) {
	            continue;
	          }
	          let value = this[key];
	
	          if (key !== 'All') { all.push(value); }
	        }
	        return all;
	      }
	    };
	
	    this.CustomerLocation = {
	      International: 'international',
	      US: 'us'
	    };
	
	    this.CardTypeIndicator = {
	      Yes: 'Yes',
	      No: 'No',
	      Unknown: 'Unknown'
	    };
	
	    this.Prepaid = this.Commercial = this.Payroll = this.Healthcare = this.DurbinRegulated =
	      this.Debit = this.CountryOfIssuance = this.IssuingBank = this.ProductId = this.CardTypeIndicator;
	  }
	
	  constructor(attributes) {
	    super(attributes);
	    this.maskedNumber = `${this.bin}******${this.last4}`;
	    this.expirationDate = `${this.expirationMonth}/${this.expirationYear}`;
	    if (attributes) {
	      let sortedVerifications = (attributes.verifications || []).sort((a, b) => b.created_at - a.created_at);
	
	      if (sortedVerifications[0]) { this.verification = new CreditCardVerification(sortedVerifications[0]); }
	    }
	  }
	}
	CreditCard.initClass();
	
	module.exports = {CreditCard: CreditCard};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	let RiskData = __webpack_require__(39).RiskData;
	
	class CreditCardVerification extends AttributeSetter {
	  static initClass() {
	    this.StatusType = {
	      Failed: 'failed',
	      GatewayRejected: 'gateway_rejected',
	      ProcessorDeclined: 'processor_declined',
	      Verified: 'verified',
	      All() {
	        let all = [];
	
	        for (let key in this) {
	          if (!this.hasOwnProperty(key)) {
	            continue;
	          }
	          let value = this[key];
	
	          if (key !== 'All') { all.push(value); }
	        }
	        return all;
	      }
	    };
	  }
	
	  constructor(attributes) {
	    super(attributes);
	    if (attributes.riskData) { this.riskData = new RiskData(attributes.riskData); }
	  }
	}
	CreditCardVerification.initClass();
	
	module.exports = {CreditCardVerification: CreditCardVerification};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class RiskData extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {RiskData: RiskData};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class PayPalAccount extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {PayPalAccount: PayPalAccount};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class CoinbaseAccount extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {CoinbaseAccount: CoinbaseAccount};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class DisbursementDetails extends AttributeSetter {
	  isValid() {
	    return this.disbursementDate != null;
	  }
	}
	
	module.exports = {DisbursementDetails: DisbursementDetails};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	let TransactionDetails = __webpack_require__(44).TransactionDetails;
	
	class Dispute extends AttributeSetter {
	  static initClass() {
	    this.Status = {
	      Open: 'open',
	      Lost: 'lost',
	      Won: 'won',
	      Accepted: 'accepted',
	      Disputed: 'disputed',
	      Expired: 'expired'
	    };
	    this.Reason = {
	      CancelledRecurringTransaction: 'cancelled_recurring_transaction',
	      CreditNotProcessed: 'credit_not_processed',
	      Duplicate: 'duplicate',
	      Fraud: 'fraud',
	      General: 'general',
	      InvalidAccount: 'invalid_account',
	      NotRecognized: 'not_recognized',
	      ProductNotReceived: 'product_not_received',
	      ProductUnsatisfactory: 'product_unsatisfactory',
	      Retrieval: 'retrieval',
	      TransactionAmountDiffers: 'transaction_amount_differs'
	    };
	    this.Kind = {
	      Chargeback: 'chargeback',
	      PreArbitration: 'pre_arbitration',
	      Retrieval: 'retrieval'
	    };
	  }
	
	  constructor(attributes) {
	    super(attributes);
	    this.transactionDetails = new TransactionDetails(attributes.transaction);
	  }
	}
	Dispute.initClass();
	
	module.exports = {Dispute: Dispute};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class TransactionDetails extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {TransactionDetails: TransactionDetails};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class FacilitatedDetails extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {FacilitatedDetails: FacilitatedDetails};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class FacilitatorDetails extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {FacilitatorDetails: FacilitatorDetails};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class ThreeDSecureInfo extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {ThreeDSecureInfo: ThreeDSecureInfo};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	let AchMandate = __webpack_require__(49).AchMandate;
	
	class UsBankAccount extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	    this.achMandate = new AchMandate(this.achMandate);
	  }
	}
	
	module.exports = {UsBankAccount: UsBankAccount};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class AchMandate extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	    this.acceptedAt = new Date(this.acceptedAt);
	  }
	}
	
	module.exports = {AchMandate: AchMandate};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class IdealPayment extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {IdealPayment: IdealPayment};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class VisaCheckoutCard extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {VisaCheckoutCard: VisaCheckoutCard};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class MasterpassCard extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {MasterpassCard: MasterpassCard};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Util = __webpack_require__(22).Util;
	let ValidationError = __webpack_require__(54).ValidationError;
	
	class ValidationErrorsCollection {
	  constructor(errorAttributes) {
	    this.validationErrors = {};
	    this.errorCollections = {};
	
	    for (let key in errorAttributes) {
	      if (!errorAttributes.hasOwnProperty(key)) {
	        continue;
	      }
	      let val = errorAttributes[key];
	
	      if (key === 'errors') {
	        this.buildErrors(val);
	      } else {
	        this.errorCollections[key] = new ValidationErrorsCollection(val);
	      }
	    }
	  }
	
	  buildErrors(errors) {
	    return errors.map((item) => {
	      let key = Util.toCamelCase(item.attribute);
	
	      this.validationErrors[key] = this.validationErrors[key] || [];
	
	      return this.validationErrors[key].push(new ValidationError(item));
	    });
	  }
	
	  deepErrors() {
	    let errors = [];
	
	    for (let key in this.validationErrors) {
	      if (!this.validationErrors.hasOwnProperty(key)) {
	        continue;
	      }
	      let val = this.validationErrors[key];
	
	      errors = errors.concat(val);
	    }
	
	    for (let key in this.errorCollections) {
	      if (!this.errorCollections.hasOwnProperty(key)) {
	        continue;
	      }
	      let val = this.errorCollections[key];
	
	      errors = errors.concat(val.deepErrors());
	    }
	
	    return errors;
	  }
	
	  for(name) {
	    return this.errorCollections[name];
	  }
	
	  forIndex(index) {
	    return this.errorCollections[`index${index}`];
	  }
	
	  on(name) {
	    return this.validationErrors[name];
	  }
	}
	
	module.exports = {ValidationErrorsCollection: ValidationErrorsCollection};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	'use strict';
	
	class ValidationError {
	  constructor(error) {
	    this.attribute = error.attribute;
	    this.code = error.code;
	    this.message = error.message;
	  }
	}
	
	module.exports = {ValidationError: ValidationError};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let _ = __webpack_require__(56);
	let SearchResponseStream = __webpack_require__(57).SearchResponseStream;
	
	class SearchResponse {
	  constructor(pagingFunction, results) {
	    if (pagingFunction != null) {
	      this.setPagingFunction(pagingFunction);
	    }
	
	    if (results != null) {
	      this.setResponse(results);
	    }
	
	    this.stream = new SearchResponseStream(this);
	
	    this.success = true;
	  }
	
	  each(callback) {
	    return _.each(_.range(0, this.ids.length, this.pageSize), offset => {
	      return this.pagingFunction(this.ids.slice(offset, offset + this.pageSize), callback);
	    });
	  }
	
	  first(callback) {
	    if (this.ids.length === 0) {
	      return callback(null, null);
	    }
	
	    return this.pagingFunction([this.ids[0]], callback);
	  }
	
	  length() {
	    return this.ids.length;
	  }
	
	  ready() {
	    return this.stream.ready();
	  }
	
	  setFatalError(error) {
	    this.fatalError = error;
	  }
	
	  setResponse(results) {
	    this.ids = results.searchResults.ids;
	    this.pageSize = parseInt(results.searchResults.pageSize, 10);
	  }
	
	  setPagingFunction(pagingFunction) {
	    this.pagingFunction = pagingFunction;
	  }
	}
	
	module.exports = {SearchResponse: SearchResponse};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function() {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };
	
	  _.noop = function(){};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };
	
	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Readable = __webpack_require__(17).Readable || __webpack_require__(58).Readable;
	
	class SearchResponseStream extends Readable {
	  constructor(searchResponse) {
	    super({objectMode: true});
	
	    this.searchResponse = searchResponse;
	    this.currentItem = 0;
	    this.currentOffset = 0;
	    this.bufferedResults = [];
	  }
	
	  nextItem() {
	    if (this.searchResponse.fatalError != null) {
	      this.emit('error', this.searchResponse.fatalError);
	      this.push(null);
	      return;
	    } else if (this.bufferedResults.length > 0) {
	      this.pushBufferedResults();
	      return;
	    } else if (this.currentItem >= this.searchResponse.ids.length) {
	      this.push(null);
	      return;
	    }
	
	    let index = 0;
	
	    this.searchResponse.pagingFunction(this.searchResponse.ids.slice(this.currentOffset, this.currentOffset + this.searchResponse.pageSize), (err, item) => {
	      if (err != null) {
	        this.emit('error', err);
	      } else {
	        this.bufferedResults.push(item);
	      }
	
	      this.currentItem += 1;
	      index += 1;
	
	      if (index === this.searchResponse.pageSize || this.currentItem === this.searchResponse.ids.length) {
	        this.push(this.bufferedResults.shift());
	      }
	    });
	
	    this.currentOffset += this.searchResponse.pageSize;
	  }
	
	  pushBufferedResults() {
	    return (() => {
	      let result1 = [];
	
	      while (this.bufferedResults.length > 0) {
	        let item;
	        let result = this.push(this.bufferedResults.shift());
	
	        if (result === false) { break; }
	        result1.push(item);
	      }
	      return result1;
	    })();
	  }
	
	  ready() {
	    this.readyToStart = true;
	    return this.emit('ready');
	  }
	
	  _read() {
	    if (this.readyToStart != null) {
	      return this.nextItem();
	    }
	
	    return this.on('ready', () => {
	      return this.nextItem();
	    });
	  }
	}
	
	module.exports = {SearchResponseStream: SearchResponseStream};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var Stream = __webpack_require__(17);
	if (({"CONTENTFUL_SPACE_ID":"x77ncy6osjfp","CONTENTFUL_ACCESS_TOKEN":"6fdf96f860ab5e01bc6fbc7d4c87910dfc1059a54b6455d59b31114faee94ab0","PWINTY_API_KEY":"b3e6f775-062a-49ed-acce-9c634480bbbc","PWINTY_MERCHANT_ID":"1e06e880-1240-4139-b28c-81bcb1841b8a","PAYPAL_CLIENT_ID":"AQ3q-OOyuIvoAC05hzthboEgalHqO9ApAE0D5Uu4SK_1zE2m0SHhZlgu5FsgQloXdmXWCki6gC_AiLFU","PAYPAL_SECRET":"EEK-yx_IW_LQ4V2SXqMf1WiK7abUEHLKMMrtVqY9tq6355cSrGYPVmWxxn_ZBWp5EpPL9O88zaYb2kki","BRAINTREE_TOKEN":"access_token$sandbox$x7fp5c9rgnw64c66$2666d074b17b95079c17671344450a9c","NODE_ENV":"development","PUBLIC_DIR":"/Users/justanotherdavemartin/Projects/photography/public"}).READABLE_STREAM === 'disable' && Stream) {
	  module.exports = Stream;
	  exports = module.exports = Stream.Readable;
	  exports.Readable = Stream.Readable;
	  exports.Writable = Stream.Writable;
	  exports.Duplex = Stream.Duplex;
	  exports.Transform = Stream.Transform;
	  exports.PassThrough = Stream.PassThrough;
	  exports.Stream = Stream;
	} else {
	  exports = module.exports = __webpack_require__(59);
	  exports.Stream = Stream || exports;
	  exports.Readable = exports;
	  exports.Writable = __webpack_require__(71);
	  exports.Duplex = __webpack_require__(70);
	  exports.Transform = __webpack_require__(74);
	  exports.PassThrough = __webpack_require__(75);
	}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	/*<replacement>*/
	
	var processNextTick = __webpack_require__(60);
	/*</replacement>*/
	
	module.exports = Readable;
	
	/*<replacement>*/
	var isArray = __webpack_require__(61);
	/*</replacement>*/
	
	/*<replacement>*/
	var Duplex;
	/*</replacement>*/
	
	Readable.ReadableState = ReadableState;
	
	/*<replacement>*/
	var EE = __webpack_require__(19).EventEmitter;
	
	var EElistenerCount = function (emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/
	
	/*<replacement>*/
	var Stream = __webpack_require__(62);
	/*</replacement>*/
	
	// TODO(bmeurer): Change this back to const once hole checks are
	// properly optimized away early in Ignition+TurboFan.
	/*<replacement>*/
	var Buffer = __webpack_require__(63).Buffer;
	var OurUint8Array = global.Uint8Array || function () {};
	function _uint8ArrayToBuffer(chunk) {
	  return Buffer.from(chunk);
	}
	function _isUint8Array(obj) {
	  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
	}
	/*</replacement>*/
	
	/*<replacement>*/
	var util = __webpack_require__(64);
	util.inherits = __webpack_require__(65);
	/*</replacement>*/
	
	/*<replacement>*/
	var debugUtil = __webpack_require__(66);
	var debug = void 0;
	if (debugUtil && debugUtil.debuglog) {
	  debug = debugUtil.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/
	
	var BufferList = __webpack_require__(68);
	var destroyImpl = __webpack_require__(69);
	var StringDecoder;
	
	util.inherits(Readable, Stream);
	
	var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];
	
	function prependListener(emitter, event, fn) {
	  // Sadly this is not cacheable as some libraries bundle their own
	  // event emitter implementation with them.
	  if (typeof emitter.prependListener === 'function') {
	    return emitter.prependListener(event, fn);
	  } else {
	    // This is a hack to make sure that our error handler is attached before any
	    // userland ones.  NEVER DO THIS. This is here only because this code needs
	    // to continue to work with older versions of Node.js that do not include
	    // the prependListener() method. The goal is to eventually remove this hack.
	    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
	  }
	}
	
	function ReadableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(70);
	
	  options = options || {};
	
	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;
	
	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
	
	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
	
	  // cast to ints.
	  this.highWaterMark = Math.floor(this.highWaterMark);
	
	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift()
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;
	
	  // a flag to be able to tell if the event 'readable'/'data' is emitted
	  // immediately, or on a later tick.  We set this to true at first, because
	  // any actions that shouldn't happen until "later" should generally also
	  // not happen before the first read call.
	  this.sync = true;
	
	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;
	
	  // has it been destroyed
	  this.destroyed = false;
	
	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';
	
	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;
	
	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;
	
	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder) StringDecoder = __webpack_require__(73).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}
	
	function Readable(options) {
	  Duplex = Duplex || __webpack_require__(70);
	
	  if (!(this instanceof Readable)) return new Readable(options);
	
	  this._readableState = new ReadableState(options, this);
	
	  // legacy
	  this.readable = true;
	
	  if (options) {
	    if (typeof options.read === 'function') this._read = options.read;
	
	    if (typeof options.destroy === 'function') this._destroy = options.destroy;
	  }
	
	  Stream.call(this);
	}
	
	Object.defineProperty(Readable.prototype, 'destroyed', {
	  get: function () {
	    if (this._readableState === undefined) {
	      return false;
	    }
	    return this._readableState.destroyed;
	  },
	  set: function (value) {
	    // we ignore the value if the stream
	    // has not been initialized yet
	    if (!this._readableState) {
	      return;
	    }
	
	    // backward compatibility, the user is explicitly
	    // managing destroyed
	    this._readableState.destroyed = value;
	  }
	});
	
	Readable.prototype.destroy = destroyImpl.destroy;
	Readable.prototype._undestroy = destroyImpl.undestroy;
	Readable.prototype._destroy = function (err, cb) {
	  this.push(null);
	  cb(err);
	};
	
	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;
	  var skipChunkCheck;
	
	  if (!state.objectMode) {
	    if (typeof chunk === 'string') {
	      encoding = encoding || state.defaultEncoding;
	      if (encoding !== state.encoding) {
	        chunk = Buffer.from(chunk, encoding);
	        encoding = '';
	      }
	      skipChunkCheck = true;
	    }
	  } else {
	    skipChunkCheck = true;
	  }
	
	  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
	};
	
	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  return readableAddChunk(this, chunk, null, true, false);
	};
	
	function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
	  var state = stream._readableState;
	  if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else {
	    var er;
	    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
	    if (er) {
	      stream.emit('error', er);
	    } else if (state.objectMode || chunk && chunk.length > 0) {
	      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
	        chunk = _uint8ArrayToBuffer(chunk);
	      }
	
	      if (addToFront) {
	        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
	      } else if (state.ended) {
	        stream.emit('error', new Error('stream.push() after EOF'));
	      } else {
	        state.reading = false;
	        if (state.decoder && !encoding) {
	          chunk = state.decoder.write(chunk);
	          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
	        } else {
	          addChunk(stream, state, chunk, false);
	        }
	      }
	    } else if (!addToFront) {
	      state.reading = false;
	    }
	  }
	
	  return needMoreData(state);
	}
	
	function addChunk(stream, state, chunk, addToFront) {
	  if (state.flowing && state.length === 0 && !state.sync) {
	    stream.emit('data', chunk);
	    stream.read(0);
	  } else {
	    // update the buffer info.
	    state.length += state.objectMode ? 1 : chunk.length;
	    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
	
	    if (state.needReadable) emitReadable(stream);
	  }
	  maybeReadMore(stream, state);
	}
	
	function chunkInvalid(state, chunk) {
	  var er;
	  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}
	
	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}
	
	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};
	
	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  if (!StringDecoder) StringDecoder = __webpack_require__(73).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};
	
	// Don't raise the hwm > 8MB
	var MAX_HWM = 0x800000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}
	
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead(n, state) {
	  if (n <= 0 || state.length === 0 && state.ended) return 0;
	  if (state.objectMode) return 1;
	  if (n !== n) {
	    // Only flow one buffer at a time
	    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
	  }
	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n <= state.length) return n;
	  // Don't have enough
	  if (!state.ended) {
	    state.needReadable = true;
	    return 0;
	  }
	  return state.length;
	}
	
	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  n = parseInt(n, 10);
	  var state = this._readableState;
	  var nOrig = n;
	
	  if (n !== 0) state.emittedReadable = false;
	
	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }
	
	  n = howMuchToRead(n, state);
	
	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }
	
	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.
	
	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);
	
	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }
	
	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  } else if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }
	
	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;
	
	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  } else {
	    state.length -= n;
	  }
	
	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;
	
	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable(this);
	  }
	
	  if (ret !== null) this.emit('data', ret);
	
	  return ret;
	};
	
	function onEofChunk(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;
	
	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}
	
	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
	  }
	}
	
	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}
	
	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    processNextTick(maybeReadMore_, stream, state);
	  }
	}
	
	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}
	
	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  this.emit('error', new Error('_read() is not implemented'));
	};
	
	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;
	
	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
	
	  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
	
	  var endFn = doEnd ? onend : unpipe;
	  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);
	
	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable, unpipeInfo) {
	    debug('onunpipe');
	    if (readable === src) {
	      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
	        unpipeInfo.hasUnpiped = true;
	        cleanup();
	      }
	    }
	  }
	
	  function onend() {
	    debug('onend');
	    dest.end();
	  }
	
	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);
	
	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', unpipe);
	    src.removeListener('data', ondata);
	
	    cleanedUp = true;
	
	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }
	
	  // If the user pushes more data while we're writing to dest then we'll end up
	  // in ondata again. However, we only want to increase awaitDrain once because
	  // dest will only emit one 'drain' event for the multiple writes.
	  // => Introduce a guard on increasing awaitDrain.
	  var increasedAwaitDrain = false;
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    increasedAwaitDrain = false;
	    var ret = dest.write(chunk);
	    if (false === ret && !increasedAwaitDrain) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      // => Check whether `dest` is still a piping destination.
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	        increasedAwaitDrain = true;
	      }
	      src.pause();
	    }
	  }
	
	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
	  }
	
	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);
	
	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);
	
	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }
	
	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);
	
	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }
	
	  return dest;
	};
	
	function pipeOnDrain(src) {
	  return function () {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}
	
	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;
	  var unpipeInfo = { hasUnpiped: false };
	
	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;
	
	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;
	
	    if (!dest) dest = state.pipes;
	
	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this, unpipeInfo);
	    return this;
	  }
	
	  // slow case. multiple pipe destinations.
	
	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	
	    for (var i = 0; i < len; i++) {
	      dests[i].emit('unpipe', this, unpipeInfo);
	    }return this;
	  }
	
	  // try to find the right one.
	  var index = indexOf(state.pipes, dest);
	  if (index === -1) return this;
	
	  state.pipes.splice(index, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];
	
	  dest.emit('unpipe', this, unpipeInfo);
	
	  return this;
	};
	
	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);
	
	  if (ev === 'data') {
	    // Start flowing on next tick if stream isn't explicitly paused
	    if (this._readableState.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    var state = this._readableState;
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.emittedReadable = false;
	      if (!state.reading) {
	        processNextTick(nReadingNextTick, this);
	      } else if (state.length) {
	        emitReadable(this);
	      }
	    }
	  }
	
	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;
	
	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}
	
	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    resume(this, state);
	  }
	  return this;
	};
	
	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    processNextTick(resume_, stream, state);
	  }
	}
	
	function resume_(stream, state) {
	  if (!state.reading) {
	    debug('resume read 0');
	    stream.read(0);
	  }
	
	  state.resumeScheduled = false;
	  state.awaitDrain = 0;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}
	
	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};
	
	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  while (state.flowing && stream.read() !== null) {}
	}
	
	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var state = this._readableState;
	  var paused = false;
	
	  var self = this;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) self.push(chunk);
	    }
	
	    self.push(null);
	  });
	
	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);
	
	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;
	
	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });
	
	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }
	
	  // proxy certain important events.
	  for (var n = 0; n < kProxyEvents.length; n++) {
	    stream.on(kProxyEvents[n], self.emit.bind(self, kProxyEvents[n]));
	  }
	
	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };
	
	  return self;
	};
	
	// exposed for testing purposes only.
	Readable._fromList = fromList;
	
	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList(n, state) {
	  // nothing buffered
	  if (state.length === 0) return null;
	
	  var ret;
	  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
	    // read it all, truncate the list
	    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list
	    ret = fromListPartial(n, state.buffer, state.decoder);
	  }
	
	  return ret;
	}
	
	// Extracts only enough buffered data to satisfy the amount requested.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromListPartial(n, list, hasStrings) {
	  var ret;
	  if (n < list.head.data.length) {
	    // slice is the same for buffers and strings
	    ret = list.head.data.slice(0, n);
	    list.head.data = list.head.data.slice(n);
	  } else if (n === list.head.data.length) {
	    // first chunk is a perfect match
	    ret = list.shift();
	  } else {
	    // result spans more than one buffer
	    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
	  }
	  return ret;
	}
	
	// Copies a specified amount of characters from the list of buffered data
	// chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBufferString(n, list) {
	  var p = list.head;
	  var c = 1;
	  var ret = p.data;
	  n -= ret.length;
	  while (p = p.next) {
	    var str = p.data;
	    var nb = n > str.length ? str.length : n;
	    if (nb === str.length) ret += str;else ret += str.slice(0, n);
	    n -= nb;
	    if (n === 0) {
	      if (nb === str.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = str.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}
	
	// Copies a specified amount of bytes from the list of buffered data chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBuffer(n, list) {
	  var ret = Buffer.allocUnsafe(n);
	  var p = list.head;
	  var c = 1;
	  p.data.copy(ret);
	  n -= p.data.length;
	  while (p = p.next) {
	    var buf = p.data;
	    var nb = n > buf.length ? buf.length : n;
	    buf.copy(ret, ret.length - n, 0, nb);
	    n -= nb;
	    if (n === 0) {
	      if (nb === buf.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = buf.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}
	
	function endReadable(stream) {
	  var state = stream._readableState;
	
	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
	
	  if (!state.endEmitted) {
	    state.ended = true;
	    processNextTick(endReadableNT, state, stream);
	  }
	}
	
	function endReadableNT(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}
	
	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}
	
	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	'use strict';
	
	if (!process.version ||
	    process.version.indexOf('v0.') === 0 ||
	    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
	  module.exports = nextTick;
	} else {
	  module.exports = process.nextTick;
	}
	
	function nextTick(fn, arg1, arg2, arg3) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('"callback" argument must be a function');
	  }
	  var len = arguments.length;
	  var args, i;
	  switch (len) {
	  case 0:
	  case 1:
	    return process.nextTick(fn);
	  case 2:
	    return process.nextTick(function afterTickOne() {
	      fn.call(null, arg1);
	    });
	  case 3:
	    return process.nextTick(function afterTickTwo() {
	      fn.call(null, arg1, arg2);
	    });
	  case 4:
	    return process.nextTick(function afterTickThree() {
	      fn.call(null, arg1, arg2, arg3);
	    });
	  default:
	    args = new Array(len - 1);
	    i = 0;
	    while (i < args.length) {
	      args[i++] = arguments[i];
	    }
	    return process.nextTick(function afterTick() {
	      fn.apply(null, args);
	    });
	  }
	}


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable node/no-deprecated-api */
	var buffer = __webpack_require__(12)
	var Buffer = buffer.Buffer
	
	// alternative to using Object.keys for old browsers
	function copyProps (src, dst) {
	  for (var key in src) {
	    dst[key] = src[key]
	  }
	}
	if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
	  module.exports = buffer
	} else {
	  // Copy properties from require('buffer')
	  copyProps(buffer, exports)
	  exports.Buffer = SafeBuffer
	}
	
	function SafeBuffer (arg, encodingOrOffset, length) {
	  return Buffer(arg, encodingOrOffset, length)
	}
	
	// Copy static methods from Buffer
	copyProps(Buffer, SafeBuffer)
	
	SafeBuffer.from = function (arg, encodingOrOffset, length) {
	  if (typeof arg === 'number') {
	    throw new TypeError('Argument must not be a number')
	  }
	  return Buffer(arg, encodingOrOffset, length)
	}
	
	SafeBuffer.alloc = function (size, fill, encoding) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  var buf = Buffer(size)
	  if (fill !== undefined) {
	    if (typeof encoding === 'string') {
	      buf.fill(fill, encoding)
	    } else {
	      buf.fill(fill)
	    }
	  } else {
	    buf.fill(0)
	  }
	  return buf
	}
	
	SafeBuffer.allocUnsafe = function (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  return Buffer(size)
	}
	
	SafeBuffer.allocUnsafeSlow = function (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  return buffer.SlowBuffer(size)
	}


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	
	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = Buffer.isBuffer;
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	try {
	  var util = __webpack_require__(66);
	  if (typeof util.inherits !== 'function') throw '';
	  module.exports = util.inherits;
	} catch (e) {
	  module.exports = __webpack_require__(67);
	}


/***/ }),
/* 66 */
/***/ (function(module, exports) {

	module.exports = require("util");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/*<replacement>*/
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Buffer = __webpack_require__(63).Buffer;
	/*</replacement>*/
	
	function copyBuffer(src, target, offset) {
	  src.copy(target, offset);
	}
	
	module.exports = function () {
	  function BufferList() {
	    _classCallCheck(this, BufferList);
	
	    this.head = null;
	    this.tail = null;
	    this.length = 0;
	  }
	
	  BufferList.prototype.push = function push(v) {
	    var entry = { data: v, next: null };
	    if (this.length > 0) this.tail.next = entry;else this.head = entry;
	    this.tail = entry;
	    ++this.length;
	  };
	
	  BufferList.prototype.unshift = function unshift(v) {
	    var entry = { data: v, next: this.head };
	    if (this.length === 0) this.tail = entry;
	    this.head = entry;
	    ++this.length;
	  };
	
	  BufferList.prototype.shift = function shift() {
	    if (this.length === 0) return;
	    var ret = this.head.data;
	    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
	    --this.length;
	    return ret;
	  };
	
	  BufferList.prototype.clear = function clear() {
	    this.head = this.tail = null;
	    this.length = 0;
	  };
	
	  BufferList.prototype.join = function join(s) {
	    if (this.length === 0) return '';
	    var p = this.head;
	    var ret = '' + p.data;
	    while (p = p.next) {
	      ret += s + p.data;
	    }return ret;
	  };
	
	  BufferList.prototype.concat = function concat(n) {
	    if (this.length === 0) return Buffer.alloc(0);
	    if (this.length === 1) return this.head.data;
	    var ret = Buffer.allocUnsafe(n >>> 0);
	    var p = this.head;
	    var i = 0;
	    while (p) {
	      copyBuffer(p.data, ret, i);
	      i += p.data.length;
	      p = p.next;
	    }
	    return ret;
	  };
	
	  return BufferList;
	}();

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/*<replacement>*/
	
	var processNextTick = __webpack_require__(60);
	/*</replacement>*/
	
	// undocumented cb() API, needed for core, not for public API
	function destroy(err, cb) {
	  var _this = this;
	
	  var readableDestroyed = this._readableState && this._readableState.destroyed;
	  var writableDestroyed = this._writableState && this._writableState.destroyed;
	
	  if (readableDestroyed || writableDestroyed) {
	    if (cb) {
	      cb(err);
	    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
	      processNextTick(emitErrorNT, this, err);
	    }
	    return;
	  }
	
	  // we set destroyed to true before firing error callbacks in order
	  // to make it re-entrance safe in case destroy() is called within callbacks
	
	  if (this._readableState) {
	    this._readableState.destroyed = true;
	  }
	
	  // if this is a duplex stream mark the writable part as destroyed as well
	  if (this._writableState) {
	    this._writableState.destroyed = true;
	  }
	
	  this._destroy(err || null, function (err) {
	    if (!cb && err) {
	      processNextTick(emitErrorNT, _this, err);
	      if (_this._writableState) {
	        _this._writableState.errorEmitted = true;
	      }
	    } else if (cb) {
	      cb(err);
	    }
	  });
	}
	
	function undestroy() {
	  if (this._readableState) {
	    this._readableState.destroyed = false;
	    this._readableState.reading = false;
	    this._readableState.ended = false;
	    this._readableState.endEmitted = false;
	  }
	
	  if (this._writableState) {
	    this._writableState.destroyed = false;
	    this._writableState.ended = false;
	    this._writableState.ending = false;
	    this._writableState.finished = false;
	    this._writableState.errorEmitted = false;
	  }
	}
	
	function emitErrorNT(self, err) {
	  self.emit('error', err);
	}
	
	module.exports = {
	  destroy: destroy,
	  undestroy: undestroy
	};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.
	
	'use strict';
	
	/*<replacement>*/
	
	var processNextTick = __webpack_require__(60);
	/*</replacement>*/
	
	/*<replacement>*/
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    keys.push(key);
	  }return keys;
	};
	/*</replacement>*/
	
	module.exports = Duplex;
	
	/*<replacement>*/
	var util = __webpack_require__(64);
	util.inherits = __webpack_require__(65);
	/*</replacement>*/
	
	var Readable = __webpack_require__(59);
	var Writable = __webpack_require__(71);
	
	util.inherits(Duplex, Readable);
	
	var keys = objectKeys(Writable.prototype);
	for (var v = 0; v < keys.length; v++) {
	  var method = keys[v];
	  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}
	
	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);
	
	  Readable.call(this, options);
	  Writable.call(this, options);
	
	  if (options && options.readable === false) this.readable = false;
	
	  if (options && options.writable === false) this.writable = false;
	
	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
	
	  this.once('end', onend);
	}
	
	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;
	
	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  processNextTick(onEndNT, this);
	}
	
	function onEndNT(self) {
	  self.end();
	}
	
	Object.defineProperty(Duplex.prototype, 'destroyed', {
	  get: function () {
	    if (this._readableState === undefined || this._writableState === undefined) {
	      return false;
	    }
	    return this._readableState.destroyed && this._writableState.destroyed;
	  },
	  set: function (value) {
	    // we ignore the value if the stream
	    // has not been initialized yet
	    if (this._readableState === undefined || this._writableState === undefined) {
	      return;
	    }
	
	    // backward compatibility, the user is explicitly
	    // managing destroyed
	    this._readableState.destroyed = value;
	    this._writableState.destroyed = value;
	  }
	});
	
	Duplex.prototype._destroy = function (err, cb) {
	  this.push(null);
	  this.end();
	
	  processNextTick(cb, err);
	};
	
	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, encoding, cb), and it'll handle all
	// the drain event emission and buffering.
	
	'use strict';
	
	/*<replacement>*/
	
	var processNextTick = __webpack_require__(60);
	/*</replacement>*/
	
	module.exports = Writable;
	
	/* <replacement> */
	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	  this.next = null;
	}
	
	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;
	
	  this.next = null;
	  this.entry = null;
	  this.finish = function () {
	    onCorkedFinish(_this, state);
	  };
	}
	/* </replacement> */
	
	/*<replacement>*/
	var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
	/*</replacement>*/
	
	/*<replacement>*/
	var Duplex;
	/*</replacement>*/
	
	Writable.WritableState = WritableState;
	
	/*<replacement>*/
	var util = __webpack_require__(64);
	util.inherits = __webpack_require__(65);
	/*</replacement>*/
	
	/*<replacement>*/
	var internalUtil = {
	  deprecate: __webpack_require__(72)
	};
	/*</replacement>*/
	
	/*<replacement>*/
	var Stream = __webpack_require__(62);
	/*</replacement>*/
	
	/*<replacement>*/
	var Buffer = __webpack_require__(63).Buffer;
	var OurUint8Array = global.Uint8Array || function () {};
	function _uint8ArrayToBuffer(chunk) {
	  return Buffer.from(chunk);
	}
	function _isUint8Array(obj) {
	  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
	}
	/*</replacement>*/
	
	var destroyImpl = __webpack_require__(69);
	
	util.inherits(Writable, Stream);
	
	function nop() {}
	
	function WritableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(70);
	
	  options = options || {};
	
	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;
	
	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
	
	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
	
	  // cast to ints.
	  this.highWaterMark = Math.floor(this.highWaterMark);
	
	  // if _final has been called
	  this.finalCalled = false;
	
	  // drain event flag.
	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;
	
	  // has it been destroyed
	  this.destroyed = false;
	
	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;
	
	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';
	
	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;
	
	  // a flag to see when we're in the middle of a write.
	  this.writing = false;
	
	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;
	
	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;
	
	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;
	
	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };
	
	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;
	
	  // the amount that is being written when _write is called.
	  this.writelen = 0;
	
	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;
	
	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;
	
	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;
	
	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	
	  // count buffered requests
	  this.bufferedRequestCount = 0;
	
	  // allocate the first CorkedRequest, there is always
	  // one allocated and free to use, and we maintain at most two
	  this.corkedRequestsFree = new CorkedRequest(this);
	}
	
	WritableState.prototype.getBuffer = function getBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};
	
	(function () {
	  try {
	    Object.defineProperty(WritableState.prototype, 'buffer', {
	      get: internalUtil.deprecate(function () {
	        return this.getBuffer();
	      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
	    });
	  } catch (_) {}
	})();
	
	// Test _writableState for inheritance to account for Duplex streams,
	// whose prototype chain only points to Readable.
	var realHasInstance;
	if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
	  realHasInstance = Function.prototype[Symbol.hasInstance];
	  Object.defineProperty(Writable, Symbol.hasInstance, {
	    value: function (object) {
	      if (realHasInstance.call(this, object)) return true;
	
	      return object && object._writableState instanceof WritableState;
	    }
	  });
	} else {
	  realHasInstance = function (object) {
	    return object instanceof this;
	  };
	}
	
	function Writable(options) {
	  Duplex = Duplex || __webpack_require__(70);
	
	  // Writable ctor is applied to Duplexes, too.
	  // `realHasInstance` is necessary because using plain `instanceof`
	  // would return false, as no `_writableState` property is attached.
	
	  // Trying to use the custom `instanceof` for Writable here will also break the
	  // Node.js LazyTransform implementation, which has a non-trivial getter for
	  // `_writableState` that would lead to infinite recursion.
	  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
	    return new Writable(options);
	  }
	
	  this._writableState = new WritableState(options, this);
	
	  // legacy.
	  this.writable = true;
	
	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;
	
	    if (typeof options.writev === 'function') this._writev = options.writev;
	
	    if (typeof options.destroy === 'function') this._destroy = options.destroy;
	
	    if (typeof options.final === 'function') this._final = options.final;
	  }
	
	  Stream.call(this);
	}
	
	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe, not readable'));
	};
	
	function writeAfterEnd(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  processNextTick(cb, er);
	}
	
	// Checks that a user-supplied chunk is valid, especially for the particular
	// mode the stream is in. Currently this means that `null` is never accepted
	// and undefined/non-string values are only allowed in object mode.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  var er = false;
	
	  if (chunk === null) {
	    er = new TypeError('May not write null values to stream');
	  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  if (er) {
	    stream.emit('error', er);
	    processNextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}
	
	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;
	  var isBuf = _isUint8Array(chunk) && !state.objectMode;
	
	  if (isBuf && !Buffer.isBuffer(chunk)) {
	    chunk = _uint8ArrayToBuffer(chunk);
	  }
	
	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }
	
	  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
	
	  if (typeof cb !== 'function') cb = nop;
	
	  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
	  }
	
	  return ret;
	};
	
	Writable.prototype.cork = function () {
	  var state = this._writableState;
	
	  state.corked++;
	};
	
	Writable.prototype.uncork = function () {
	  var state = this._writableState;
	
	  if (state.corked) {
	    state.corked--;
	
	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};
	
	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};
	
	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = Buffer.from(chunk, encoding);
	  }
	  return chunk;
	}
	
	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
	  if (!isBuf) {
	    var newChunk = decodeChunk(state, chunk, encoding);
	    if (chunk !== newChunk) {
	      isBuf = true;
	      encoding = 'buffer';
	      chunk = newChunk;
	    }
	  }
	  var len = state.objectMode ? 1 : chunk.length;
	
	  state.length += len;
	
	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;
	
	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = {
	      chunk: chunk,
	      encoding: encoding,
	      isBuf: isBuf,
	      callback: cb,
	      next: null
	    };
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }
	
	  return ret;
	}
	
	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}
	
	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	
	  if (sync) {
	    // defer the callback if we are being called synchronously
	    // to avoid piling up things on the stack
	    processNextTick(cb, er);
	    // this can emit finish, and it will always happen
	    // after error
	    processNextTick(finishMaybe, stream, state);
	    stream._writableState.errorEmitted = true;
	    stream.emit('error', er);
	  } else {
	    // the caller expect this to happen before if
	    // it is async
	    cb(er);
	    stream._writableState.errorEmitted = true;
	    stream.emit('error', er);
	    // this can emit finish, but finish must
	    // always follow error
	    finishMaybe(stream, state);
	  }
	}
	
	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}
	
	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;
	
	  onwriteStateUpdate(state);
	
	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state);
	
	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }
	
	    if (sync) {
	      /*<replacement>*/
	      asyncWrite(afterWrite, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	      afterWrite(stream, state, finished, cb);
	    }
	  }
	}
	
	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}
	
	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}
	
	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;
	
	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;
	
	    var count = 0;
	    var allBuffers = true;
	    while (entry) {
	      buffer[count] = entry;
	      if (!entry.isBuf) allBuffers = false;
	      entry = entry.next;
	      count += 1;
	    }
	    buffer.allBuffers = allBuffers;
	
	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);
	
	    // doWrite is almost always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest(state);
	    }
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;
	
	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }
	
	    if (entry === null) state.lastBufferedRequest = null;
	  }
	
	  state.bufferedRequestCount = 0;
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}
	
	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('_write() is not implemented'));
	};
	
	Writable.prototype._writev = null;
	
	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;
	
	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }
	
	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
	
	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }
	
	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable(this, state, cb);
	};
	
	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}
	function callFinal(stream, state) {
	  stream._final(function (err) {
	    state.pendingcb--;
	    if (err) {
	      stream.emit('error', err);
	    }
	    state.prefinished = true;
	    stream.emit('prefinish');
	    finishMaybe(stream, state);
	  });
	}
	function prefinish(stream, state) {
	  if (!state.prefinished && !state.finalCalled) {
	    if (typeof stream._final === 'function') {
	      state.pendingcb++;
	      state.finalCalled = true;
	      processNextTick(callFinal, stream, state);
	    } else {
	      state.prefinished = true;
	      stream.emit('prefinish');
	    }
	  }
	}
	
	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    prefinish(stream, state);
	    if (state.pendingcb === 0) {
	      state.finished = true;
	      stream.emit('finish');
	    }
	  }
	  return need;
	}
	
	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}
	
	function onCorkedFinish(corkReq, state, err) {
	  var entry = corkReq.entry;
	  corkReq.entry = null;
	  while (entry) {
	    var cb = entry.callback;
	    state.pendingcb--;
	    cb(err);
	    entry = entry.next;
	  }
	  if (state.corkedRequestsFree) {
	    state.corkedRequestsFree.next = corkReq;
	  } else {
	    state.corkedRequestsFree = corkReq;
	  }
	}
	
	Object.defineProperty(Writable.prototype, 'destroyed', {
	  get: function () {
	    if (this._writableState === undefined) {
	      return false;
	    }
	    return this._writableState.destroyed;
	  },
	  set: function (value) {
	    // we ignore the value if the stream
	    // has not been initialized yet
	    if (!this._writableState) {
	      return;
	    }
	
	    // backward compatibility, the user is explicitly
	    // managing destroyed
	    this._writableState.destroyed = value;
	  }
	});
	
	Writable.prototype.destroy = destroyImpl.destroy;
	Writable.prototype._undestroy = destroyImpl.undestroy;
	Writable.prototype._destroy = function (err, cb) {
	  this.end();
	  cb(err);
	};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * For Node.js, simply re-export the core `util.deprecate` function.
	 */
	
	module.exports = __webpack_require__(66).deprecate;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var Buffer = __webpack_require__(12).Buffer;
	
	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }
	
	
	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}
	
	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }
	
	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};
	
	
	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;
	
	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;
	
	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }
	
	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);
	
	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
	
	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;
	
	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }
	
	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);
	
	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }
	
	  charStr += buffer.toString(this.encoding, 0, end);
	
	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }
	
	  // or just emit the charStr
	  return charStr;
	};
	
	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;
	
	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];
	
	    // See http://en.wikipedia.org/wiki/UTF-8#Description
	
	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }
	
	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }
	
	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};
	
	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);
	
	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }
	
	  return res;
	};
	
	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}
	
	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}
	
	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.
	
	'use strict';
	
	module.exports = Transform;
	
	var Duplex = __webpack_require__(70);
	
	/*<replacement>*/
	var util = __webpack_require__(64);
	util.inherits = __webpack_require__(65);
	/*</replacement>*/
	
	util.inherits(Transform, Duplex);
	
	function TransformState(stream) {
	  this.afterTransform = function (er, data) {
	    return afterTransform(stream, er, data);
	  };
	
	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	  this.writeencoding = null;
	}
	
	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;
	
	  var cb = ts.writecb;
	
	  if (!cb) {
	    return stream.emit('error', new Error('write callback called multiple times'));
	  }
	
	  ts.writechunk = null;
	  ts.writecb = null;
	
	  if (data !== null && data !== undefined) stream.push(data);
	
	  cb(er);
	
	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}
	
	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);
	
	  Duplex.call(this, options);
	
	  this._transformState = new TransformState(this);
	
	  var stream = this;
	
	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;
	
	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;
	
	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;
	
	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }
	
	  // When the writable side finishes, then flush out anything remaining.
	  this.once('prefinish', function () {
	    if (typeof this._flush === 'function') this._flush(function (er, data) {
	      done(stream, er, data);
	    });else done(stream);
	  });
	}
	
	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};
	
	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('_transform() is not implemented');
	};
	
	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};
	
	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;
	
	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};
	
	Transform.prototype._destroy = function (err, cb) {
	  var _this = this;
	
	  Duplex.prototype._destroy.call(this, err, function (err2) {
	    cb(err2);
	    _this.emit('close');
	  });
	};
	
	function done(stream, er, data) {
	  if (er) return stream.emit('error', er);
	
	  if (data !== null && data !== undefined) stream.push(data);
	
	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;
	
	  if (ws.length) throw new Error('Calling transform done when ws.length != 0');
	
	  if (ts.transforming) throw new Error('Calling transform done when still transforming');
	
	  return stream.push(null);
	}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.
	
	'use strict';
	
	module.exports = PassThrough;
	
	var Transform = __webpack_require__(74);
	
	/*<replacement>*/
	var util = __webpack_require__(64);
	util.inherits = __webpack_require__(65);
	/*</replacement>*/
	
	util.inherits(PassThrough, Transform);
	
	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);
	
	  Transform.call(this, options);
	}
	
	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let Address = __webpack_require__(77).Address;
	let exceptions = __webpack_require__(20);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class AddressGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  create(attributes) {
	    let customerId = attributes.customerId;
	
	    delete attributes.customerId;
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/customers/${customerId}/addresses`, {address: attributes}).then(this.responseHandler());
	  }
	
	  delete(customerId, id) {
	    let path = `${this.config.baseMerchantPath()}/customers/${customerId}/addresses/${id}`;
	
	    return this.gateway.http.delete(path);
	  }
	
	  find(customerId, id) {
	    if (customerId.trim() === '' || id.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found')); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/customers/${customerId}/addresses/${id}`).then((response) => {
	      return response.address;
	    });
	  }
	
	  update(customerId, id, attributes) {
	    return this.gateway.http.put(`${this.config.baseMerchantPath()}/customers/${customerId}/addresses/${id}`, {address: attributes}).then(this.responseHandler());
	  }
	
	  responseHandler() {
	    return this.createResponseHandler('address', Address);
	  }
	
	  sharedSignature(prefix) {
	    let signatureKeys = [
	      'company', 'countryCodeAlpha2', 'countryCodeAlpha3', 'countryCodeNumeric',
	      'countryName', 'extendedAddress', 'firstName',
	      'lastName', 'locality', 'postalCode', 'region', 'streetAddress'
	    ];
	
	    let signature = [];
	
	    for (let val of signatureKeys) {
	      signature.push(prefix + '[' + val + ']');
	    }
	
	    return signature;
	  }
	}
	
	module.exports = {AddressGateway: wrapPrototype(AddressGateway)};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class Address extends AttributeSetter {}
	
	module.exports = {Address: Address};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let ErrorResponse = __webpack_require__(32).ErrorResponse;
	let Util = __webpack_require__(22).Util;
	let exceptions = __webpack_require__(20);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	let DEFAULT_VERSION = 2;
	
	class ClientTokenGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  generate(params) {
	    let err;
	
	    params = params || {};
	
	    if (!params.version) { params.version = DEFAULT_VERSION; }
	
	    err = Util.verifyKeys(this._generateSignature(), params);
	
	    if (!err) {
	      err = this.validateParams(params);
	    }
	
	    if (err) {
	      return Promise.reject(err);
	    }
	    params = {client_token: params}; // eslint-disable-line camelcase
	
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/client_token`, params).then(this.responseHandler());
	  }
	
	  validateParams(params) {
	    if (params.customerId || !params.options) { return; }
	
	    let options = ['makeDefault', 'verifyCard', 'failOnDuplicatePaymentMethod'];
	    let invalidOptions = options.filter((name) => params.options[name]).map((name) => name);
	
	    if (invalidOptions.length > 0) {
	      return exceptions.UnexpectedError(`A customer id is required for the following options: ${invalidOptions.join(', ')}`); // eslint-disable-line consistent-return, new-cap
	    }
	
	    return null; // eslint-disable-line consistent-return
	  }
	
	  responseHandler() {
	    let gateway = this.gateway;
	
	    return function (response) { // eslint-disable-line consistent-return
	      if (response.clientToken) {
	        response.success = true;
	        response.clientToken = response.clientToken.value;
	        return response;
	      } else if (response.apiErrorResponse) {
	        return new ErrorResponse(response.apiErrorResponse, gateway);
	      }
	    };
	  }
	
	  _generateSignature() {
	    return {
	      valid: [
	        'addressId', 'customerId', 'proxyMerchantId', 'merchantAccountId',
	        'version', 'sepaMandateAcceptanceLocation', 'sepaMandateType',
	        'options', 'options[makeDefault]', 'options[verifyCard]', 'options[failOnDuplicatePaymentMethod]'
	      ]
	    };
	  }
	}
	
	module.exports = {ClientTokenGateway: wrapPrototype(ClientTokenGateway)};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let CreditCard = __webpack_require__(37).CreditCard;
	let exceptions = __webpack_require__(20);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class CreditCardGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  create(attributes) {
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/payment_methods`, {creditCard: attributes}).then(this.responseHandler());
	  }
	
	  delete(token) {
	    let path = `${this.config.baseMerchantPath()}/payment_methods/credit_card/${token}`;
	
	    return this.gateway.http.delete(path);
	  }
	
	  find(token) {
	    if (token.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found')); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/payment_methods/credit_card/${token}`).then(function (response) {
	      return new CreditCard(response.creditCard);
	    });
	  }
	
	  fromNonce(nonce) {
	    if (nonce.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found')); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/payment_methods/from_nonce/${nonce}`).then((response) => {
	      return new CreditCard(response.creditCard);
	    }).catch((err) => {
	      err.message = `Payment method with nonce ${nonce} locked, consumed or not found`;
	      return Promise.reject(err);
	    });
	  }
	
	  update(token, attributes) {
	    return this.gateway.http.put(`${this.config.baseMerchantPath()}/payment_methods/credit_card/${token}`, {creditCard: attributes}).then(this.responseHandler());
	  }
	
	  responseHandler() {
	    return this.createResponseHandler('creditCard', CreditCard);
	  }
	
	  expired() {
	    return new Promise((resolve, reject) => {
	      this.gateway.http.post(`${this.config.baseMerchantPath()}/payment_methods/all/expired_ids`, {}, this.searchResponseHandler(this, (err, response) => {
	        if (err) {
	          reject(err);
	        } else {
	          resolve(response);
	        }
	      }));
	    });
	  }
	
	  expiringBetween(after, before) {
	    let url = `${this.config.baseMerchantPath()}/payment_methods/all/expiring_ids?start=${this.dateFormat(after)}&end=${this.dateFormat(before)}`;
	
	    return new Promise((resolve, reject) => {
	      this.gateway.http.post(url, {}, this.searchResponseHandler(this, (err, response) => {
	        if (err) {
	          reject(err);
	        } else {
	          resolve(response);
	        }
	      }));
	    });
	  }
	
	  dateFormat(date) {
	    let month = date.getMonth() + 1;
	
	    if (month < 10) {
	      month = `0${month}`;
	    } else {
	      month = `${month}`;
	    }
	    return month + date.getFullYear();
	  }
	}
	
	module.exports = {CreditCardGateway: wrapPrototype(CreditCardGateway)};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let CreditCardVerification = __webpack_require__(38).CreditCardVerification;
	let CreditCardVerificationSearch = __webpack_require__(81).CreditCardVerificationSearch;
	let _ = __webpack_require__(56);
	let exceptions = __webpack_require__(20);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class CreditCardVerificationGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  find(creditCardVerificationId) {
	    if (creditCardVerificationId.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found')); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/verifications/${creditCardVerificationId}`).then(function (response) {
	      return new CreditCardVerification(response.verification);
	    });
	  }
	
	  search(fn, callback) {
	    let search = new CreditCardVerificationSearch();
	
	    fn(search);
	    return this.createSearchResponse(`${this.config.baseMerchantPath()}/verifications/advanced_search_ids`, search, this.pagingFunctionGenerator(search), callback);
	  }
	
	  create(params) {
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/verifications`, {
	      verification: params
	    }).then(this.createResponseHandler('verification', CreditCardVerification));
	  }
	
	  responseHandler() {
	    return this.createResponseHandler('creditCardVerification', CreditCardVerification);
	  }
	
	  pagingFunctionGenerator(search) {
	    return (ids, callback) => {
	      let searchCriteria = search.toHash();
	
	      searchCriteria.ids = ids;
	      return this.gateway.http.post(`${this.config.baseMerchantPath()}/verifications/advanced_search`,
	        {search: searchCriteria},
	        function (err, response) {
	          if (err) {
	            return callback(err, null);
	          } else if (_.isArray(response.creditCardVerifications.verification)) {
	            return response.creditCardVerifications.verification.map((creditCardVerification) =>
	                callback(null, new CreditCardVerification(creditCardVerification)));
	          }
	
	          return callback(null, new CreditCardVerification(response.creditCardVerifications.verification));
	        });
	    };
	  }
	}
	
	module.exports = {CreditCardVerificationGateway: wrapPrototype(CreditCardVerificationGateway, {
	  ignoreMethods: ['search']
	})};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AdvancedSearch = __webpack_require__(82).AdvancedSearch;
	let CreditCard = __webpack_require__(37).CreditCard;
	let CreditCardVerification = __webpack_require__(38).CreditCardVerification;
	
	class CreditCardVerificationSearch extends AdvancedSearch {
	  static initClass() {
	    this.textFields(
	        'billingAddressDetailsPostalCode',
	        'creditCardCardholderName',
	        'customerEmail',
	        'customerId',
	        'id',
	        'paymentMethodToken'
	      );
	
	    this.equalityFields('creditCardExpirationDate');
	
	    this.partialMatchFields('creditCardNumber');
	
	    this.multipleValueField('creditCardCardType', {allows: CreditCard.CardType.All()}); // eslint-disable-line new-cap
	    this.multipleValueField('status', {allows: CreditCardVerification.StatusType.All()}); // eslint-disable-line new-cap
	    this.multipleValueField('ids');
	
	    this.rangeFields('createdAt');
	  }
	}
	CreditCardVerificationSearch.initClass();
	
	module.exports = {CreditCardVerificationSearch: CreditCardVerificationSearch};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/* eslint-disable no-invalid-this, no-use-before-define */
	let Util = __webpack_require__(22).Util;
	let _ = __webpack_require__(56);
	
	function argsToArray(argsObject) {
	  return Array.prototype.slice.call(argsObject);
	}
	
	class AdvancedSearch {
	  static equalityFields() {
	    let fields = argsToArray(arguments);
	
	    return this._createFieldAccessors(fields, EqualityNode);
	  }
	
	  static partialMatchFields() {
	    let fields = argsToArray(arguments);
	
	    return this._createFieldAccessors(fields, PartialMatchNode);
	  }
	
	  static textFields() {
	    let fields = argsToArray(arguments);
	
	    return this._createFieldAccessors(fields, TextNode);
	  }
	
	  static keyValueFields() {
	    let fields = argsToArray(arguments);
	
	    return this._createFieldAccessors(fields, KeyValueNode);
	  }
	
	  static multipleValueField(field, options) {
	    options = options || {};
	    return this._createFieldAccessors([field], MultipleValueNode, options);
	  }
	
	  static multipleValueOrTextField(field, options) {
	    options = options || {};
	    return this._createFieldAccessors([field], MultipleValueOrTextNode, options);
	  }
	
	  static rangeFields() {
	    let fields = argsToArray(arguments);
	
	    return this._createFieldAccessors(fields, RangeNode);
	  }
	
	  static _createFieldAccessors(fields, nodeClass, options) {
	    return fields.map((field) => {
	      this.prototype[field] = this._fieldTemplate(field, nodeClass, options);
	      return this.prototype[field];
	    });
	  }
	
	  static _fieldTemplate(field, NodeClass, options) {
	    return function () { return new NodeClass(field, this, options); };
	  }
	
	  constructor() { this.criteria = {}; }
	
	  addCriteria(key, value) { // eslint-disable-line consistent-return
	    if (this.criteria[key] === Object(this.criteria[key]) && !_.isArray(this.criteria[key])) {
	      return Util.merge(this.criteria[key], value);
	    }
	
	    this.criteria[key] = value;
	  }
	
	  toHash() { return this.criteria; }
	}
	
	class SearchNode {
	  static operators() {
	    let operators = argsToArray(arguments);
	
	    let operatorTemplate = operator => { // eslint-disable-line func-style
	      return function (value) {
	        let criterion = {};
	
	        criterion[operator] = `${value}`;
	        return this.parent.addCriteria(this.nodeName, criterion);
	      };
	    };
	
	    return operators.map((operator) => {
	      this.prototype[operator] = operatorTemplate(operator);
	    });
	  }
	
	  constructor(nodeName, parent) {
	    this.nodeName = nodeName;
	    this.parent = parent;
	  }
	}
	
	class EqualityNode extends SearchNode {
	  static initClass() {
	    this.operators('is', 'isNot');
	  }
	}
	EqualityNode.initClass();
	
	class PartialMatchNode extends EqualityNode {
	  static initClass() {
	    this.operators('endsWith', 'startsWith');
	  }
	}
	PartialMatchNode.initClass();
	
	class TextNode extends PartialMatchNode {
	  static initClass() {
	    this.operators('contains');
	  }
	}
	TextNode.initClass();
	
	class KeyValueNode extends SearchNode {
	  is(value) { return this.parent.addCriteria(this.nodeName, value); }
	}
	
	class MultipleValueNode extends SearchNode {
	  constructor(nodeName, parent, options) {
	    super(nodeName, parent);
	    this.options = options;
	  }
	
	  allowedValues() { return this.options.allows; }
	
	  in() {
	    let values = argsToArray(arguments);
	
	    values = Util.flatten(values);
	
	    if (__guardMethod__(this, 'allowedValues', o => o.allowedValues())) {
	      let allowedValues = this.allowedValues();
	      let badValues = Util.without(values, allowedValues);
	
	      if (!Util.arrayIsEmpty(badValues)) { throw new Error(`Invalid argument(s) for ${this.nodeName}`); }
	    }
	
	    return this.parent.addCriteria(this.nodeName, values);
	  }
	
	  is(value) { return this.in(value); }
	}
	
	class MultipleValueOrTextNode extends MultipleValueNode {
	  static initClass() {
	    this.delegators('contains', 'endsWith', 'is', 'isNot', 'startsWith');
	  }
	
	  static delegators() {
	    let delegatedMethods = argsToArray(arguments);
	    let delegatorTemplate = methodName => { // eslint-disable-line func-style
	      return function (value) { return this.textNode[methodName](value); };
	    };
	
	    return delegatedMethods.map((methodName) => {
	      this.prototype[methodName] = delegatorTemplate(methodName);
	    });
	  }
	
	  constructor(nodeName, parent, options) {
	    super(nodeName, parent, options);
	    this.textNode = new TextNode(nodeName, parent);
	  }
	}
	MultipleValueOrTextNode.initClass();
	
	class RangeNode extends SearchNode {
	  static initClass() {
	    this.operators('is');
	  }
	
	  between(min, max) {
	    this.min(min);
	    return this.max(max);
	  }
	
	  max(value) {
	    return this.parent.addCriteria(this.nodeName, {max: value});
	  }
	
	  min(value) {
	    return this.parent.addCriteria(this.nodeName, {min: value});
	  }
	}
	RangeNode.initClass();
	
	module.exports = {AdvancedSearch: AdvancedSearch};
	
	function __guardMethod__(obj, methodName, transform) { // eslint-disable-line consistent-return
	  if (typeof obj !== 'undefined' && obj !== null && typeof obj[methodName] === 'function') {
	    return transform(obj, methodName);
	  }
	}


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let Customer = __webpack_require__(84).Customer;
	let CustomerSearch = __webpack_require__(87).CustomerSearch;
	let exceptions = __webpack_require__(20);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class CustomerGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  create(attributes) {
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/customers`, {customer: attributes}).then(this.responseHandler());
	  }
	
	  delete(customerId) {
	    return this.gateway.http.delete(`${this.config.baseMerchantPath()}/customers/${customerId}`);
	  }
	
	  find(customerId) {
	    if (customerId.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found'), null); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/customers/${customerId}`).then(function (response) {
	      return new Customer(response.customer);
	    });
	  }
	
	  update(customerId, attributes) {
	    return this.gateway.http.put(`${this.config.baseMerchantPath()}/customers/${customerId}`, {customer: attributes}).then(this.responseHandler());
	  }
	
	  search(fn, callback) {
	    let search = new CustomerSearch();
	
	    fn(search);
	    return this.createSearchResponse(`${this.config.baseMerchantPath()}/customers/advanced_search_ids`, search, this.pagingFunctionGenerator(search), callback);
	  }
	
	  responseHandler() {
	    return this.createResponseHandler('customer', Customer);
	  }
	
	  pagingFunctionGenerator(search) {
	    return super.pagingFunctionGenerator(search, 'customers', Customer, 'customers', response => response.customers.customer);
	  }
	}
	
	module.exports = {CustomerGateway: wrapPrototype(CustomerGateway, {
	  ignoreMethods: ['search']
	})};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	let ApplePayCard = __webpack_require__(34).ApplePayCard;
	let AndroidPayCard = __webpack_require__(35).AndroidPayCard;
	let AmexExpressCheckoutCard = __webpack_require__(85).AmexExpressCheckoutCard;
	let CreditCard = __webpack_require__(37).CreditCard;
	let PayPalAccount = __webpack_require__(40).PayPalAccount;
	let CoinbaseAccount = __webpack_require__(41).CoinbaseAccount;
	let VenmoAccount = __webpack_require__(86).VenmoAccount;
	let UsBankAccount = __webpack_require__(48).UsBankAccount;
	
	class Customer extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	    this.paymentMethods = [];
	
	    if (attributes.creditCards) {
	      this.creditCards = attributes.creditCards.map((cardAttributes) => new CreditCard(cardAttributes));
	      this._addPaymentMethods(this.creditCards);
	    }
	
	    if (attributes.applePayCards) {
	      this.applePayCards = attributes.applePayCards.map((cardAttributes) => new ApplePayCard(cardAttributes));
	      this._addPaymentMethods(this.applePayCards);
	    }
	
	    if (attributes.androidPayCards) {
	      this.androidPayCards = attributes.androidPayCards.map((cardAttributes) => new AndroidPayCard(cardAttributes));
	      this._addPaymentMethods(this.androidPayCards);
	    }
	
	    if (attributes.amexExpressCheckoutCards) {
	      this.amexExpressCheckoutCards = attributes.amexExpressCheckoutCards.map((cardAttributes) => new AmexExpressCheckoutCard(cardAttributes));
	      this._addPaymentMethods(this.amexExpressCheckoutCards);
	    }
	
	    if (attributes.paypalAccounts) {
	      this.paypalAccounts = attributes.paypalAccounts.map((paypalAccountAttributes) => new PayPalAccount(paypalAccountAttributes));
	      this._addPaymentMethods(this.paypalAccounts);
	    }
	
	    if (attributes.coinbaseAccounts) {
	      this.coinbaseAccounts = attributes.coinbaseAccounts.map((coinbaseAccountAttributes) => new CoinbaseAccount(coinbaseAccountAttributes));
	      this._addPaymentMethods(this.coinbaseAccounts);
	    }
	
	    if (attributes.venmoAccounts) {
	      this.venmoAccounts = attributes.venmoAccounts.map((venmoAccountAttributes) => new VenmoAccount(venmoAccountAttributes));
	      this._addPaymentMethods(this.venmoAccounts);
	    }
	
	    if (attributes.usBankAccounts) {
	      this.usBankAccounts = attributes.usBankAccounts.map((usBankAccountAttributes) => new UsBankAccount(usBankAccountAttributes));
	      this._addPaymentMethods(this.usBankAccounts);
	    }
	  }
	
	  _addPaymentMethods(paymentMethods) {
	    return paymentMethods.map((paymentMethod) =>
	      this.paymentMethods.push(paymentMethod));
	  }
	}
	
	module.exports = {Customer: Customer};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class AmexExpressCheckoutCard extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {AmexExpressCheckoutCard: AmexExpressCheckoutCard};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class VenmoAccount extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {VenmoAccount: VenmoAccount};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AdvancedSearch = __webpack_require__(82).AdvancedSearch;
	
	class CustomerSearch extends AdvancedSearch {
	  static initClass() {
	    this.textFields(
	      'addressCountryName',
	      'addressExtendedAddress',
	      'addressFirstName',
	      'addressLastName',
	      'addressLocality',
	      'addressPostalCode',
	      'addressRegion',
	      'addressStreetAddress',
	      'cardholderName',
	      'company',
	      'email',
	      'fax',
	      'firstName',
	      'id',
	      'lastName',
	      'paymentMethodToken',
	      'paypalAccountEmail',
	      'phone',
	      'website',
	      'paymentMethodTokenWithDuplicates'
	    );
	
	    this.equalityFields('creditCardExpirationDate');
	    this.partialMatchFields('creditCardNumber');
	    this.multipleValueField('ids');
	    this.rangeFields('createdAt');
	  }
	}
	CustomerSearch.initClass();
	
	module.exports = {CustomerSearch: CustomerSearch};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class DisbursementGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  transactions(disbursement) {
	    let transactionIds = disbursement.transactionIds;
	
	    return new Promise((resolve, reject) => {
	      this.gateway.transaction.search((search) => {
	        search.ids().in(transactionIds);
	      }, (err, response) => {
	        if (err) {
	          reject(err);
	        } else {
	          resolve(response);
	        }
	      });
	    });
	  }
	}
	
	module.exports = {DisbursementGateway: wrapPrototype(DisbursementGateway)};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Discount = __webpack_require__(90).Discount;
	let Gateway = __webpack_require__(31).Gateway;
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class DiscountGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  all() {
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/discounts`).then(this.createResponseHandler('discount', Discount));
	  }
	}
	
	module.exports = {DiscountGateway: wrapPrototype(DiscountGateway)};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class Discount extends AttributeSetter {}
	
	module.exports = {Discount: Discount};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let _ = __webpack_require__(56);
	let Gateway = __webpack_require__(31).Gateway;
	let Dispute = __webpack_require__(43).Dispute;
	let DisputeSearch = __webpack_require__(92).DisputeSearch;
	let InvalidKeysError = __webpack_require__(20).InvalidKeysError;
	let NotFoundError = __webpack_require__(20).NotFoundError;
	let PaginatedResponse = __webpack_require__(93).PaginatedResponse;
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class DisputeGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  accept(id) {
	    let notFoundError = new NotFoundError("dispute with id '" + id + "' not found");
	
	    if (id == null || id.trim() === '') {
	      return Promise.reject(notFoundError);
	    }
	
	    return this.gateway.http.put(`${this.config.baseMerchantPath()}/disputes/${id}/accept`)
	      .then(this.createResponseHandler('dispute', Dispute))
	      .catch(this.createRejectionHandler(notFoundError));
	  }
	
	  addTextEvidence(id, contentOrRequest) {
	    const isRequest = contentOrRequest != null && typeof contentOrRequest === 'object';
	    const request = isRequest ? contentOrRequest : {content: contentOrRequest};
	    let notFoundError = new NotFoundError("dispute with id '" + id + "' not found");
	
	    if (id == null || id.trim() === '') {
	      return Promise.reject(notFoundError);
	    }
	
	    if (request.content == null || request.content.trim() === '') {
	      return Promise.reject(new InvalidKeysError('content cannot be null or empty'));
	    }
	
	    const evidence = {
	      comments: request.content
	    };
	
	    if (request.sequenceNumber != null) {
	      if (String(request.sequenceNumber) !== String(parseInt(request.sequenceNumber, 10))) {
	        return Promise.reject(new InvalidKeysError('sequenceNumber must be a number'));
	      }
	      evidence.sequence_number = parseInt(request.sequenceNumber, 10);  // eslint-disable-line camelcase
	    }
	
	    if (request.tag != null) {
	      if (typeof request.tag !== 'string') {
	        return Promise.reject(new InvalidKeysError('tag must be a string'));
	      } else if (request.tag.trim() === '') {
	        return Promise.reject(new InvalidKeysError('tag cannot be empty'));
	      }
	      evidence.category = request.tag;
	    }
	
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/disputes/${id}/evidence`, {
	      evidence
	    })
	      .then(this.createResponseHandler())
	      .catch(this.createRejectionHandler(notFoundError));
	  }
	
	  addFileEvidence(disputeId, documentId) {
	    let notFoundError = new NotFoundError("dispute with id '" + disputeId + "' not found");
	
	    if (disputeId == null || disputeId.trim() === '') {
	      return Promise.reject(notFoundError);
	    }
	
	    if (documentId == null || documentId.trim() === '') {
	      return Promise.reject(new NotFoundError("document with id '" + documentId + "' not found"));
	    }
	
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/disputes/${disputeId}/evidence`, {
	      document_upload_id: documentId // eslint-disable-line camelcase
	    })
	      .then(this.createResponseHandler())
	      .catch(this.createRejectionHandler(notFoundError));
	  }
	
	  finalize(id) {
	    let notFoundError = new NotFoundError(`dispute with id '${id}' not found`);
	
	    if (id == null || id.trim() === '') {
	      return Promise.reject(notFoundError);
	    }
	
	    return this.gateway.http.put(`${this.config.baseMerchantPath()}/disputes/${id}/finalize`)
	      .then(this.createResponseHandler())
	      .catch(this.createRejectionHandler(notFoundError));
	  }
	
	  find(id) {
	    let notFoundError = new NotFoundError(`dispute with id '${id}' not found`);
	
	    if (id == null || id.trim() === '') {
	      return Promise.reject(notFoundError);
	    }
	
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/disputes/${id}`)
	      .then(this.createResponseHandler('dispute', Dispute))
	      .catch(this.createRejectionHandler(notFoundError));
	  }
	
	  removeEvidence(disputeId, evidenceId) {
	    let notFoundError = new NotFoundError("evidence with id '" + evidenceId + "' for dispute with id '" + disputeId + "' not found");
	
	    if (disputeId == null || disputeId.trim() === '' || evidenceId == null || evidenceId.trim() === '') {
	      return Promise.reject(notFoundError);
	    }
	
	    return this.gateway.http.delete(`${this.config.baseMerchantPath()}/disputes/${disputeId}/evidence/${evidenceId}`)
	      .then(this.createResponseHandler())
	      .catch(this.createRejectionHandler(notFoundError));
	  }
	
	  search(searchFunction, callback) {
	    let search = new DisputeSearch();
	
	    searchFunction(search);
	
	    let response = new PaginatedResponse(this.fetchDisputes.bind(this), {
	      search: search.toHash()
	    });
	
	    if (callback != null) {
	      return response.all(callback);
	    }
	
	    response.ready();
	    return response.stream;
	  }
	
	  fetchDisputes(pageNumber, search, callback) {
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/disputes/advanced_search?page=${pageNumber}`, {search: search}, (err, response) => {
	      if (err) {
	        return callback(err);
	      }
	
	      let totalItems = response.disputes.totalItems;
	      let pageSize = response.disputes.pageSize;
	      let disputes = response.disputes.dispute;
	
	      if (!disputes) {
	        disputes = [null];
	      } else if (!_.isArray(disputes)) {
	        disputes = [disputes];
	      }
	
	      return callback(null, totalItems, pageSize, disputes);
	    });
	  }
	
	  createRejectionHandler(notFoundError) {
	    return function (err) {
	      if (err.type === 'notFoundError') {
	        err = notFoundError;
	      }
	
	      return Promise.reject(err);
	    };
	  }
	}
	
	module.exports = {DisputeGateway: wrapPrototype(DisputeGateway, {
	  ignoreMethods: ['search', 'fetchDisputes']
	})};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AdvancedSearch = __webpack_require__(82).AdvancedSearch;
	
	class DisputeSearch extends AdvancedSearch {
	  static initClass() {
	    this.textFields(
	      'caseNumber',
	      'id',
	      'referenceNumber',
	      'transactionId'
	    );
	    this.multipleValueField('kind');
	    this.multipleValueField('merchantAccountId');
	    this.multipleValueField('reason');
	    this.multipleValueField('reasonCode');
	    this.multipleValueField('status');
	    this.multipleValueField('transactionSource');
	    this.rangeFields(
	      'amountDisputed',
	      'amountWon',
	      'receivedDate',
	      'replyByDate'
	    );
	  }
	}
	DisputeSearch.initClass();
	
	module.exports = {DisputeSearch: DisputeSearch};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let PaginatedResponseStream = __webpack_require__(94).PaginatedResponseStream;
	
	class PaginatedResponse {
	  constructor(pagingFunction, options) {
	    this.pagingFunction = pagingFunction;
	    this.stream = new PaginatedResponseStream(this, options);
	  }
	
	  all(callback) {
	    var results = [];
	
	    this.stream.on('data', function (data) {
	      return results.push(data);
	    });
	    this.stream.on('end', function () {
	      return callback(null, results);
	    });
	    this.stream.on('error', function (err) {
	      return callback(err);
	    });
	    return this.stream.ready();
	  }
	
	  ready() {
	    return this.stream.ready();
	  }
	}
	
	module.exports = {PaginatedResponse: PaginatedResponse};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Readable = __webpack_require__(17).Readable || __webpack_require__(58).Readable;
	
	class PaginatedResponseStream extends Readable {
	  constructor(paginatedResponse, options) {
	    super({objectMode: true});
	
	    options = options || {};
	
	    this.paginatedResponse = paginatedResponse;
	    this.pageSize = 0;
	    this.currentPage = 0;
	    this.index = 0;
	    this.totalItems = 0;
	    this.items = [];
	    this.search = options.search;
	  }
	
	  nextItem() {
	    if (this.currentPage === 0 || this.index % this.pageSize === 0 && this.index < this.totalItems) {
	      let callback = (err, totalItems, pageSize, items) => {
	        if (err) {
	          this.emit('error', err);
	          return;
	        }
	
	        this.totalItems = totalItems;
	        this.pageSize = pageSize;
	        this.items = items;
	        this.index++;
	        this.push(this.items.shift());
	      };
	
	      this.currentPage++;
	
	      if (this.search) {
	        this.paginatedResponse.pagingFunction(this.currentPage, this.search, callback);
	      } else {
	        this.paginatedResponse.pagingFunction(this.currentPage, callback);
	      }
	    } else if (this.index >= this.totalItems) {
	      this.push(null);
	    } else {
	      this.index++;
	      this.push(this.items.shift());
	    }
	  }
	
	  ready() {
	    this.readyToStart = true;
	    this.emit('ready');
	  }
	
	  _read() {
	    if (this.readyToStart) {
	      this.nextItem();
	    } else {
	      this.on('ready', () => this.nextItem());
	    }
	  }
	}
	
	module.exports = {PaginatedResponseStream: PaginatedResponseStream};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let DocumentUpload = __webpack_require__(96).DocumentUpload;
	let Gateway = __webpack_require__(31).Gateway;
	let InvalidKeysError = __webpack_require__(20).InvalidKeysError;
	let Readable = __webpack_require__(17).Readable;
	let Util = __webpack_require__(22).Util;
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class DocumentUploadGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  create(options) {
	    if (!options.file || !(options.file instanceof Readable)) {
	      return Promise.reject(new InvalidKeysError('file must be a Readable stream'));
	    }
	
	    let params = {
	      file: {
	        path: options.file.path
	      },
	      kind: options.kind
	    };
	    let invalidKeysError = Util.verifyKeys(this._createSignature(), params);
	
	    if (invalidKeysError) {
	      return Promise.reject(invalidKeysError);
	    }
	
	    return this.gateway.http.postMultipart(`${this.config.baseMerchantPath()}/document_uploads`, {
	      'document_upload[kind]': params.kind
	    }, params.file)
	      .then(this.createResponseHandler('documentUpload', DocumentUpload));
	  }
	
	  _createSignature() {
	    return {
	      valid: ['kind', 'file[path]']
	    };
	  }
	}
	
	module.exports = {DocumentUploadGateway: wrapPrototype(DocumentUploadGateway)};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class DocumentUpload extends AttributeSetter {
	  static initClass() {
	    this.Kind = {
	      EvidenceDocument: 'evidence_document'
	    };
	  }
	}
	DocumentUpload.initClass();
	
	module.exports = {DocumentUpload: DocumentUpload};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let _ = __webpack_require__(56);
	let Gateway = __webpack_require__(31).Gateway;
	let MerchantAccount = __webpack_require__(98).MerchantAccount;
	let PaginatedResponse = __webpack_require__(93).PaginatedResponse;
	let exceptions = __webpack_require__(20);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class MerchantAccountGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  create(attributes) {
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/merchant_accounts/create_via_api`, {merchantAccount: attributes}).then(this.responseHandler());
	  }
	
	  update(id, attributes) {
	    return this.gateway.http.put(`${this.config.baseMerchantPath()}/merchant_accounts/${id}/update_via_api`, {merchantAccount: attributes}).then(this.responseHandler());
	  }
	
	  find(id) {
	    if (id.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found'), null); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/merchant_accounts/${id}`).then(function (response) {
	      return new MerchantAccount(response.merchantAccount);
	    });
	  }
	
	  responseHandler() {
	    return this.createResponseHandler('merchantAccount', MerchantAccount);
	  }
	
	  all(callback) {
	    let response = new PaginatedResponse(this.fetchMerchantAccounts.bind(this));
	
	    if (callback != null) {
	      return response.all(callback);
	    }
	
	    response.ready();
	    return response.stream;
	  }
	
	  fetchMerchantAccounts(pageNumber, callback) {
	    return this.gateway.http.get(this.config.baseMerchantPath() + '/merchant_accounts?page=' + pageNumber, (err, response) => {
	      let body, merchantAccounts, pageSize, ref, totalItems;
	
	      if (err) {
	        return callback(err);
	      }
	
	      body = response.merchantAccounts;
	      ref = response.merchantAccounts;
	      totalItems = ref.totalItems;
	      pageSize = ref.pageSize;
	      merchantAccounts = body.merchantAccount;
	      if (!_.isArray(merchantAccounts)) {
	        merchantAccounts = [merchantAccounts];
	      }
	      return callback(null, totalItems, pageSize, merchantAccounts);
	    });
	  }
	
	  createForCurrency(attributes) {
	    return this.gateway.http.post(this.config.baseMerchantPath() + '/merchant_accounts/create_for_currency', {
	      merchantAccount: attributes
	    }).then(this.createForCurrencyResponseHandler());
	  }
	
	  createForCurrencyResponseHandler() {
	    let handler = this.createResponseHandler(null, null);
	
	    return function (payload) {
	      return handler(payload).then((response) => {
	        if (response.success) {
	          response.merchantAccount = new MerchantAccount(response.response.merchantAccount);
	          delete response.response;
	        }
	        return response;
	      });
	    };
	  }
	}
	
	module.exports = {MerchantAccountGateway: wrapPrototype(MerchantAccountGateway, {
	  ignoreMethods: ['all', 'fetchMerchantAccounts']
	})};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class MerchantAccount extends AttributeSetter {
	  static initClass() {
	    this.Status = {
	      Pending: 'pending',
	      Active: 'active',
	      Suspended: 'suspended'
	    };
	
	    this.FundingDestination = {
	      Bank: 'bank',
	      Email: 'email',
	      MobilePhone: 'mobile_phone'
	    };
	  }
	
	  constructor(attributes) {
	    super(attributes);
	    if (attributes.masterMerchantAccount) {
	      this.masterMerchantAccount = new MerchantAccount(attributes.masterMerchantAccount);
	    }
	  }
	}
	MerchantAccount.initClass();
	
	module.exports = {MerchantAccount: MerchantAccount};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let Merchant = __webpack_require__(100).Merchant;
	let OAuthCredentials = __webpack_require__(101).OAuthCredentials;
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class MerchantGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  create(attributes) {
	    return this.gateway.http.post('/merchants/create_via_api', {merchant: attributes}).then(this.responseHandler());
	  }
	
	  responseHandler() {
	    let handler = this.createResponseHandler(null, null);
	
	    return function (payload) {
	      return handler(payload).then((response) => {
	        if (response.success) {
	          response.merchant = new Merchant(response.response.merchant);
	          response.credentials = new OAuthCredentials(response.response.credentials);
	          delete response.response;
	        }
	        return response;
	      });
	    };
	  }
	}
	
	module.exports = {MerchantGateway: wrapPrototype(MerchantGateway)};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	let MerchantAccount = __webpack_require__(98).MerchantAccount;
	
	class Merchant extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	
	    if (attributes.merchantAccounts) {
	      this.merchantAccounts = attributes.merchantAccounts.map((merchantAccountAttributes) => new MerchantAccount(merchantAccountAttributes));
	    }
	  }
	}
	
	module.exports = {Merchant: Merchant};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class OAuthCredentials extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {OAuthCredentials: OAuthCredentials};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let OAuthCredentials = __webpack_require__(101).OAuthCredentials;
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	let Util = __webpack_require__(22).Util;
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class OAuthGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  createTokenFromCode(attributes) {
	    attributes.grantType = 'authorization_code';
	    return this.gateway.http.post('/oauth/access_tokens', attributes).then(this.responseHandler());
	  }
	
	  createTokenFromRefreshToken(attributes) {
	    attributes.grantType = 'refresh_token';
	    return this.gateway.http.post('/oauth/access_tokens', attributes).then(this.responseHandler());
	  }
	
	  revokeAccessToken(accessToken) {
	    return this.gateway.http.post('/oauth/revoke_access_token', {token: accessToken}).then(this.createResponseHandler('result', AttributeSetter));
	  }
	
	  responseHandler() {
	    return this.createResponseHandler('credentials', OAuthCredentials);
	  }
	
	  connectUrl(rawParams) {
	    const params = Object.assign({clientId: this.config.clientId}, rawParams);
	
	    return this.config.baseUrl() + '/oauth/connect?' + this.buildQuery(params);
	  }
	
	  buildQuery(params) {
	    params = Util.convertObjectKeysToUnderscores(params);
	
	    let paramsArray = this.buildSubQuery('user', params.user);
	
	    paramsArray.push.apply(paramsArray, this.buildSubQuery('business', params.business));
	    paramsArray.push.apply(paramsArray, this.buildSubArrayQuery('payment_methods', params.payment_methods));
	    delete params.user;
	    delete params.business;
	    delete params.payment_methods;
	
	    paramsArray.push.apply(paramsArray, (() => {
	      let result = [];
	
	      for (let key in params) {
	        if (!params.hasOwnProperty(key)) {
	          continue;
	        }
	        let val = params[key];
	
	        result.push([key, val]);
	      }
	      return result;
	    })());
	
	    let queryStringParts = paramsArray.map((paramParts) => {
	      let key = paramParts[0];
	      let value = paramParts[1];
	
	      return `${this._encodeValue(key)}=${this._encodeValue(value)}`;
	    });
	
	    return queryStringParts.join('&');
	  }
	
	  buildSubQuery(key, subParams) {
	    let arr = [];
	
	    for (let subKey in subParams) {
	      if (!subParams.hasOwnProperty(subKey)) {
	        continue;
	      }
	      let value = subParams[subKey];
	
	      arr.push([`${key}[${subKey}]`, value]);
	    }
	
	    return arr;
	  }
	
	  _encodeValue(value) {
	    return encodeURIComponent(value)
	      .replace(/[!'()]/g, escape)
	      .replace(/\*/g, '%2A');
	  }
	
	  buildSubArrayQuery(key, values) {
	    return (values || []).map(value => [`${key}[]`, value]);
	  }
	}
	
	module.exports = {OAuthGateway: wrapPrototype(OAuthGateway)};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let ApplePayCard = __webpack_require__(34).ApplePayCard;
	let AndroidPayCard = __webpack_require__(35).AndroidPayCard;
	let CreditCard = __webpack_require__(37).CreditCard;
	let PayPalAccount = __webpack_require__(40).PayPalAccount;
	let CoinbaseAccount = __webpack_require__(41).CoinbaseAccount;
	let UnknownPaymentMethod = __webpack_require__(104).UnknownPaymentMethod;
	let PaymentMethodNonce = __webpack_require__(105).PaymentMethodNonce;
	let UsBankAccount = __webpack_require__(48).UsBankAccount;
	let VenmoAccount = __webpack_require__(86).VenmoAccount;
	let VisaCheckoutCard = __webpack_require__(51).VisaCheckoutCard;
	let MasterpassCard = __webpack_require__(52).MasterpassCard;
	let Util = __webpack_require__(22).Util;
	let exceptions = __webpack_require__(20);
	let querystring = __webpack_require__(106);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class PaymentMethodGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  responseHandler() {
	    let responseMapping = {
	      paypalAccount: PayPalAccount,
	      coinbaseAccount: CoinbaseAccount,
	      creditCard: CreditCard,
	      applePayCard: ApplePayCard,
	      androidPayCard: AndroidPayCard,
	      paymentMethodNonce: PaymentMethodNonce
	    };
	    let handler = this.createResponseHandler(responseMapping, null);
	
	    return function (payload) {
	      return handler(payload).then(function (response) {
	        let parsedResponse = PaymentMethodGateway.parsePaymentMethod(response);
	
	        if (parsedResponse instanceof PaymentMethodNonce) {
	          response.paymentMethodNonce = parsedResponse;
	        } else {
	          response.paymentMethod = parsedResponse;
	        }
	
	        return response;
	      });
	    };
	  }
	
	  create(attributes) {
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/payment_methods`, {paymentMethod: attributes}).then(this.responseHandler());
	  }
	
	  find(token) {
	    if (token.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found'), null); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/payment_methods/any/${token}`).then((response) => {
	      return PaymentMethodGateway.parsePaymentMethod(response);
	    });
	  }
	
	  update(token, attributes) {
	    if (token.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found'), null); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.put(`${this.config.baseMerchantPath()}/payment_methods/any/${token}`, {paymentMethod: attributes}).then(this.responseHandler());
	  }
	
	  grant(token, attributes) {
	    if (token.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found'), null); // eslint-disable-line new-cap
	    }
	
	    let grantOptions = {
	      sharedPaymentMethodToken: token
	    };
	
	    if (typeof attributes === 'boolean') {
	      attributes = {allow_vaulting: attributes}; // eslint-disable-line camelcase
	    }
	
	    grantOptions = Util.merge(grantOptions, attributes);
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/payment_methods/grant`, {
	      payment_method: grantOptions // eslint-disable-line camelcase
	    }).then(this.responseHandler());
	  }
	
	  revoke(token) {
	    if (token.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found'), null); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/payment_methods/revoke`, {
	      payment_method: { // eslint-disable-line camelcase
	        sharedPaymentMethodToken: token
	      }
	    }).then(this.responseHandler());
	  }
	
	  static parsePaymentMethod(response) {
	    if (response.creditCard) {
	      return new CreditCard(response.creditCard);
	    } else if (response.paypalAccount) {
	      return new PayPalAccount(response.paypalAccount);
	    } else if (response.applePayCard) {
	      return new ApplePayCard(response.applePayCard);
	    } else if (response.androidPayCard) {
	      return new AndroidPayCard(response.androidPayCard);
	    } else if (response.coinbaseAccount) {
	      return new CoinbaseAccount(response.coinbaseAccount);
	    } else if (response.paymentMethodNonce) {
	      return new PaymentMethodNonce(response.paymentMethodNonce);
	    } else if (response.usBankAccount) {
	      return new UsBankAccount(response.usBankAccount);
	    } else if (response.venmoAccount) {
	      return new VenmoAccount(response.venmoAccount);
	    } else if (response.visaCheckoutCard) {
	      return new VisaCheckoutCard(response.visaCheckoutCard);
	    } else if (response.masterpassCard) {
	      return new MasterpassCard(response.masterpassCard);
	    }
	
	    return new UnknownPaymentMethod(response);
	  }
	
	  delete(token, options) {
	    let queryParam, invalidKeysError;
	
	    if (typeof options === 'function') {
	      options = null;
	    }
	    invalidKeysError = Util.verifyKeys(this._deleteSignature(), options);
	
	    if (invalidKeysError) {
	      return Promise.reject(invalidKeysError);
	    }
	    queryParam = options != null ? '?' + querystring.stringify(Util.convertObjectKeysToUnderscores(options)) : '';
	
	    return this.gateway.http.delete(this.config.baseMerchantPath() + '/payment_methods/any/' + token + queryParam);
	  }
	
	  _deleteSignature() {
	    return {
	      valid: ['revokeAllGrants']
	    };
	  }
	}
	
	module.exports = {PaymentMethodGateway: wrapPrototype(PaymentMethodGateway)};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class UnknownPaymentMethod extends AttributeSetter {
	  constructor(attributes) {
	    let name = ((() => {
	      let result = [];
	
	      for (let keys of Object.keys(attributes)) {
	        result.push(keys);
	      }
	      return result;
	    })())[0];
	
	    if (typeof attributes[name] === 'object') {
	      attributes[name].imageUrl = 'https://assets.braintreegateway.com/payment_method_logo/unknown.png';
	    }
	    super(attributes[name]);
	  }
	}
	
	module.exports = {UnknownPaymentMethod: UnknownPaymentMethod};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	let ThreeDSecureInfo = __webpack_require__(47).ThreeDSecureInfo;
	
	class PaymentMethodNonce extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	    if (attributes.threeDSecureInfo) { this.threeDSecureInfo = new ThreeDSecureInfo(attributes.threeDSecureInfo); }
	  }
	}
	
	module.exports = {PaymentMethodNonce: PaymentMethodNonce};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable */
	/*
	 * querystring.js
	 *  - node.js module providing "parse" and "stringify" methods
	 *    to turn query strings into objects and to turn objects
	 *    into query string, respectively
	 *
	 *  This module is basically a stub loader. It will load both
	 *  sub-modules and put the respective exports under the same
	 *  namespace.  You may choose to load the sub-modules
	 *  individually if you only need the functionality of one.
	 *
	 * Chad Etzel
	 *
	 * Based on YUI "querystring-parse.js" module
	 * http://github.com/isaacs/yui3/tree/master/src/querystring/js
	 *
	 * Copyright (c) 2009, Yahoo! Inc. and Chad Etzel
	 * BSD License (see LICENSE.md for info)
	 *
	 */
	
	[
	  __webpack_require__(107),
	  __webpack_require__(109)
	].forEach(function (q) {
	  for (var i in q) if (q.hasOwnProperty(i)) exports[i] = q[i];
	});


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable */
	/*
	 * querystring-parse.js
	 *  - node.js module providing "parse" method to turn query strings into js objects
	 *
	 * Chad Etzel
	 *
	 * Based on YUI "querystring-parse.js" module
	 * http://github.com/isaacs/yui3/tree/master/src/querystring/js
	 *
	 * Copyright (c) 2009, Yahoo! Inc. and Chad Etzel
	 * BSD License (see LICENSE.md for info)
	 */
	
	
	var util = __webpack_require__(66),
	  braintree_util = __webpack_require__(108);
	
	exports.parse = querystring_parse;
	
	/**
	 * <p>The querystring module adds support for serializing JavaScript objects into
	 * query strings and parsing JavaScript objects from query strings format.</p>
	 *
	 * <p>The <code>querystring</code> module is a rollup of <code>querystring-parse</code> and
	 * <code>querystring-stringify</code>.</p>
	 *
	 * <p>As their names suggest, <code>querystring-parse</code> adds support for parsing
	 * Query String data (querystring.parse) and <code>querystring-stringify</code> for serializing
	 * JavaScript data into Query Strings (querystring.stringify).  You may choose to
	 * include either of the submodules individually if you don't need the
	 * complementary functionality, or include the rollup for both.</p>
	 *
	 * @module querystring
	 */
	
	/**
	 * Provides parse method to accept Query Strings and return native
	 * JavaScript objects.
	 *
	 * @module querystring
	 * @submodule querystring-parse
	 * @for querystring
	 * @static
	 */
	function querystring_parse (qs, sep, eq, unesc) {
	  return qs.split(sep || "&")
	    .map(pieceParser(eq || "=", unesc || unescape))
	    .reduce(mergeParams, {});
	};
	
	function unescape (s) {
	    return decodeURIComponent(s.replace(/\+/g, ' '));
	};
	
	
	// Parse a key=val string.
	// These can get pretty hairy
	// example flow:
	// parse(foo[bar][][bla]=baz)
	// return parse(foo[bar][][bla],"baz")
	// return parse(foo[bar][], {bla : "baz"})
	// return parse(foo[bar], [{bla:"baz"}])
	// return parse(foo, {bar:[{bla:"baz"}]})
	// return {foo:{bar:[{bla:"baz"}]}}
	function pieceParser (eq, unesc) {
	  return function parsePiece (key, val) {
	    if (arguments.length !== 2) {
	      // key=val, called from the map/reduce
	      key = key.split(eq);
	      return parsePiece(
	        unesc(key.shift()),
	        unesc(key.join(eq))
	      );
	    }
	    key = key.replace(/^\s+|\s+$/g, '');
	    if (braintree_util.isString(val)) {
	      val = val.replace(/^\s+|\s+$/g, '');
	      // convert numerals to numbers
	      if (!isNaN(val)) {
	        var numVal = +val;
	        if (val === numVal.toString(10)) val = numVal;
	      }
	    }
	    var sliced = /(.*)\[([^\]]*)\]$/.exec(key);
	    if (!sliced) {
	      var ret = {};
	      if (key) ret[key] = val;
	      return ret;
	    }
	    // ["foo[][bar][][baz]", "foo[][bar][]", "baz"]
	    var tail = sliced[2],
	      head = sliced[1];
	
	    // array: key[]=val
	    if (!tail) return parsePiece(head, [val]);
	
	    // obj: key[subkey]=val
	    var ret = {};
	    ret[tail] = val;
	    return parsePiece(head, ret);
	  };
	};
	
	// the reducer function that merges each query piece together into one set of params
	function mergeParams (params, addition) {
		var ret;
	
		if (!params){
			// if it's uncontested, then just return the addition.
			ret = addition;
		} else if (braintree_util.isArray(params)) {
			// if the existing value is an array, then concat it.
			ret = params.concat(addition);
		} else if (!braintree_util.isObject(params) || !braintree_util.isObject(addition)) {
			// if the existing value is not an array, and either are not objects, arrayify it.
			ret = [params].concat(addition);
		} else {
			// else merge them as objects, which is a little more complex
			ret = mergeObjects(params, addition);
		}
		return ret;
	};
	
	
	// Merge two *objects* together. If this is called, we've already ruled
	// out the simple cases, and need to do the for-in business.
	function mergeObjects (params, addition) {
	  for (var i in addition) if (i && addition.hasOwnProperty(i)) {
	    params[i] = mergeParams(params[i], addition[i]);
	  }
	  return params;
	};


/***/ }),
/* 108 */
/***/ (function(module, exports) {

	/* eslint-disable */
	/*
	 * util.js
	 *  - utility helper functions for querystring module
	 *
	 * Chad Etzel
	 *
	 * Copyright (c) 2009, Yahoo! Inc. and Chad Etzel
	 * BSD License (see LICENSE.md for info)
	 *
	 */
	exports.is = is;
	exports.isNull = isNull;
	exports.isUndefined = isUndefined;
	exports.isString = isString;
	exports.isNumber = isNumber;
	exports.isBoolean = isBoolean;
	exports.isArray = isArray;
	exports.isObject = isObject;
	
	
	function is (type, obj) {
	  return Object.prototype.toString.call(obj) === '[object '+type+']';
	}
	
	function isArray (obj) {
	  return is("Array", obj);
	}
	
	function isObject (obj) {
	  return is("Object", obj);
	}
	
	function isString (obj) {
	  return is("String", obj);
	}
	
	function isNumber (obj) {
	  return is("Number", obj);
	}
	
	function isBoolean (obj) {
	  return is("Boolean", obj);
	}
	
	function isNull (obj) {
	  return typeof obj === "object" && !obj;
	}
	
	function isUndefined (obj) {
	  return typeof obj === "undefined";
	}


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable */
	/*
	 * querystring-stringify.js
	 *   - node.js module providing 'stringify' method for converting objects to query strings.
	 *
	 * Chad Etzel
	 *
	 * Based on YUI "querystring-stringify.js" module
	 * http://github.com/isaacs/yui3/tree/master/src/querystring/js
	 *
	 * Copyright (c) 2009, Yahoo! Inc. and Chad Etzel
	 * BSD License (see LICENSE.md for info)
	 *
	 */
	
	var util = __webpack_require__(108);
	
	exports.stringify = querystring_stringify;
	
	var stack = [];
	/**
	 * <p>Converts an arbitrary value to a Query String representation.</p>
	 *
	 * <p>Objects with cyclical references will trigger an exception.</p>
	 *
	 * @method stringify
	 * @param obj {Variant} any arbitrary value to convert to query string
	 * @param sep {String} (optional) Character that should join param k=v pairs together. Default: "&"
	 * @param eq  {String} (optional) Character that should join keys to their values. Default: "="
	 * @param name {String} (optional) Name of the current key, for handling children recursively.
	 * @param escape {Function} (optional) Function for escaping. Default: encodeURIComponent
	 */
	function querystring_stringify (obj, sep, eq, name, escape) {
	  sep = sep || "&";
	  eq = eq || "=";
	  escape = escape || encodeURIComponent;
	
	  if (util.isNull(obj) || util.isUndefined(obj) || typeof(obj) === 'function') {
	    return name ? escape(name) + eq : '';
	  }
	
	  if (util.isBoolean(obj)) obj = +obj;
	  if (util.isNumber(obj) || util.isString(obj)) {
	    return escape(name) + eq + escape(obj);
	  }
	  if (util.isArray(obj)) {
	    var s = [];
	    name = name+'[]';
	    for (var i = 0, l = obj.length; i < l; i ++) {
	      s.push( querystring_stringify(obj[i], sep, eq, name, escape) );
	    }
	    return s.join(sep);
	  }
	
	  // Check for cyclical references in nested objects
	  for (var i = stack.length - 1; i >= 0; --i) if (stack[i] === obj) {
	    throw new Error("querystring_stringify. Cyclical reference");
	  }
	
	  stack.push(obj);
	
	  var s = [];
	  var begin = name ? name + '[' : '';
	  var end = name ? ']' : '';
	  for (var i in obj) if (obj.hasOwnProperty(i)) {
	    var n = begin + i + end;
	    s.push(querystring_stringify(obj[i], sep, eq, n, escape));
	  }
	
	  stack.pop();
	
	  s = s.join(sep);
	  if (!s && name) return name + "=";
	  return s;
	};
	


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let PaymentMethodNonce = __webpack_require__(105).PaymentMethodNonce;
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class PaymentMethodNonceGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  responseHandler() {
	    let handler = this.createResponseHandler('payment_method_nonce', PaymentMethodNonce);
	
	    return function (payload) {
	      return handler(payload).then((response) => {
	        response.paymentMethodNonce = new PaymentMethodNonce(response.paymentMethodNonce);
	        return response;
	      });
	    };
	  }
	
	  create(paymentMethodToken) {
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/payment_methods/${paymentMethodToken}/nonces`, {}).then(this.responseHandler());
	  }
	
	  find(paymentMethodNonce) {
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/payment_method_nonces/${paymentMethodNonce}`).then((response) => {
	      return new PaymentMethodNonce(response.paymentMethodNonce);
	    });
	  }
	}
	
	module.exports = {PaymentMethodNonceGateway: wrapPrototype(PaymentMethodNonceGateway)};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let PayPalAccount = __webpack_require__(40).PayPalAccount;
	let exceptions = __webpack_require__(20);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class PayPalAccountGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  find(token) {
	    if (token.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found'), null); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/payment_methods/paypal_account/${token}`).then((response) => {
	      return new PayPalAccount(response.paypalAccount);
	    });
	  }
	
	  update(token, attributes) {
	    return this.gateway.http.put(`${this.config.baseMerchantPath()}/payment_methods/paypal_account/${token}`, {paypalAccount: attributes}).then(this.responseHandler());
	  }
	
	  delete(token) {
	    let path = `${this.config.baseMerchantPath()}/payment_methods/paypal_account/${token}`;
	
	    return this.gateway.http.delete(path);
	  }
	
	  responseHandler() {
	    return this.createResponseHandler('paypalAccount', PayPalAccount);
	  }
	}
	
	module.exports = {PayPalAccountGateway: wrapPrototype(PayPalAccountGateway)};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let Plan = __webpack_require__(113).Plan;
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class PlanGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  all() {
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/plans`).then(this.createResponseHandler('plan', Plan));
	  }
	}
	
	module.exports = {PlanGateway: wrapPrototype(PlanGateway)};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class Plan extends AttributeSetter {}
	
	module.exports = {Plan: Plan};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let Util = __webpack_require__(22).Util;
	let SettlementBatchSummary = __webpack_require__(115).SettlementBatchSummary;
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class SettlementBatchSummaryGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  generate(criteria) {
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/settlement_batch_summary`, {
	      settlementBatchSummary: criteria
	    }).then(this.responseHandler(criteria));
	  }
	
	  responseHandler(criteria) {
	    let handler = this.createResponseHandler('settlementBatchSummary', SettlementBatchSummary);
	
	    return (payload) => {
	      return handler(payload).then((response) => {
	        return this.underscoreCustomField(criteria, response);
	      });
	    };
	  }
	
	  underscoreCustomField(criteria, response) {
	    if (response.success && 'groupByCustomField' in criteria) {
	      let camelCustomField = Util.toCamelCase(criteria.groupByCustomField);
	
	      for (let record of response.settlementBatchSummary.records) {
	        record[criteria.groupByCustomField] = record[camelCustomField];
	        record[camelCustomField] = null;
	      }
	    }
	
	    return response;
	  }
	}
	
	module.exports = {SettlementBatchSummaryGateway: wrapPrototype(SettlementBatchSummaryGateway)};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class SettlementBatchSummary extends AttributeSetter {}
	
	module.exports = {SettlementBatchSummary: SettlementBatchSummary};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let Subscription = __webpack_require__(117).Subscription;
	let SubscriptionSearch = __webpack_require__(118).SubscriptionSearch;
	let TransactionGateway = __webpack_require__(119).TransactionGateway;
	let exceptions = __webpack_require__(20);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class SubscriptionGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  create(attributes) {
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/subscriptions`, {subscription: attributes}).then(this.responseHandler());
	  }
	
	  cancel(subscriptionId) {
	    return this.gateway.http.put(`${this.config.baseMerchantPath()}/subscriptions/${subscriptionId}/cancel`, null).then(this.responseHandler());
	  }
	
	  find(subscriptionId) {
	    if (subscriptionId.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found'), null); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/subscriptions/${subscriptionId}`).then((response) => {
	      return new Subscription(response.subscription, this.gateway);
	    });
	  }
	
	  responseHandler() {
	    return this.createResponseHandler('subscription', Subscription);
	  }
	
	  retryCharge(subscriptionId, amount, submitForSettlement) {
	    if (typeof amount === 'function') {
	      amount = undefined; // eslint-disable-line no-undefined
	    }
	
	    if (typeof submitForSettlement === 'function') {
	      submitForSettlement = false; // eslint-disable-line no-undefined
	    }
	
	    return new TransactionGateway(this.gateway).sale({
	      amount: amount,
	      subscriptionId,
	      options: {
	        submitForSettlement: submitForSettlement
	      }
	    });
	  }
	
	  search(fn, callback) {
	    let search = new SubscriptionSearch();
	
	    fn(search);
	    return this.createSearchResponse(`${this.config.baseMerchantPath()}/subscriptions/advanced_search_ids`, search, this.pagingFunctionGenerator(search), callback);
	  }
	
	  update(subscriptionId, attributes) {
	    return this.gateway.http.put(`${this.config.baseMerchantPath()}/subscriptions/${subscriptionId}`, {subscription: attributes}).then(this.responseHandler());
	  }
	
	  pagingFunctionGenerator(search) {
	    return super.pagingFunctionGenerator(search, 'subscriptions', Subscription, 'subscriptions', response => response.subscriptions.subscription);
	  }
	}
	
	module.exports = {SubscriptionGateway: wrapPrototype(SubscriptionGateway, {
	  ignoreMethods: ['search']
	})};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	let Transaction = __webpack_require__(33).Transaction;
	
	class Subscription extends AttributeSetter {
	  static initClass() {
	    this.Source = {
	      Api: 'api',
	      ControlPanel: 'control_panel',
	      Recurring: 'recurring'
	    };
	
	    this.Status = {
	      Active: 'Active',
	      Canceled: 'Canceled',
	      Expired: 'Expired',
	      PastDue: 'Past Due',
	      Pending: 'Pending',
	      All() {
	        let all = [];
	
	        for (let key in this) {
	          if (!this.hasOwnProperty(key)) {
	            continue;
	          }
	          let value = this[key];
	
	          if (key !== 'All') { all.push(value); }
	        }
	        return all;
	      }
	    };
	  }
	
	  constructor(attributes, gateway) {
	    super(attributes, gateway);
	    this.transactions = attributes.transactions.map((transactionAttributes) => new Transaction(transactionAttributes, gateway));
	  }
	}
	Subscription.initClass();
	
	module.exports = {Subscription: Subscription};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AdvancedSearch = __webpack_require__(82).AdvancedSearch;
	let Subscription = __webpack_require__(117).Subscription;
	
	class SubscriptionSearch extends AdvancedSearch {
	  static initClass() {
	    this.multipleValueField('inTrialPeriod');
	    this.multipleValueField('ids');
	    this.textFields('id', 'transactionId');
	    this.multipleValueOrTextField('planId');
	    this.multipleValueField('status', {allows: Subscription.Status.All()}); // eslint-disable-line new-cap
	    this.multipleValueField('merchantAccountId');
	    this.rangeFields('price', 'daysPastDue', 'billingCyclesRemaining', 'nextBillingDate', 'createdAt');
	  }
	}
	SubscriptionSearch.initClass();
	
	module.exports = {SubscriptionSearch: SubscriptionSearch};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AddressGateway = __webpack_require__(76).AddressGateway;
	let Gateway = __webpack_require__(31).Gateway;
	let Transaction = __webpack_require__(33).Transaction;
	let TransactionSearch = __webpack_require__(120).TransactionSearch;
	let isFunction = __webpack_require__(56).isFunction;
	let Util = __webpack_require__(22).Util;
	let exceptions = __webpack_require__(20);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class TransactionGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  cancelRelease(transactionId) {
	    let path = `${this.config.baseMerchantPath()}/transactions/${transactionId}/cancel_release`;
	    let body = {};
	
	    return this.gateway.http.put(path, body).then(this.responseHandler());
	  }
	
	  cloneTransaction(transactionId, attributes) {
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/transactions/${transactionId}/clone`, {
	      transactionClone: attributes
	    }).then(this.responseHandler());
	  }
	
	  create(attributes) {
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/transactions`, {transaction: attributes}).then(this.responseHandler());
	  }
	
	  credit(attributes) {
	    attributes.type = 'credit';
	    return this.create(attributes);
	  }
	
	  find(transactionId) {
	    if (transactionId.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found'), null); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/transactions/${transactionId}`).then((response) => {
	      return new Transaction(response.transaction, this.gateway);
	    });
	  }
	
	  holdInEscrow(transactionId) {
	    return this.gateway.http.put(`${this.config.baseMerchantPath()}/transactions/${transactionId}/hold_in_escrow`, {}).then(this.responseHandler());
	  }
	
	  refund(transactionId, options) {
	    if (isFunction(options)) {
	      options = {};
	    } else if (typeof options !== 'object') {
	      options = {amount: options};
	    }
	
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/transactions/${transactionId}/refund`, {transaction: options}).then(this.responseHandler());
	  }
	
	  responseHandler() {
	    return this.createResponseHandler('transaction', Transaction);
	  }
	
	  sale(attributes) {
	    let invalidKeysError;
	
	    attributes.type = 'sale';
	    invalidKeysError = Util.verifyKeys(this._createSignature(), attributes);
	
	    if (invalidKeysError) {
	      return Promise.reject(invalidKeysError, null);
	    }
	
	    return this.create(attributes);
	  }
	
	  search(fn, callback) {
	    let search = new TransactionSearch();
	
	    fn(search);
	    return this.createSearchResponse(`${this.config.baseMerchantPath()}/transactions/advanced_search_ids`, search, this.pagingFunctionGenerator(search), callback);
	  }
	
	  releaseFromEscrow(transactionId) {
	    return this.gateway.http.put(`${this.config.baseMerchantPath()}/transactions/${transactionId}/release_from_escrow`, {}).then(this.responseHandler());
	  }
	
	  submitForSettlement(transactionId, amount, options) {
	    let invalidKeysError;
	
	    options = options || {};
	
	    invalidKeysError = Util.verifyKeys(this._submitForSettlementSignature(), options);
	
	    if (invalidKeysError) {
	      return Promise.reject(invalidKeysError, null);
	    }
	
	    return this.gateway.http.put(`${this.config.baseMerchantPath()}/transactions/${transactionId}/submit_for_settlement`, {
	      transaction: {amount, orderId: options.orderId, descriptor: options.descriptor}
	    }).then(this.responseHandler());
	  }
	
	  updateDetails(transactionId, options) {
	    let invalidKeysError = Util.verifyKeys(this._updateDetailsSignature(), options);
	
	    if (invalidKeysError) {
	      return Promise.reject(invalidKeysError, null);
	    }
	
	    return this.gateway.http.put(`${this.config.baseMerchantPath()}/transactions/${transactionId}/update_details`, {
	      transaction: options
	    }).then(this.responseHandler());
	  }
	
	  submitForPartialSettlement(transactionId, amount, options) {
	    let invalidKeysError;
	
	    options = options || {};
	
	    invalidKeysError = Util.verifyKeys(this._submitForSettlementSignature(), options);
	
	    if (invalidKeysError) {
	      return Promise.reject(invalidKeysError, null);
	    }
	
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/transactions/${transactionId}/submit_for_partial_settlement`, {
	      transaction: {amount, orderId: options.orderId, descriptor: options.descriptor}
	    }).then(this.responseHandler());
	  }
	
	  void(transactionId) {
	    return this.gateway.http.put(`${this.config.baseMerchantPath()}/transactions/${transactionId}/void`, null).then(this.responseHandler());
	  }
	
	  pagingFunctionGenerator(search) {
	    return super.pagingFunctionGenerator(search, 'transactions', Transaction, 'creditCardTransactions', response => response.creditCardTransactions.transaction);
	  }
	
	  _submitForSettlementSignature() {
	    return {
	      valid: ['orderId', 'descriptor[name]', 'descriptor[phone]', 'descriptor[url]']
	    };
	  }
	
	  _updateDetailsSignature() {
	    return {
	      valid: ['amount', 'orderId', 'descriptor[name]', 'descriptor[phone]', 'descriptor[url]']
	    };
	  }
	
	  _createSignature() {
	    let validKeys = [
	      'amount',
	      'customerId',
	      'merchantAccountId',
	      'orderId',
	      'channel',
	      'paymentMethodToken',
	      'purchaseOrderNumber',
	      'recurring',
	      'transactionSource',
	      'shippingAddressId',
	      'type',
	      'taxAmount',
	      'taxExempt',
	      'venmoSdkPaymentMethodCode',
	      'deviceSessionId',
	      'serviceFeeAmount',
	      'deviceData',
	      'fraudMerchantId',
	      'billingAddressId',
	      'paymentMethodNonce',
	      'paymentMethodToken',
	      'threeDSecureToken',
	      'sharedPaymentMethodToken',
	      'sharedPaymentMethodNonce',
	      'sharedBillingAddressId',
	      'sharedCustomerId',
	      'sharedShippingAddressId',
	      'riskData',
	      'riskData[customerBrowser]',
	      'riskData[customerIp]',
	      'riskData[customerBrowser]',
	      'creditCard',
	      'creditCard[token]',
	      'creditCard[cardholderName]',
	      'creditCard[cvv]',
	      'creditCard[expirationDate]',
	      'creditCard[expirationMonth]',
	      'creditCard[expirationYear]',
	      'creditCard[number]',
	      'customer',
	      'customer[id]',
	      'customer[company]',
	      'customer[email]',
	      'customer[fax]',
	      'customer[firstName]',
	      'customer[lastName]',
	      'customer[phone]',
	      'customer[website]',
	      'threeDSecurePassThru',
	      'threeDSecurePassThru[eciFlag]',
	      'threeDSecurePassThru[cavv]',
	      'threeDSecurePassThru[xid]',
	      'options',
	      'options[holdInEscrow]',
	      'options[storeInVault]',
	      'options[storeInVaultOnSuccess]',
	      'options[submitForSettlement]',
	      'options[addBillingAddressToPaymentMethod]',
	      'options[storeShippingAddressInVault]',
	      'options[venmoSdkSession]',
	      'options[payeeEmail]',
	      'options[skipAdvancedFraudChecking]',
	      'options[skipAvs]',
	      'options[skipCvv]',
	      'options[paypal]',
	      'options[paypal][customField]',
	      'options[paypal][payeeEmail]',
	      'options[paypal][description]',
	      'options[threeDSecure]',
	      'options[threeDSecure][required]',
	      'options[amexRewards]',
	      'options[amexRewards][requestId]',
	      'options[amexRewards][points]',
	      'options[amexRewards][currencyAmount]',
	      'options[amexRewards][currencyIsoCode]',
	      'options[venmo]',
	      'options[venmo][profileId]',
	      'descriptor',
	      'descriptor[name]',
	      'descriptor[phone]',
	      'descriptor[url]',
	      'paypalAccount',
	      'paypalAccount[email]',
	      'paypalAccount[token]',
	      'paypalAccount[paypalData]',
	      'paypalAccount[payeeEmail]',
	      'industry',
	      'industry[industryType]',
	      'industry[data]',
	      'industry[data][folioNumber]',
	      'industry[data][checkInDate]',
	      'industry[data][checkOutDate]',
	      'industry[data][travelPackage]',
	      'industry[data][lodgingCheckInDate]',
	      'industry[data][lodgingCheckOutDate]',
	      'industry[data][departureDate]',
	      'industry[data][lodgingName]',
	      'industry[data][roomRate]',
	      'discountAmount',
	      'shippingAmount',
	      'shipsFromPostalCode',
	      'lineItems[quantity]',
	      'lineItems[name]',
	      'lineItems[description]',
	      'lineItems[kind]',
	      'lineItems[unitAmount]',
	      'lineItems[unitTaxAmount]',
	      'lineItems[totalAmount]',
	      'lineItems[discountAmount]',
	      'lineItems[unitOfMeasure]',
	      'lineItems[productCode]',
	      'lineItems[commodityCode]',
	      'lineItems[url]',
	      'lineItems[taxAmount]',
	      'applePayCard',
	      'applePayCard[number]',
	      'applePayCard[cardholderName]',
	      'applePayCard[cryptogram]',
	      'applePayCard[expirationMonth]',
	      'applePayCard[expirationYear]',
	      'applePayCard[eciIndicator]',
	      'androidPayCard',
	      'androidPayCard[number]',
	      'androidPayCard[cryptogram]',
	      'androidPayCard[googleTransactionId]',
	      'androidPayCard[expirationMonth]',
	      'androidPayCard[expirationYear]',
	      'androidPayCard[sourceCardType]',
	      'androidPayCard[sourceCardLastFour]',
	      'androidPayCard[eciIndicator]',
	      'subscriptionId'
	    ];
	
	    validKeys = validKeys.concat(new AddressGateway(this).sharedSignature('shipping'), new AddressGateway(this).sharedSignature('billing'));
	    return {
	      valid: validKeys,
	      ignore: ['customFields', 'options[paypal][supplementaryData]']
	    };
	  }
	}
	
	module.exports = {TransactionGateway: wrapPrototype(TransactionGateway, {
	  ignoreMethods: ['search']
	})};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AdvancedSearch = __webpack_require__(82).AdvancedSearch;
	let Transaction = __webpack_require__(33).Transaction;
	let CreditCard = __webpack_require__(37).CreditCard;
	
	class TransactionSearch extends AdvancedSearch {
	  static initClass() {
	    this.textFields(
	        'billingCompany',
	        'billingCountryName',
	        'billingExtendedAddress',
	        'billingFirstName',
	        'billingLastName',
	        'billingLocality',
	        'billingPostalCode',
	        'billingRegion',
	        'billingStreetAddress',
	        'creditCardCardholderName',
	        'currency',
	        'customerCompany',
	        'customerEmail',
	        'customerFax',
	        'customerFirstName',
	        'customerId',
	        'customerLastName',
	        'customerPhone',
	        'customerWebsite',
	        'id',
	        'orderId',
	        'paymentMethodToken',
	        'paypalPayerEmail',
	        'paypalPaymentId',
	        'paypalAuthorizationId',
	        'processorAuthorizationCode',
	        'settlementBatchId',
	        'shippingCompany',
	        'shippingCountryName',
	        'shippingExtendedAddress',
	        'shippingFirstName',
	        'shippingLastName',
	        'shippingLocality',
	        'shippingPostalCode',
	        'shippingRegion',
	        'shippingStreetAddress',
	        'creditCardUniqueIdentifier'
	      );
	
	    this.equalityFields('creditCardExpirationDate');
	    this.partialMatchFields('creditCardNumber');
	    this.multipleValueField('createdUsing', {allows: [
	      Transaction.CreatedUsing.FullInformation,
	      Transaction.CreatedUsing.Token
	    ]});
	    this.multipleValueField('creditCardCardType', {allows: CreditCard.CardType.All()}); // eslint-disable-line new-cap
	    this.multipleValueField('creditCardCustomerLocation', {allows: [
	      CreditCard.CustomerLocation.International,
	      CreditCard.CustomerLocation.US
	    ]});
	    this.multipleValueField('ids');
	    this.multipleValueField('user');
	    this.multipleValueField('paymentInstrumentType');
	    this.multipleValueField('merchantAccountId');
	    this.multipleValueField('status', {allows: Transaction.Status.All()}); // eslint-disable-line new-cap
	    this.multipleValueField('source');
	    this.multipleValueField('type', {allows: Transaction.Type.All()}); // eslint-disable-line new-cap
	    this.keyValueFields('refund');
	    this.rangeFields(
	        'amount',
	        'authorizationExpiredAt',
	        'authorizedAt',
	        'createdAt',
	        'disbursementDate',
	        'disputeDate',
	        'failedAt',
	        'gatewayRejectedAt',
	        'processorDeclinedAt',
	        'settledAt',
	        'submittedForSettlementAt',
	        'voidedAt'
	      );
	  }
	  }
	TransactionSearch.initClass();
	
	module.exports = {TransactionSearch: TransactionSearch};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let Environment = __webpack_require__(6).Environment;
	let exceptions = __webpack_require__(20);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class TestingGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  settle(transactionId) {
	    return this.settlementOperationWithEnvironmentCheck(transactionId, 'settle');
	  }
	
	  settlementPending(transactionId) {
	    return this.settlementOperationWithEnvironmentCheck(transactionId, 'settlement_pending');
	  }
	
	  settlementConfirm(transactionId) {
	    return this.settlementOperationWithEnvironmentCheck(transactionId, 'settlement_confirm');
	  }
	
	  settlementDecline(transactionId) {
	    return this.settlementOperationWithEnvironmentCheck(transactionId, 'settlement_decline');
	  }
	
	  settlementOperationWithEnvironmentCheck(transactionId, operation) {
	    if (this.config.environment === Environment.Production) {
	      return Promise.reject(exceptions.TestOperationPerformedInProductionError('Test operation performed in production'), null); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.put(
	      `${this.config.baseMerchantPath()}/transactions/${transactionId}/${operation}`,
	      null
	    );
	  }
	}
	
	module.exports = {TestingGateway: wrapPrototype(TestingGateway)};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let TransactionLineItem = __webpack_require__(123).TransactionLineItem;
	let exceptions = __webpack_require__(20);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class TransactionLineItemGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  findAll(transactionId) {
	    if (transactionId.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found'), null); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/transactions/${transactionId}/line_items`).then((response) => {
	      return response.lineItems.map(function (lineItem) {
	        return new TransactionLineItem(lineItem);
	      });
	    });
	  }
	}
	
	module.exports = {TransactionLineItemGateway: wrapPrototype(TransactionLineItemGateway, {})};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class TransactionLineItem extends AttributeSetter {
	  static initClass() {
	    this.Kind = {
	      Credit: 'credit',
	      Debit: 'debit',
	      All() {
	        let all = [];
	
	        for (let key in this) {
	          if (!this.hasOwnProperty(key)) {
	            continue;
	          }
	          let value = this[key];
	
	          if (key !== 'All') { all.push(value); }
	        }
	        return all;
	      }
	    };
	  }
	
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	TransactionLineItem.initClass();
	
	module.exports = {TransactionLineItem: TransactionLineItem};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Digest = __webpack_require__(125).Digest;
	let Util = __webpack_require__(22).Util;
	let querystring = __webpack_require__(106);
	let dateFormat = __webpack_require__(127);
	let CreditCardGateway = __webpack_require__(79).CreditCardGateway;
	let CustomerGateway = __webpack_require__(83).CustomerGateway;
	let TransactionGateway = __webpack_require__(119).TransactionGateway;
	let SignatureService = __webpack_require__(128).SignatureService;
	let exceptions = __webpack_require__(20);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	let KIND;
	
	class TransparentRedirectGateway {
	  static initClass() {
	    KIND = {
	      CREATE_CUSTOMER: 'create_customer',
	      UPDATE_CUSTOMER: 'update_customer',
	      CREATE_CREDIT_CARD: 'create_payment_method',
	      UPDATE_CREDIT_CARD: 'update_payment_method',
	      CREATE_TRANSACTION: 'create_transaction'
	    };
	  }
	
	  constructor(gateway) {
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	    this.url = `${this.config.baseMerchantUrl()}/transparent_redirect_requests`;
	  }
	
	  generateTrData(inputData) {
	    let data = Util.convertObjectKeysToUnderscores(inputData);
	
	    data.api_version = this.gateway.config.apiVersion; // eslint-disable-line camelcase
	    data.time = dateFormat(new Date(), 'yyyymmddHHMMss', true);
	    data.public_key = this.gateway.config.publicKey; // eslint-disable-line camelcase
	    let dataSegment = querystring.stringify(data);
	
	    return new SignatureService(this.gateway.config.privateKey, Digest.Sha1hexdigest).sign(dataSegment);
	  }
	
	  createCreditCardData(data) {
	    data.kind = KIND.CREATE_CREDIT_CARD;
	    return this.generateTrData(data);
	  }
	
	  updateCreditCardData(data) {
	    data.kind = KIND.UPDATE_CREDIT_CARD;
	    return this.generateTrData(data);
	  }
	
	  createCustomerData(data) {
	    data.kind = KIND.CREATE_CUSTOMER;
	    return this.generateTrData(data);
	  }
	
	  updateCustomerData(data) {
	    data.kind = KIND.UPDATE_CUSTOMER;
	    return this.generateTrData(data);
	  }
	
	  transactionData(data) {
	    data.kind = KIND.CREATE_TRANSACTION;
	    return this.generateTrData(data);
	  }
	
	  validateQueryString(queryString) {
	    let matches = queryString.match(/^(.+)&hash=(.+?)$/);
	
	    return Digest.Sha1hexdigest(this.gateway.config.privateKey, matches[1]) === matches[2];
	  }
	
	  confirm(queryString) {
	    let statusMatch = queryString.match(/http_status=(\d+)/);
	
	    if (statusMatch && statusMatch[1]) {
	      let error = this.gateway.http.checkHttpStatus(statusMatch[1]);
	
	      if (error) { return Promise.reject(error); }
	    }
	    if (!this.validateQueryString(queryString)) {
	      return Promise.reject(exceptions.InvalidTransparentRedirectHashError('The transparent redirect hash is invalid'), null); // eslint-disable-line new-cap
	    }
	    let params = querystring.parse(queryString);
	    let confirmResponse;
	
	    switch (params.kind) { // eslint-disable-line default-case
	      case KIND.CREATE_CUSTOMER:
	      case KIND.UPDATE_CUSTOMER:
	        confirmResponse = new CustomerGateway(this.gateway).responseHandler();
	        break;
	      case KIND.CREATE_CREDIT_CARD:
	      case KIND.UPDATE_CREDIT_CARD:
	        confirmResponse = new CreditCardGateway(this.gateway).responseHandler();
	        break;
	      case KIND.CREATE_TRANSACTION:
	        confirmResponse = new TransactionGateway(this.gateway).responseHandler();
	        break;
	    }
	    return this.gateway.http.post(`${this.config.baseMerchantPath()}/transparent_redirect_requests/` + params.id + '/confirm', null).then(confirmResponse);
	  }
	}
	TransparentRedirectGateway.initClass();
	
	module.exports = {TransparentRedirectGateway: wrapPrototype(TransparentRedirectGateway)};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let crypto = __webpack_require__(126);
	let _ = __webpack_require__(56);
	
	class Digest {
	  static Sha1hexdigest(privateKey, string) {
	    return new Digest().hmacSha1(privateKey, string);
	  }
	
	  static secureCompare(left, right) {
	    return new Digest().secureCompare(left, right);
	  }
	
	  hmacSha256(key, data) {
	    let hmac = crypto.createHmac('sha256', this.sha256(key));
	
	    hmac.update(data, 'binary');
	    return hmac.digest('hex');
	  }
	
	  hmacSha1(key, data) {
	    let hmac = crypto.createHmac('sha1', this.sha1(key));
	
	    hmac.update(data, 'binary');
	    return hmac.digest('hex');
	  }
	
	  secureCompare(left, right) {
	    if (left == null || right == null) { return false; }
	
	    let leftBytes = this.unpack(left);
	    let rightBytes = this.unpack(right);
	
	    let result = 0;
	
	    for (let bytePair of _.zip(leftBytes, rightBytes)) {
	      let leftByte = bytePair[0];
	      let rightByte = bytePair[1];
	
	      result |= leftByte ^ rightByte;
	    }
	
	    return result === 0;
	  }
	
	  sha1(data) {
	    let hash = crypto.createHash('sha1');
	
	    hash.update(data, 'binary');
	    return hash.digest();
	  }
	
	  sha256(data) {
	    let hash = crypto.createHash('sha256');
	
	    hash.update(data, 'binary');
	    return hash.digest();
	  }
	
	  unpack(string) {
	    let bytes = [];
	
	    for (let index = 0; index < string.length; index++) {
	      bytes.push(string.charCodeAt(index));
	    }
	    return bytes;
	  }
	}
	
	module.exports = {Digest: Digest};


/***/ }),
/* 126 */
/***/ (function(module, exports) {

	module.exports = require("crypto");

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	/*
	 * Date Format 1.2.3
	 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
	 * MIT license
	 *
	 * Includes enhancements by Scott Trenda <scott.trenda.net>
	 * and Kris Kowal <cixar.com/~kris.kowal/>
	 *
	 * Accepts a date, a mask, or a date and a mask.
	 * Returns a formatted version of the given date.
	 * The date defaults to the current date/time.
	 * The mask defaults to dateFormat.masks.default.
	 */
	
	var dateFormat = function () {
		var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
			timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
			timezoneClip = /[^-+\dA-Z]/g,
			pad = function (val, len) {
				val = String(val);
				len = len || 2;
				while (val.length < len) val = "0" + val;
				return val;
			};
	
		// Regexes and supporting functions are cached through closure
		return function (date, mask, utc) {
			var dF = dateFormat;
	
			// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
			if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
				mask = date;
				date = undefined;
			}
	
			date = date || new Date;
	
	    if(!(date instanceof Date)) {
	      date = new Date(date);
	    }
	
	    if (isNaN(date)) {
	      throw TypeError("Invalid date");
	    }
	
			mask = String(dF.masks[mask] || mask || dF.masks["default"]);
	
			// Allow setting the utc argument via the mask
			if (mask.slice(0, 4) == "UTC:") {
				mask = mask.slice(4);
				utc = true;
			}
	
			var	_ = utc ? "getUTC" : "get",
				d = date[_ + "Date"](),
				D = date[_ + "Day"](),
				m = date[_ + "Month"](),
				y = date[_ + "FullYear"](),
				H = date[_ + "Hours"](),
				M = date[_ + "Minutes"](),
				s = date[_ + "Seconds"](),
				L = date[_ + "Milliseconds"](),
				o = utc ? 0 : date.getTimezoneOffset(),
				flags = {
					d:    d,
					dd:   pad(d),
					ddd:  dF.i18n.dayNames[D],
					dddd: dF.i18n.dayNames[D + 7],
					m:    m + 1,
					mm:   pad(m + 1),
					mmm:  dF.i18n.monthNames[m],
					mmmm: dF.i18n.monthNames[m + 12],
					yy:   String(y).slice(2),
					yyyy: y,
					h:    H % 12 || 12,
					hh:   pad(H % 12 || 12),
					H:    H,
					HH:   pad(H),
					M:    M,
					MM:   pad(M),
					s:    s,
					ss:   pad(s),
					l:    pad(L, 3),
					L:    pad(L > 99 ? Math.round(L / 10) : L),
					t:    H < 12 ? "a"  : "p",
					tt:   H < 12 ? "am" : "pm",
					T:    H < 12 ? "A"  : "P",
					TT:   H < 12 ? "AM" : "PM",
					Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
					o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
					S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
				};
	
			return mask.replace(token, function ($0) {
				return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
			});
		};
	}();
	
	// Some common format strings
	dateFormat.masks = {
		"default":      "ddd mmm dd yyyy HH:MM:ss",
		shortDate:      "m/d/yy",
		mediumDate:     "mmm d, yyyy",
		longDate:       "mmmm d, yyyy",
		fullDate:       "dddd, mmmm d, yyyy",
		shortTime:      "h:MM TT",
		mediumTime:     "h:MM:ss TT",
		longTime:       "h:MM:ss TT Z",
		isoDate:        "yyyy-mm-dd",
		isoTime:        "HH:MM:ss",
		isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
		isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
	};
	
	// Internationalization strings
	dateFormat.i18n = {
		dayNames: [
			"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
			"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
		],
		monthNames: [
			"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
			"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
		]
	};
	
	/*
	// For convenience...
	Date.prototype.format = function (mask, utc) {
		return dateFormat(this, mask, utc);
	};
	*/
	
	module.exports = dateFormat;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

	'use strict';
	
	class SignatureService {
	  constructor(key, hashFunction) {
	    this.key = key;
	    this.hashFunction = hashFunction;
	  }
	
	  sign(data) {
	    return `${this.hashFunction(this.key, data)}|${data}`;
	  }
	}
	
	module.exports = {SignatureService: SignatureService};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let UsBankAccount = __webpack_require__(48).UsBankAccount;
	let TransactionGateway = __webpack_require__(119).TransactionGateway;
	let exceptions = __webpack_require__(20);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class UsBankAccountGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  find(token) {
	    if (token.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found'), null); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/payment_methods/us_bank_account/${token}`).then(function (response) {
	      return new UsBankAccount(response.usBankAccount);
	    });
	  }
	
	  sale(token, transactionRequest) {
	    transactionRequest.paymentMethodToken = token;
	    if (!transactionRequest.options) { transactionRequest.options = {}; }
	    transactionRequest.options.submitForSettlement = true;
	    return new TransactionGateway(this.gateway).sale(transactionRequest);
	  }
	}
	
	module.exports = {UsBankAccountGateway: wrapPrototype(UsBankAccountGateway)};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Gateway = __webpack_require__(31).Gateway;
	let IdealPayment = __webpack_require__(50).IdealPayment;
	let TransactionGateway = __webpack_require__(119).TransactionGateway;
	let exceptions = __webpack_require__(20);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class IdealPaymentGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  find(idealPaymentId) {
	    if (idealPaymentId.trim() === '') {
	      return Promise.reject(exceptions.NotFoundError('Not Found'), null); // eslint-disable-line new-cap
	    }
	
	    return this.gateway.http.get(`${this.config.baseMerchantPath()}/ideal_payments/${idealPaymentId}`).then(function (response) {
	      return new IdealPayment(response.idealPayment);
	    });
	  }
	
	  sale(idealPaymentId, transactionRequest) {
	    const request = Object.assign({}, transactionRequest);
	
	    request.paymentMethodNonce = idealPaymentId;
	    request.options = request.options || {};
	    request.options.submitForSettlement = true;
	
	    return new TransactionGateway(this.gateway).sale(request);
	  }
	}
	
	module.exports = {IdealPaymentGateway: wrapPrototype(IdealPaymentGateway)};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let xml2js = __webpack_require__(15);
	let _ = __webpack_require__(56);
	let Digest = __webpack_require__(125).Digest;
	let Gateway = __webpack_require__(31).Gateway;
	let exceptions = __webpack_require__(20);
	let Util = __webpack_require__(22).Util;
	let WebhookNotification = __webpack_require__(132).WebhookNotification;
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class WebhookNotificationGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  parse(signature, payload) {
	    if (!signature) {
	      return Promise.reject(exceptions.InvalidSignatureError('signature parameter is required')); // eslint-disable-line new-cap
	    }
	    if (!payload) {
	      return Promise.reject(exceptions.InvalidSignatureError('payload parameter is required')); // eslint-disable-line new-cap
	    }
	    if (payload.match(/[^A-Za-z0-9+=\/\n]/)) {
	      return Promise.reject(exceptions.InvalidSignatureError('payload contains illegal characters')); // eslint-disable-line new-cap
	    }
	    let err = this.validateSignature(signature, payload);
	
	    if (err) {
	      return Promise.reject(err);
	    }
	
	    let xmlPayload = new Buffer(payload, 'base64').toString('utf8');
	    let parser = new xml2js.Parser({
	      explicitRoot: true
	    });
	
	    return new Promise((resolve, reject) => {
	      parser.parseString(xmlPayload, (parseError, result) => {
	        if (parseError) {
	          reject(parseError);
	        } else {
	          let attributes = Util.convertNodeToObject(result);
	          let handler = this.createResponseHandler('notification', WebhookNotification);
	
	          handler(attributes).then((responseHandlerResponse) => {
	            resolve(responseHandlerResponse.notification);
	          });
	        }
	      });
	    });
	  }
	
	  validateSignature(signatureString, payload) {
	    let signaturePairs = signatureString.split('&').filter((pair) => pair.indexOf('|') !== -1).map((pair) => pair.split('|'));
	    let signature = this.matchingSignature(signaturePairs);
	
	    if (!signature) {
	      return exceptions.InvalidSignatureError('no matching public key'); // eslint-disable-line new-cap
	    }
	
	    let self = this;
	    let matches = _.some([payload, payload + '\n'], (data) => {
	      return Digest.secureCompare(signature, Digest.Sha1hexdigest(self.gateway.config.privateKey, data));
	    });
	
	    if (!matches) {
	      return exceptions.InvalidSignatureError('signature does not match payload - one has been modified'); // eslint-disable-line new-cap
	    }
	    return null;
	  }
	
	  verify(challenge, callback) {
	    if (!challenge.match(/^[a-f0-9]{20,32}$/)) {
	      if (callback != null) {
	        callback(exceptions.InvalidChallengeError('challenge contains non-hex characters'), null); // eslint-disable-line new-cap
	        return;
	      }
	
	      throw exceptions.InvalidChallengeError('challenge contains non-hex characters'); // eslint-disable-line new-cap
	    }
	    let digest = Digest.Sha1hexdigest(this.gateway.config.privateKey, challenge);
	
	    return `${this.gateway.config.publicKey}|${digest}`; // eslint-disable-line consistent-return
	  }
	
	  matchingSignature(signaturePairs) {
	    for (let keyPair of signaturePairs) {
	      let publicKey = keyPair[0];
	      let signature = keyPair[1];
	
	      if (this.gateway.config.publicKey === publicKey) {
	        return signature;
	      }
	    }
	    return null;
	  }
	}
	
	module.exports = {WebhookNotificationGateway: wrapPrototype(WebhookNotificationGateway, {
	  ignoreMethods: ['verify']
	})};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	let MerchantAccount = __webpack_require__(98).MerchantAccount;
	let Transaction = __webpack_require__(33).Transaction;
	let Disbursement = __webpack_require__(133).Disbursement;
	let Dispute = __webpack_require__(43).Dispute;
	let ConnectedMerchantStatusTransitioned = __webpack_require__(134).ConnectedMerchantStatusTransitioned;
	let ConnectedMerchantPayPalStatusChanged = __webpack_require__(135).ConnectedMerchantPayPalStatusChanged;
	let PartnerMerchant = __webpack_require__(136).PartnerMerchant;
	let Subscription = __webpack_require__(117).Subscription;
	let AccountUpdaterDailyReport = __webpack_require__(137).AccountUpdaterDailyReport;
	let IdealPayment = __webpack_require__(50).IdealPayment;
	let ValidationErrorsCollection = __webpack_require__(53).ValidationErrorsCollection;
	let GrantedPaymentInstrumentUpdate = __webpack_require__(138).GrantedPaymentInstrumentUpdate;
	
	class WebhookNotification extends AttributeSetter {
	  static initClass() {
	    this.Kind = {
	      AccountUpdaterDailyReport: 'account_updater_daily_report',
	      Check: 'check',
	      ConnectedMerchantPayPalStatusChanged: 'connected_merchant_paypal_status_changed',
	      ConnectedMerchantStatusTransitioned: 'connected_merchant_status_transitioned',
	      Disbursement: 'disbursement',
	      DisbursementException: 'disbursement_exception',
	      DisputeOpened: 'dispute_opened',
	      DisputeLost: 'dispute_lost',
	      DisputeWon: 'dispute_won',
	      GrantedPaymentInstrumentUpdate: 'granted_payment_instrument_update',
	      IdealPaymentComplete: 'ideal_payment_complete',
	      IdealPaymentFailed: 'ideal_payment_failed',
	      PartnerMerchantConnected: 'partner_merchant_connected',
	      PartnerMerchantDisconnected: 'partner_merchant_disconnected',
	      PartnerMerchantDeclined: 'partner_merchant_declined',
	      SubscriptionCanceled: 'subscription_canceled',
	      SubscriptionChargedSuccessfully: 'subscription_charged_successfully',
	      SubscriptionChargedUnsuccessfully: 'subscription_charged_unsuccessfully',
	      SubscriptionExpired: 'subscription_expired',
	      SubscriptionTrialEnded: 'subscription_trial_ended',
	      SubscriptionWentActive: 'subscription_went_active',
	      SubscriptionWentPastDue: 'subscription_went_past_due',
	      SubMerchantAccountApproved: 'sub_merchant_account_approved',
	      SubMerchantAccountDeclined: 'sub_merchant_account_declined',
	      TransactionDisbursed: 'transaction_disbursed',
	      TransactionSettled: 'transaction_settled',
	      TransactionSettlementDeclined: 'transaction_settlement_declined'
	    };
	  }
	
	  constructor(attributes, gateway) {
	    super(attributes, gateway);
	
	    let wrapperNode;
	
	    if (attributes.subject.apiErrorResponse != null) {
	      wrapperNode = attributes.subject.apiErrorResponse;
	    } else {
	      wrapperNode = attributes.subject;
	    }
	
	    if (wrapperNode.subscription != null) {
	      this.subscription = new Subscription(wrapperNode.subscription, gateway);
	    }
	
	    if (wrapperNode.merchantAccount != null) {
	      this.merchantAccount = new MerchantAccount(wrapperNode.merchantAccount);
	    }
	
	    if (wrapperNode.disbursement != null) {
	      this.disbursement = new Disbursement(wrapperNode.disbursement);
	    }
	
	    if (wrapperNode.transaction != null) {
	      this.transaction = new Transaction(wrapperNode.transaction, gateway);
	    }
	
	    if (wrapperNode.partnerMerchant != null) {
	      this.partnerMerchant = new PartnerMerchant(wrapperNode.partnerMerchant);
	    }
	
	    if (wrapperNode.connectedMerchantStatusTransitioned != null) {
	      this.connectedMerchantStatusTransitioned = new ConnectedMerchantStatusTransitioned(wrapperNode.connectedMerchantStatusTransitioned);
	    }
	
	    if (wrapperNode.connectedMerchantPaypalStatusChanged != null) {
	      this.connectedMerchantPayPalStatusChanged = new ConnectedMerchantPayPalStatusChanged(wrapperNode.connectedMerchantPaypalStatusChanged);
	    }
	
	    if (wrapperNode.dispute != null) {
	      this.dispute = new Dispute(wrapperNode.dispute);
	    }
	
	    if (wrapperNode.accountUpdaterDailyReport != null) {
	      this.accountUpdaterDailyReport = new AccountUpdaterDailyReport(wrapperNode.accountUpdaterDailyReport);
	    }
	
	    if (wrapperNode.idealPayment != null) {
	      this.idealPayment = new IdealPayment(wrapperNode.idealPayment);
	    }
	
	    if (wrapperNode.grantedPaymentInstrumentUpdate != null) {
	      this.grantedPaymetnInstrumentUpdate = new GrantedPaymentInstrumentUpdate(wrapperNode.grantedPaymentInstrumentUpdate);
	    }
	
	    if (wrapperNode.errors != null) {
	      this.errors = new ValidationErrorsCollection(wrapperNode.errors);
	      this.message = wrapperNode.message;
	    }
	  }
	}
	WebhookNotification.initClass();
	
	module.exports = {WebhookNotification: WebhookNotification};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class Disbursement extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {Disbursement: Disbursement};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class ConnectedMerchantStatusTransitioned extends AttributeSetter {}
	
	module.exports = {ConnectedMerchantStatusTransitioned};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class ConnectedMerchantPayPalStatusChanged extends AttributeSetter {}
	
	module.exports = {ConnectedMerchantPayPalStatusChanged};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class PartnerMerchant extends AttributeSetter {}
	
	module.exports = {PartnerMerchant: PartnerMerchant};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class AccountUpdaterDailyReport extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {AccountUpdaterDailyReport: AccountUpdaterDailyReport};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let AttributeSetter = __webpack_require__(30).AttributeSetter;
	
	class GrantedPaymentInstrumentUpdate extends AttributeSetter {
	  constructor(attributes) {
	    super(attributes);
	  }
	}
	
	module.exports = {GrantedPaymentInstrumentUpdate: GrantedPaymentInstrumentUpdate};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	let Buffer = __webpack_require__(12).Buffer;
	let Digest = __webpack_require__(125).Digest;
	let Gateway = __webpack_require__(31).Gateway;
	let WebhookNotification = __webpack_require__(132).WebhookNotification;
	let dateFormat = __webpack_require__(127);
	let wrapPrototype = __webpack_require__(24).wrapPrototype;
	
	class WebhookTestingGateway extends Gateway {
	  constructor(gateway) {
	    super();
	    this.gateway = gateway;
	    this.config = this.gateway.config;
	  }
	
	  sampleNotification(kind, id, sourceMerchantId) {
	    const xml = this.sampleXml(kind, id, sourceMerchantId);
	    const payload = new Buffer(xml).toString('base64') + '\n';
	    const signature = `${this.gateway.config.publicKey}|${Digest.Sha1hexdigest(this.gateway.config.privateKey, payload)}`;
	
	    return {
	      bt_signature: signature, // eslint-disable-line camelcase
	      bt_payload: payload // eslint-disable-line camelcase
	    };
	  }
	
	  sampleXml(kind, id, sourceMerchantId) {
	    let sourceMerchantIdXml = '';
	
	    if (sourceMerchantId) {
	      sourceMerchantIdXml = `<source-merchant-id>${sourceMerchantId}</source-merchant-id>`;
	    }
	
	    return `<notification>
	    <timestamp type="datetime">${dateFormat(new Date(), dateFormat.masks.isoUtcDateTime, true)}</timestamp>
	    <kind>${kind}</kind>
	    ${sourceMerchantIdXml}
	    <subject>${this.subjectXmlFor(kind, id)}</subject>
	</notification>`;
	  }
	
	  subjectXmlFor(kind, id) { // eslint-disable-line complexity
	    switch (kind) {
	      case WebhookNotification.Kind.AccountUpdaterDailyReport: return this.subjectXmlForAccountUpdaterDailyReport();
	      case WebhookNotification.Kind.Check: return this.subjectXmlForCheck();
	      case WebhookNotification.Kind.ConnectedMerchantPayPalStatusChanged: return this.subjectXmlForConnectedMerchantPayPalStatusChanged(id);
	      case WebhookNotification.Kind.ConnectedMerchantStatusTransitioned: return this.subjectXmlForConnectedMerchantStatusTransitioned(id);
	      case WebhookNotification.Kind.TransactionDisbursed: return this.subjectXmlForTransactionDisbursed(id);
	      case WebhookNotification.Kind.TransactionSettled: return this.subjectXmlForTransactionSettled(id);
	      case WebhookNotification.Kind.TransactionSettlementDeclined: return this.subjectXmlForTransactionSettlementDeclined(id);
	      case WebhookNotification.Kind.DisbursementException: return this.subjectXmlForDisbursementException(id);
	      case WebhookNotification.Kind.Disbursement: return this.subjectXmlForDisbursement(id);
	      case WebhookNotification.Kind.DisputeOpened: return this.subjectXmlForDisputeOpened(id);
	      case WebhookNotification.Kind.DisputeLost: return this.subjectXmlForDisputeLost(id);
	      case WebhookNotification.Kind.DisputeWon: return this.subjectXmlForDisputeWon(id);
	      case WebhookNotification.Kind.GrantedPaymentInstrumentUpdate: return this.subjectXmlForGrantedPaymentInstrumentUpdate();
	      case WebhookNotification.Kind.IdealPaymentComplete: return this.subjectXmlForIdealPaymentComplete(id);
	      case WebhookNotification.Kind.IdealPaymentFailed: return this.subjectXmlForIdealPaymentFailed(id);
	      case WebhookNotification.Kind.SubMerchantAccountApproved: return this.subjectXmlForSubMerchantAccountApproved(id);
	      case WebhookNotification.Kind.SubMerchantAccountDeclined: return this.subjectXmlForSubMerchantAccountDeclined(id);
	      case WebhookNotification.Kind.PartnerMerchantConnected: return this.subjectXmlForPartnerMerchantConnected();
	      case WebhookNotification.Kind.PartnerMerchantDisconnected: return this.subjectXmlForPartnerMerchantDisconnected();
	      case WebhookNotification.Kind.PartnerMerchantDeclined: return this.subjectXmlForPartnerMerchantDeclined();
	      case WebhookNotification.Kind.SubscriptionChargedSuccessfully: return this.subjectXmlForSubscriptionChargedSuccessfully(id);
	      default: return this.subjectXmlForSubscription(id);
	    }
	  }
	
	  subjectXmlForAccountUpdaterDailyReport() {
	    return `<account-updater-daily-report>
	  <report-date type="date">2016-01-14</report-date>
	  <report-url>link-to-csv-report</report-url>
	</account-updater-daily-report>`;
	  }
	
	  subjectXmlForCheck() {
	    return '<check type="boolean">true</check>';
	  }
	
	  subjectXmlForTransactionDisbursed(id) {
	    return `<transaction>
	  <id>${id}</id>
	  <amount>100</amount>
	  <disbursement-details>
	    <disbursement-date type="datetime">2013-07-09T18:23:29Z</disbursement-date>
	  </disbursement-details>
	</transaction>`;
	  }
	
	  subjectXmlForTransactionSettled(id) {
	    return `<transaction>
	  <id>${id}</id>
	  <status>settled</status>
	  <type>sale</type>
	  <currency-iso-code>USD</currency-iso-code>
	  <amount>100</amount>
	  <merchant-account-id>ogaotkivejpfayqfeaimuktty</merchant-account-id>
	  <payment-instrument-type>us_bank_account</payment-instrument-type>
	  <us-bank-account>
	    <routing-number>123456789</routing-number>
	    <last-4>1234</last-4>
	    <account-type>checking</account-type>
	    <account-holder-name>Dan Schulman</account-holder-name>
	  </us-bank-account>
	</transaction>`;
	  }
	
	  subjectXmlForTransactionSettlementDeclined(id) {
	    return `<transaction>
	  <id>${id}</id>
	  <status>settlement_declined</status>
	  <type>sale</type>
	  <currency-iso-code>USD</currency-iso-code>
	  <amount>100</amount>
	  <merchant-account-id>ogaotkivejpfayqfeaimuktty</merchant-account-id>
	  <payment-instrument-type>us_bank_account</payment-instrument-type>
	  <us-bank-account>
	    <routing-number>123456789</routing-number>
	    <last-4>1234</last-4>
	    <account-type>checking</account-type>
	    <account-holder-name>Dan Schulman</account-holder-name>
	  </us-bank-account>
	</transaction>`;
	  }
	
	  subjectXmlForDisputeOpened(id) {
	    return `<dispute>
	  <amount>250.00</amount>
	  <currency-iso-code>USD</currency-iso-code>
	  <received-date type="date">2014-03-01</received-date>
	  <reply-by-date type="date">2014-03-21</reply-by-date>
	  <kind>chargeback</kind>
	  <status>open</status>
	  <reason>fraud</reason>
	  <id>${id}</id>
	  <transaction>
	    <id>${id}</id>
	    <amount>250.00</amount>
	  </transaction>
	  <date-opened type="date">2014-03-28</date-opened>
	</dispute>`;
	  }
	
	  subjectXmlForDisputeLost(id) {
	    return `<dispute>
	  <amount>250.00</amount>
	  <currency-iso-code>USD</currency-iso-code>
	  <received-date type="date">2014-03-01</received-date>
	  <reply-by-date type="date">2014-03-21</reply-by-date>
	  <kind>chargeback</kind>
	  <status>lost</status>
	  <reason>fraud</reason>
	  <id>${id}</id>
	  <transaction>
	    <id>${id}</id>
	    <amount>250.00</amount>
	  </transaction>
	  <date-opened type="date">2014-03-28</date-opened>
	</dispute>`;
	  }
	
	  subjectXmlForDisputeWon(id) {
	    return `<dispute>
	  <amount>250.00</amount>
	  <currency-iso-code>USD</currency-iso-code>
	  <received-date type="date">2014-03-01</received-date>
	  <reply-by-date type="date">2014-03-21</reply-by-date>
	  <kind>chargeback</kind>
	  <status>won</status>
	  <reason>fraud</reason>
	  <id>${id}</id>
	  <transaction>
	    <id>${id}</id>
	    <amount>250.00</amount>
	  </transaction>
	  <date-opened type="date">2014-03-28</date-opened>
	  <date-won type="date">2014-09-01</date-won>
	</dispute>`;
	  }
	
	  subjectXmlForDisbursementException(id) {
	    return `<disbursement>
	  <id>${id}</id>
	  <transaction-ids type="array">
	    <item>afv56j</item>
	    <item>kj8hjk</item>
	  </transaction-ids>
	  <success type="boolean">false</success>
	  <retry type="boolean">false</retry>
	  <merchant-account>
	    <id>merchant_account_token</id>
	    <currency-iso-code>USD</currency-iso-code>
	    <sub-merchant-account type="boolean">false</sub-merchant-account>
	    <status>active</status>
	  </merchant-account>
	  <amount>100.00</amount>
	  <disbursement-date type="date">2014-02-10</disbursement-date>
	  <exception-message>bank_rejected</exception-message>
	  <follow-up-action>update_funding_information</follow-up-action>
	</disbursement>`;
	  }
	
	  subjectXmlForDisbursement(id) {
	    return `<disbursement>
	  <id>${id}</id>
	  <transaction-ids type="array">
	    <item>afv56j</item>
	    <item>kj8hjk</item>
	  </transaction-ids>
	  <success type="boolean">true</success>
	  <retry type="boolean">false</retry>
	  <merchant-account>
	    <id>merchant_account_token</id>
	    <currency-iso-code>USD</currency-iso-code>
	    <sub-merchant-account type="boolean">false</sub-merchant-account>
	    <status>active</status>
	  </merchant-account>
	  <amount>100.00</amount>
	  <disbursement-date type="date">2014-02-10</disbursement-date>
	  <exception-message nil="true"/>
	  <follow-up-action nil="true"/>
	</disbursement>`;
	  }
	
	  subjectXmlForGrantedPaymentInstrumentUpdate() {
	    return `<granted-payment-instrument-update>
	    <grant-owner-merchant-id>vczo7jqrpwrsi2px</grant-owner-merchant-id>
	    <grant-recipient-merchant-id>cf0i8wgarszuy6hc</grant-recipient-merchant-id>
	    <payment-method-nonce>
	      <nonce>ee257d98-de40-47e8-96b3-a6954ea7a9a4</nonce>
	      <consumed type="boolean">false</consumed>
	      <locked type="boolean">false</locked>
	    </payment-method-nonce>
	    <token>abc123z</token>
	    <updated-fields type="array">
	      <item>expiration-month</item>
	      <item>expiration-year</item>
	    </updated-fields>
	  </granted-payment-instrument-update>`;
	  }
	
	  subjectXmlForIdealPaymentComplete(id) {
	    return `<ideal-payment>
	  <id>${id}</id>
	  <status>COMPLETE</status>
	  <issuer>ABCISSUER</issuer>
	  <order-id>ORDERABC</order-id>
	  <currency>EUR</currency>
	  <amount>10.00</amount>
	  <created-at>2016-11-29T23:27:34.547Z</created-at>
	  <approval-url>https://example.com</approval-url>
	  <ideal-transaction-id>1234567890</ideal-transaction-id>
	</ideal-payment>`;
	  }
	
	  subjectXmlForIdealPaymentFailed(id) {
	    return `<ideal-payment>
	  <id>${id}</id>
	  <status>FAILED</status>
	  <issuer>ABCISSUER</issuer>
	  <order-id>ORDERABC</order-id>
	  <currency>EUR</currency>
	  <amount>10.00</amount>
	  <created-at>2016-11-29T23:27:34.547Z</created-at>
	  <approval-url>https://example.com</approval-url>
	  <ideal-transaction-id>1234567890</ideal-transaction-id>
	</ideal-payment>`;
	  }
	
	  subjectXmlForSubMerchantAccountApproved(id) {
	    return `<merchant_account>
	  <id>${id}</id>
	</merchant_account>`;
	  }
	
	  errorSampleXml() {
	    return `<error>
	  <code>82621</code>
	  <message>Credit score is too low</message>
	  <attribute type=\"symbol\">base</attribute>
	</error>`;
	  }
	
	  subjectXmlForSubMerchantAccountDeclined(id) {
	    return `<api-error-response>
	  <message>Credit score is too low</message>
	  <errors>
	    <merchant-account>
	      <errors type="array">
	        ${this.errorSampleXml()}
	      </errors>
	    </merchant-account>
	  </errors>
	  ${this.merchantAccountSampleXml(id)}
	</api-error-response>`;
	  }
	
	  merchantAccountSampleXml(id) {
	    return `<merchant_account>
	  <id>${id}</id>
	  <master_merchant_account>
	    <id>master_ma_for_${id}</id>
	    <status>suspended</status>
	  </master_merchant_account>
	  <status>suspended</status>
	</merchant_account>`;
	  }
	
	  subjectXmlForSubscription(id) {
	    return `<subscription>
	    <id>${id}</id>
	    <transactions type="array"></transactions>
	    <add_ons type="array"></add_ons>
	    <discounts type="array"></discounts>
	</subscription>`;
	  }
	
	  subjectXmlForSubscriptionChargedSuccessfully(id) {
	    return `<subscription>
	    <id>${id}</id>
	    <transactions type="array">
	      <transaction>
	        <status>submitted_for_settlement</status>
	        <amount>49.99</amount>
	      </transaction>
	    </transactions>
	    <add_ons type="array"></add_ons>
	    <discounts type="array"></discounts>
	</subscription>`;
	  }
	
	  subjectXmlForPartnerMerchantConnected() {
	    return `<partner-merchant>
	  <merchant-public-id>public_id</merchant-public-id>
	  <public-key>public_key</public-key>
	  <private-key>private_key</private-key>
	  <partner-merchant-id>abc123</partner-merchant-id>
	  <client-side-encryption-key>cse_key</client-side-encryption-key>
	</partner-merchant>`;
	  }
	
	  subjectXmlForPartnerMerchantDisconnected() {
	    return `<partner-merchant>
	  <partner-merchant-id>abc123</partner-merchant-id>
	</partner-merchant>`;
	  }
	
	  subjectXmlForConnectedMerchantStatusTransitioned(id) {
	    return `<connected-merchant-status-transitioned>
	        <merchant-public-id>${id}</merchant-public-id>
	        <status>new_status</status>
	        <oauth-application-client-id>oauth_application_client_id</oauth-application-client-id>
	      </connected-merchant-status-transitioned>`;
	  }
	
	  subjectXmlForConnectedMerchantPayPalStatusChanged(id) {
	    return `<connected-merchant-paypal-status-changed>
	        <merchant-public-id>${id}</merchant-public-id>
	        <action>link</action>
	        <oauth-application-client-id>oauth_application_client_id</oauth-application-client-id>
	      </connected-merchant-paypal-status-changed>`;
	  }
	
	  subjectXmlForPartnerMerchantDeclined() {
	    return `<partner-merchant>
	  <partner-merchant-id>abc123</partner-merchant-id>
	</partner-merchant>`;
	  }
	}
	
	module.exports = {WebhookTestingGateway: wrapPrototype(WebhookTestingGateway)};


/***/ }),
/* 140 */
/***/ (function(module, exports) {

	'use strict';
	
	let PaymentInstrumentTypes = {
	  PayPalAccount: 'paypal_account',
	  EuropeBankAccount: 'europe_bank_account',
	  UsBankAccount: 'us_bank_account',
	  CreditCard: 'credit_card',
	  CoinbaseAccount: 'coinbase_account',
	  ApplePayCard: 'apple_pay_card',
	  AndroidPayCard: 'android_pay_card',
	  AmexExpressCheckoutCard: 'amex_express_checkout_card',
	  VenmoAccount: 'venmo_account',
	  IdealPayment: 'ideal_payment',
	  VisaCheckoutCard: 'visa_checkout_card',
	  MasterpassCard: 'masterpass_card'
	};
	
	module.exports = {PaymentInstrumentTypes: PaymentInstrumentTypes};


/***/ }),
/* 141 */
/***/ (function(module, exports) {

	'use strict';
	
	class ValidationErrorCodes {
	  static initClass() {
	    this.Address = {
	      CannotBeBlank: '81801',
	      CompanyIsInvalid: '91821',
	      CompanyIsTooLong: '81802',
	      CountryCodeAlpha2IsNotAccepted: '91814',
	      CountryCodeAlpha3IsNotAccepted: '91816',
	      CountryCodeNumericIsNotAccepted: '91817',
	      CountryNameIsNotAccepted: '91803',
	      ExtendedAddressIsInvalid: '91823',
	      ExtendedAddressIsTooLong: '81804',
	      FirstNameIsInvalid: '91819',
	      FirstNameIsTooLong: '81805',
	      InconsistentCountry: '91815',
	      IsInvalid: '91828',
	      LastNameIsInvalid: '91820',
	      LastNameIsTooLong: '81806',
	      LocalityIsInvalid: '91824',
	      LocalityIsTooLong: '81807',
	      PostalCodeInvalidCharacters: '81813',
	      PostalCodeIsInvalid: '91826',
	      PostalCodeIsRequired: '81808',
	      PostalCodeIsTooLong: '81809',
	      RegionIsInvalid: '91825',
	      RegionIsTooLong: '81810',
	      StateIsInvalidForSellerProtection: '81827',
	      StreetAddressIsInvalid: '91822',
	      StreetAddressIsRequired: '81811',
	      StreetAddressIsTooLong: '81812',
	      TooManyAddressesPerCustomer: '91818'
	    };
	
	    this.ApplePayCard = {
	      ApplePayCardsAreNotAccepted: '83501',
	      CustomerIdIsRequiredForVaulting: '83502',
	      TokenIsInUse: '93503',
	      PaymentMethodNonceConsumed: '93504',
	      PaymentMethodNonceUnknown: '93505',
	      PaymentMethodNonceLocked: '93506',
	      PaymentMethodNonceCardTypeIsNotAccepted: '83518',
	      CannotUpdateApplePayCardUsingPaymentMethodNonce: '93507',
	      NumberIsRequired: '93508',
	      ExpirationMonthIsRequired: '93509',
	      ExpirationYearIsRequired: '93510',
	      CryptogramIsRequired: '93511',
	      DecryptionFailed: '83512',
	      Disabled: '93513',
	      MerchantNotConfigured: '93514',
	      MerchantKeysAlreadyConfigured: '93515',
	      MerchantKeysNotConfigured: '93516',
	      CertificateInvalid: '93517',
	      CertificateMismatch: '93519',
	      InvalidToken: '83520',
	      PrivateKeyMismatch: '93521',
	      KeyMismatchStoringCertificate: '93522'
	    };
	
	    this.AuthorizationFingerprint = {
	      InvalidCreatedAt: '93204',
	      InvalidFormat: '93202',
	      InvalidPublicKey: '93205',
	      InvalidSignature: '93206',
	      MissingFingerprint: '93201',
	      OptionsNotAllowedWithoutCustomer: '93207',
	      SignatureRevoked: '93203'
	    };
	
	    this.ClientToken = {
	      CustomerDoesNotExist: '92804',
	      FailOnDuplicatePaymentMethodRequiresCustomerId: '92803',
	      MakeDefaultRequiresCustomerId: '92801',
	      ProxyMerchantDoesNotExist: '92805',
	      VerifyCardRequiresCustomerId: '92802',
	      MerchantAccountDoesNotExist: '92807',
	      UnsupportedVersion: '92806'
	    };
	
	    this.CreditCard = {
	      BillingAddressConflict: '91701',
	      BillingAddressFormatIsInvalid: '91744',
	      BillingAddressIdIsInvalid: '91702',
	      CannotUpdateCardUsingPaymentMethodNonce: '91735',
	      CardholderNameIsTooLong: '81723',
	      CreditCardTypeIsNotAccepted: '81703',
	      CreditCardTypeIsNotAcceptedBySubscriptionMerchantAccount: '81718',
	      CustomerIdIsInvalid: '91705',
	      CustomerIdIsRequired: '91704',
	      CvvIsInvalid: '81707',
	      CvvIsRequired: '81706',
	      CvvVerificationFailed: '81736',
	      DuplicateCardExists: '81724',
	      ExpirationDateConflict: '91708',
	      ExpirationDateIsInvalid: '81710',
	      ExpirationDateIsRequired: '81709',
	      ExpirationDateYearIsInvalid: '81711',
	      ExpirationMonthIsInvalid: '81712',
	      ExpirationYearIsInvalid: '81713',
	      InvalidParamsForCreditCardUpdate: '91745',
	      InvalidVenmoSDKPaymentMethodCode: '91727',
	      NumberHasInvalidLength: '81716',
	      NumberIsInvalid: '81715',
	      NumberIsProhibited: '81750',
	      NumberIsRequired: '81714',
	      NumberLengthIsInvalid: '81716',
	      NumberMustBeTestNumber: '81717',
	      PaymentMethodConflict: '81725',
	      PaymentMethodIsNotACreditCard: '91738',
	      PaymentMethodNonceCardTypeIsNotAccepted: '91734',
	      PaymentMethodNonceConsumed: '91731',
	      PaymentMethodNonceLocked: '91733',
	      PaymentMethodNonceUnknown: '91732',
	      PostalCodeVerificationFailed: '81737',
	      TokenFormatIsInvalid: '91718',
	      TokenInvalid: '91718',
	      TokenIsInUse: '91719',
	      TokenIsNotAllowed: '91721',
	      TokenIsRequired: '91722',
	      TokenIsTooLong: '91720',
	      VenmoSDKPaymentMethodCodeCardTypeIsNotAccepted: '91726',
	      VerificationNotSupportedOnThisMerchantAccount: '91730',
	      Options: {
	        UpdateExistingTokenIsInvalid: '91723',
	        UpdateExistingTokenNotAllowed: '91729',
	        VerificationAmountCannotBeNegative: '91739',
	        VerificationAmountFormatIsInvalid: '91740',
	        VerificationAmountIsTooLarge: '91752',
	        VerificationAmountNotSupportedByProcessor: '91741',
	        VerificationMerchantAccountIdIsInvalid: '91728',
	        VerificationMerchantAccountIsForbidden: '91743',
	        VerificationMerchantAccountIsSuspended: '91742',
	        VerificationMerchantAccountCannotBeSubMerchantAccount: '91755'
	      }
	    };
	
	    this.Customer = {
	      CompanyIsTooLong: '81601',
	      CustomFieldIsInvalid: '91602',
	      CustomFieldIsTooLong: '81603',
	      EmailFormatIsInvalid: '81604',
	      EmailIsRequired: '81606',
	      EmailIsTooLong: '81605',
	      FaxIsTooLong: '81607',
	      FirstNameIsTooLong: '81608',
	      IdIsInUse: '91609',
	      IdIsInvalid: '91610',
	      IdIsNotAllowed: '91611',
	      IdIsRequired: '91613',
	      IdIsTooLong: '91612',
	      LastNameIsTooLong: '81613',
	      PhoneIsTooLong: '81614',
	      VaultedPaymentInstrumentNonceBelongsToDifferentCustomer: '91617',
	      WebsiteFormatIsInvalid: '81616',
	      WebsiteIsTooLong: '81615'
	    };
	
	    this.Descriptor = {
	      InternationalNameFormatIsInvalid: '92204',
	      PhoneFormatIsInvalid: '92202',
	      DynamicDescriptorsDisabled: '92203',
	      NameFormatIsInvalid: '92201',
	      InternationalPhoneFormatIsInvalid: '92205',
	      UrlFormatIsInvalid: '92206'
	    };
	
	    this.Dispute = {
	      CanOnlyAddEvidenceToOpenDispute: '95701',
	      CanOnlyRemoveEvidenceFromOpenDispute: '95702',
	      CanOnlyAddEvidenceDocumentToDispute: '95703',
	      CanOnlyAcceptOpenDispute: '95704',
	      CanOnlyFinalizeOpenDispute: '95705'
	    };
	
	    this.DocumentUpload = {
	      KindIsInvalid: '84901',
	      FileIsTooLarge: '84902',
	      FileTypeIsInvalid: '84903',
	      FileIsMalformedOrEncrypted: '84904'
	    };
	
	    this.Merchant = {
	      CountryCannotBeBlank: '83603',
	      CountryCodeAlpha2IsInvalid: '93607',
	      CountryCodeAlpha2IsNotAccepted: '93606',
	      CountryCodeAlpha3IsInvalid: '93605',
	      CountryCodeAlpha3IsNotAccepted: '93604',
	      CountryCodeNumericIsInvalid: '93609',
	      CountryCodeNumericIsNotAccepted: '93608',
	      CountryNameIsInvalid: '93611',
	      CountryNameIsNotAccepted: '93610',
	      CurrenciesAreInvalid: '93614',
	      EmailFormatIsInvalid: '93602',
	      EmailIsRequired: '83601',
	      InconsistentCountry: '93612',
	      PaymentMethodsAreInvalid: '93613',
	      PaymentMethodsAreNotAllowed: '93615',
	      MerchantAccountExistsForCurrency: '93616',
	      CurrencyIsRequired: '93617',
	      CurrencyIsInvalid: '93618',
	      NoMerchantAccounts: '93619',
	      MerchantAccountExistsForId: '93620',
	      MerchantAccountNotAuthOnboarded: '93621'
	    };
	
	    this.MerchantAccount = {
	      ApplicantDetails: {
	        AccountNumberIsInvalid: '82670',
	        AccountNumberIsRequired: '82614',
	        Address: {
	          LocalityIsRequired: '82618',
	          PostalCodeIsInvalid: '82630',
	          PostalCodeIsRequired: '82619',
	          RegionIsInvalid: '82664',
	          RegionIsRequired: '82620',
	          StreetAddressIsInvalid: '82629',
	          StreetAddressIsRequired: '82617'
	        },
	        CompanyNameIsInvalid: '82631',
	        CompanyNameIsRequiredWithTaxId: '82633',
	        DateOfBirthIsInvalid: '82663',
	        DateOfBirthIsRequired: '82612',
	        Declined: '82626',
	        DeclinedFailedKYC: '82623',
	        DeclinedMasterCardMatch: '82622',
	        DeclinedOFAC: '82621',
	        DeclinedSsnInvalid: '82624',
	        DeclinedSsnMatchesDeceased: '82625',
	        EmailAddressIsInvalid: '82616',
	        EmailAddressIsRequired: '82665',
	        FirstNameIsInvalid: '82627',
	        FirstNameIsRequired: '82609',
	        LastNameIsInvalid: '82628',
	        LastNameIsRequired: '82611',
	        PhoneIsInvalid: '82636',
	        RoutingNumberIsInvalid: '82635',
	        RoutingNumberIsRequired: '82613',
	        SsnIsInvalid: '82615',
	        TaxIdIsInvalid: '82632',
	        TaxIdIsRequiredWithCompanyName: '82634',
	        TaxIdMustBeBlank: '82673'
	      },
	      Individual: {
	        DateOfBirthIsInvalid: '82666',
	        DateOfBirthIsRequired: '82639',
	        EmailIsInvalid: '82643',
	        EmailIsRequired: '82667',
	        FirstNameIsInvalid: '82644',
	        FirstNameIsRequired: '82637',
	        LastNameIsInvalid: '82645',
	        LastNameIsRequired: '82638',
	        PhoneIsInvalid: '82656',
	        SsnIsInvalid: '82642',
	        Address: {
	          StreetAddressIsRequired: '82657',
	          LocalityIsRequired: '82658',
	          PostalCodeIsRequired: '82659',
	          RegionIsRequired: '82660',
	          StreetAddressIsInvalid: '82661',
	          PostalCodeIsInvalid: '82662',
	          RegionIsInvalid: '82668'
	        }
	      },
	      Business: {
	        DbaNameIsInvalid: '82646',
	        LegalNameIsInvalid: '82677',
	        LegalNameIsRequiredWithTaxId: '82669',
	        TaxIdIsInvalid: '82647',
	        TaxIdIsRequiredWithLegalName: '82648',
	        TaxIdMustBeBlank: '82672',
	        Address: {
	          StreetAddressIsInvalid: '82685',
	          PostalCodeIsInvalid: '82686',
	          RegionIsInvalid: '82684'
	        }
	      },
	      Funding: {
	        AccountNumberIsInvalid: '82671',
	        AccountNumberIsRequired: '82641',
	        DestinationIsInvalid: '82679',
	        DestinationIsRequired: '82678',
	        EmailIsInvalid: '82681',
	        EmailIsRequired: '82680',
	        MobilePhoneIsInvalid: '82683',
	        MobilePhoneIsRequired: '82682',
	        RoutingNumberIsInvalid: '82649',
	        RoutingNumberIsRequired: '82640'
	      },
	      CannotBeUpdated: '82674',
	      IdCannotBeUpdated: '82675',
	      IdFormatIsInvalid: '82603',
	      IdIsInUse: '82604',
	      IdIsNotAllowed: '82605',
	      IdIsTooLong: '82602',
	      MasterMerchantAccountIdCannotBeUpdated: '82676',
	      MasterMerchantAccountIdIsInvalid: '82607',
	      MasterMerchantAccountIdIsRequired: '82606',
	      MasterMerchantAccountMustBeActive: '82608',
	      TosAcceptedIsRequired: '82610'
	    };
	
	    this.OAuth = {
	      InvalidGrant: '93801',
	      InvalidCredentials: '93802',
	      InvalidScope: '93803',
	      InvalidRequest: '93804',
	      UnsupportedGrantType: '93805'
	    };
	
	    this.PaymentMethod = {
	      CannotForwardPaymentMethodType: '93106',
	      CustomerIdIsInvalid: '93105',
	      CustomerIdIsRequired: '93104',
	      NonceIsInvalid: '93102',
	      NonceIsRequired: '93103',
	      PaymentMethodParamsAreRequired: '93101',
	      PaymentMethodNonceConsumed: '93107',
	      PaymentMethodNonceUnknown: '93108',
	      PaymentMethodNonceLocked: '93109',
	      PaymentMethodNoLongerSupported: '93117'
	    };
	
	    this.PayPalAccount = {
	      AuthExpired: '92911',
	      CannotHaveBothAccessTokenAndConsentCode: '82903',
	      CannotHaveFundingSourceWithoutAccessToken: '92912',
	      CannotUpdatePayPalAccountUsingPaymentMethodNonce: '92914',
	      CannotVaultOneTimeUsePayPalAccount: '82902',
	      ConsentCodeOrAccessTokenIsRequired: '82901',
	      CustomerIdIsRequiredForVaulting: '82905',
	      InvalidFundingSourceSelection: '92913',
	      InvalidParamsForPayPalAccountUpdate: '92915',
	      PayPalAccountsAreNotAccepted: '82904',
	      PayPalCommunicationError: '92910',
	      PaymentMethodNonceConsumed: '92907',
	      PaymentMethodNonceLocked: '92909',
	      PaymentMethodNonceUnknown: '92908',
	      TokenIsInUse: '92906'
	    };
	
	    this.SEPABankAccount = {
	      IBANIsRequired: '93001',
	      BICIsRequired: '93002',
	      AccountHolderNameIsRequired: '93003'
	    };
	
	    this.SEPAMandate = {
	      AccountHolderNameIsRequired: '83301',
	      BICIsRequired: '83302',
	      IBANIsRequired: '83303',
	      TypeIsRequired: '93304',
	      IBANInvalidCharacter: '83305',
	      BICInvalidCharacter: '83306',
	      BICLengthIsInvalid: '83307',
	      BICUnsupportedCountry: '83308',
	      IBANUnsupportedCountry: '83309',
	      IBANInvalidFormat: '83310',
	      BillingAddressConflict: '93311',
	      BillingAddressIdIsInvalid: '93312',
	      TypeIsInvalid: '93313'
	    };
	
	    this.SettlementBatchSummary = {
	      SettlementDateIsInvalid: '82302',
	      SettlementDateIsRequired: '82301',
	      CustomFieldIsInvalid: '82303'
	    };
	
	    this.Subscription = {
	      BillingDayOfMonthCannotBeUpdated: '91918',
	      BillingDayOfMonthIsInvalid: '91914',
	      BillingDayOfMonthMustBeNumeric: '91913',
	      CannotAddDuplicateAddonOrDiscount: '91911',
	      CannotEditCanceledSubscription: '81901',
	      CannotEditExpiredSubscription: '81910',
	      CannotEditPriceChangingFieldsOnPastDueSubscription: '91920',
	      FirstBillingDateCannotBeInThePast: '91916',
	      FirstBillingDateCannotBeUpdated: '91919',
	      FirstBillingDateIsInvalid: '91915',
	      IdIsInUse: '81902',
	      InconsistentNumberOfBillingCycles: '91908',
	      InconsistentStartDate: '91917',
	      InvalidRequestFormat: '91921',
	      MerchantAccountDoesNotSupportInstrumentType: '91930',
	      MerchantAccountIdIsInvalid: '91901',
	      MismatchCurrencyISOCode: '91923',
	      NumberOfBillingCyclesCannotBeBlank: '91912',
	      NumberOfBillingCyclesIsTooSmall: '91909',
	      NumberOfBillingCyclesMustBeGreaterThanZero: '91907',
	      NumberOfBillingCyclesMustBeNumeric: '91906',
	      PaymentMethodNonceCardTypeIsNotAccepted: '91924',
	      PaymentMethodNonceInstrumentTypeDoesNotSupportSubscriptions: '91929',
	      PaymentMethodNonceIsInvalid: '91925',
	      PaymentMethodNonceNotAssociatedWithCustomer: '91926',
	      PaymentMethodNonceUnvaultedCardIsNotAccepted: '91927',
	      PaymentMethodTokenCardTypeIsNotAccepted: '91902',
	      PaymentMethodTokenInstrumentTypeDoesNotSupportSubscriptions: '91928',
	      PaymentMethodTokenIsInvalid: '91903',
	      PaymentMethodTokenNotAssociatedWithCustomer: '91905',
	      PlanBillingFrequencyCannotBeUpdated: '91922',
	      PlanIdIsInvalid: '91904',
	      PriceCannotBeBlank: '81903',
	      PriceFormatIsInvalid: '81904',
	      PriceIsTooLarge: '81923',
	      StatusIsCanceled: '81905',
	      TokenFormatIsInvalid: '81906',
	      TrialDurationFormatIsInvalid: '81907',
	      TrialDurationIsRequired: '81908',
	      TrialDurationUnitIsInvalid: '81909',
	      Modification: {
	        AmountCannotBeBlank: '92003',
	        AmountIsInvalid: '92002',
	        AmountIsTooLarge: '92023',
	        CannotEditModificationsOnPastDueSubscription: '92022',
	        CannotUpdateAndRemove: '92015',
	        ExistingIdIsIncorrectKind: '92020',
	        ExistingIdIsInvalid: '92011',
	        ExistingIdIsRequired: '92012',
	        IdToRemoveIsIncorrectKind: '92021',
	        IdToRemoveIsInvalid: '92025',
	        IdToRemoveIsNotPresent: '92016',
	        InconsistentNumberOfBillingCycles: '92018',
	        InheritedFromIdIsInvalid: '92013',
	        InheritedFromIdIsRequired: '92014',
	        Missing: '92024',
	        NumberOfBillingCyclesCannotBeBlank: '92017',
	        NumberOfBillingCyclesIsInvalid: '92005',
	        NumberOfBillingCyclesMustBeGreaterThanZero: '92019',
	        QuantityCannotBeBlank: '92004',
	        QuantityIsInvalid: '92001',
	        QuantityMustBeGreaterThanZero: '92010'
	      }
	    };
	
	    this.Transaction = {
	      AmountCannotBeNegative: '81501',
	      AmountDoesNotMatch3DSecureAmount: '91585',
	      AmountDoesNotMatchIdealPaymentAmount: '915144',
	      AmountFormatIsInvalid: '81503',
	      AmountIsRequired: '81502',
	      AmountIsTooLarge: '81528',
	      AmountMustBeGreaterThanZero: '81531',
	      BillingAddressConflict: '91530',
	      CannotBeVoided: '91504',
	      CannotCancelRelease: '91562',
	      CannotCloneCredit: '91543',
	      CannotCloneMarketplaceTransaction: '915137',
	      CannotCloneTransactionWithPayPalAccount: '91573',
	      CannotCloneTransactionWithVaultCreditCard: '91540',
	      CannotCloneUnsuccessfulTransaction: '91542',
	      CannotCloneVoiceAuthorizations: '91541',
	      CannotHoldInEscrow: '91560',
	      CannotPartiallyRefundEscrowedTransaction: '91563',
	      CannotRefundCredit: '91505',
	      CannotRefundSettlingTransaction: '91574',
	      CannotRefundUnlessSettled: '91506',
	      CannotRefundWithPendingMerchantAccount: '91559',
	      CannotRefundWithSuspendedMerchantAccount: '91538',
	      CannotReleaseFromEscrow: '91561',
	      CannotSimulateSettlement: '91575',
	      CannotSubmitForPartialSettlement: '915103',
	      CannotSubmitForSettlement: '91507',
	      CannotUpdateTransactionDetailsNotSubmittedForSettlement: '915129',
	      ChannelIsTooLong: '91550',
	      CreditCardIsRequired: '91508',
	      CustomFieldIsInvalid: '91526',
	      CustomFieldIsTooLong: '81527',
	      CustomerDefaultPaymentMethodCardTypeIsNotAccepted: '81509',
	      CustomerDoesNotHaveCreditCard: '91511',
	      CustomerIdIsInvalid: '91510',
	      DiscountAmountFormatIsInvalid: '915159',
	      DiscountAmountCannotBeNegative: '915160',
	      DiscountAmountIsTooLarge: '915161',
	      FailedAuthAdjustmentAllowRetry: '95603',
	      FailedAuthAdjustmentHardDecline: '95602',
	      FinalAuthSubmitForSettlementForDifferentAmount: '95601',
	      HasAlreadyBeenRefunded: '91512',
	      IdealPaymentNotComplete: '815141',
	      IdealPaymentsCannotBeVaulted: '915150',
	      MerchantAccountDoesNotMatch3DSecureMerchantAccount: '91584',
	      MerchantAccountDoesNotMatchIdealPaymentMerchantAccount: '915143',
	      MerchantAccountDoesNotSupportMOTO: '91558',
	      MerchantAccountDoesNotSupportRefunds: '91547',
	      MerchantAccountIdIsInvalid: '91513',
	      MerchantAccountIsSuspended: '91514',
	      Options: {
	        PayPal: {
	          CustomFieldTooLong: '91580'
	        },
	        SubmitForSettlementIsRequiredForCloning: '91544',
	        SubmitForSettlementIsRequiredForPayPalUnilateral: '91582',
	        UseBillingForShippingDisabled: '91572',
	        VaultIsDisabled: '91525'
	      },
	      OrderIdDoesNotMatchIdealPaymentOrderId: '91503',
	      OrderIdIsRequiredWithIdealPayment: '91502',
	      OrderIdIsTooLong: '91501',
	      PayPalAuthExpired: '91579',
	      PayPalNotEnabled: '91576',
	      PayPalVaultRecordMissingData: '91583',
	      PaymentInstrumentNotSupportedByMerchantAccount: '91577',
	      PaymentInstrumentTypeIsNotAccepted: '915101',
	      PaymentMethodConflict: '91515',
	      PaymentMethodConflictWithVenmoSDK: '91549',
	      PaymentMethodDoesNotBelongToCustomer: '91516',
	      PaymentMethodDoesNotBelongToSubscription: '91527',
	      PaymentMethodNonceCardTypeIsNotAccepted: '91567',
	      PaymentMethodNonceConsumed: '91564',
	      PaymentMethodNonceHasNoValidPaymentInstrumentType: '91569',
	      PaymentMethodNonceLocked: '91566',
	      PaymentMethodNonceUnknown: '91565',
	      PaymentMethodTokenCardTypeIsNotAccepted: '91517',
	      PaymentMethodTokenIsInvalid: '91518',
	      ProcessorAuthorizationCodeCannotBeSet: '91519',
	      ProcessorAuthorizationCodeIsInvalid: '81520',
	      ProcessorDoesNotSupportAuths: '915104',
	      ProcessorDoesNotSupportCredits: '91546',
	      ProcessorDoesNotSupportPartialSettlement: '915102',
	      ProcessorDoesNotSupportUpdatingOrderId: '915107',
	      ProcessorDoesNotSupportUpdatingDescriptor: '915108',
	      ProcessorDoesNotSupportUpdatingTransactionDetails: '915130',
	      ProcessorDoesNotSupportVoiceAuthorizations: '91545',
	      PurchaseOrderNumberIsInvalid: '91548',
	      PurchaseOrderNumberIsTooLong: '91537',
	      RefundAmountIsTooLarge: '91521',
	      ServiceFeeAmountCannotBeNegative: '91554',
	      ServiceFeeAmountFormatIsInvalid: '91555',
	      ServiceFeeAmountIsTooLarge: '91556',
	      ServiceFeeAmountNotAllowedOnMasterMerchantAccount: '91557',
	      ServiceFeeIsNotAllowedOnCredits: '91552',
	      ServiceFeeNotAcceptedForPayPal: '91578',
	      SettlementAmountIsLessThanServiceFeeAmount: '91551',
	      SettlementAmountIsTooLarge: '91522',
	      ShippingAddressDoesntMatchCustomer: '91581',
	      ShippingAmountFormatIsInvalid: '915162',
	      ShippingAmountCannotBeNegative: '915163',
	      ShippingAmountIsTooLarge: '915164',
	      ShipsFromPostalCodeIsTooLong: '915165',
	      ShipsFromPostalCodeIsInvalid: '915166',
	      ShipsFromPostalCodeInvalidCharacters: '915167',
	      SubMerchantAccountRequiresServiceFeeAmount: '91553',
	      SubscriptionDoesNotBelongToCustomer: '91529',
	      SubscriptionIdIsInvalid: '91528',
	      SubscriptionStatusMustBePastDue: '91531',
	      TaxAmountCannotBeNegative: '81534',
	      TaxAmountFormatIsInvalid: '81535',
	      TaxAmountIsTooLarge: '81536',
	      ThreeDSecureAuthenticationFailed: '81571',
	      ThreeDSecureTokenIsInvalid: '91568',
	      ThreeDSecureTransactionDataDoesntMatchVerify: '91570',
	      ThreeDSecureEciFlagIsRequired: '915113',
	      ThreeDSecureCavvIsRequired: '915116',
	      ThreeDSecureXidIsRequired: '915115',
	      ThreeDSecureEciFlagIsInvalid: '915114',
	      ThreeDSecureMerchantAccountDoesNotSupportCardType: '915131',
	      TransactionSettlementAmountIsLessThanServiceFeeAmount: '91551',
	      TooManyLineItems: '915157',
	      LineItemsExpected: '915158',
	      TypeIsInvalid: '91523',
	      TypeIsRequired: '91524',
	      UnsupportedVoiceAuthorization: '91539',
	      IndustryData: {
	        IndustryTypeIsInvalid: '93401',
	        Lodging: {
	          EmptyData: '93402',
	          FolioNumberIsInvalid: '93403',
	          CheckInDateIsInvalid: '93404',
	          CheckOutDateIsInvalid: '93405',
	          CheckOutDateMustFollowCheckInDate: '93406',
	          UnknownDataField: '93407'
	        },
	        TravelCruise: {
	          EmptyData: '93408',
	          UnknownDataField: '93409',
	          TravelPackageIsInvalid: '93410',
	          DepartureDateIsInvalid: '93411',
	          CheckInDateIsInvalid: '93412',
	          CheckOutDateIsInvalid: '93413'
	        }
	      },
	      LineItem: {
	        CommodityCodeIsTooLong: '95801',
	        DescriptionIsTooLong: '95803',
	        DiscountAmountFormatIsInvalid: '95804',
	        DiscountAmountIsTooLarge: '95805',
	        DiscountAmountMustBeGreaterThanZero: '95806', // Deprecated as the amount may be zero.
	        DiscountAmountCannotBeNegative: '95806',
	        KindIsInvalid: '95807',
	        KindIsRequired: '95808',
	        NameIsRequired: '95822',
	        NameIsTooLong: '95823',
	        ProductCodeIsTooLong: '95809',
	        QuantityFormatIsInvalid: '95810',
	        QuantityIsRequired: '95811',
	        QuantityIsTooLarge: '95812',
	        TotalAmountFormatIsInvalid: '95813',
	        TotalAmountIsRequired: '95814',
	        TotalAmountIsTooLarge: '95815',
	        TotalAmountMustBeGreaterThanZero: '95816',
	        UnitAmountFormatIsInvalid: '95817',
	        UnitAmountIsRequired: '95818',
	        UnitAmountIsTooLarge: '95819',
	        UnitAmountMustBeGreaterThanZero: '95820',
	        UnitOfMeasureIsTooLong: '95821',
	        UnitTaxAmountFormatIsInvalid: '95824',
	        UnitTaxAmountIsTooLarge: '95825',
	        UnitTaxAmountMustBeGreaterThanZero: '95826', // Deprecated as the amount may be zero.
	        UnitTaxAmountCannotBeNegative: '95826',
	        TaxAmountFormatIsInvalid: '95827',
	        TaxAmountIsTooLarge: '95828',
	        TaxAmountCannotBeNegative: '95829'
	      }
	    };
	
	    this.Verification = {
	      Options: {
	        AmountCannotBeNegative: '94201',
	        AmountFormatIsInvalid: '94202',
	        AmountIsTooLarge: '94207',
	        AmountNotSupportedByProcessor: '94203',
	        MerchantAccountIdIsInvalid: '94204',
	        MerchantAccountIsSuspended: '94205',
	        MerchantAccountIsForbidden: '94206',
	        MerchantAccountCannotBeSubMerchantAccount: '94208'
	      }
	    };
	  }
	}
	ValidationErrorCodes.initClass();
	
	module.exports = {ValidationErrorCodes: ValidationErrorCodes};


/***/ }),
/* 142 */
/***/ (function(module, exports) {

	'use strict';
	
	let CreditCardDefaults = {
	  CountryOfIssuance: 'USA',
	  IssuingBank: 'NETWORK ONLY'
	};
	
	module.exports = {CreditCardDefaults: CreditCardDefaults};


/***/ }),
/* 143 */
/***/ (function(module, exports) {

	'use strict';
	
	let CreditCardNumbers = {
	  CardTypeIndicators: {
	    Prepaid: '4111111111111210',
	    Commercial: '4111111111131010',
	    Payroll: '4111111114101010',
	    Healthcare: '4111111510101010',
	    DurbinRegulated: '4111161010101010',
	    Debit: '4117101010101010',
	    Unknown: '4111111111112101',
	    No: '4111111111310101',
	    IssuingBank: '4111111141010101',
	    CountryOfIssuance: '4111111111121102',
	    Fraud: '4000111111111511'
	  },
	
	  AmexPayWithPoints: {
	    Success: '371260714673002',
	    IneligibleCard: '378267515471109',
	    InsufficientPoints: '371544868764018'
	  },
	
	  Dispute: {
	    Chargeback: '4023898493988028'
	  }
	};
	
	module.exports = {CreditCardNumbers: CreditCardNumbers};


/***/ }),
/* 144 */
/***/ (function(module, exports) {

	'use strict';
	
	let MerchantAccountTest = {
	  Approve: 'approve_me',
	  InsufficientFundsContactUs: 'insufficient_funds__contact',
	  AccountNotAuthorizedContactUs: 'account_not_authorized__contact',
	  BankRejectedUpdateFundingInformation: 'bank_rejected__update',
	  BankRejectedNone: 'bank_rejected__none'
	};
	
	module.exports = {MerchantAccountTest: MerchantAccountTest};


/***/ }),
/* 145 */
/***/ (function(module, exports) {

	'use strict';
	
	let Nonces = {
	  Transactable: 'fake-valid-nonce',
	  Consumed: 'fake-consumed-nonce',
	  PayPalOneTimePayment: 'fake-paypal-one-time-nonce',
	  PayPalFuturePayment: 'fake-paypal-future-nonce',
	  PayPalBillingAgreement: 'fake-paypal-billing-agreement-nonce',
	  ApplePayVisa: 'fake-apple-pay-visa-nonce',
	  ApplePayMasterCard: 'fake-apple-pay-mastercard-nonce',
	  ApplePayAmEx: 'fake-apple-pay-amex-nonce',
	  AbstractTransactable: 'fake-abstract-transactable-nonce',
	  Europe: 'fake-europe-bank-account-nonce',
	  Coinbase: 'fake-coinbase-nonce',
	  AndroidPay: 'fake-android-pay-nonce',
	  AndroidPayDiscover: 'fake-android-pay-discover-nonce',
	  AndroidPayVisa: 'fake-android-pay-visa-nonce',
	  AndroidPayMasterCard: 'fake-android-pay-mastercard-nonce',
	  AndroidPayAmEx: 'fake-android-pay-amex-nonce',
	  AmexExpressCheckout: 'fake-amex-express-checkout-nonce',
	  TransactableVisa: 'fake-valid-visa-nonce',
	  TransactableAmEx: 'fake-valid-amex-nonce',
	  TransactableMasterCard: 'fake-valid-mastercard-nonce',
	  TransactableDiscover: 'fake-valid-discover-nonce',
	  TransactableJCB: 'fake-valid-jcb-nonce',
	  TransactableMaestro: 'fake-valid-maestro-nonce',
	  TransactableDinersClub: 'fake-valid-dinersclub-nonce',
	  TransactablePrepaid: 'fake-valid-prepaid-nonce',
	  TransactableCommercial: 'fake-valid-commercial-nonce',
	  TransactableDurbinRegulated: 'fake-valid-durbin-regulated-nonce',
	  TransactableHealthcare: 'fake-valid-healthcare-nonce',
	  TransactableDebit: 'fake-valid-debit-nonce',
	  TransactablePayroll: 'fake-valid-payroll-nonce',
	  TransactableNoIndicators: 'fake-valid-no-indicators-nonce',
	  TransactableUnknownIndicators: 'fake-valid-unknown-indicators-nonce',
	  TransactableCountryOfIssuanceUSA: 'fake-valid-country-of-issuance-usa-nonce',
	  TransactableCountryOfIssuanceCAD: 'fake-valid-country-of-issuance-cad-nonce',
	  TransactableIssuingBankNetworkOnly: 'fake-valid-issuing-bank-network-only-nonce',
	  ProcessorDeclinedVisa: 'fake-processor-declined-visa-nonce',
	  ProcessorDeclinedMasterCard: 'fake-processor-declined-mastercard-nonce',
	  ProcessorDeclinedAmEx: 'fake-processor-declined-amex-nonce',
	  ProcessorDeclinedDiscover: 'fake-processor-declined-discover-nonce',
	  ProcessorFailureJCB: 'fake-processor-failure-jcb-nonce',
	  LuhnInvalid: 'fake-luhn-invalid-nonce',
	  PayPalFuturePaymentRefreshToken: 'fake-paypal-future-refresh-token-nonce',
	  SEPA: 'fake-sepa-bank-account-nonce',
	  GatewayRejectedFraud: 'fake-gateway-rejected-fraud-nonce',
	  VenmoAccount: 'fake-venmo-account-nonce',
	  MasterpassAmEx: 'fake-masterpass-amex-nonce',
	  MasterpassDiscover: 'fake-masterpass-discover-nonce',
	  MasterpassMasterCard: 'fake-masterpass-mastercard-nonce',
	  MasterpassVisa: 'fake-masterpass-visa-nonce',
	  VisaCheckoutAmEx: 'fake-visa-checkout-amex-nonce',
	  VisaCheckoutDiscover: 'fake-visa-checkout-discover-nonce',
	  VisaCheckoutMasterCard: 'fake-visa-checkout-mastercard-nonce',
	  VisaCheckoutVisa: 'fake-visa-checkout-visa-nonce'
	};
	
	module.exports = {Nonces: Nonces};


/***/ }),
/* 146 */
/***/ (function(module, exports) {

	'use strict';
	
	let TransactionAmounts = {
	  Authorize: '1000.00',
	  Decline: '2000.00',
	  Fail: '3000.00'
	};
	
	module.exports = {TransactionAmounts: TransactionAmounts};


/***/ })
/******/ ])
});
;
//# sourceMappingURL=client_token.js.map