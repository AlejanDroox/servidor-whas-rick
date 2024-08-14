import { createBot, createFlow, MemoryDB, createProvider} from '@bot-whatsapp/bot'

import { BaileysProvider, handleCtx } from '@bot-whatsapp/provider-baileys'
const main = async () => {

    const provider = createProvider(BaileysProvider)

    provider.initHttpServer(3005)

    provider.http?.server.post('send-message', handleCtx(async (   bot, req, res) => {
        // const body = req.body
        const message = req.body.message
        const phone = req.body.phone
        console.log(message)
        await bot.sendMessage(phone, message, {})
        res.end('enviado')
    }))
    await createBot ({
        flow: createFlow([]),
        database: new MemoryDB(),
        provider
    })
}

main()