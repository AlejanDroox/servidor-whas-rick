module.exports = {
    apps: [{
        name: "server-whatsapp",
        script: "./app.ts", // Apunta al archivo principal de TypeScript
        interpreter: "ts-node", // Usa ts-node como intérprete
        watch: false,
        cron_restart: '59 23 * * *',
        env: {
            NODE_ENV: 'development',
        },
        env_production: {
            NODE_ENV: 'production',
        }
    }]
}