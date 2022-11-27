import { useExpressServer } from "routing-controllers";
import express from "express";
import "reflect-metadata";

import { Surveys } from "./controllers/Surveys";

const app = express();

app.set("view engine", "pug");
app.set("views", "./src/views");
app.use("/public", express.static("public"));

export default useExpressServer(app, {
	controllers: [Surveys],
	validation: false,
	classTransformer: false,
});
