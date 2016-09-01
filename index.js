const RNBridge = require('react-native').NativeModules.RNBridge;

function Bridge() {

}

// Callbacks

Bridge.prototype.callbackExample = function (callback) {
  RNBridge.callbackExample(callback);
};

module.exports = Bridge;
