import { expect, should } from 'chai';
import * as moment from 'moment';
import { fileExists, pathExists } from '@tne/common';
import { TneLogger } from '../../src/';
import { primitiveValues, complexValues } from '../fixtures/values';
import { logsPath as testLogsPath, configBasic, configCustom } from '../fixtures/fileConfig';
import { join } from 'path';
import { loggerKeys, settingsKeys, loggerMethods } from '../fixtures/loggerProps';
import { dropLogs } from '../helpers';

should();
describe('@tne/logger file I/O test', () => {
	after(() => {
		dropLogs(testLogsPath);
	});

	it('should create a logger with file I/O', () => {
		const logger = new TneLogger(configBasic);

		expect(logger).to.be.an('object')
			.that.has.keys(loggerKeys);

		expect(logger).to.have.property('logsPath');

		expect(logger.settings).to.be.an('object')
			.that.has.keys(settingsKeys);

		expect(logger.settings.levels).to.be.an('object');
		expect(logger.settings.transports).to.be.an('array');
		expect(logger.settings.fileCfg).to.be.an('object')
			.that.has.keys('logsPath', 'logFile', 'datePattern');

		const {
			logsPath,
			logFile,
			datePattern,
		} = logger.settings.fileCfg;

		expect(logsPath).to.be.a('string')
			.and.be.equal(configBasic.fileCfg.logsPath);
		expect(logFile).to.be.a('string');
		expect(datePattern).to.be.a('string');

		expect(pathExists(logsPath)).to.be.equal(true);

		const fileName = `${moment().format(datePattern)}_${logFile}`;
		const filePath = join(logsPath, fileName);

		expect(fileExists(filePath)).to.be.equal(true);

		loggerMethods.forEach(method => {
			[...primitiveValues, ...complexValues].forEach(val => {
				expect(() => logger[method](val)).to.not.throw();
			});
		});
	});

	it('should create a logger with custom file I/O', () => {
		const logger = new TneLogger(configCustom);

		expect(logger).to.be.an('object')
			.that.has.keys(loggerKeys);

		expect(logger).to.have.property('logsPath');

		expect(logger.settings).to.be.an('object')
			.that.has.keys(settingsKeys);

		expect(logger.settings.levels).to.be.an('object');
		expect(logger.settings.transports).to.be.an('array');
		expect(logger.settings.fileCfg).to.be.an('object')
			.that.has.keys('logsPath', 'logFile', 'datePattern');

		console.dir(logger.settings.fileCfg);
		const {
			logsPath,
			logFile,
			datePattern,
		} = logger.settings.fileCfg;

		expect(logsPath).to.be.a('string')
			.and.be.equal(configCustom.fileCfg.logsPath);
		expect(logFile).to.be.a('string');
		expect(logFile).to.be.a('string').and.contain(configCustom.fileCfg.logFile);
		expect(datePattern).to.be.a('string');
		expect(datePattern).to.be.a('string').and.be.equal(configCustom.fileCfg.datePattern);

		expect(pathExists(logsPath)).to.be.equal(true);

		const fileName = `${moment().format(datePattern)}_${logFile}`;
		const filePath = join(logsPath, fileName);

		expect(fileExists(filePath)).to.be.equal(true);

		loggerMethods.forEach(method => {
			[...primitiveValues, ...complexValues].forEach(val => {
				expect(() => logger[method](val)).to.not.throw();
			});
		});
	});
});
