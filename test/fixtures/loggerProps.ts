export const loggerMethods = [
	'emerg',
	'alert',
	'crit',
	'error',
	'warning',
	'notice',
	'info',
	'debug',
];
export const loggerKeys = [
	'_logger',
	'settings',
	...loggerMethods,
];
export const settingsKeys = [
	'format',
	'levels',
	'fileCfg',
	'transports',
];
