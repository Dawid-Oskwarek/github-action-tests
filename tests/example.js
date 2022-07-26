import { expect } from 'chai';
import { actCmd } from './helper.js';

describe('Github Action Test - Example', () => {
    it('should check for broken links on the provided url', async () => {
        const actOutput = actCmd('exampleJob');
        expect(actOutput).to.not.include('Failure');
    });
});