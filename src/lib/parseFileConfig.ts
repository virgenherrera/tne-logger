import { FILE_NAME, FILE_DATE_PATTERN } from '../constant/defaults';
import { IFileSettings, ISettings } from '../interface';

export function parseFileConfig(args: ISettings = null): IFileSettings {
	if (!args || !args.fileCfg || !args.fileCfg.logsPath) {
		return null;
	}

	const {
		logsPath,
		logFile = FILE_NAME,
		datePattern = FILE_DATE_PATTERN,
	} = args.fileCfg;

	return { logsPath, logFile, datePattern };
}
