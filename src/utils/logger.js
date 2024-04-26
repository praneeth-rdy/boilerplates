const logger = {
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
