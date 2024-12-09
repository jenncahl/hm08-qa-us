exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'firefox',
            acceptInsecureCerts: true,
            port: 4445
        }
    ],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://cnt-2f70b2f2-442c-4f7b-8dd8-b784205e5a31.containerhub.tripleten-services.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // Only add the geckodriver service (for Firefox)
    services: ['geckodriver','intercept'], 

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};