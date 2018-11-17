import { join } from 'path';

export const logsPath = join(__dirname, './test_logs');
export const configBasic = {
	fileCfg: {
		logsPath,
	}
};

export const configCustom = {
	fileCfg: {
		logsPath,
		logFile: 'someFileName',
		datePattern: 'DDMMYYY',
	}
};
