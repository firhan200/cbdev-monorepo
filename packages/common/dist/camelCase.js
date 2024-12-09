"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToSnakeCase = exports.snakeToCamelCase = void 0;
var snakeToCamelCase = function (input) {
    if (typeof input !== 'object' ||
        input === null ||
        typeof input === 'function' ||
        input instanceof Date) {
        return input;
    }
    if (Array.isArray(input)) {
        return input.map(function (item) { return (0, exports.snakeToCamelCase)(item); });
    }
    var result = {};
    for (var key in input) {
        if (Object.prototype.hasOwnProperty.call(input, key)) {
            var camelKey = key.replace(/_\w/g, function (match) { return match[1].toUpperCase(); });
            result[camelKey] = (0, exports.snakeToCamelCase)(input[key]);
        }
    }
    return result;
};
exports.snakeToCamelCase = snakeToCamelCase;
var camelToSnakeCase = function (input) {
    if (typeof input !== 'object' ||
        input === null ||
        typeof input === 'function' ||
        input instanceof Date) {
        return input;
    }
    if (Array.isArray(input)) {
        return input.map(function (item) { return (0, exports.camelToSnakeCase)(item); });
    }
    var result = {};
    for (var key in input) {
        if (Object.prototype.hasOwnProperty.call(input, key)) {
            var snakeKey = key.replace(/[A-Z]/g, function (match) { return "_".concat(match.toLowerCase()); });
            result[snakeKey] = (0, exports.camelToSnakeCase)(input[key]);
        }
    }
    return result;
};
exports.camelToSnakeCase = camelToSnakeCase;
