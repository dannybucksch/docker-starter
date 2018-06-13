"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get("/", function (req, res) {
    res.send('Api ready..');
});
var server = app.listen(process.env.PORT, function () {
    console.log("Started at http://localhost:%d\n", server.address().port);
});
//# sourceMappingURL=index.js.map