import ProxyService from "../service/proxy-service.js";
import {body} from "express-validator";

class ProxyController {
    async getProxy(req, res, next) {
        try {
            const {url, params} = req.body
            const proxyData = await ProxyService.getProxy(url,params)
            return res.json({
                proxyData: proxyData.data,
                proxyStatus: proxyData.status,
                proxyError: proxyData.data && proxyData.status === 200 ? null : proxyData})
        } catch (e) {
            next(e)
        }
    }
    async postProxy(req, res, next) {
        try {
            const {url, params} = req.body
            const proxyData = await ProxyService.postProxy(url,params)
            return res.json({
                proxyData: proxyData.data,
                proxyStatus: proxyData.status,
                proxyError: proxyData.data && proxyData.status === 200 ? null : proxyData})
        } catch (e) {
            next(e)
        }
    }
}

export default new ProxyController()