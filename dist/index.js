"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const SERVER_PORT = process.env.PORT || 8081;
app_1.app.listen(SERVER_PORT, () => {
    console.log(`Server started on: http://localhost:${SERVER_PORT}`);
});
//# sourceMappingURL=index.js.map