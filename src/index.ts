import express from "express";

import { RouterFactory } from "./app/router/RoutersFactory";
import { app } from "./app"

const SERVER_PORT: string | number = process.env.PORT || 8081;

app.listen(SERVER_PORT, () => {
    console.log(`Server started on: http://localhost:${SERVER_PORT}`);
});
