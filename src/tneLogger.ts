import { createWriteStream } from 'fs';
import { createLogger, format, transports, config, Logger } from 'winston';
import { ISettings } from './interfaces';
import { Settings } from './entity/settings';

export class TneLogger {
	constructor(args: ISettings = null) {
		this._settings = new Settings(args);
		this._logger = createLogger({
			transports: this.transports,
			levels: config.npm.levels,
		});
	}

	public get logger() {
		return this._logger;
	}

	public get settings(): Settings {
		return this._settings;
	}

	private get _consoleTransport() {
		return new transports.Console({
			format: format.combine(
				format.colorize(),
				format.align(),
				format.simple(),
			),
		});
	}

	private get _streamTransport() {
		return new transports.Stream({
			stream: createWriteStream(this._settings.fileConfig.logFilePath, { flags: 'a' }),
			format: format.combine(
				format.timestamp(),
				format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
			),
		});
	}

	private get transports() {
		const transports = [];

		if (this._settings.fileConfig) {
			transports.push(this._streamTransport);
		}

		transports.push(this._consoleTransport);

		if (this._settings.customTransports.length > 0) {
			transports.concat(this._settings.customTransports);
		}

		return transports;
	}
	private _settings: Settings;
	private _logger: Logger;
	private readonly logExpression = level => arg => (arg !== Object(arg)) ? this.logger[level](arg) : this.logger[level](JSON.stringify(arg));

	public error(...args: any[]) {
		args.forEach(this.logExpression('error'));
	}

	public warn(...args: any[]) {
		args.forEach(this.logExpression('warn'));
	}

	public info(...args: any[]) {
		args.forEach(this.logExpression('info'));
	}
}
