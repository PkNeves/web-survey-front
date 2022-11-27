import { Body, Controller, Get, Post, Render } from "routing-controllers";

@Controller("/surveys")
export class Surveys {
	@Get("/")
	@Render("survey-form")
	form() {}

	@Post("/")
	@Render("survey")
	create(@Body() body: any) {
		console.log(body);
		return body;
	}
}
