const chai = require('chai');
const assert = chai.assert;

const LinkedList = require('../src/linkedList');


describe('Linked List', function() {
  it('should initialize properly', function() {
    const linkedList = new LinkedList();

    assert.isNotNull(linkedList, 'initialize properly');
  });
});

