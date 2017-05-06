const chai = require('chai');
const mocha = require('mocha');
const assert = chai.assert;
const expect = chai.expect;

const LinkedList = require('../src/linkedList');


describe('Linked List', function() {
  let linkedList;
  beforeEach(function() {
    linkedList = new LinkedList();
  });

  it('should initialize properly', function() {
    assert.isNotNull(linkedList, 'initialize properly');
  });

  it('should have a head and a tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  // it('should add a value to head correctly', function() {
  //   linkedList.addToHead(10);
  //   assert.isNotNull(linkedList.contains(10));
  // });
});

