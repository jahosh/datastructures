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

  it('should add a value to head correctly', function() {
    linkedList.addToHead(10);
    expect(linkedList.head.data).to.equal(10);
  });

  it('should return all values correctly', function() {
    const values = linkedList.returnAllValues();
    expect(values).to.be.instanceof(Array);
  });

  it('should return a size', function() {
    linkedList.addToHead(20);
    linkedList.addToHead(30);
    const count = linkedList.size();
    expect(count).to.equal(2);
  });

  it('should detect cycles', function() { 
    expect(linkedList.hasCycle()).to.be(false);
  });

  it('should delete a value' function() {

  });
});

