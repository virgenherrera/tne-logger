import { ISettings } from '../interfaces';
import { LogFileConfig } from './logFileConfig';

export class Settings implements ISettings {
	fileConfig: LogFileConfig = null;
	customTransports = [];

	constructor(params: ISettings = null) {
		this.fileConfig = (params && params.fileConfig) ? new LogFileConfig(params.fileConfig) : null;
		this.customTransports = (params && params.customTransports) ? params.customTransports : [];
	}
}
