import userApi from '../service/userApi'

const readFunc = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page
            let limit = req.query.limit

            let data = await userApi.getUserPaginate(+page, +limit)

            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT
            })
        } else {
            let data = await userApi.getAllUser()

            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT
            })
        }
    } catch (error) {
        return res.status(500).json({
            EM: 'Có một vài lỗi...',
            EC: '-1',
            DT: ''
        })
    }
}

const createFunc = (req, res) => {
    try {
    } catch (error) {
        return res.status(500).json({
            EM: 'Có một vài lỗi...',
            EC: '-1',
            DT: ''
        })
    }
}

const updateFunc = (req, res) => {
    try {
    } catch (error) {
        return res.status(500).json({
            EM: 'Có một vài lỗi...',
            EC: '-1',
            DT: ''
        })
    }
}

const deleteFunc = (req, res) => {
    try {
    } catch (error) {
        return res.status(500).json({
            EM: 'Có một vài lỗi...',
            EC: '-1',
            DT: ''
        })
    }
}

module.exports = {
    readFunc, createFunc, updateFunc, deleteFunc
}