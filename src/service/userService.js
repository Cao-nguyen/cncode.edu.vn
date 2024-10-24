import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
import Bluebird from 'bluebird'
const salt = bcrypt.genSaltSync(10)

const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt)
    return hashPassword
}

const createUser = async (email, username, password) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: Bluebird
    })

    let hashPass = hashPassword(password)

    const [rows, fields] = await connection.execute(
        'INSERT INTO users (email, username, password) VALUES (?, ?, ?)', [email, username, hashPass]
    );
}

const getUser = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: Bluebird
    })

    let users = []
    try {
        const [rows, fields] = await connection.execute(
            'SELECT * from users'
        );
        return rows
    } catch (e) {

    }
}

const deleteUser = async (id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: Bluebird
    })
    try {
        const [rows, fields] = await connection.execute(
            'DELETE from users where id=?', [id]
        );
        return rows
    } catch (e) {

    }
}

const getUserById = async (id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: Bluebird
    })
    const [rows, fields] = await connection.execute(
        'SELECT * from users where id=?', [id]
    );
    return rows

}

const updateUser = async (email, username, id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: Bluebird
    })

    const [rows, fields] = await connection.execute(
        'UPDATE users set email = ?, username = ? where id = ?', [email, username, id]
    );

    return rows
}

module.exports = { createUser, getUser, deleteUser, getUserById, updateUser }