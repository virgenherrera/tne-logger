import * as Transport from 'winston-transport';
import { ISettings, IFileSettings } from '../interface';
import { parseLogLevel } from '../lib/parseLogLevel';
import { parseFileConfig } from '../lib/parseFileConfig';
import { parseTransports } from '../lib/parseTransports';

export class Settings {
	public level: string;
	public fileCfg: IFileSettings;
	public transports: Transport[];

	constructor(args: ISettings) {
		this.level = parseLogLevel(args);
		this.fileCfg = parseFileConfig(args);
		this.transports = parseTransports(args, this.fileCfg);

		Object.freeze(this);
	}
}
