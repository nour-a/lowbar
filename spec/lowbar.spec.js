/* global describe, it */
var path = require('path');
var expect = require('chai').expect;

var _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });
  describe('#identity', function () {
    it('is a function', function() {
      expect(_.identity).to.be.a('function');
    });
  });
  it('should return the same value that is used as the argument', function(){
    var actual = _.identity(1);
    var expected = 1;
    expect(actual).to.equal(expected);
    actual = _.identity();
    expected = undefined;
    expect(actual).to.equal(expected);
  });
  describe('#first', function () {
    it('is a function', function() {
      expect(_.first).to.be.a('function');
    });
  });
  it('should return the first element', function(){
    var actual = _.first([1, 2, 3]);
    var expected = 1;
    expect(actual).to.equal(expected); 
    actual = _.first('hello');
    expected = 'h'; 
    expect(actual).to.equal(expected);
  }); 
  it('should return the first n elements if n is passed', function(){
    var actual = _.first([1, 2, 3, 4, 5], 3);
    var expected = [1, 2, 3];
    expect(actual).to.eqls(expected); 
  });
  it('should return undefined if no argument or an empty array is passed', function(){
    var actual = _.first();
    var expected = undefined;
    expect(actual).to.eqls(expected); 
    actual = _.first([]);
    expected = undefined;
    expect(actual).to.eqls(expected); 
  });

  
});