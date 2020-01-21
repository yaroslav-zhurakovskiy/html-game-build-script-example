var __extends = (this && this.__extends) || (function () {
                                             var extendStatics = function (d, b) {
                                             extendStatics = Object.setPrototypeOf ||
                                             ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                                             function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                                             return extendStatics(d, b);
                                             };
                                             return function (d, b) {
                                             extendStatics(d, b);
                                             function __() { this.constructor = d; }
                                             d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                                             };
                                             })();
var SandboxBridge = /** @class */ (function () {
                                   function SandboxBridge(objectName) {
                                   if (!objectName) {
                                   throw new SandboxBridgeConstructionError("Missing object name");
                                   }
                                   this.objectName = objectName;
                                   }
                                   SandboxBridge.prototype.invokeMethod = function (functionName, args) {
                                   if (!functionName) {
                                   throw new SandboxBridgeMethodInvocationError("Missing function name");
                                   }
                                   var urlBase = "sandbox://" + this.objectName + "/" + functionName;
                                   var pairs = this.buildQueryPairsFromArguments(args);
                                   if (pairs.length > 0) {
                                   this.openSandboxURL(urlBase + "?" + pairs.join("&"));
                                   }
                                   else {
                                   this.openSandboxURL(urlBase);
                                   }
                                   };
                                   SandboxBridge.prototype.buildQueryPairsFromArguments = function (args) {
                                   if (!args) {
                                   return [];
                                   }
                                   var pairs = [];
                                   for (var name_1 in args) {
                                   var dict = args;
                                   var value = dict[name_1];
                                   var pair = name_1 + "=" + value;
                                   pairs.push(pair);
                                   }
                                   return pairs;
                                   };
                                   SandboxBridge.prototype.openSandboxURL = function (src) {
                                   var newFrameElm = document.createElement("IFRAME");
                                   //    var request = new XMLHttpRequest();
                                   //    request.open("POST", src);
                                   //    request.send();
                                   var rootElm = document.documentElement;
                                   newFrameElm.setAttribute("src", src);
                                   rootElm.appendChild(newFrameElm);
                                   //remove the frame now
                                   // newFrameElm.parentNode.removeChild(newFrameElm);
                                   console.log(src);
                                   };
                                   return SandboxBridge;
                                   }());
var SandboxBridgeError = /** @class */ (function (_super) {
                                        __extends(SandboxBridgeError, _super);
                                        // private reason: string
                                        function SandboxBridgeError(reason) {
                                        // this.reason = reason
                                        return _super.call(this) || this;
                                        }
                                        return SandboxBridgeError;
                                        }(Error));
var SandboxBridgeMethodInvocationError = /** @class */ (function (_super) {
                                                        __extends(SandboxBridgeMethodInvocationError, _super);
                                                        function SandboxBridgeMethodInvocationError() {
                                                        return _super !== null && _super.apply(this, arguments) || this;
                                                        }
                                                        return SandboxBridgeMethodInvocationError;
                                                        }(SandboxBridgeError));
var SandboxBridgeConstructionError = /** @class */ (function (_super) {
                                                    __extends(SandboxBridgeConstructionError, _super);
                                                    function SandboxBridgeConstructionError() {
                                                    return _super !== null && _super.apply(this, arguments) || this;
                                                    }
                                                    return SandboxBridgeConstructionError;
                                                    }(SandboxBridgeError));
var MintegralBannerBridge = /** @class */ (function () {
                                           function MintegralBannerBridge() {
                                           this.bridge = new SandboxBridge("MintegralBanner");
                                           }
                                           MintegralBannerBridge.prototype.show = function (args) {
                                           this.bridge.invokeMethod("show", args);
                                           };
                                           MintegralBannerBridge.prototype.hide = function () {
                                           this.bridge.invokeMethod("hide");
                                           };
                                           return MintegralBannerBridge;
                                           }());
var GoogleAdmobBridge = /** @class */ (function () {
                                       function GoogleAdmobBridge(adUnitID) {
                                       this.sandboxBridge = new SandboxBridge("GoogleAdmob");
                                       this.sandboxBridge.invokeMethod("initialize", { adUnitID: adUnitID });
                                       }
                                       GoogleAdmobBridge.prototype.show = function () {
                                       this.sandboxBridge.invokeMethod("present");
                                       };
                                       return GoogleAdmobBridge;
                                       }());
var MintegralInterstitialVideoAdBridge = /** @class */ (function () {
                                                        function MintegralInterstitialVideoAdBridge() {
                                                        this.bridge = new SandboxBridge("MintegralInterstitialVideoAd");
                                                        }
                                                        MintegralInterstitialVideoAdBridge.prototype.show = function (unitID) {
                                                        this.bridge.invokeMethod("show", { unitID: unitID });
                                                        };
                                                        return MintegralInterstitialVideoAdBridge;
                                                        }());
//# sourceMappingURL=all.js.map
