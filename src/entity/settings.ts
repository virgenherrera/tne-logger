import * as Transport from 'winston-transport';
import { ISettings, IFileSettings } from '../interface';
import { Format } from 'logform';
import { parseFormat, parseLogLevel, parseFileConfig, parseTransports } from '../lib/setup';

export class Settings {
	public format: Format;
	public level: string;
	public fileCfg: IFileSettings;
	public transports: Transport[];

	constructor(args: ISettings) {
		args = <ISettings>new Object(args);

		this.format = parseFormat(args);
		this.level = parseLogLevel(args);
		this.fileCfg = parseFileConfig(args);
		this.transports = parseTransports(args, this.format, this.fileCfg);

		Object.freeze(this);
	}
}
