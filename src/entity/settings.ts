import * as Transport from 'winston-transport';
import { ISettings, IFileSettings } from '../interface';
import { Format } from 'logform';
import { Setup } from '../lib/setup';

export class Settings {
	public format: Format;
	public level: string;
	public fileCfg: IFileSettings;
	public transports: Transport[];

	constructor(args: ISettings = {}) {
		this.format = Setup.parseFormat(args);
		this.level = Setup.parseLogLevel(args);
		this.fileCfg = Setup.parseFileConfig(args);
		this.transports = Setup.parseTransports(args, this.format, this.fileCfg);

		Object.freeze(this);
	}
}
