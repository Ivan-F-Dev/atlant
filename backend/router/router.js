import {Router} from "express";
import AuthController from "../controllers/auth-controller.js";

const router = new Router()

router.post('/registration', AuthController.registration)
router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)
router.get('/activate/:link', AuthController.activate)
router.get('/refresh', AuthController.refresh)
router.get('/todo', AuthController.todo)

export default router