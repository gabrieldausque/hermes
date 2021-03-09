/**
 * A metadata to be worn by any class that allow instance factory to discover a class and add it to an export catalog
 */
export interface ExportMetadata {
  /**
   * Indicates to the factory if the exported instance is shared, aka is a singleton
   */
  isShared:boolean;
  /**
   * The contract type identifier. Prefer the interface name
   */
  contractType:string;
  /**
   * The contract name identifier. a key to distinguish underlying implementation of the contract type.
   */
  contractName:string;
  /**
   * If the class need to import some component during creation, contains the list of couple contract type/name to inject
   * to the constructor
   */
  constructorInjectedArgs?:[{ contractType:string, contractName:string }]
}
