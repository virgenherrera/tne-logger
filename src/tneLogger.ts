import * as Transport from 'winston-transport';
import { createWriteStream } from 'fs';
import { createLogger, format, transports, config, Logger } from 'winston';
import { ISettings } from './interfaces';
import { Settings } from './entity/settings';

export class TneLogger {
	public error: Function;
	public warn: Function;
	public info: Function;
	constructor(args: ISettings = null) {
		this._settings = new Settings(args);
		this._logger = createLogger({
			transports: this.transports,
			levels: config.npm.levels,
		});

		this.error = this._error.bind(this);
		this.warn = this._warn.bind(this);
		this.info = this._info.bind(this);
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
		const data = [];
		const { customTransports } = this._settings;

		if (this._settings.fileConfig) {
			data.push(this._streamTransport);
		}

		data.push(this._consoleTransport);

		if (this._settings.customTransports.length > 0) {
			data.concat(customTransports.filter(trs => (trs && trs instanceof Transport)));
		}

		return data;
	}
	private _settings: Settings;
	private _logger: Logger;

	private _error(...args: any[]) {
		args.forEach((arg) => (arg !== Object(arg) ? this._logger.error(arg) : this._logger.error(JSON.stringify(arg))));
	}

	private _warn(...args: any[]) {
		args.forEach((arg) => (arg !== Object(arg) ? this._logger.warn(arg) : this._logger.warn(JSON.stringify(arg))));
	}

	private _info(...args: any[]) {
		args.forEach((arg) => (arg !== Object(arg) ? this._logger.info(arg) : this._logger.info(JSON.stringify(arg))));
	}
}
