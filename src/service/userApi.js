import db from '../models/index'

const getAllUser = async () => {
    try {
        let users = await db.User.findAll({
            attributes: ["id", "username", "email", "phone"],
            include: { model: db.Group, attributes: ["name", "description"] }
        })

        if (users) {
            return {
                EM: 'Thành công',
                EC: 0,
                DT: users
            }
        } else {
            return {
                EM: 'Thất bại',
                EC: 0,
                DT: ''
            }
        }
    } catch (error) {
        return {
            EM: 'Thất bại',
            EC: 1,
            DT: ''
        }
    }
}

const createNewUser = async (data) => {
    try {
        await db.User.create({})
    } catch (error) {

    }
}

const updateUser = async (data) => {
    try {
        let user = await db.User.findOne({
            where: { id: data.id }
        })

        if (user) {
            user.save({

            })
        } else {

        }

    } catch (error) {

    }
}

const deleteUser = async (id) => {
    try {
        await db.User.delete({
            where: { id: id }
        })
    } catch (error) {

    }
}

module.exports = {
    getAllUser, createNewUser, updateUser, deleteUser
}