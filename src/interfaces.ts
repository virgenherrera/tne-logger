import * as Transport from 'winston-transport';

export interface ILogFileConfig {
	logsPath: string;
	baseFileName?: string;
}

export interface ISettings {
	fileConfig?: ILogFileConfig;
	customTransports?: Transport[];
}
