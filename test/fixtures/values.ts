export const primitiveValues = [
	true,
	false,
	null,
	undefined,
	159753,
	Math.PI,
	12e5,
	'string',
];

export const complexValues = [
	[0, 1, 2, 3, 4, 5],
	new RegExp('string'),
	new Date,
	Array(3).fill(Math.PI),
	{ type: 403, message: new Error('generic error') },
	class RandomClass extends Object { },
	new Set(),
];
