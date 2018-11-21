import { format, transports } from 'winston';
import { Format } from 'logform';

export function consoleTransport(logFormat: Format) {
	return new transports.Console({
		format: format.combine(
			format.colorize(),
			logFormat,
		)
	});
}
