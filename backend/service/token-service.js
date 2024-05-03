import jwt from 'jsonwebtoken'
import db from "../db/db.js";

class TokenService {
    async generateToken(payload) {
        console.log('generateToken: ', {payload,SA: process.env.JWT_SECRET_ACCESS,SR: process.env.JWT_SECRET_REFRESH})
        const access = jwt.sign(payload,process.env.JWT_SECRET_ACCESS, {expiresIn: '1m'})
        const refresh = jwt.sign(payload,process.env.JWT_SECRET_REFRESH, {expiresIn: '5m'})
        console.log('generateToken2: ', {access,refresh})
        return {access,refresh}
    }
    async saveToken(id, refresh) {
        let userIndex
        let updatedUser
        //ищем пользователя
        const user = db.users.find((user,index) => {
            if (user.id === id) {
                userIndex = index
                return true
            }
            return false
        })
        //записываем пользователю его рефреш токен
        if (userIndex && user) {
            updatedUser = {
                ...user,
                refresh: refresh
            }
            db.users[userIndex] = updatedUser
        }
        console.log('saveToken: ',{id,refresh,user,updatedUser})
    }
}

export default new TokenService()