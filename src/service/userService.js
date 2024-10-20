import mysql from 'mysql2'
import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10)

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
})

const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt)
    return hashPassword
}

const createUser = (email, username, password) => {
    let hashPass = hashPassword(password)

    connection.query(
        'INSERT INTO users (email, username, password) VALUES (?, ?, ?)', [email, username, hashPass]
    )
}

export default createUser