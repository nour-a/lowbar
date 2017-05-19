/* global describe, it */
var path = require("path");
var expect = require("chai").expect;
const sinon = require("sinon");
var __dirname;

var _ = require(path.join(__dirname, "..", "./lowbar.js"));

describe("_", function () {
  "use strict";

  it("is an object", function () {
    expect(_).to.be.an("object");
  });
  describe("#identity", function () {
    it("is a function", function () {
      expect(_.identity).to.be.a("function");
    });
  });
  it("should return the same value that is used as the argument", function () {
    var actual = _.identity(1);
    var expected = 1;
    expect(actual).to.equal(expected);
    actual = _.identity();
    expected = undefined;
    expect(actual).to.equal(expected);
  });
  describe("#first", function () {
    it("is a function", function () {
      expect(_.first).to.be.a("function");
    });
    it("should return the first element", function () {
      var actual = _.first([1, 2, 3]);
      var expected = 1;
      expect(actual).to.equal(expected);
      actual = _.first("hello");
      expected = "h";
      expect(actual).to.equal(expected);
    });
    it("should return the first n elements if n is passed", function () {
      var actual = _.first([1, 2, 3, 4, 5], 3);
      var expected = [1, 2, 3];
      expect(actual).to.eqls(expected);
      actual = _.first("hello", 7);
      expected = ["h", "e", "l", "l", "o"];
      expect(actual).to.eqls(expected);
      actual = _.first("hello", 3);
      expected = ["h", "e", "l"];
      expect(actual).to.eqls(expected);
    });
    it("should return undefined if no argument or an empty array is passed", function () {
      var actual = _.first();
      var expected = undefined;
      expect(actual).to.eqls(expected);
      actual = _.first([]);
      expected = undefined;
      expect(actual).to.eqls(expected);
      actual = _.first(123);
      expected = undefined;
      expect(actual).to.eqls(expected);
      actual = _.first({ 1: "hello" });
      expected = undefined;
      expect(actual).to.eqls(expected);
    });
    it("should return [] if n is not a number", function () {
      var actual = _.first([1, 2, 3], "dfs");
      var expected = [];
      expect(actual).to.eqls(expected);
      actual = _.first("hello", "dsas");
      expected = [];
      expect(actual).to.eqls(expected);
      actual = _.first(123, "dsas");
      expected = [];
      expect(actual).to.eqls(expected);
    });
  });

  describe("#last", function () {
    it("is a function", function () {
      expect(_.last).to.be.a("function");
    });
    it("should return the last element", function () {
      var actual = _.last([1, 2, 3]);
      var expected = 3;
      expect(actual).to.equal(expected);
      actual = _.last("hello");
      expected = "o";
      expect(actual).to.equal(expected);
    });

    it("should return the last n elements if n is passed", function () {
      var actual = _.last([1, 2, 3, 4, 5], 3);
      var expected = [3, 4, 5];
      expect(actual).to.eqls(expected);
      actual = _.last([1, 2, 3, 4], 5);
      expected = [1, 2, 3, 4];
      expect(actual).to.eqls(expected);
      actual = _.last("hello", 2);
      expected = ["l", "o"];
      expect(actual).to.eqls(expected);
      actual = _.last("hello", 6);
      expected = ["h", "e", "l", "l", "o"];
      expect(actual).to.eqls(expected);
    });
    it("should return undefined if no argument or an empty array is passed", function () {
      var actual = _.last();
      var expected = undefined;
      expect(actual).to.eqls(expected);
      actual = _.last([]);
      expected = undefined;
      expect(actual).to.eqls(expected);
    });
    it("should return [] if n is not a number", function () {
      var actual = _.last([1, 2, 3], "dfs");
      var expected = [];
      expect(actual).to.eqls(expected);
      actual = _.last("hello", "dsas");
      expected = [];
      expect(actual).to.eqls(expected);
      actual = _.last(123, "dsas");
      expected = [];
      expect(actual).to.eqls(expected);
    });
  });
  describe("#each", function () {
    it("is a function", function () {
      expect(_.each).to.be.a("function");
    });
    it("should return an empty array if passed one argument that is an empty array", function () {
      var actual = _.each([]);
      var expected = [];
      expect(actual).to.eqls(expected);
    });
    it("should return the exact number when passed a number as only one argument", function () {
      var actual = _.each(2);
      var expected = 2;
      expect(actual).to.equal(expected);
    });
    it("should work with an array", function () {
      var count = 0;
      _.each([1, 2, 3, 4], function (n) { return count += n; });
      expect(count).to.equal(10);
    });
    it("should work with an objectsdfsd", function () {
      var count = 0;
      _.each({ "a": 1, "b": 2, "c": 3 }, function (n) { return count += n; });
      expect(count).to.equal(6);
    });
    //add a test to check the iteratee function using sinon(?)
    it("should call the iteratee for each element of the list", function () {
      var spy = sinon.spy();
      let arr = [1, 2, 3];
      _.each(arr, spy);
      expect(spy.callCount).to.equal(3);
      spy = sinon.spy();
      let obj = { "a": 1, "b": 2, "c": 3 };
      _.each(obj, spy);
      expect(spy.callCount).to.equal(3);
    });
  });

  describe("#indexOf", function () {
    it("is a function", function () {
      expect(_.indexOf).to.be.a("function");
    });
    it("should return -1 unless the val is found in the array", function () {
      var actual = _.indexOf();
      var expected = -1;
      expect(actual).to.eqls(expected);
      actual = _.indexOf([]);
      expected = -1;
      expect(actual).to.eqls(expected);
      actual = _.indexOf(123, 1);
      expected = -1;
      expect(actual).to.eqls(expected);
    });
    it("should return index at which the val is found in the array", function () {
      var actual = _.indexOf([1, 2, 3], 2);
      var expected = 1;
      expect(actual).to.eqls(expected);
      actual = _.indexOf([1, 1, 2, 2, 2, 3], 2);
      expected = 2;
      expect(actual).to.eqls(expected);
      actual = _.indexOf(["a", "b", "c"], "c");
      expected = 2;
      expect(actual).to.eqls(expected);
      actual = _.indexOf(["a", "a", "a", "b", "c"], "a");
      expected = 0;
      expect(actual).to.eqls(expected);
      actual = _.indexOf("nour", "r");
      expected = 3;
      expect(actual).to.eqls(expected);
    });

  });


  describe("#filter", function () {
    it("is a function", function () {
      expect(_.filter).to.be.a("function");
    });
    it("should return an empty array if passed a number or nothing", function () {
      var actual = _.filter();
      var expected = [];
      expect(actual).to.eqls(expected);
      actual = _.filter(989);
      expected = [];
      expect(actual).to.eqls(expected);
    });
    it("should return the list when there is no condition", function () {
      var actual = _.filter([1, 2, 3]);
      var expected = [1, 2, 3];
      expect(actual).to.eqls(expected);
    });
    it("should return the filtered elements based on the condition function", function () {
      var actual = _.filter([1, 2, 3], function (num) { if (num === 2) { return num; } });
      var expected = [2];
      expect(actual).to.eqls(expected);
      actual = _.filter(["a", "b", "a", "c"], function (str) { if (str === "a") { return str; } });
      expected = ["a", "a"];
      expect(actual).to.eqls(expected);
    });
  });

  describe("#reject", function () {
    it("is a function", function () {
      expect(_.reject).to.be.a("function");
    });
    it("should return the rejected elements based on the condition function", function () {
      var actual = _.reject([1, 2, 3], function (num) { if (num === 2) { return num; } });
      var expected = [1, 3];
      actual = _.reject(["a", "b", "a", "c"], function (str) { if (str === "a") { return str; } });
      expected = ["b", "c"];
      expect(actual).to.eqls(expected);
      actual = _.reject(1, function (str) { if (str === "a") { return str; } });
      expected = [];
      expect(actual).to.eqls(expected);
    });
  });

  describe("#uniq", function () {
    it("is a function", function () {
      expect(_.uniq).to.be.a("function");
    });
    it("should only return the unique elements of the array", function () {
      var actual = _.uniq([1, 2, 1, 3, 1, 4]);
      var expected = [1, 2, 3, 4];
      expect(actual).to.eqls(expected);
    });

  });
  describe("#uniq", function () {
    it("is a function", function () {
      expect(_.uniq).to.be.a("function");
    });
    it("should only return the unique elements of the array", function () {
      var actual = _.uniq([1, 2, 1, 3, 1, 4]);
      var expected = [1, 2, 3, 4];
      expect(actual).to.eqls(expected);
    });

  });
  describe("#map", function () {
    it("is a function", function () {
      expect(_.map).to.be.a("function");
    });
    it("should return the mapped elements of the array", function () {
      var actual = _.map([1, 2, 1, 3, 1, 4], function (n) { return n * 2; });
      var expected = [2, 4, 2, 6, 2, 8];
      expect(actual).to.eqls(expected);
      actual = _.map("hello", function (str) { return str.toUpperCase(); });
      expected = ["H", "E", "L", "L", "O"];
      expect(actual).to.eqls(expected);
    });
    it("should return the mapped elements of the object", function () {
      var actual = _.map({ a: 1, b: 2, c: 3 }, function (n) { return n * 2; });
      var expected = [2, 4, 6];
      expect(actual).to.eqls(expected);
    });

  });
  describe("#pluck", function () {
    it("is a function", function () {
      expect(_.pluck).to.be.a("function");
    });
    it("should extract a list of property values.", function () {
      var actual = _.pluck([{ n: 1 }, { n: 9 }, { n: 7 }], "n");
      var expected = [1, 9, 7];
      expect(actual).to.eqls(expected);
      var stooges = [{ name: { name: "moe", age: 40 } }, { name: "larry", age: 50 }, { name: "curly", age: 60 }];
      actual = _.pluck(stooges, "name");
      expected = [{ name: "moe", age: 40 }, "larry", "curly"];
      expect(actual).to.eqls(expected);
    });
  });
  describe("#reduce", function () {
    it("is a function", function () {
      expect(_.reduce).to.be.a("function");
    });
    it("reduce boils down a list of values into a single value..", function () {
      var actual = _.reduce([1, 2, 3], function (memo, num) { return memo + num; }, 0);
      var expected = 6;
      expect(actual).to.equal(expected);
      actual = _.reduce({ a: 1, b: 2 }, function (memo, num) { return memo + num; });
      expected = 3;
      expect(actual).to.equal(expected);
    });

  });
  describe("#every", function () {
    it("is a function", function () {
      expect(_.every).to.be.a("function");
    });
    it("shouldreturn true if all of the values in the list pass the predicate truth test", function () {
      var actual = _.every([2, 4, 6], function (num) { return num % 2 == 0; });
      var expected = true;
      expect(actual).to.equal(expected);
      actual = _.every({ a: 2, b: 4 }, function (num) { return num % 2 == 0; });
      expected = true;
      expect(actual).to.equal(expected);
    });
    it("should returns false if one of the values in the list does not pass the predicate truth test", function () {
      var actual = _.every([2, 4, 5], function (num) { return num % 2 == 0; });
      var expected = false;
      expect(actual).to.equal(expected);

    });
  });
  describe("#some", function () {
    it("is a function", function () {
      expect(_.some).to.be.a("function");
    });
    it("shouldreturn true if one of the values in the list pass the predicate truth test", function () {
      var actual = _.some([2, 4, 6], function (num) { return num % 2 == 0; });
      var expected = true;
      expect(actual).to.equal(expected);
      actual = _.some({ a: 2, b: 4 }, function (num) { return num % 2 == 0; });
      expected = true;
      expect(actual).to.equal(expected);
    });
    it("should returns false if all of the values in the list does not pass the predicate truth test", function () {
      var actual = _.some([21, 41, 5], function (num) { return num % 2 == 0; });
      var expected = false;
      expect(actual).to.equal(expected);

    });
  });

  describe("#contains", function () {
    it("is a function", function () {
      expect(_.contains).to.be.a("function");
    });
    it("should return true if the value is in the list", function () {
      var actual = _.contains([1, 2, 3], 2);
      var expected = true;
      expect(actual).to.equal(expected);
      actual = _.contains("nour aswad", "a");
      expected = true;
      expect(actual).to.eqls(expected);
      actual = _.contains({ name: "nour", age: 30 }, 30);
      expected = true;
      expect(actual).to.eqls(expected);
    });
    it("should return false if the value is not in the list", function () {
      var actual = _.contains("123", "5");
      var expected = false;
      expect(actual).to.eqls(expected);
      actual = _.contains("nour aswad", "j");
      expected = false;
      expect(actual).to.eqls(expected);
      actual = _.contains({ name: "nour", age: 30 }, 80);
      expected = false;
      expect(actual).to.eqls(expected);
      actual = _.contains();
      expected = false;
      expect(actual).to.eqls(expected);
    });
  });

  describe("#extend", function () {
    it("is a function", function () {
      expect(_.extend).to.be.a("function");
    });

    it("copy all of the properties in the source objects over to the destination object, and return the destination object", function () {
      var actual = _.extend({ name: "moe" }, { age: 50 });
      var expected = { name: "moe", age: 50 };
      expect(actual).to.eqls(expected);
      actual = _.extend({}, { age: 50 });
      expected = { age: 50 };
      expect(actual).to.eqls(expected);
      actual = _.extend({ age: 56 }, { age: 50 });
      expected = { age: 50 };
      expect(actual).to.eqls(expected);
      actual = _.extend({ name: "nour" }, { name: "df" }, { name: "m", age: 44 });
      expected = { name: "m", age: 44 };
      expect(actual).to.eqls(expected);
      actual = _.extend([1, 2], [4, 5], { age: 33 });
      expected = [4, 5];
      expected.age = 33;
      expect(actual).to.eql(expected);
    });

  });

  describe("#default", function () {
    it("is a function", function () {
      expect(_.default).to.be.a("function");
    });
    it("Fill in undefined properties in object with the first value present in the following list of defaults objects. ", function () {
      var actual = _.default({ a: 1 }, { a: 5, b: 2 });
      var expected = { a: 1, b: 2 };
      expect(actual).to.eqls(expected);
      actual = _.default({}, { a: 1, b: 2 });
      expected = { a: 1, b: 2 };
      expect(actual).to.eqls(expected);
    });
  });
});