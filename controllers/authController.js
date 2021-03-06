const authService = require('./../services/authService')

module.exports = {
    login: (req, res) => {
        authService.login(req.body)
            .then(user => {
                req.session.user = user
                res.status(200).send()
            })
            .catch(error =>
                res.status(400).send({ error })
            )
    },

    logout: (req, res) => {
        delete req.session.user
        res.status(200).send()
    }
}