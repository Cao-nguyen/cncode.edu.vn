import { createUser, getUser } from '../service/userService.js'

export const handleHome = (req, res) => {
    return res.render('home');
}

export const handleUser = (req, res) => {
    return res.render('user');
}

export const handleUserCreate = (req, res) => {
    let email = req.body.email
    let username = req.body.username
    let password = req.body.password

    // createUser(email, username, password)
    getUser()

    return res.redirect('/user')
}