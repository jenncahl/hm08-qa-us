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
    baseUrl: 'https://cnt-bb104f3c-5a74-4505-81ef-1aba7c354f9a.containerhub.tripleten-services.com',
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