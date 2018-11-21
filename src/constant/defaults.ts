import { format } from 'winston';
import { dataToString } from '../lib/dataToString';

export const FILE_NAME = 'log.log';
export const FILE_DATE_PATTERN = 'YYYYMMDD';

// as specified exactly in RFC5424
// https://tools.ietf.org/html/rfc5424
// https://github.com/winstonjs/winston#logging-levels
export enum LogLevel {
	emerg = 'emerg',
	alert = 'alert',
	crit = 'crit',
	error = 'error',
	warning = 'warning',
	notice = 'notice',
	info = 'info',
	debug = 'debug',
}

export const LOG_FORMAT = format
	.printf(({ timestamp, level, message }) => `[${timestamp}|${level}]: ${dataToString(message)}`);
