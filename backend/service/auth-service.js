import db from "../db/db.js";

class AuthService {
    async registration(email, password) {
        const candidate = db.users.find(user => user.email === email)
        if (candidate) {
            throw new Error(`Пользователь с email  ${email} уже существует`)
        }
        db.users.push({
            id: db.users.at(-1).id + 1,
            email: email,
            password: password,
        })
    }
}

export default new AuthService()