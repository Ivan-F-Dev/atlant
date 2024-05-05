import {Router} from "express";
import AuthController from "../controllers/auth-controller.js";
import {body} from "express-validator";

const router = new Router()

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 6, max: 18}),
    AuthController.registration)
router.get('/activate/:link', AuthController.activate)
router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)
router.get('/refresh', AuthController.refresh)
router.get('/todo', AuthController.todo)

export default router