import {expect} from 'chai';
import { globalInstancesFactory, InstancesFactory } from '../src';
import {NoCtorArgsClass} from "./catalogs/NoCtorArgsClass";
import {CtorWithArgsClass} from "./catalogs/CtorWithArgsClass";
import {MyInterface} from "./MyInterface";
import {MyExportedClass} from "./catalogs/First/MyExportedClass";
import {MyExportedClassWithArgs} from "./catalogs/First/MyExportedClassWithArgs";
import {ComposedClass} from "./catalogs/Second/ComposedClass";
import {MultipleLevelComposedClass} from "./catalogs/Second/MultipleLevelComposedClass";

describe('Composition Frameworks test', () => {

  it('Should return a new instance from a node exported module', () => {
    const factory = new InstancesFactory();
    const createdFromModule:MyInterface = factory.getInstanceFromModule('NoCtorArgsClass', `${__dirname}/catalogs/NoCtorArgsClass`);
    expect(createdFromModule).to.be.instanceof(NoCtorArgsClass);
  })

  it('Should return a new instance from a node exported module with args in constructor', () => {
    const factory = new InstancesFactory();
    const createdFromModule:MyInterface = factory.getInstanceFromModule('CtorWithArgsClass',
        `${__dirname}/catalogs/CtorWithArgsClass`,
        'Gabriel'
        );
    expect(createdFromModule).to.be.instanceof(CtorWithArgsClass);
    expect(createdFromModule.doAction()).to.be.eql('Hello Gabriel !')
  })

  it('Should return a new instance from a loaded catalog, no arg in ctor', () => {
    const factory = new InstancesFactory(`${__dirname}/`);
    factory.loadExportedClassesFromDirectory('catalogs');
    const createdFromCatalog:MyInterface = factory.getInstanceFromCatalogs('MyInterface', 'First');
    expect(createdFromCatalog).to.be.instanceof(MyExportedClass);
    expect(createdFromCatalog.doAction()).to.eql("Hello World from First !");
  })

  it('Should return a new instance from a loaded catalog, args in ctor', () => {
    const factory = new InstancesFactory(`${__dirname}/`);
    factory.loadExportedClassesFromDirectory('catalogs');
    const createdFromCatalog:MyInterface = factory.getInstanceFromCatalogs('MyInterface', 'Second', 'Gabriel');
    expect(createdFromCatalog).to.be.instanceof(MyExportedClassWithArgs);
    expect(createdFromCatalog.doAction()).to.eql("Hello Gabriel from Exported Class");
  })

  it('Should return a new instance composed with other args (one level)', () => {
    const factory = new InstancesFactory(`${__dirname}/`);
    factory.loadExportedClassesFromDirectory('catalogs');
    let created:MyInterface = factory.getInstanceFromCatalogs('MyInterface', 'UsingFirst');
    expect(created).to.be.instanceof(ComposedClass);
    expect(created.doAction()).to.eql("Hello World from First !");
    created = factory.getInstanceFromCatalogs('MyInterface', 'UsingAnother');
    expect(created.doAction()).to.eql("Hello World from Another !");
  })

  it('Should return a new instance composed with other args (two level)', () => {
    const factory = new InstancesFactory(`${__dirname}/`);
    factory.loadExportedClassesFromDirectory('catalogs');
    let created:MultipleLevelComposedClass = factory.getInstanceFromCatalogs('MyInterface', 'MultiLevelComposed');
    expect(created).to.be.instanceof(MultipleLevelComposedClass);
    expect(created.innerInterface).to.be.instanceof(ComposedClass);
    expect((<ComposedClass>created.innerInterface).innerInterface).to.be.instanceof(MyExportedClass);
    expect(created.doAction()).to.eql("Hello World from First !");
  })

  it('Should raise error if asked exported class is not contained in any catalogs', () => {
    const factory = new InstancesFactory(`${__dirname}/`);
    factory.loadExportedClassesFromDirectory('catalogs/First');
    expect(() => {
      const created:MyInterface = factory.getInstanceFromCatalogs('MyInterface', 'Another');
    }).to.throw('Class with contract type "MyInterface" with contract name "Another" not in any catalog of the current factory');
  })

  it('Should return same shared instance from a loaded catalog for shared class', () => {
    const factory = new InstancesFactory(`${__dirname}/`);
    factory.loadExportedClassesFromDirectory('catalogs');
    const instanceOne = factory.getInstanceFromCatalogs('MyInterface', 'First');
    const instanceTwo = factory.getInstanceFromCatalogs('MyInterface', 'First');
    expect(instanceOne).to.equal(instanceTwo);
  })

  it('Should return two different instances from a loaded catalog for non shared class', () => {
    const factory = new InstancesFactory(`${__dirname}/`);
    factory.loadExportedClassesFromDirectory('catalogs');
    const instanceOne = factory.getInstanceFromCatalogs('MyInterface', 'Another');
    const instanceTwo = factory.getInstanceFromCatalogs('MyInterface', 'Another');
    expect(instanceOne).not.to.equal(instanceTwo);
  })
})