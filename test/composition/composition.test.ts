import {expect} from 'chai';
import { globalInstancesFactory, InstancesFactory } from '../../src/services/composition';

describe('Composition Frameworks test', () => {

  it('Should return a new instance from a node exported module', () => {
    const factory = new InstancesFactory();
    const createdFromModule = factory.getInstanceFromModule('MemoryStorage', __dirname + '/../../src/services/backend/MemoryStorage');
    expect(createdFromModule.innerStorage).to.be.instanceof(Array);
  })

  it('Should return a new instance from a node exported module without args in constructor', () => {
    const factory = new InstancesFactory();
    const noArgsCtorInstance = factory.getInstanceFromModule('ServiceWithNoCtorArgs', __dirname + '/../../src/services/runtimeLoadedService/ServiceWithNoCtorArgs');
    expect(noArgsCtorInstance.helloWorld()).to.be.equal('Hello World From no ctor args service !');
  })

  it('Should return a new instance from a node exported module with args in constructor', () => {
    const factory = new InstancesFactory();
    const ctorWithArgs = factory.getInstanceFromModule('ServiceWithCtorArgs',
      __dirname + '/../../src/services/runtimeLoadedService/ServiceWithCtorArgs',
      'Gabriel', 'DAUSQUE-JOUAN');
    expect(ctorWithArgs.helloWorld()).to.equal('Hello World Gabriel DAUSQUE-JOUAN From ctor args service !');
  })

  it('Should return a new instance from a loaded catalog, no arg in ctor', () => {
    const factory = new InstancesFactory();
    factory.loadExportedClassesFromDirectory('../../../src/DirectoryCatalog');
    const helloer = factory.getInstanceFromCatalogs('IExportedClass', 'First')
    expect(helloer.helloWorld()).to.equal('Hello World from first');
  })

  it('Should return a new instance from a loaded catalog, args in ctor', () => {
    const factory = new InstancesFactory();
    factory.loadExportedClassesFromDirectory('../../../src/DirectoryCatalog');
    const helloer = factory.getInstanceFromCatalogs('IExportedClass', 'Second', 'Gabriel', 'DAUSQUE-JOUAN')
    expect(helloer.helloWorld()).to.equal('Hello Gabriel DAUSQUE-JOUAN from second');
  })

  it('Should return same shared instance from a loaded catalog for shared class', () => {
    const factory = new InstancesFactory();
    factory.loadExportedClassesFromDirectory('../../../src/DirectoryCatalog');
    const firstInstance = factory.getInstanceFromCatalogs('IExportedClass', 'First');
    const secondInstance = factory.getInstanceFromCatalogs('IExportedClass', 'First');
    expect(secondInstance).to.equal(firstInstance);
  })

  it('Should return two different instances from a loaded catalog for non shared class', () => {
    const factory = new InstancesFactory();
    factory.loadExportedClassesFromDirectory('../../../src/DirectoryCatalog');
    const firstInstance = factory.getInstanceFromCatalogs('IExportedClass', 'Second');
    const secondInstance = factory.getInstanceFromCatalogs('IExportedClass', 'Second');
    expect(secondInstance).not.to.equal(firstInstance);
  })
})
