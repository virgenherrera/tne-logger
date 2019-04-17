import * as DailyRotateFile from 'winston-daily-rotate-file';
import { IFileSettings } from '../interface';

export function fileTransport({ logsPath, logFile, datePattern }: IFileSettings): any {
	return new DailyRotateFile({
		filename: `%DATE%_${logFile}`,
		dirname: logsPath,
		datePattern,
		maxFiles: '7d',
	});
}
