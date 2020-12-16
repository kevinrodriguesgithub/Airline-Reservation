"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(myservice, router, loginservice) {
        this.myservice = myservice;
        this.router = router;
        this.loginservice = loginservice;
        this.username = "admin";
        this.password = "admin";
        this.invalidLogin = false;
        this.userValues = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        // sessionStorage.setItem();
    };
    /*
     //login
          onSubmit(d:loginUser ):any {
                //console.log("Form username : " + value);
                console.log(d.email);
                console.log(d.password);
                this.myservice. loginUser(d).subscribe(data=>{
                    this.message=data});
    
              }
         */
    LoginComponent.prototype.onSubmit = function (adduser) {
        return __awaiter(this, void 0, Promise, function () {
            var _i, _a, value;
            var _this = this;
            return __generator(this, function (_b) {
                console.log(adduser);
                console.log(adduser.email);
                console.log(adduser.pwd);
                if (adduser.email == "admin@gmail.com" && adduser.pwd == "admin") {
                    this.message = "Logged in as Admin";
                    sessionStorage.setItem('username', adduser.email);
                    sessionStorage.setItem('role', 'admin');
                    sessionStorage.setItem('id', '1');
                    this.router.navigate(["/flights"]).then(function () {
                        window.location.reload();
                    });
                }
                else {
                    console.log("not admin");
                    this.myservice.loginUser(adduser).subscribe(function (data) {
                        _this.userList = data;
                        console.log("userlist:" + _this.userList);
                        _this.myservice.setUserList(_this.userList);
                    });
                    for (_i = 0, _a = Object.values(this.userList); _i < _a.length; _i++) {
                        value = _a[_i];
                        this.userValues.push(value);
                    }
                    setTimeout(function () {
                        if (_this.userList != null) {
                            alert("Logged in successfully!");
                            for (var _i = 0, _a = _this.userValues; _i < _a.length; _i++) {
                                var x = _a[_i];
                                console.log("x email:" + x.email);
                                console.log("x.role:" + x.role);
                                console.log("x.id:" + x.id);
                                sessionStorage.setItem('username', x.email);
                                sessionStorage.setItem('role', x.role);
                                sessionStorage.setItem('userid', x.id);
                            }
                            _this.router.navigate(["/searchFlight"]).then(function () {
                                window.location.reload();
                            });
                        }
                    }, 2000);
                }
                return [2 /*return*/];
            });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-comp',
            templateUrl: './login-comp.html',
            styleUrls: ['./login-comp.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
