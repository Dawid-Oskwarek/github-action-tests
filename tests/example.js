import { expect } from 'chai';
import { actCmd } from './helper.js';

describe('Github Action Test - Example', () => {
    it('should run an action successfully', async () => {
        const actOutput = actCmd('exampleJob');
        expect(actOutput).to.not.include('Failure');
    });
});
