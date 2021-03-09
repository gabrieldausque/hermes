export class NotInCatalogError extends Error {
    constructor(contractType:string, contractName:string) {
        super(`Class with contract type "${contractType}" with contract name "${contractName}" not in any catalog of the current factory`);
    }
}