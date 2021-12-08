import { SERVER_TOKEN } from '../lib/config'

/**
 * Authenticate as you like here
 * @param {import("express").Request} req the request object
 * @param {import("express").Response} res the response object
 */
export default async function (req, res, next) {
    const authorizations = req.headers.authorization
    if (authorizations !== `Bearer ${SERVER_TOKEN}`)
        res.sendStatus(401)
    else
        next()
}
