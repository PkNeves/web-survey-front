import express from "express";
import { Surveys } from "./Surveys";

const app = express();

// View config
app.set("view engine", "pug");
app.set("views", "./src/views");
app.use("/public", express.static("public"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const surveys = new Surveys();

app.get("/", (req, res) => res.render("survey-form"));

app.post("/", (req, res) => {
	const id = surveys.create(req.body);
	res.redirect(`/${id}`);
});

app.get("/all", (req, res) => {
	res.render("surveys", { surveys: surveys.all() });
});

app.get("/:id", (req, res) => {
	const survey = surveys.get(req.params.id);
	res.render("answer-form", { ...survey });
});

app.post("/:id", (req, res) => {
	surveys.answer(req.params.id, req.body);
	res.redirect(`/${req.params.id}/answers`);
});

app.get("/:id/answers", (req, res) => {
	const survey = surveys.get(req.params.id);
	res.render("survey", survey);
});

// Server
app.listen(3001, () => {
	console.log(`Server listening on port http://localhost:3001`);
});
