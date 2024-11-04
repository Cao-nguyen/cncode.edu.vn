import loginRegister from "../service/loginRegister"

const testApi = (req, res) => {
    return res.status(200).json({
        message: 'succes',
        data: 'test api'
    })
}

const handleRegister = async (req, res) => {
    try {
        if (!req.body.email || !req.body.phone || !req.body.username || !req.body.password) {
            return res.status(200).json({
                EM: 'Missing require parameters',
                EC: '1',
                DT: ''
            })
        }

        let data = await loginRegister.registerNewUser(req.body)

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: ''
        })

    } catch (e) {
        return res.status(500).json({
            EM: 'error from server',
            EC: '-1',
            DT: ''
        })
    }
}

module.exports = {
    testApi,
    handleRegister
}