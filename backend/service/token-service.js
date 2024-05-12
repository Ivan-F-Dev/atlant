import jwt from 'jsonwebtoken'
import db from "../db/db.js";

class TokenService {
    async generateToken(payload) {
        console.log('generateToken: ', {payload,SA: process.env.JWT_SECRET_ACCESS,SR: process.env.JWT_SECRET_REFRESH})
        const access = jwt.sign(payload,process.env.JWT_SECRET_ACCESS, {expiresIn: '5m'})
        const refresh = jwt.sign(payload,process.env.JWT_SECRET_REFRESH, {expiresIn: '15m'})
        console.log('generateToken2: ', {access,refresh})
        return {access,refresh}
    }
    async saveToken(id, refresh) {
        let userIndex
        let updatedUser
        //ищем пользователя
        db.users = db.users.map((user) => {
            if (user.id === id) {
                user.refresh = refresh
                return user
            }
            return user
        })

        console.log('saveToken: ',{id,refresh,users: db.users})
    }
    async removeToken(refreshToken) {
        let output
        db.users = db.users.map(user => {
            if (user.refresh === refreshToken) {
                user.refresh = ''
                output = user
                return user
            }
            return user
        })
        return output
    }
    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_SECRET_ACCESS)
            return userData
        } catch (e) {
            return null
        }
    }
    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_SECRET_REFRESH)
            return userData
        } catch (e) {
            return null
        }
    }
    findToken(refreshToken) {
        const userData = db.users.find(user => user.refresh === refreshToken)
        return userData
    }
}

export default new TokenService()