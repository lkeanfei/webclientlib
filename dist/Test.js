"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Test = /** @class */ (function () {
    function Test(str) {
        this.str = str;
    }
    Test.prototype.testme = function () {
        console.log("test ne us " + this.str);
    };
    return Test;
}());
exports.Test = Test;
