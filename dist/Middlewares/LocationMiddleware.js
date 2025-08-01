"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationMiddleware = void 0;
const geoip_lite_1 = __importDefault(require("geoip-lite"));
const LocationMiddleware = (req, res, next) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const geo = geoip_lite_1.default.lookup(ip);
    if (!geo) {
        return res.status(500).json({ message: "Geo location not available!" });
    }
    if (geo.country == "IN") {
        return res.status(500).json({ message: "Access granted!" });
    }
    return res.status(500).json({ message: "Location not allowed!" });
};
exports.LocationMiddleware = LocationMiddleware;
