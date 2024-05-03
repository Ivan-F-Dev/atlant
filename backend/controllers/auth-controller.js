import AuthService from "../service/auth-service.js";

class AuthController {
    async registration(req, res, next) {
        try {
            const {email,password} = req.body
            const userData = await AuthService.registration(email,password)
            res.cookie('refreshToken',userData.refresh, {maxAge: 6*60*60*1000,httpOnly: true})
            return res.json(userData)

        } catch (e) {
            console.log('Auth.registration: ',e)
        }
    }
    async login(req, res, next) {
        try {

        } catch (e) {
            console.log('Auth.login: ',e)
        }
    }
    async logout(req, res, next) {
        try {

        } catch (e) {
            console.log('Auth.logout: ',e)
        }
    }
    async activate(req, res, next) {
        try {

        } catch (e) {
            console.log('Auth.activate: ',e)
        }
    }
    async refresh(req, res, next) {
        try {

        } catch (e) {
            console.log('Auth.refresh: ',e)
        }
    }
    async todo(req, res, next) {
        try {
            res.json({
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, expedita!'
            })
        } catch (e) {
            console.log('Auth.todo: ',e)
        }
    }
}

export default new AuthController()