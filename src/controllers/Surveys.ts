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
		const data = {
			id: 1,
			name: "Survey Title",
			desc: "Survey Description",
			options: [
				{
					id: 1,
					value: "first option",
					image: "/img.jpg",
					answers: 2,
				},
				{
					id: 1,
					value: "second option",
					image: "/img.jpg",
					answers: 5,
				},
				{
					id: 1,
					value: "thirt option",
					image: "/img.jpg",
					answers: 1,
				},
			],
			chooseMany: false,
			createDate: "14/12/2022",
			closeDate: "15/12/2022",
		};
		return data;
	}

	// @UseBefore(bodyParser.urlencoded())
	@Get("/list")
	@Render("survey")
	list() {
		const data = {
			surveys: [
				{
					id: 1,
					name: "Survey A",
					desc: "Survey Description",
					options: [
						{
							id: 1,
							value: "first option",
							image: "/img.jpg",
							answers: 2,
						},
						{
							id: 1,
							value: "second option",
							image: "/img.jpg",
							answers: 5,
						},
						{
							id: 1,
							value: "thirt option",
							image: "/img.jpg",
							answers: 1,
						},
					],
					chooseMany: false,
					createDate: "14/12/2022",
					closeDate: "15/12/2022",
				},
				{
					id: 2,
					name: "Survey B",
					desc: "Survey Description",
					options: [
						{
							id: 1,
							value: "first option",
							image: "/img.jpg",
							answers: 2,
						},
						{
							id: 1,
							value: "second option",
							image: "/img.jpg",
							answers: 5,
						},
						{
							id: 1,
							value: "thirt option",
							image: "/img.jpg",
							answers: 1,
						},
					],
					chooseMany: false,
					createDate: "14/12/2022",
					closeDate: "15/12/2022",
				},
			]
		};
		return data;
	}

	@Get("/answer")
	@Render("survey-answer")
	cont() {
		const data = {
			id: 1,
			name: "Survey A",
			desc: "Survey Description",
			options: [
				{
					id: 1,
					value: "first option",
					image: "/img.jpg",
					answers: 2,
				},
				{
					id: 1,
					value: "second option",
					image: "/img.jpg",
					answers: 5,
				},
				{
					id: 1,
					value: "thirt option",
					image: "/img.jpg",
					answers: 1,
				},
			],
			chooseMany: false,
			createDate: "14/12/2022",
			closeDate: "15/12/2022",
		};
		return data;
	}

	@Get("/:id")
	@Render("answer-count")
	show() {
		const data = {
			id: 1,
			name: "Survey A",
			desc: "Survey Description",
			options: [
				{
					id: 1,
					value: "first option",
					image: "/img.jpg",
					answers: 2,
				},
				{
					id: 1,
					value: "second option",
					image: "/img.jpg",
					answers: 5,
				},
				{
					id: 1,
					value: "thirt option",
					image: "/img.jpg",
					answers: 1,
				},
			],
			chooseMany: false,
			createDate: "14/12/2022",
			closeDate: "15/12/2022",
		};
		return data;
	}

	
}
