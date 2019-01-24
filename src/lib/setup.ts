import * as Transport from 'winston-transport';
import { IFileSettings, ISettings } from '..';
import { FILE_NAME, FILE_DATE_PATTERN, LOG_FORMAT } from '../constant/defaults';
import { Format } from 'logform';
import { LogLevel } from '../constant/defaults';
import { consoleTransport } from '../transport/console';
import { fileTransport } from '../transport/file';
import { parse } from 'path';

export class Setup {
	public static parseFormat(args: ISettings = {}): Format {
		const { format = LOG_FORMAT } = args;

		return format;
	}

	public static parseLogLevel(args: ISettings = null): string {
		const level = (args && args.level) ? args.level : '';

		return (level in LogLevel)
			? LogLevel[level]
			: LogLevel.debug;
	}

	public static parseFileConfig(args: ISettings = null): IFileSettings {
		if (!args || !args.fileCfg || !args.fileCfg.logsPath) {
			return null;
		}

		const {
			logsPath,
			datePattern = FILE_DATE_PATTERN,
		} = args.fileCfg;
		const { name, ext } = parse(args.fileCfg.logFile || FILE_NAME);
		const logFile = `${name}${ext ? ext : '.log'}`;

		return { logsPath, logFile, datePattern };
	}


	public static parseTransports(args: ISettings, format: Format, fileCfg: IFileSettings = null): Transport[] {
		const customTransports = (args && args.customTransports && Array.isArray(args.customTransports)) ? args.customTransports : [];
		const transports = [];

		transports.push(
			consoleTransport(format)
		);

		if (fileCfg) {
			transports.push(
				fileTransport(fileCfg)
			);
		}

		customTransports.forEach((v, k) => {
			if (v instanceof Transport) {
				transports.push(customTransports[k]);
			}
		});

		return transports;
	}
}
