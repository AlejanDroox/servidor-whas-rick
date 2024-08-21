module.exports = {
    apps: [{
        name: "server-whatsapp2",
        script: "./app.ts", // Apunta al archivo principal de TypeScript
        watch: false,
        script: "./app.ts", // Cambia esto si tu archivo principal es .js
        interpreter: "/usr/bin/node", // Asegúrate de especificar el intérprete
        watch: false,
        max_memory_restart: '900M',
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