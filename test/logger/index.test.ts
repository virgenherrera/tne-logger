import { expect, should } from 'chai';
import * as Transport from 'winston-transport';
import * as Src from '../../src';
import { TneLogger } from '../../src/class/tneLogger';

should();
describe('@tne/logger index export', () => {
	it('should expose lib and transport', () => {
		expect(Src).to.have.keys('TneLogger', 'Transport');

		expect(Src.TneLogger).to.be.a('function');
		expect(Src.TneLogger).to.be.equal(TneLogger);

		expect(Src.Transport).to.be.a('function');
		expect(Src.Transport).to.be.equal(Transport);
	});
});
