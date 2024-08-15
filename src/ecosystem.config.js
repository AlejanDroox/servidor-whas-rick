module.exports = {
    apps: [{
        name: "server-whatsapp",
        script: "./app.ts", // Cambia esto si tu archivo principal es .js
        interpreter: "node", // Asegúrate de especificar el intérprete
        watch: false,
        max_memory_restart: '500M',
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