import bcrypt from 'bcrypt'
import {v4} from 'uuid'
import db from "../db/db.js";
import MailService from "./mail-service.js";
import TokenService from "./token-service.js";

class AuthService {
    async registration(email, password) {
        const candidate = db.users.find(user => user.email === email)
        //проверяем
        if (candidate) {
            throw new Error(`Пользователь с email  ${email} уже существует`)
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
}

export default new AuthService()