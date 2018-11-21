import { format } from 'winston';

export const customFormat = {
	format: format.printf(({ level, message }) => `<${level}><${message}>`)
};
