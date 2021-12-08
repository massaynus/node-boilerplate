import Person from '../models/person'

/**
 * get all persons in db
 * @param {import("express").Request} req the request object
 * @param {import("express").Response} res the response object
 */
export async function getAll(req, res) {
    const list = await Person.find({}).exec()
    res.json(list)
}

/**
 * get a persons in db
 * @param {import("express").Request} req the request object
 * @param {import("express").Response} res the response object
 */
export async function getOne(req, res) {
    const { id } = req.params
    const maGuy = await Person.find({ _id: id }).exec()
    res.json(maGuy)
}

/**
 * make a persons in db
 * @param {import("express").Request} req the request object
 * @param {import("express").Response} res the response object
 */
export async function createOne(req, res) {
    const person = req.body
    const result = await Person.create(person)

    res.status(201).json(result)
}


