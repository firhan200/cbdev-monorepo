"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticatedUser = void 0;
var AuthenticatedUser = /** @class */ (function () {
    function AuthenticatedUser(id, email, name, role, createdAt, updatedAt) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.role = role;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    return AuthenticatedUser;
}());
exports.AuthenticatedUser = AuthenticatedUser;
