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
    logout(refreshToken) {

    }
}

export default new AuthService()