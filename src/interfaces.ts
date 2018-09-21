export interface ILogFileConfig {
	logsPath: string;
	baseFileName?: string;
}

export interface ISettings {
	fileConfig?: ILogFileConfig;
	customTransports?: any[];
}
