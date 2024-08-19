module.exports = {
    apps: [{
        name: "server-whatsapp",
        script: "./app.ts", // Apunta al archivo principal de TypeScript
        watch: false,
        exec_mode: 'cluster',
        instances: 1,
        cron_restart: '59 23 * * *',
        env: {
            NODE_ENV: 'development',
        },
        env_production: {
            NODE_ENV: 'production',
        }
    }]
}