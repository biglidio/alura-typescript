System.register(["../helpers/decorators/logExecutionTime"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var logExecutionTime_1, Negotiations;
    return {
        setters: [
            function (logExecutionTime_1_1) {
                logExecutionTime_1 = logExecutionTime_1_1;
            }
        ],
        execute: function () {
            Negotiations = class Negotiations {
                constructor() {
                    this._negotiations = [];
                }
                add(negotiation) {
                    this._negotiations.push(negotiation);
                }
                toArray() {
                    return [].concat(this._negotiations);
                }
                toText() {
                    console.log("Print negotiations");
                    console.log(JSON.stringify(this._negotiations));
                }
                isEquals(negotiations) {
                    return JSON.stringify(this._negotiations) == JSON.stringify(negotiations.toArray());
                }
            };
            __decorate([
                logExecutionTime_1.logExecutionTime(true)
            ], Negotiations.prototype, "toArray", null);
            exports_1("Negotiations", Negotiations);
        }
    };
});
