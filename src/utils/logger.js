interface Logger {
    log: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
}

const logger: Logger = {
    log: (...args) => {
        console.log('[LOG]:', ...args);
    },
    info: (...args) => {
        console.info('[INFO]:', ...args);
    },
    warn: (...args) => {
        console.warn('[WARN]:', ...args);
    },
    error: (...args) => {
        console.error('[ERROR]:', ...args);
    },
};

export default logger;
