import * as Transport from 'winston-transport';
import { Format } from 'logform';
import { IFileSettings } from '../interface';
import { FILE_NAME, FILE_DATE_PATTERN, LOG_FORMAT } from '../constant/defaults';
import { consoleTransport } from '../transport/console';
import { fileTransport } from '../transport/file';
import { parse } from 'path';
import { ILoggerOpts } from '../interface';

export function parseFormat(args: ILoggerOpts): Format {
	const { format = LOG_FORMAT } = args;

	return format;
}

export function parseFileConfig(args: ILoggerOpts): IFileSettings {
	if (!args.fileCfg || !args.fileCfg.logsPath) {
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


export function parseTransports(args: ILoggerOpts, format: Format, fileCfg: IFileSettings = null): Transport[] {
	const customTransports = (args && args.customTransports && Array.isArray(args.customTransports)) ? args.customTransports : [];
	const transports: Transport[] = [consoleTransport(format)];

	if (fileCfg) {
		transports.push(
			fileTransport(fileCfg)
		);
	}

	return customTransports.reduce((acc, transport) => {
		if (transport instanceof Transport) {
			acc.push(transport);
		}

		return acc;
	}, transports);
}
