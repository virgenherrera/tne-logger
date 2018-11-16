import { format, transports } from 'winston';
import { logFormat } from '../lib/logFormat';

export function consoleTransport() {
	return new transports.Console({
		format: format.combine(
			format.colorize(),
			logFormat,
		)
	});
}
