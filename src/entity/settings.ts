import * as Transport from 'winston-transport';
import { config } from 'winston';
import { ILoggerOpts, IFileSettings } from '../interface';
import { Format } from 'logform';
import { parseFormat, parseFileConfig, parseTransports } from '../lib/setup';

export class Settings {
	public format: Format;
	public levels = config.syslog.levels;
	public fileCfg: IFileSettings;
	public transports: Transport[];

	constructor(args: ILoggerOpts) {
		args = <ILoggerOpts>new Object(args);

		this.format = parseFormat(args);
		this.fileCfg = parseFileConfig(args);
		this.transports = parseTransports(args, this.format, this.fileCfg);

		Object.freeze(this);
	}
}
