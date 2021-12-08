import { ioclient } from '../lib/redis'
import { SERVER_REDIS_CACHE_TTL } from '../lib/config'

/**
 * Authenticate as you like here
 * @param {import("express").Request} req the request object
 * @param {import("express").Response} res the response object
 */
export default async function (req, res, next) {
    if (req.method === 'GET') {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const KEY = `REPONSE_KEY:${url.pathname}${url.search}`
        const json = JSON.stringify(res.locals.body)

        await ioclient.setex(KEY, SERVER_REDIS_CACHE_TTL, json)
        console.table(`cached response for ${KEY}`)
    }

    next()
}
