module.exports = {
    apps: [{
        name: "server-whatsapp",
        script: "./app.ts", // Apunta al archivo principal de TypeScript
        watch: false,
        max_memory_restart: '900M',
        exec_mode: 'cluster',
        instances: 1,
        env: {
            NODE_ENV: 'development',
        },
        env_production: {
            NODE_ENV: 'production',
        }
    }]
}