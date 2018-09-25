import { join } from 'path';

export const logsPath = join(__dirname, './logs');

export const fileConfig = { fileConfig: { logsPath: logsPath } };

export const customFileNameConfig = {
	fileConfig: { logsPath: logsPath },
	baseFileName: `customFileName${new Date().getTime()}`,
};
