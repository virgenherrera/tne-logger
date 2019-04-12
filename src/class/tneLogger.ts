import { createLogger, format, Logger } from 'winston';
import { ISettings } from '../interface';
import { Settings } from '../entity/settings';

export class TneLogger {
	private _logger: Logger = null;
	public settings: Settings;
	public debug = (log: any) => this._logger.debug(log);
	public error = (log: any) => this._logger.error(log);
	public info = (log: any) => this._logger.info(log);
	public silly = (log: any) => this._logger.silly(log);
	public verbose = (log: any) => this._logger.verbose(log);
	public warn = (log: any) => this._logger.warn(log);

	constructor(args: ISettings) {
		this.settings = new Settings(args);

		this._logger = createLogger({
			level: this.settings.level,
			format: format.combine(
				format.timestamp(),
				this.settings.format,
			),
			transports: this.settings.transports,
		});
	}

	get logsPath(): string {
		return (this.settings.fileCfg)
			? this.settings.fileCfg.logsPath
			: null;
	}
}
