import chai from 'chai';
import dirtyChai from 'dirty-chai';

chai.use(dirtyChai);
chai.should();

describe('index-test', () => {
  it('should do anything', () => {
    'foo'.should.not.be.empty();
  });
});
