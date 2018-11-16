import { LogLevel } from '../constant/defaults';
import { ISettings } from '../interface';

export function parseLogLevel(args: ISettings = null): string {
	const level = (args && args.level) ? args.level : '';

	return (level in LogLevel)
		? LogLevel[level]
		: LogLevel.debug;
}
