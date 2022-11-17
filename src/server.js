"use strict";
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var fastify_1 = require("fastify");
var cors_1 = require("@fastify/cors");
var pool_1 = require("./routes/pool");
var user_1 = require("./routes/user");
var guess_1 = require("./routes/guess");
var auth_1 = require("./routes/auth");
var game_1 = require("./routes/game");
var jwt_1 = require("@fastify/jwt");
var dotenv = require("dotenv");
dotenv.config();
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var fastify;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fastify = (0, fastify_1["default"])({
                        logger: true
                    });
                    return [4 /*yield*/, fastify.register(cors_1["default"], {
                            origin: true
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, fastify.register(jwt_1["default"], {
                            secret: 'nlwcopa'
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, fastify.register(auth_1.authRoute)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, fastify.register(pool_1.poolRoute)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, fastify.register(user_1.userRoute)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, fastify.register(guess_1.guessRoute)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, fastify.register(game_1.gameRoute)];
                case 7:
                    _a.sent();
                    // await fastify.listen({port: 3333, host: '0.0.0.0'});
                    return [4 /*yield*/, fastify.listen(3333, '0.0.0.0', function (err, address) {
                            if (err)
                                throw err;
                            fastify.log.info("server listening on ".concat(address));
                        })];
                case 8:
                    // await fastify.listen({port: 3333, host: '0.0.0.0'});
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
start();
