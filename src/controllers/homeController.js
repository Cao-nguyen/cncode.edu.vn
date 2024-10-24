import { createUser, getUser, deleteUser, getUserById, updateUser } from '../service/userService.js'

export const handleHome = (req, res) => {
    return res.render('home');
}

export const handleUser = async (req, res) => {
    let userList = await getUser()

    return res.render('user', {
        userList
    });
}

export const handleUserCreate = (req, res) => {
    let email = req.body.email
    let username = req.body.username
    let password = req.body.password

    createUser(email, username, password)

    return res.redirect('/user')
}

export const handleDelete = async (req, res) => {
    await deleteUser(req.params.id)
    return res.redirect('/user')
}

export const handleUpdate = async (req, res) => {
    let id = req.params.id
    let user = await getUserById(id)
    let userData = {}
    userData = user
    return res.render('update', {
        userData
    })
}

export const handleUpdatePost = async (req, res) => {
    let id = req.body.id
    let email = req.body.email
    let username = req.body.username

    await updateUser(email, username, id)

    return res.redirect('/user')
}