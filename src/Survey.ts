export type Option = {
	id: string;
	value: string;
	image: string;
	answers: number;
};

export type Survey = {
	id: string;
	name: string;
	desc: string;
	options: Option[];
	chooseMany: boolean;
	createDate: string;
	closeDate: string;
};
