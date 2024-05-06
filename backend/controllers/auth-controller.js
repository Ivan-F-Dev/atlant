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
            res.cookie('refreshToken',userData.refresh, {maxAge: 2*60*1000,httpOnly: true})
            return res.json(userData)

        } catch (e) {
            next(e)
        }
    }
    async login(req, res, next) {
        try {
            const {email,password} = req.body
            const userData = await AuthService.login(email,password)
            res.cookie('refreshToken',userData.refresh, {maxAge: 2*60*1000,httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }
    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const  token = await AuthService.logout(refreshToken)
            console.log('logout ', refreshToken, token)
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
            const {refreshToken} = req.cookies
            const userData = await AuthService.refresh(refreshToken)
            res.cookie('refreshToken',userData.refresh, {maxAge: 6*60*60*1000,httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }
    async checkAccess(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const check = AuthService.checkAccess(refreshToken)
            console.log('checkAccess controller: ', check)
            res.json(check)
        } catch (e) {
            next(e)
        }
    }
}

export default new AuthController()