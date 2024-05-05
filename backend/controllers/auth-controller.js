import AuthService from "../service/auth-service.js";
import {validationResult} from "express-validator";
import ApiError from "../exceptions/api-error.js";

class AuthController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                next(ApiError.BadRequest('Ошибка при валидации',errors.array()))
            }
            const {email,password} = req.body
            const userData = await AuthService.registration(email,password)
            res.cookie('refreshToken',userData.refresh, {maxAge: 6*60*60*1000,httpOnly: true})
            return res.json(userData)

        } catch (e) {
            next(e)
        }
    }
    async login(req, res, next) {
        try {
            const {email,password} = req.body
            const userData = await AuthService.login(email,password)
            res.cookie('refreshToken',userData.refresh, {maxAge: 6*60*60*1000,httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }
    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const  token = AuthService.logout(refreshToken)
            res.clearCookie('refreshToken')
            res.json(token)
        } catch (e) {
            next(e)
        }
    }
    async activate(req, res, next) {
        try {
            const activationLink = req.params.link
            await AuthService.activate(activationLink)
            return res.redirect(process.env.CLIENT_URL)
        } catch (e) {
            next(e)
        }
    }
    async refresh(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }
    async todo(req, res, next) {
        try {
            res.json({
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, expedita!'
            })
        } catch (e) {
            next(e)
        }
    }
}

export default new AuthController()