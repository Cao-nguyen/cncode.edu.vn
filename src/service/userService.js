import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
import Bluebird from 'bluebird'
import db from '../models/index'
import { where } from 'sequelize'
const salt = bcrypt.genSaltSync(10)

const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt)
    return hashPassword
}

const createUser = async (email, username, password) => {
    let hashPass = hashPassword(password)
    await db.User.create({
        username: username,
        email: email,
        password: hashPass
    })
}

const getUser = async () => {
    // test
    let newUser = await db.User.findOne({
        where: { id: 1 },
        include: { model: db.Group },
        raw: true,
        nest: true
    })

    console.log('>>> check new user: ', newUser)

    let users = []
    users = await db.User.findAll()
    return users

}

const deleteUser = async (id) => {
    await db.User.destroy({
        where: { id: id }
    })
}

const getUserById = async (id) => {
    let user = {}
    user = await db.User.findOne({
        where: { id: id }
    })
    return user

}

const updateUser = async (email, username, id) => {
    await db.User.update({
        email: email,
        username: username
    }, {
        where: { id: id }
    })
}

module.exports = { createUser, getUser, deleteUser, getUserById, updateUser }