import { expect, should } from 'chai';
import * as Src from '../../src';
import { TneLogger } from '../../src/tneLogger';


should();
describe('@tne/logger index export', () => {
	it('should expose it\'s methods ', () => {
		expect(Src).to.have.keys('TneLogger', 'Logger', 'Transport');
	});

	it('should TneLogger be Clone of src/TneLogger', () => {
		expect(Src.TneLogger).to.be.equals(TneLogger);
	});

	it('should Logger be Clone of src/TneLogger', () => {
		expect(Src.Logger).to.be.equals(TneLogger);
	});
});
