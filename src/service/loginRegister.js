import db from '../models/index'
import bcrypt from 'bcryptjs'
import { Op } from 'sequelize'

// Validate dữ liệu
const checkEmail = async (userEmail) => {
    let user = await db.User.findOne({
        where: { email: userEmail }
    })
    if (user) {
        return true
    }
    return false
}

// Hash password
const salt = bcrypt.genSaltSync(10)
const hashPassword = (userPassword) => {
    let hashPasswordUser = bcrypt.hashSync(userPassword, salt)
    return hashPasswordUser
}

// Create user
const registerNewUser = async (rawUserData) => {
    try {
        // Validate
        let isValidEmail = await checkEmail(rawUserData.email)
        if (isValidEmail === true) {
            return {
                EM: 'Email đã tồn tại',
                EC: 1
            }
        }

        // hashPassword
        let password = hashPassword(rawUserData.password)

        // create new user
        await db.User.create({
            email: rawUserData.email,
            phone: rawUserData.phone,
            username: rawUserData.username,
            password: password,
        })

        return {
            EM: 'Người dùng đã được tạo thành công!',
            EC: 0
        }

    } catch (error) {
        return {
            EM: 'Có một số lỗi...',
            EC: -2
        }
    }
}

// check password
const checkPassword = (inputPassword, hashPassword) => {
    return bcrypt.compareSync(inputPassword, hashPassword)
}

// Login
const handleUserLogin = async (rawData) => {
    try {
        let user = await db.User.findOne({
            where: {
                [Op.or]: [
                    { email: rawData.valueLogin },
                    { phone: rawData.valueLogin },
                ]
            }
        })

        if (user) {
            let correctPassword = checkPassword(rawData.password, user.password)
            if (correctPassword === true) {
                return {
                    EM: 'Thành công!',
                    EC: 0,
                    DT: ''
                }
            }
        }

        return {
            EM: 'Email/ phone và mật khẩu không đúng',
            EC: 1,
            DT: ''
        }

    } catch (error) {
        return {
            EM: 'Có một số lỗi...',
            EC: -2
        }
    }
}

module.exports = {
    registerNewUser, handleUserLogin
}