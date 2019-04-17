import { createLogger, format, Logger } from 'winston';
import { ILoggerOpts } from '../interface';
import { Settings } from '../entity/settings';

export class TneLogger {
	private _logger: Logger = null;
	settings: Settings;
	emerg = (arg: any) => this._logger.emerg(arg);
	alert = (arg: any) => this._logger.alert(arg);
	crit = (arg: any) => this._logger.crit(arg);
	error = (arg: any) => this._logger.error(arg);
	warning = (arg: any) => this._logger.warning(arg);
	notice = (arg: any) => this._logger.notice(arg);
	info = (arg: any) => this._logger.info(arg);
	debug = (arg: any) => this._logger.debug(arg);

	constructor(args: ILoggerOpts = {}) {
		this.settings = new Settings(args);

		this._logger = createLogger({
			levels: this.settings.levels,
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
