import { format } from 'winston';
import { dataToString } from './dataToString';

export const logFormat = format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level}: ${dataToString(message)}`);
