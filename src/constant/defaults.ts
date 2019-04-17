import { format } from 'winston';
import { dataToString } from '../lib/dataToString';

export const FILE_NAME = 'log.log';
export const FILE_DATE_PATTERN = 'YYYYMMDD';

export const LOG_FORMAT = format
	.printf(({ timestamp, level, message }) => `[${timestamp}|${level}]: ${dataToString(message)}`);
