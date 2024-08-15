module.exports = {
    apps: [{
        name: "server-whatsapp",
        script: "./app.ts",
        watch: false, // Asegúrate de que esté escrito correctamente
        max_memory_restart: '500M',
        interpreter: '/snap/bin/node',
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