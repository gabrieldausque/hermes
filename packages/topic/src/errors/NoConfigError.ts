export class NoConfigError extends Error {
    constructor() {
        super('No valid configuration. Please use a valid configuration.');
    }
}