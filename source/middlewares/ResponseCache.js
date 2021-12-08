import { ioclient } from '../lib/redis'

/**
 * Authenticate as you like here
 * @param {import("express").Request} req the request object
 * @param {import("express").Response} res the response object
 */
export default async function (req, res, next) {
    if (req.method !== 'GET')
        next()
    else {

        const url = new URL(req.url, `http://${req.headers.host}`);
        const KEY = `REPONSE_KEY:${url.pathname}${url.search}`

        if (await ioclient.exists(KEY)) {
            const json = await ioclient.get(KEY)
            console.log(`Cache hit on ${KEY}`)
            res.json(JSON.parse(json)).end()
        } else {
            console.log(`Cache miss on ${KEY}`)
            next()
        }
    }
}
