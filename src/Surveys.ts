export class Surveys {
	private surveys: any[] = [
		{
			id: "1",
			name: "TEST QUESTION",
			desc: "",
			chooseMany: true,
			closeDate: "2022-12-14",
			answers: [
				{ name: "1", count: 0 },
				{ name: "2", count: 0 },
				{ name: "3", count: 0 },
				{ name: "4", count: 0 },
			],
		},
	];

	create(body: any): string {
		const answers = body.answers || [];

		const survey = {
			id: `${this.surveys.length + 1}`,
			name: body.name,
			desc: body.desc,
			chooseMany: body.chooseMany === "on",
			closeDate: body.closeDate,
			answers: answers.map((answer: string) => {
				return {
					name: answer,
					count: 0,
				};
			}),
		};

		this.surveys.push(survey);
		return survey.id;
	}

	all() {
		return this.surveys;
	}

	get(id: string) {
		for (const survey of this.surveys) {
			if (survey.id === id) return survey;
		}
	}

	answer(id: string, body: any) {
		const survey = this.get(id);

		for (const answer of survey.answers) {
			if (body[answer.name]) answer.count++;
		}
	}
}
