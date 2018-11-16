import * as Transport from 'winston-transport';
import { IFileSettings, ISettings } from '../interface';
import { consoleTransport } from '../transport/console';
import { fileTransport } from '../transport/file';

export function parseTransports(args: ISettings, fileCfg: IFileSettings = null): Transport[] {
	const customTransports = (args && args.customTransports && Array.isArray(args.customTransports)) ? args.customTransports : [];
	const transports = [];

	transports.push(
		consoleTransport()
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
