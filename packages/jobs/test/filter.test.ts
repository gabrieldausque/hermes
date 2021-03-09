import * as chai from 'chai';
chai.use(require('chai-as-promised'));
import {expect} from 'chai';
import { Filter } from '../src';

describe('Filtering test', () => {

  it('Should match a undefined object', async () => {
    const filter = undefined;
    const toTest = undefined;
    // tslint:disable-next-line:no-unused-expression
    expect(Filter.match(filter, toTest)).to.be.true;
  })

  it('Should match a null object', async () => {
    const filter = null;
    const toTest = null;
    // tslint:disable-next-line:no-unused-expression
    expect(Filter.match(filter, toTest)).to.be.true;
  })

  it('Should match a string object', async () => {
    const filter = 'aString test';
    const toTest = 'aString test';
    // tslint:disable-next-line:no-unused-expression
    expect(Filter.match(filter, toTest)).to.be.true;
  })

  it('Should match a number object', async () => {
    const filter = 5;
    const toTest = 5;
    // tslint:disable-next-line:no-unused-expression
    expect(Filter.match(filter, toTest)).to.be.true;
  })

  it('Should match a one level object', async () => {
    const filter = {
      prop1: 'a prop 1',
      prop2: 'a prop 2'
    };
    const toTest = {
      prop1: 'a prop 1',
      prop2: 'a prop 2'
    };
    // tslint:disable-next-line:no-unused-expression
    expect(Filter.match(filter, toTest)).to.be.true;
  })

  it('Should not match a one level object with different object, same properties list', async () => {
    const filter = {
      prop1: 'a prop 1',
      prop2: 'a prop 2'
    };
    const toTest = {
      prop1: 'a prop 1',
      prop2: 'a prop 3'
    };
    // tslint:disable-next-line:no-unused-expression
    expect(Filter.match(filter, toTest)).to.be.false;
  })

  it('Should match multi level object, different properties list', async () => {
    const filter = {
      prop1: 'a prop 1',
      prop2: {
        prop11:{
          prop111:'a prop',
          prop112:3,
          prop113:{
            prop1111:15,
            prop1112:'a string',
            prop1113:null
          }
        }
      }
    };
    const toTest = {
      prop1: 'a prop 1',
      prop2: {
        prop11:{
          prop111:'a prop',
          prop112:3,
          prop113:{
            prop1111:15,
            prop1112:'a string',
            prop1113:null
          }
        }
      },
      prop3: 'another prop'
    };
    // tslint:disable-next-line:no-unused-expression
    expect(Filter.match(filter, toTest)).to.be.true;
  })

  it('Should not match multi level object, different properties list and value', async () => {
    const filter = {
      prop1: 'a prop 1',
      prop2: {
        prop11:{
          prop111:'a prop',
          prop112:3,
          prop113:{
            prop1111:15,
            prop1112:'a string',
            prop1113:null
          }
        }
      }
    };
    const toTest = {
      prop1: 'a prop 1',
      prop2: {
        prop11:{
          prop111:'a prop',
          prop112:3,
          prop113:{
            prop1111:23,
            prop1112:'a string',
            prop1113:null
          }
        }
      },
      prop3: 'another prop'
    };
    // tslint:disable-next-line:no-unused-expression
    expect(Filter.match(filter, toTest)).to.be.false;
  })

  it('Should match array', async () => {
    const filter = [0,1,2,3];
    const toTest = [0,1,2,3];

    return expect(Filter.match(filter,toTest)).to.be.true;
  })

  it('Should not match different array', async () => {
    const filter = [0,1,2,3];
    const toTest = [0,"4",2,3];

    return expect(Filter.match(filter,toTest)).to.be.false;
  })

  it('Should match array with object', async () => {
    const filter = [0,{prop1:'a',prop2:154},2,3];
    const toTest = [0,{prop1:'a',prop2:154},2,3];

    return expect(Filter.match(filter,toTest)).to.be.true;
  })

  it('Should match array with different object', async () => {
    const filter = [0,{prop1:'a',prop2:154},2,3];
    const toTest = [0,{prop1:'a',prop2:255},2,3];

    return expect(Filter.match(filter,toTest)).to.be.false;
  })

})
