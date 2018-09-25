import { expect, should } from 'chai';
import { TneLogger } from '../../src/tneLogger';
import { fileConfig, customFileNameConfig } from '../fixtures/fileConfig';
import { fileExists, pathExists } from '../../src/lib/fileHandle';
import { readFileSync } from 'fs';
import * as rimraf from 'rimraf';
import { customTransportWithFileConf, fileConfig as transFileConf } from '../fixtures/customTransport';

should();
describe('@tne/logger  basic and a file log test', () => {
	afterEach((done) => {
		rimraf(fileConfig.fileConfig.logsPath, () => {
			console.log('deleted', fileConfig.fileConfig.logsPath);
			done();

		});
	});

	it('should create a functional console and file logger', () => {
		const logger = new TneLogger(fileConfig);

		expect(logger).to.be.an('object');
		expect(logger).to.have.property('settings');
		expect(logger).to.have.property('logger');
		expect(logger).to.have.property('error');
		expect(logger).to.have.property('warn');
		expect(logger).to.have.property('info');
	});

	it('should create a logFile', () => {
		const logger = new TneLogger(fileConfig);

		expect(logger).to.be.an('object');

		expect(logger).to.have.property('settings');
		expect(logger.settings).to.be.an('object').that.has.keys('fileConfig', 'customTransports');
		expect(logger.settings.fileConfig).to.be.an('object').that.has.keys('logsPath', 'baseFileName', 'logFilePath');

		expect(pathExists(logger.settings.fileConfig.logsPath)).to.be.equal(true);
		expect(fileExists(logger.settings.fileConfig.logFilePath)).to.be.equal(true);
	});

	it('should create a logFile with custom name', () => {
		const logger = new TneLogger(customFileNameConfig);

		expect(logger).to.be.an('object');

		expect(logger).to.have.property('settings');
		expect(logger.settings).to.be.an('object').that.has.keys('fileConfig', 'customTransports');
		expect(logger.settings.fileConfig).to.be.an('object').that.has.keys('logsPath', 'baseFileName', 'logFilePath');

		expect(pathExists(logger.settings.fileConfig.logsPath)).to.be.equal(true);
		expect(fileExists(logger.settings.fileConfig.logFilePath)).to.be.equal(true);
	});

	it('should logFile include values', (done) => {
		const logger = new TneLogger(fileConfig);
		const msg1 = `info message ${new Date().getTime()}`;
		const msg2 = `warn message ${new Date().getTime()}`;
		const msg3 = `error message ${new Date().getTime()}`;

		expect(logger).to.be.an('object');

		expect(logger).to.have.property('settings');
		expect(logger.settings).to.be.an('object').that.has.keys('fileConfig', 'customTransports');
		expect(logger.settings.fileConfig).to.be.an('object').that.has.keys('logsPath', 'baseFileName', 'logFilePath');

		expect(pathExists(logger.settings.fileConfig.logsPath)).to.be.equal(true);
		expect(fileExists(logger.settings.fileConfig.logFilePath)).to.be.equal(true);


		logger.info(msg1);
		logger.warn(msg2);
		logger.error(msg3);

		setTimeout(() => {
			const logFileContent = readFileSync(logger.settings.fileConfig.logFilePath, 'utf8').toString();

			expect(logFileContent.indexOf(msg1)).to.be.above(-1);
			expect(logFileContent.indexOf(msg2)).to.be.above(-1);
			expect(logFileContent.indexOf(msg3)).to.be.above(-1);

			done();
		}, 7e3);
	});

	it('should create a logger with a custom Transport with fileWriter', () => {
		const logger = new TneLogger(customTransportWithFileConf);

		expect(logger).to.be.an('object');
		expect(logger).to.have.property('settings');
		expect(logger).to.have.property('logger');
		expect(logger).to.have.property('error');
		expect(logger).to.have.property('warn');
		expect(logger).to.have.property('info');

		expect(logger.settings).to.be.an('object').that.has.keys('fileConfig', 'customTransports');
		expect(logger.settings.fileConfig).to.have.property('logsPath');
		expect(logger.settings.fileConfig).to.have.property('logFilePath');
		expect(logger.settings.fileConfig).to.have.property('baseFileName');

		expect(logger.settings.fileConfig.logsPath).to.be.equal(transFileConf.logsPath);
		expect(logger.settings.customTransports).to.be.eql(customTransportWithFileConf.customTransports);
	});
});


