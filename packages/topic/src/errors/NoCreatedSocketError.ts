export class NoCreatedSocketError extends Error {
    constructor() {
        super('Socket not created. Check configuration of the service');
    }
}