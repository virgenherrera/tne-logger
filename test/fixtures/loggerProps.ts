export const loggerMethods = [
	'debug',
	'error',
	'info',
	'silly',
	'verbose',
	'warn',
];
export const loggerKeys = [
	'_logger',
	'settings',
	...loggerMethods,
];
export const settingsKeys = [
	'format',
	'level',
	'fileCfg',
	'transports',
];
