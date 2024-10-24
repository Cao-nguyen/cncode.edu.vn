import { Sequelize } from "sequelize";

const sequelize = new Sequelize('jwt', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
})

const connection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Kết nối thành công')
    } catch (error) {
        console.log('Kết nối thất bại', error)
    }
}

export default connection