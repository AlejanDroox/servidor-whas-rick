model.export = {
    app: [{
        name:"server-whatsapp",
        script: "./app.ts",
        whatch: false,
        max_memory_restart: '500M',
        exec_mode: 'cluster',
        instances: 1,
        cron_restart: '59 2 * * *',
        env: {
            NODE_ENV : 'development',
        },
        env_production: {
            NODE_ENV: 'production',
        }
    }]
}