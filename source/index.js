import express from 'express';
import cors from 'cors';
import { connect } from './lib/mongoose';

import { SERVER_PORT } from './lib/config'
import API_ROUTER_V1 from './routes/api_v1'

const startUpTime = new Date()

const app = express()
app.use(cors())

app.use('/api/v1', API_ROUTER_V1)
app.get('/heartbeat', (_, res) => {
    const beat = { startUpTime }
    res.json(beat)
})

main()

async function main() {
    await connect()
    app.listen(SERVER_PORT, () => console.log('listening on port ' + SERVER_PORT + '!!'));
}
