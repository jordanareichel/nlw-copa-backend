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
exports.poolRoute = void 0;
var short_unique_id_1 = require("short-unique-id");
var zod_1 = require("zod");
var prisma_1 = require("../lib/prisma");
var authenticate_1 = require("../plugins/authenticate");
function poolRoute(fastify) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            fastify.get('/pools/count', function () { return __awaiter(_this, void 0, void 0, function () {
                var count;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prisma_1.prisma.pool.count()];
                        case 1:
                            count = _a.sent();
                            return [2 /*return*/, { count: count }];
                    }
                });
            }); });
            fastify.post('/pools', function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                var createPoolBody, title, generate, code, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            createPoolBody = zod_1.z.object({
                                title: zod_1.z.string()
                            });
                            title = createPoolBody.parse(request.body).title;
                            generate = new short_unique_id_1["default"]({ length: 6 });
                            code = String(generate()).toUpperCase();
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 4, , 6]);
                            return [4 /*yield*/, request.jwtVerify()];
                        case 2:
                            _b.sent();
                            return [4 /*yield*/, prisma_1.prisma.pool.create({
                                    data: {
                                        title: title,
                                        code: code,
                                        ownerId: request.user.sub,
                                        participants: {
                                            create: {
                                                userId: request.user.sub
                                            }
                                        }
                                    }
                                })];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 6];
                        case 4:
                            _a = _b.sent();
                            return [4 /*yield*/, prisma_1.prisma.pool.create({
                                    data: {
                                        title: title,
                                        code: code
                                    }
                                })];
                        case 5:
                            _b.sent();
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/, { code: code }];
                    }
                });
            }); });
            fastify.post("/pools/join", {
                onRequest: [authenticate_1.authentication]
            }, function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                var joinPoolBody, code, pool;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            joinPoolBody = zod_1.z.object({
                                code: zod_1.z.string()
                            });
                            code = joinPoolBody.parse(request.body).code;
                            return [4 /*yield*/, prisma_1.prisma.pool.findUnique({
                                    where: {
                                        code: code
                                    },
                                    include: {
                                        participants: {
                                            where: {
                                                userId: request.user.sub
                                            }
                                        }
                                    }
                                })];
                        case 1:
                            pool = _a.sent();
                            if (!pool) {
                                return [2 /*return*/, reply.status(400).send({
                                        message: 'Bolão não encontrado'
                                    })];
                            }
                            if (pool.participants.length) {
                                return [2 /*return*/, reply.status(400).send({
                                        message: 'Você já faz parte deste Bolão'
                                    })];
                            }
                            if (!!pool.ownerId) return [3 /*break*/, 3];
                            return [4 /*yield*/, prisma_1.prisma.pool.update({
                                    where: {
                                        id: pool.id
                                    },
                                    data: {
                                        ownerId: request.user.sub
                                    }
                                })];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [4 /*yield*/, prisma_1.prisma.participant.create({
                                data: {
                                    poolId: pool.id,
                                    userId: request.user.sub
                                }
                            })];
                        case 4:
                            _a.sent();
                            return [2 /*return*/, reply.status(201).send()];
                    }
                });
            }); });
            fastify.get("/pools", {
                onRequest: [authenticate_1.authentication]
            }, function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                var pools;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prisma_1.prisma.pool.findMany({
                                where: {
                                    participants: {
                                        some: {
                                            userId: request.user.sub
                                        }
                                    }
                                },
                                include: {
                                    _count: {
                                        select: {
                                            participants: true
                                        }
                                    },
                                    participants: {
                                        select: {
                                            id: true,
                                            user: {
                                                select: {
                                                    avatarUrl: true
                                                }
                                            }
                                        },
                                        take: 4
                                    },
                                    owner: {
                                        select: {
                                            id: true,
                                            name: true
                                        }
                                    }
                                }
                            })];
                        case 1:
                            pools = _a.sent();
                            return [2 /*return*/, { pools: pools }];
                    }
                });
            }); });
            fastify.get("/pools/:id", {
                onRequest: [authenticate_1.authentication]
            }, function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                var getPoolParams, id, pool;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getPoolParams = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            id = getPoolParams.parse(request.params).id;
                            return [4 /*yield*/, prisma_1.prisma.pool.findFirst({
                                    where: {
                                        id: id,
                                        participants: {
                                            some: {
                                                userId: request.user.sub
                                            }
                                        }
                                    },
                                    include: {
                                        _count: {
                                            select: {
                                                participants: true
                                            }
                                        },
                                        participants: {
                                            select: {
                                                id: true,
                                                user: {
                                                    select: {
                                                        avatarUrl: true
                                                    }
                                                }
                                            },
                                            take: 4
                                        },
                                        owner: {
                                            select: {
                                                id: true,
                                                name: true
                                            }
                                        }
                                    }
                                })];
                        case 1:
                            pool = _a.sent();
                            if (!pool) {
                                return [2 /*return*/, reply.status(400).send({
                                        message: 'Bolão não encontrado'
                                    })];
                            }
                            return [2 /*return*/, { pool: pool }];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
exports.poolRoute = poolRoute;