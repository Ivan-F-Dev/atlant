import bcrypt from 'bcrypt'
import {v4} from 'uuid'
import db from "../db/db.js";
import MailService from "./mail-service.js";
import TokenService from "./token-service.js";
import ApiError from "../exceptions/api-error.js";

class AuthService {
    async registration(email, password) {
        const candidate = db.users.find(user => user.email === email)
        //проверяем
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с email  ${email} уже существует`)
        }
        // добавляем
        const hashPass = await bcrypt.hash(password,3)
        const activationLink = v4()

        const newId = db.users[db.users.length-1].id + 1
        db.users.push({
            id: newId,
            email: email,
            password: hashPass,
            link: activationLink,
            isActivated: false
        })
        await MailService.sendActivationMail(email, process.env.API_URL + '/api/activate/' + activationLink)
        const tokens = await TokenService.generateToken({id:newId,email,isActivated: false})
        TokenService.saveToken(newId,tokens.refresh)
        console.log('Добавлен пользователь',db)
        return {...tokens,...db.users.find(user => user.id === newId)}
    }
    async activate(activationLink) {
        // Находим пользователя по ссылке и активируем
        let fail = true
        db.users = db.users.map(user => {
            if (user.link === activationLink) {
                user.isActivated = true
                fail = false
                return user
            }
            return user
        })
        if (fail) {
            throw ApiError.BadRequest('Некорректная ссылка авторизации!')
        }
    }
    async login(email, password) {
        const user = db.users.find(user => user.email === email)
        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким email не найден!')
        }
        const isPassEquals = await bcrypt.compare(password,user.password)
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль!')
        }

        const tokens = await TokenService.generateToken({id:user.id,email,isActivated: user.isActivated})
        TokenService.saveToken(user.id,tokens.refresh)
        console.log('Вход выполнен',db)
        return {...tokens,...db.users.find(el => el.id === user.id)}

    }
    async logout(refreshToken) {
        const token = TokenService.removeToken(refreshToken)
        return token
    }
    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = TokenService.validateRefreshToken(refreshToken)
        const tokenFromDB = TokenService.findToken(refreshToken)
        if (!userData || !tokenFromDB) {
            throw ApiError.UnauthorizedError()
        }
        const user = db.users.find(user => user.id === userData.id)
        console.log('refresh: ',{userData,tokenFromDB,user})
        const tokens = await TokenService.generateToken({id:user.id,email: user.email,isActivated: user.isActivated})
        TokenService.saveToken(user.id,tokens.refresh)
        console.log('Рефреш выполнен',db)
        return {...tokens,...db.users.find(el => el.id === user.id)}
    }
    checkAccess(refreshToken) {
        const user = db.users.find(user => user.refresh === refreshToken)
        if (!user) {
            throw ApiError.UnauthorizedError()
        }
        console.log('checkAccess service: ', user)
        return {status: 'Есть доступ',user,users: db.users}
    }
}

export default new AuthService()