import Person from '../models/person'

/**
 * get all persons in db
 * @param {import("express").Request} req the request object
 * @param {import("express").Response} res the response object
 */
export async function getAll(req, res, next) {
    try {
        const list = await Person.find({}).exec()
        res.json(list)
        next()
    } catch (err) {
        next(req, res, null, err)
    }
}

/**
 * get a persons in db
 * @param {import("express").Request} req the request object
 * @param {import("express").Response} res the response object
 */
export async function getOne(req, res, next) {
    try {
        const { id } = req.params
        const maGuy = await Person.find({ _id: id }, { _id: 0, __v: 0 }).exec()
        res.json(maGuy)
        next()
    } catch (err) {
        next(req, res, null, err)
    }
}

/**
 * make a persons in db
 * @param {import("express").Request} req the request object
 * @param {import("express").Response} res the response object
 */
export async function createOne(req, res, next) {
    try {
        const person = req.body
        const result = await Person.create(person)

        res.status(201).json(result)
        next()
    } catch (err) {
        next(req, res, null, err)
    }
}


