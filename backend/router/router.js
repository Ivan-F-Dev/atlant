import {Router} from "express";
import Auth from "../controllers/auth.js";

const router = new Router()

router.post('/registration', Auth.registration)
router.post('/login', Auth.login)
router.post('/logout', Auth.logout)
router.get('/activate/:link', Auth.activate)
router.get('/refresh', Auth.refresh)
router.get('/todo', Auth.todo)

export default router