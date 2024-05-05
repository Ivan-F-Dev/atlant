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
        db.users = db.users.map((user) => {
            if (user.id === id) {
                user.refresh = refresh
                return user
            }
            return user
        })

        console.log('saveToken: ',{id,refresh,users: db.users})
    }
}

export default new TokenService()